const fs = require("fs");
const path = require("path");

const SOURCE_HTML =
  "/Users/gimtaehunegimtaehune/Downloads/AWS AI Prectitioner 정리/AWSAIPrectitioner.html";
const OUTPUT_JS = path.resolve(__dirname, "../questions.js");

const html = fs.readFileSync(SOURCE_HTML, "utf8");

const SECTION_LABELS = [
  "문제 원문 (영문)",
  "문제 원문(영문)",
  "문제 원문",
  "원문 (English)",
  "원문",
  "문제 번역 (한국어)",
  "문제 번역(한국어)",
  "문제 번역",
  "번역",
  "정답",
  "해설 (한국어)",
  "해설",
  "오답 설명",
  "용어 정리",
  "용어 설명",
];

const SECTION_MAP = {
  "문제 원문 (영문)": "english",
  "문제 원문(영문)": "english",
  "문제 원문": "english",
  "원문 (English)": "english",
  원문: "english",
  "문제 번역 (한국어)": "korean",
  "문제 번역(한국어)": "korean",
  "문제 번역": "korean",
  번역: "korean",
  정답: "answer",
  "해설 (한국어)": "explanation",
  해설: "explanation",
  "오답 설명": "wrong",
  "용어 정리": "glossary",
  "용어 설명": "glossary",
};

function decodeHtmlEntities(value = "") {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) =>
      String.fromCodePoint(parseInt(code, 16)),
    )
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&apos;/g, "'")
    .replace(/&rarr;/g, "->")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&lsquo;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ndash;/g, "-")
    .replace(/&mdash;/g, "-")
    .replace(/&hellip;/g, "...");
}

function textify(value = "") {
  return decodeHtmlEntities(value)
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/(p|h1|h2|h3|li|ul|ol|hr|table|tr)>/gi, "\n")
    .replace(/<\/(td|th)>/gi, " | ")
    .replace(/<[^>]+>/g, "")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

function explodeLine(line) {
  const raw = line.trim();
  if (!raw) {
    return [];
  }

  const normalized = raw.replace(/^-\s*/, "");

  for (const label of SECTION_LABELS) {
    if (normalized === label) {
      return [label];
    }

    if (normalized.startsWith(`${label} `)) {
      return [label, normalized.slice(label.length).trim()];
    }
  }

  return [raw];
}

function normalizeText(value = "") {
  return value
    .toLowerCase()
    .replace(/^[a-e]\.\s*/i, "")
    .replace(/[\"'()[\],.:;!?*]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueOptions(options) {
  const seen = new Set();
  const result = [];

  for (const option of options) {
    const signature = normalizeText(option.text);
    if (!signature || seen.has(signature)) {
      continue;
    }
    seen.add(signature);
    result.push(option);
  }

  return result;
}

function extractLetteredOptions(line) {
  const trimmed = line.trim();
  const firstOptionIndex = trimmed.search(/(?:^|\s)[A-E]\.\s/);

  if (firstOptionIndex === -1) {
    return {
      prefix: trimmed,
      options: [],
    };
  }

  const prefix = trimmed.slice(0, firstOptionIndex).trim();
  const optionBlock = trimmed.slice(firstOptionIndex).trim();
  const matches = [
    ...optionBlock.matchAll(
      /([A-E])\.\s*([\s\S]*?)(?=(?:\s+[A-E]\.\s)|$)/g,
    ),
  ]
    .map((match) => ({
      key: match[1],
      text: match[2].trim(),
    }))
    .filter((option) => option.text);

  return {
    prefix,
    options: matches,
  };
}

function parseBody(lines) {
  const questionLines = [];
  let options = [];

  for (const line of lines) {
    const { prefix, options: foundOptions } = extractLetteredOptions(line);

    if (foundOptions.length) {
      if (prefix) {
        questionLines.push(prefix);
      }
      options.push(...foundOptions);
      continue;
    }

    questionLines.push(line);
  }

  return {
    question: questionLines.join("\n").trim(),
    options: uniqueOptions(options),
  };
}

function parseAnswer(answerLines, explanationLines) {
  let answerRaw = answerLines.join(" ").trim();

  if (!answerRaw) {
    const extracted = explanationLines.find((line) => /정답\s*[:：]/.test(line));
    if (extracted) {
      answerRaw = extracted.replace(/^-\s*/, "").trim();
    }
  }

  let answerKey = "";
  let answerText = "";

  if (!answerRaw) {
    return { answerKey, answerText };
  }

  let match = answerRaw.match(/정답\s*[:：]?\s*([A-E])\.?(?:\s+(.*))?$/i);
  if (match) {
    return {
      answerKey: match[1].toUpperCase(),
      answerText: (match[2] || "").trim(),
    };
  }

  match = answerRaw.match(/^([A-E])\.\s*(.*)$/i);
  if (match) {
    return {
      answerKey: match[1].toUpperCase(),
      answerText: match[2].trim(),
    };
  }

  return {
    answerKey,
    answerText: answerRaw.replace(/^정답\s*[:：]?\s*/, "").trim(),
  };
}

function buildOptionsFromWrongExplanation(questionNumber, answerText, wrongLines) {
  const wrongOptions = wrongLines
    .map((line) => line.replace(/^-+\s*/, ""))
    .map((line) => line.split(/\s*:\s*/, 1)[0]?.trim())
    .filter(Boolean);

  if (!answerText || !wrongOptions.length) {
    return [];
  }

  const options = [...wrongOptions];
  const insertIndex = questionNumber % (wrongOptions.length + 1);
  options.splice(insertIndex, 0, answerText);

  return options.map((text, index) => ({
    key: String.fromCharCode(65 + index),
    text,
  }));
}

function splitExplanationAndWrongLines(lines) {
  const explanationLines = [];
  const wrongLines = [];
  let inWrongSection = false;

  for (const line of lines) {
    const clean = stripBulletMarker(line);

    if (/^오답\s*(설명|풀이)\s*:?\s*$/i.test(clean)) {
      inWrongSection = true;
      continue;
    }

    if (/^정답\s*이유\s*:?\s*/i.test(clean)) {
      explanationLines.push(clean.replace(/^정답\s*이유\s*:?\s*/i, "").trim());
      continue;
    }

    if (inWrongSection) {
      wrongLines.push(line);
      continue;
    }

    explanationLines.push(line);
  }

  return { explanationLines, wrongLines };
}

function stripBulletMarker(line = "") {
  return line.replace(/^-\s*/, "").trim();
}

function parseSegment(questionNumber, segment) {
  const lines = textify(segment)
    .split("\n")
    .flatMap(explodeLine)
    .map((line) => line.trim())
    .filter(Boolean);

  const heading = lines[0] || `Question ${questionNumber}`;
  const sections = {
    meta: [],
    english: [],
    korean: [],
    answer: [],
    explanation: [],
    wrong: [],
    glossary: [],
  };

  let currentSection = "meta";

  for (const line of lines.slice(1)) {
    const nextSection = SECTION_MAP[line];
    if (nextSection) {
      currentSection = nextSection;
      continue;
    }

    sections[currentSection].push(line);
  }

  const english = parseBody(sections.english);
  const korean = parseBody(sections.korean);
  const explicitWrongLines = sections.wrong.filter(Boolean);
  const explanationCandidates = sections.explanation.filter(
    (line) => !/^[-\s]*정답\s*[:：]/.test(line),
  );
  const { explanationLines, wrongLines: derivedWrongLines } =
    splitExplanationAndWrongLines(explanationCandidates);
  const wrongLines = [...explicitWrongLines, ...derivedWrongLines];

  let options = korean.options.length ? korean.options : english.options;
  let { answerKey, answerText } = parseAnswer(
    sections.answer,
    sections.explanation,
  );

  if (!options.length && answerText) {
    options = buildOptionsFromWrongExplanation(
      questionNumber,
      answerText,
      wrongLines,
    );
  }

  if (!answerText && answerKey && options.length) {
    const matchedOption = options.find((option) => option.key === answerKey);
    answerText = matchedOption?.text || "";
  }

  if (!answerKey && answerText && options.length) {
    const matchedOption = options.find((option) => {
      const optionText = normalizeText(option.text);
      const normalizedAnswer = normalizeText(answerText);

      return (
        optionText === normalizedAnswer ||
        optionText.includes(normalizedAnswer) ||
        normalizedAnswer.includes(optionText)
      );
    });

    answerKey = matchedOption?.key || "";
  }

  const isComplex =
    /HOTSPOT|Choose two|2개 선택|Choose three|3개 선택|올바른 순서/i.test(
      [heading, english.question, korean.question].join(" "),
    ) ||
    options.length > 5 ||
    !answerKey;

  return {
    id: questionNumber,
    sourceNumber: questionNumber,
    type: isComplex ? "unsupported" : "single-choice",
    title: heading,
    promptKo: korean.question || english.question,
    promptEn: english.question || korean.question,
    options,
    answerKey,
    answerText,
    explanation: explanationLines,
    wrongExplanations: wrongLines,
    glossary: sections.glossary.filter(Boolean),
  };
}

const matches = [...html.matchAll(/Question\s+(\d+)/g)];
const parsedQuestions = matches.map((match, index) => {
  const questionNumber = Number(match[1]);
  const start = match.index;
  const end = index + 1 < matches.length ? matches[index + 1].index : html.length;
  return parseSegment(questionNumber, html.slice(start, end));
});

const supportedQuestions = parsedQuestions.filter(
  (question) =>
    question.type === "single-choice" &&
    question.options.length >= 2 &&
    question.options.length <= 5 &&
    question.answerKey,
);

const payload = {
  generatedAt: new Date().toISOString(),
  source: {
    file: SOURCE_HTML,
    totalQuestions: parsedQuestions.length,
  },
  supportedCount: supportedQuestions.length,
  skippedCount: parsedQuestions.length - supportedQuestions.length,
  questions: supportedQuestions,
};

const fileContents = `window.AWS_AI_QUIZ_DATA = ${JSON.stringify(
  payload,
  null,
  2,
)};\n`;

fs.writeFileSync(OUTPUT_JS, fileContents, "utf8");

console.log(
  `Generated ${payload.supportedCount} supported questions from ${payload.source.totalQuestions} source questions.`,
);
