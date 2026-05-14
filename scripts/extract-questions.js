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

const MULTI_SELECT_QUESTION_IDS = new Set([
  40, 45, 49, 71, 80, 126, 149, 165, 167, 193, 226, 242,
]);

const ORDERING_QUESTION_IDS = new Set([114, 309, 313]);

const MATCHING_QUESTION_IDS = new Set([
  125, 135, 143, 144, 155, 185, 188, 191, 235, 245, 257, 264, 267, 275, 280,
  283, 311,
]);

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

  if (/^정답\s+이유\s*[:：]/.test(normalized)) {
    return [raw];
  }

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
    const signature = `${option.key}:${normalizeText(option.text)}`;
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

function mergeBilingualOptions(englishOptions = [], koreanOptions = []) {
  const optionMap = new Map();

  for (const option of englishOptions) {
    const existing = optionMap.get(option.key) || { key: option.key };
    existing.textEn = option.text;
    optionMap.set(option.key, existing);
  }

  for (const option of koreanOptions) {
    const existing = optionMap.get(option.key) || { key: option.key };
    existing.textKo = option.text;
    optionMap.set(option.key, existing);
  }

  return [...optionMap.values()]
    .sort((left, right) => left.key.localeCompare(right.key))
    .map((option) => ({
      key: option.key,
      textEn: option.textEn || "",
      textKo: option.textKo || "",
      text: option.textEn || option.textKo || "",
    }));
}

function getOptionSearchTexts(option) {
  return [option.textEn, option.textKo, option.text].filter(Boolean);
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
    textEn: "",
    textKo: text,
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

function uniqueStrings(values) {
  const seen = new Set();
  const result = [];

  for (const value of values.map((item) => item.trim()).filter(Boolean)) {
    const signature = normalizeText(value);
    if (!signature || seen.has(signature)) {
      continue;
    }
    seen.add(signature);
    result.push(value);
  }

  return result;
}

function splitCsv(value = "") {
  return value
    .split(/\s*,\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function extractAnswerOptionKeys(value = "") {
  const explicitKeys = [
    ...value.toUpperCase().matchAll(/(?:^|[\s(,])([A-E])\.(?=\s)/g),
    ...value.toUpperCase().matchAll(/(?:^|[\s(,])([A-E])(?=\s*\()/g),
  ].map((match) => match[1]);

  const csvMatch =
    value.match(/정답\s*[:：]?\s*([A-E](?:\s*,\s*[A-E])+)/i) ||
    value.match(/^([A-E](?:\s*,\s*[A-E])+)\b/i);

  const csvKeys = csvMatch ? splitCsv(csvMatch[1].toUpperCase()) : [];
  const keys = [...new Set([...explicitKeys, ...csvKeys])];

  if (!keys.length) {
    return [];
  }

  return keys;
}

function parseMultiAnswerKeys(answerLines, answerText = "", answerKey = "") {
  const candidates = [answerText, ...answerLines];
  const collectedKeys = new Set(answerKey ? [answerKey] : []);

  for (const candidate of candidates) {
    const keys = extractAnswerOptionKeys(candidate);
    keys.forEach((key) => collectedKeys.add(key));
    if (collectedKeys.size >= 2) {
      return [...collectedKeys];
    }
  }

  return [];
}

function extractQuestionBullets(lines) {
  const prompts = [];
  let collecting = true;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const clean = stripBulletMarker(line);

    if (/^(Options:|선택지:|Prompt:|요구사항|Requirement|Application Design Action|설계 활동)$/i.test(clean)) {
      if (/^(Options:|선택지:)$/i.test(clean)) {
        collecting = false;
      }
      continue;
    }

    if (!collecting) {
      continue;
    }

    if (/^-\s*/.test(line) && !clean.includes("->")) {
      prompts.push(clean);
    }
  }

  return prompts;
}

function extractChoicePool(lines) {
  const pool = [];
  let collecting = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    const clean = line.replace(/^\|\s*/, "").trim();

    const inlineOptionsMatch = clean.match(/^(Options:|선택지:)\s*(.*)$/i);
    if (inlineOptionsMatch) {
      collecting = true;
      if (inlineOptionsMatch[2]) {
        pool.push(...splitCsv(inlineOptionsMatch[2]));
      }
      continue;
    }

    if (/^(Options:|선택지:)$/i.test(clean)) {
      collecting = true;
      continue;
    }

    if (/^\|\s*[^|]+,/.test(line)) {
      pool.push(...splitCsv(clean));
      continue;
    }

    if (!collecting) {
      continue;
    }

    if (/^-\s*/.test(line)) {
      pool.push(stripBulletMarker(line));
      continue;
    }

    if (line.startsWith("|")) {
      continue;
    }

    if (!clean || /->/.test(clean)) {
      continue;
    }

    if (/^(문제|정답|해설|용어|설명|각 |회사는 |한 회사가 |모델은 )/.test(clean)) {
      continue;
    }

    pool.push(clean);
  }

  return uniqueStrings(pool);
}

function resolveChoiceText(target, choicePool) {
  const normalizedTarget = normalizeText(target);
  const exact = choicePool.find((choice) => normalizeText(choice) === normalizedTarget);
  if (exact) {
    return exact;
  }

  const fuzzy = choicePool.find((choice) => {
    const normalizedChoice = normalizeText(choice);
    return (
      normalizedChoice.includes(normalizedTarget) ||
      normalizedTarget.includes(normalizedChoice)
    );
  });

  return fuzzy || target;
}

function parseArrowPairs(lines) {
  return lines
    .map((line) => stripBulletMarker(line))
    .map((line) => line.match(/^(.+?)\s*->\s*(.+)$/))
    .filter(Boolean)
    .map((match) => ({
      left: match[1].trim(),
      right: match[2].trim(),
    }));
}

function parseColonPairs(lines) {
  return lines
    .map((line) => stripBulletMarker(line))
    .filter((line) => line && !/^\(/.test(line))
    .map((line) => line.match(/^([^:]+?)\s*:\s*(.+)$/))
    .filter(Boolean)
    .map((match) => ({
      left: match[1].trim(),
      right: match[2].trim(),
    }));
}

function parseIndexedPairs(lines, prompts) {
  return lines
    .map((line) => stripBulletMarker(line))
    .map((line) => line.match(/^(\d+)번:\s*([^-]+?)(?:\s*-\s*.*)?$/))
    .filter(Boolean)
    .map((match) => ({
      index: Number(match[1]) - 1,
      answer: match[2].trim(),
    }))
    .filter((item) => prompts[item.index])
    .map((item) => ({
      left: prompts[item.index],
      right: item.answer,
    }));
}

function parseTableMappings(lines) {
  const pairs = [];
  const pool = [];
  let currentPrompt = "";

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      continue;
    }

    if (!line.startsWith("|")) {
      const clean = stripBulletMarker(line);
      if (/^(Requirement|Application Design Action|요구사항|설계 활동)$/i.test(clean)) {
        currentPrompt = "";
        continue;
      }
      currentPrompt = clean;
      continue;
    }

    const clean = line.replace(/^\|\s*/, "").trim();
    if (!clean || /^정답$/i.test(clean)) {
      continue;
    }

    if (/^(Options:|선택지:)/i.test(clean)) {
      pool.push(...splitCsv(clean.replace(/^(Options:|선택지:)\s*/i, "")));
      continue;
    }

    if (clean.includes(",")) {
      pool.push(...splitCsv(clean));
      continue;
    }

    if (currentPrompt) {
      pairs.push({
        left: currentPrompt,
        right: clean,
      });
      currentPrompt = "";
    }
  }

  return {
    pairs,
    pool: uniqueStrings(pool),
  };
}

function extractOrderingItems(answerLines, explanationLines) {
  const preferredLines = answerLines.length ? answerLines : explanationLines;
  const items = preferredLines
    .filter((line) => /^-\s*/.test(line))
    .map((line) => stripBulletMarker(line))
    .filter(
      (line) =>
        line &&
        !/^정답/.test(line) &&
        !/->/.test(line) &&
        !/^오답/.test(line) &&
        !/^>/.test(line),
    );

  return uniqueStrings(items);
}

function buildMatchingQuestion(base, pairs, choicePool, allowRepeat = true) {
  if (pairs.length < 2) {
    return null;
  }

  const resolvedChoicePool = uniqueStrings([
    ...choicePool,
    ...pairs.map((pair) => pair.right),
  ]);

  const rows = pairs.map((pair, index) => ({
    id: `${base.id}-row-${index + 1}`,
    prompt: pair.left,
    answer: resolveChoiceText(pair.right, resolvedChoicePool),
  }));

  return {
    ...base,
    type: "matching",
    choicePool: resolvedChoicePool,
    allowRepeat,
    rows,
  };
}

function buildOrderingQuestion(base, items) {
  if (items.length < 3) {
    return null;
  }

  return {
    ...base,
    type: "ordering",
    sequenceItems: items,
  };
}

function buildManualStructuredQuestion(questionNumber, base) {
  const manual = {
    245: {
      type: "matching",
      allowRepeat: false,
      choicePool: [
        "공정성 (Fairness)",
        "투명성 (Transparency)",
        "책임성 (Accountability)",
        "신뢰성 (Reliability)",
        "개인정보 보호 (Privacy)",
      ],
      rows: [
        {
          prompt: "특정 집단에 불리한 편향이 생기지 않도록 대출 심사를 설계한다",
          answer: "공정성 (Fairness)",
        },
        {
          prompt: "승인 또는 거절 판단 이유를 설명할 수 있게 만든다",
          answer: "투명성 (Transparency)",
        },
        {
          prompt: "AI 판단 결과를 검토하고 책임질 절차와 주체를 둔다",
          answer: "책임성 (Accountability)",
        },
        {
          prompt: "운영 중에도 일관되고 안정적인 판단 품질을 유지한다",
          answer: "신뢰성 (Reliability)",
        },
        {
          prompt: "대출 신청자의 개인정보와 민감 정보를 보호한다",
          answer: "개인정보 보호 (Privacy)",
        },
      ],
    },
    283: {
      type: "matching",
      allowRepeat: false,
      choicePool: [
        "Supervised learning",
        "Unsupervised learning",
        "Generative AI",
      ],
      rows: [
        {
          prompt: "레이블이 있는 데이터를 사용해 학습한다",
          answer: "Supervised learning",
        },
        {
          prompt: "레이블 없이 데이터의 패턴을 학습한다",
          answer: "Unsupervised learning",
        },
        {
          prompt: "새로운 데이터를 생성하는 인공지능이다",
          answer: "Generative AI",
        },
      ],
    },
    311: {
      type: "matching",
      allowRepeat: false,
      choicePool: [
        "Few-shot prompting",
        "Zero-shot prompting",
        "Chain-of-thought prompting",
      ],
      rows: [
        {
          prompt: "예시 없이 바로 작업을 지시하는 프롬프트 방식",
          answer: "Zero-shot prompting",
        },
        {
          prompt: "몇 개의 예시를 함께 제공해 원하는 패턴을 유도하는 방식",
          answer: "Few-shot prompting",
        },
        {
          prompt: "단계별로 생각하도록 유도해 추론 과정을 끌어내는 방식",
          answer: "Chain-of-thought prompting",
        },
      ],
    },
  }[questionNumber];

  if (!manual) {
    return null;
  }

  return {
    ...base,
    ...manual,
    rows: manual.rows.map((row, index) => ({
      id: `${questionNumber}-manual-${index + 1}`,
      ...row,
    })),
  };
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
  const promptKo = korean.question || english.question;
  const promptEn = english.question || korean.question;

  const base = {
    id: questionNumber,
    sourceNumber: questionNumber,
    title: heading,
    promptKo,
    promptEn,
    explanation: explanationLines,
    wrongExplanations: wrongLines,
    glossary: sections.glossary.filter(Boolean),
  };

  let options = mergeBilingualOptions(english.options, korean.options);
  let { answerKey, answerText } = parseAnswer(
    sections.answer,
    sections.explanation,
  );
  const multiAnswerKeys = parseMultiAnswerKeys(
    sections.answer,
    answerText,
    answerKey,
  );
  const isKnownMultiSelect = MULTI_SELECT_QUESTION_IDS.has(questionNumber);
  const isKnownOrdering = ORDERING_QUESTION_IDS.has(questionNumber);
  const isKnownMatching = MATCHING_QUESTION_IDS.has(questionNumber);

  if (options.length && isKnownMultiSelect && multiAnswerKeys.length >= 2) {
    return {
      ...base,
      type: "multi-select",
      options,
      answerKeys: multiAnswerKeys,
      requiredSelections: multiAnswerKeys.length,
    };
  }

  const promptLinesKo = extractQuestionBullets(sections.korean);
  const promptLinesEn = extractQuestionBullets(sections.english);
  const choicePoolKo = extractChoicePool(sections.korean);
  const choicePoolEn = extractChoicePool(sections.english);
  const choicePool = choicePoolKo.length ? choicePoolKo : choicePoolEn;
  const questionText = [heading, promptEn, promptKo].join("\n");

  if (isKnownOrdering || /order|올바른 순서|순서를/i.test(questionText)) {
    const orderingItems = extractOrderingItems(sections.answer, explanationLines);
    const orderingQuestion = buildOrderingQuestion(base, orderingItems);
    if (orderingQuestion) {
      return orderingQuestion;
    }
  }

  const answerArrowPairs = parseArrowPairs(sections.answer);
  const explanationArrowPairs = parseArrowPairs(explanationLines);
  const answerColonPairs = parseColonPairs(sections.answer);
  const tableKo = parseTableMappings(sections.korean);
  const tableEn = parseTableMappings(sections.english);
  const indexedPairsKo = parseIndexedPairs(explanationLines, promptLinesKo);
  const indexedPairsEn = parseIndexedPairs(explanationLines, promptLinesEn);
  const allowRepeat = /one or more times|하나 이상 선택/i.test(questionText);

  if (isKnownMatching) {
    const matchingCandidates = [
      buildMatchingQuestion(base, answerArrowPairs, choicePool, allowRepeat),
      buildMatchingQuestion(base, explanationArrowPairs, choicePool, allowRepeat),
      buildMatchingQuestion(base, indexedPairsKo, choicePool, allowRepeat),
      buildMatchingQuestion(base, indexedPairsEn, choicePool, allowRepeat),
      buildMatchingQuestion(
        base,
        tableKo.pairs.length ? tableKo.pairs : tableEn.pairs,
        tableKo.pool.length ? tableKo.pool : tableEn.pool,
        allowRepeat,
      ),
      buildMatchingQuestion(base, answerColonPairs, choicePool, allowRepeat),
      buildManualStructuredQuestion(questionNumber, base),
    ].filter(Boolean);

    if (matchingCandidates.length) {
      return matchingCandidates[0];
    }
  }

  if (!options.length && answerText) {
    options = buildOptionsFromWrongExplanation(
      questionNumber,
      answerText,
      wrongLines,
    );
  }

  if (!answerText && answerKey && options.length) {
    const matchedOption = options.find((option) => option.key === answerKey);
    answerText = matchedOption?.textEn || matchedOption?.textKo || matchedOption?.text || "";
  }

  if (!answerKey && answerText && options.length) {
    const matchedOption = options.find((option) => {
      const normalizedAnswer = normalizeText(answerText);

      return getOptionSearchTexts(option).some((candidate) => {
        const optionText = normalizeText(candidate);
        return (
          optionText === normalizedAnswer ||
          optionText.includes(normalizedAnswer) ||
          normalizedAnswer.includes(optionText)
        );
      });
    });

    answerKey = matchedOption?.key || "";
  }

  if (options.length >= 2 && options.length <= 5 && answerKey) {
    return {
      ...base,
      type: "single-choice",
      options,
      answerKey,
      answerText,
    };
  }

  return {
    ...base,
    type: "unsupported",
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
  (question) => question.type !== "unsupported",
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
