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
  "최종 정답",
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
  "최종 정답": "answer",
  "해설 (한국어)": "explanation",
  해설: "explanation",
  "오답 설명": "wrong",
  "용어 정리": "glossary",
  "용어 설명": "glossary",
};

const MULTI_SELECT_QUESTION_IDS = new Set([
  40, 45, 49, 71, 80, 126, 149, 165, 167, 193, 226, 242,
]);

const ORDERING_QUESTION_IDS = new Set([114, 309, 313, 328]);

const MATCHING_QUESTION_IDS = new Set([
  125, 135, 143, 144, 155, 185, 188, 191, 229, 235, 245, 257, 264, 267, 275,
  280, 283, 311,
]);

const DOMAIN_DEFINITIONS = {
  1: {
    key: "ai-ml-fundamentals",
    label: "AI 및 ML의 기초",
    targetRatio: 0.2,
    keywords: [
      ["supervised learning", 8],
      ["unsupervised learning", 8],
      ["reinforcement learning", 8],
      ["classification", 5],
      ["regression", 5],
      ["clustering", 5],
      ["inference", 5],
      ["batch inference", 6],
      ["real-time", 3],
      ["labeled data", 6],
      ["labelled data", 6],
      ["unlabeled data", 6],
      ["computer vision", 7],
      ["natural language processing", 7],
      ["nlp", 6],
      ["speech recognition", 6],
      ["recommendation", 5],
      ["fraud", 5],
      ["forecast", 5],
      ["accuracy", 6],
      ["auc", 7],
      ["f1", 7],
      ["precision", 5],
      ["recall", 5],
      ["deep learning", 7],
      ["neural network", 7],
      ["overfitting", 8],
      ["underfitting", 8],
      ["mlops", 8],
      ["feature store", 6],
      ["data wrangler", 6],
      ["model monitor", 4],
      ["sagemaker", 2],
      ["rekognition", 7],
      ["transcribe", 7],
      ["translate", 7],
      ["comprehend", 7],
      ["lex", 7],
      ["polly", 7],
      ["personalize", 7],
      ["textract", 6],
    ],
  },
  2: {
    key: "genai-fundamentals",
    label: "GenAI의 기초",
    targetRatio: 0.24,
    keywords: [
      ["generative ai", 8],
      ["genai", 8],
      ["token", 5],
      ["chunking", 6],
      ["embedding", 4],
      ["vector", 4],
      ["transformer", 7],
      ["multimodal", 7],
      ["diffusion", 7],
      ["hallucination", 6],
      ["foundation model", 4],
      ["large language model", 4],
      ["llm", 4],
      ["amazon q", 8],
      ["partyrock", 8],
      ["jumpstart", 6],
      ["data automation", 8],
      ["code generation", 6],
      ["summarization", 5],
      ["image generation", 5],
      ["video generation", 5],
      ["audio generation", 5],
      ["assistant", 4],
      ["token-based pricing", 6],
      ["provisioned throughput", 5],
      ["accessibility", 4],
      ["time to market", 4],
    ],
  },
  3: {
    key: "foundation-model-applications",
    label: "파운데이션 모델 적용",
    targetRatio: 0.28,
    keywords: [
      ["prompt engineering", 9],
      ["few-shot", 8],
      ["zero-shot", 8],
      ["single-shot", 7],
      ["chain-of-thought", 8],
      ["negative prompt", 8],
      ["prompt routing", 8],
      ["temperature", 7],
      ["top-k", 7],
      ["top p", 7],
      ["top-p", 7],
      ["context length", 7],
      ["input/output length", 6],
      ["rag", 10],
      ["retrieval-augmented generation", 10],
      ["knowledge base", 10],
      ["knowledge bases", 10],
      ["vector database", 8],
      ["opensearch", 6],
      ["aurora", 5],
      ["neptune", 5],
      ["rds for postgresql", 5],
      ["agent", 7],
      ["agents", 7],
      ["model context protocol", 8],
      ["fine-tuning", 9],
      ["fine tuning", 9],
      ["continued pretraining", 8],
      ["continued pre-training", 8],
      ["distillation", 8],
      ["instruction tuning", 8],
      ["transfer learning", 6],
      ["model evaluation", 6],
      ["bedrock model evaluation", 9],
      ["bleu", 8],
      ["rouge", 8],
      ["bertscore", 8],
      ["benchmark dataset", 7],
      ["human evaluation", 7],
      ["prompt caching", 7],
      ["custom model", 6],
      ["bedrock knowledge", 8],
      ["amazon bedrock agents", 8],
    ],
  },
  4: {
    key: "responsible-ai-guidelines",
    label: "책임 있는 AI 가이드라인",
    targetRatio: 0.14,
    keywords: [
      ["responsible ai", 10],
      ["fairness", 9],
      ["bias", 9],
      ["biased", 8],
      ["inclusion", 7],
      ["inclusive", 7],
      ["robustness", 7],
      ["safety", 6],
      ["truthfulness", 7],
      ["transparency", 9],
      ["explainability", 9],
      ["explainable", 9],
      ["interpretable", 8],
      ["guardrails", 10],
      ["clarify", 10],
      ["model cards", 9],
      ["a2i", 8],
      ["human review", 7],
      ["subgroup analysis", 8],
      ["label quality", 8],
      ["demographic", 8],
      ["intellectual property", 7],
      ["customer trust", 6],
      ["sustainability", 6],
      ["environmental", 6],
      ["hallucination", 4],
    ],
  },
  5: {
    key: "security-compliance-governance",
    label: "보안, 규정 준수 및 거버넌스",
    targetRatio: 0.14,
    keywords: [
      ["security", 9],
      ["compliance", 9],
      ["governance", 9],
      ["privacy", 8],
      ["pii", 10],
      ["iam", 10],
      ["policy", 6],
      ["policies", 6],
      ["role", 4],
      ["roles", 4],
      ["permission", 6],
      ["permissions", 6],
      ["encryption", 10],
      ["private link", 9],
      ["privatelink", 9],
      ["macie", 9],
      ["source citation", 7],
      ["data lineage", 7],
      ["data catalog", 7],
      ["access control", 8],
      ["data integrity", 8],
      ["threat detection", 8],
      ["vulnerability", 8],
      ["prompt injection", 10],
      ["encryption at rest", 8],
      ["encryption in transit", 8],
      ["cloudtrail", 9],
      ["audit manager", 9],
      ["artifact", 9],
      ["trusted advisor", 8],
      ["aws config", 9],
      ["inspector", 9],
      ["data residency", 9],
      ["logging", 6],
      ["retention", 6],
      ["observability", 6],
      ["shared responsibility", 9],
      ["residency", 7],
    ],
  },
};

const DOMAIN_MANUAL_OVERRIDES = {
  1: 4,
  9: 5,
  13: 5,
  20: 5,
  26: 5,
  28: 5,
  29: 5,
  30: 5,
  33: 3,
  34: 5,
  38: 3,
  39: 4,
  52: 4,
  80: 3,
  114: 3,
  125: 3,
  135: 4,
  143: 3,
  144: 3,
  149: 5,
  155: 3,
  185: 3,
  188: 3,
  191: 3,
  217: 5,
  229: 1,
  245: 4,
  257: 3,
  264: 3,
  267: 3,
  275: 3,
  280: 3,
  283: 1,
  309: 3,
  311: 3,
  313: 3,
  328: 3,
  391: 4,
  402: 5,
  409: 3,
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

function stripTrailingChoiceDecoration(value = "") {
  return value.replace(/\s*\([^)]*\)\s*$/g, "").trim();
}

function normalizeChoiceSignature(value = "") {
  return normalizeText(stripTrailingChoiceDecoration(value));
}

function scoreChoiceVariant(value = "") {
  let score = 0;
  if (!/\([^)]*\)\s*$/.test(value)) {
    score += 20;
  }
  if (/^[\x00-\x7F\s\-./&]+$/.test(value)) {
    score += 8;
  }
  score -= value.length / 100;
  return score;
}

function collapseChoicePoolVariants(values = []) {
  const groups = new Map();

  values.map((item) => item.trim()).filter(Boolean).forEach((value) => {
    const signature = normalizeChoiceSignature(value) || normalizeText(value);
    if (!signature) {
      return;
    }

    const existing = groups.get(signature) || [];
    existing.push(value);
    groups.set(signature, existing);
  });

  return [...groups.values()].map((variants) =>
    variants
      .slice()
      .sort((left, right) => scoreChoiceVariant(right) - scoreChoiceVariant(left))[0],
  );
}

function extractChoicePoolFromWrongLines(lines) {
  return uniqueStrings(
    lines
      .map((line) => stripBulletMarker(line))
      .map((line) => line.match(/^([^:]+?)\s*:\s*(.+)$/) || line.match(/^([^:]+?)\s*->\s*(.+)$/))
      .filter(Boolean)
      .map((match) => match[1].trim()),
  );
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
  const normalizedTargetSignature = normalizeChoiceSignature(target);
  const signatureMatch = choicePool.find(
    (choice) => normalizeChoiceSignature(choice) === normalizedTargetSignature,
  );
  if (signatureMatch) {
    return signatureMatch;
  }

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

  const canonicalChoicePool = collapseChoicePoolVariants(uniqueStrings(choicePool));
  const resolvedAnswers = pairs.map((pair) => resolveChoiceText(pair.right, canonicalChoicePool));
  const resolvedChoicePool = collapseChoicePoolVariants(
    uniqueStrings([...canonicalChoicePool, ...resolvedAnswers]),
  );

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
    185: {
      promptEn:
        "A company needs to customize a base model that is hosted on Amazon Bedrock.\nSelect the correct model customization method from the following list of company requirements. Each model customization method should be selected one or more times.",
      promptKo:
        "한 회사가 Amazon Bedrock에 호스팅된 베이스 모델을 맞춤화해야 합니다.\n다음 회사 요구사항에 맞는 모델 커스터마이징 방법을 선택하십시오. 각 방법은 하나 이상 선택할 수 있습니다.",
      explanation: [
        "Fine-tuning은 특정 작업/예제에 대한 성능 개선에 사용됩니다.",
        "Continued pre-training은 도메인 지식 강화나 비식별 데이터로 추가 학습에 적합합니다.",
      ],
      glossary: [
        "Fine-tuning: 라벨된 데이터로 특정 작업에 맞게 모델을 조정",
        "Continued pre-training: 도메인 관련 데이터로 사전 학습을 이어감",
      ],
      type: "matching",
      allowRepeat: true,
      choicePool: ["Continued pre-training", "Fine-tuning"],
      rows: [
        {
          prompt: "The company wants to improve the model's performance on specific tasks and examples.",
          answer: "Fine-tuning",
        },
        {
          prompt: "The company wants to improve the model's domain knowledge by providing specific documents.",
          answer: "Continued pre-training",
        },
        {
          prompt: "The company wants to retrain the model by using more unlabeled data over time.",
          answer: "Continued pre-training",
        },
      ],
    },
    188: {
      promptEn:
        "A company is designing a customer service chatbot by using a fine-tuned large language model (LLM). The company wants to ensure that the chatbot uses responsible AI characteristics.\nSelect the correct responsible AI characteristic from the following list for each application design action. Each responsible AI characteristic should be selected one time or not at all.",
      promptKo:
        "회사는 Fine-tuning된 LLM을 사용해 고객 서비스 챗봇을 설계하고 있으며, 책임 있는 AI 특성을 반영하려 합니다.\n각 설계 활동에 대해 올바른 Responsible AI 특성을 선택하세요. 각 특성은 한 번만 선택하거나 선택하지 않을 수 있습니다.",
      type: "matching",
      allowRepeat: false,
      choicePool: ["Governance", "Privacy and security", "Safety", "Transparency"],
      rows: [
        {
          prompt: "Anonymize personal information during training data preparation",
          answer: "Privacy and security",
        },
        {
          prompt: "Design the customer service chatbot to provide explainable decisions",
          answer: "Transparency",
        },
        {
          prompt: "Use Amazon Bedrock Guardrails to prevent harmful output and misuse of the chatbot",
          answer: "Safety",
        },
      ],
    },
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

function buildDomainSearchText(question = {}) {
  const optionsText = Array.isArray(question.options)
    ? question.options
        .flatMap((option) => [option.textEn, option.textKo, option.text])
        .filter(Boolean)
        .join("\n")
    : "";
  const rowsText = Array.isArray(question.rows)
    ? question.rows
        .flatMap((row) => [row.prompt, row.answer])
        .filter(Boolean)
        .join("\n")
    : "";
  const sequenceText = Array.isArray(question.sequenceItems)
    ? question.sequenceItems.join("\n")
    : "";

  return [
    question.title,
    question.promptEn,
    question.promptKo,
    ...(question.explanation || []),
    ...(question.wrongExplanations || []),
    ...(question.glossary || []),
    optionsText,
    rowsText,
    sequenceText,
  ]
    .filter(Boolean)
    .join("\n")
    .toLowerCase();
}

function inferDomainFromQuestion(question) {
  const manualDomainId = DOMAIN_MANUAL_OVERRIDES[question.sourceNumber];
  if (manualDomainId && DOMAIN_DEFINITIONS[manualDomainId]) {
    return {
      domainId: manualDomainId,
      domainKey: DOMAIN_DEFINITIONS[manualDomainId].key,
      domainLabel: DOMAIN_DEFINITIONS[manualDomainId].label,
    };
  }

  const haystack = buildDomainSearchText(question);
  const domainScores = Object.fromEntries(
    Object.keys(DOMAIN_DEFINITIONS).map((key) => [Number(key), 0]),
  );

  Object.entries(DOMAIN_DEFINITIONS).forEach(([domainId, definition]) => {
    definition.keywords.forEach(([keyword, weight]) => {
      if (haystack.includes(keyword)) {
        domainScores[Number(domainId)] += weight;
      }
    });
  });

  if (haystack.includes("bedrock guardrails")) {
    domainScores[4] += 12;
  }

  if (haystack.includes("knowledge base") || haystack.includes("knowledge bases")) {
    domainScores[3] += 12;
  }

  if (haystack.includes("model card")) {
    domainScores[4] += 10;
  }

  if (haystack.includes("prompt engineering")) {
    domainScores[3] += 10;
  }

  if (haystack.includes("prompt injection")) {
    domainScores[5] += 12;
  }

  if (haystack.includes("generative ai security scoping matrix")) {
    domainScores[5] += 12;
  }

  if (haystack.includes("bedrock") && !haystack.includes("knowledge base")) {
    domainScores[2] += 2;
  }

  if (haystack.includes("foundation model") && !haystack.includes("fine-tuning")) {
    domainScores[2] += 2;
  }

  if (
    haystack.includes("accuracy") ||
    haystack.includes("f1") ||
    haystack.includes("auc")
  ) {
    domainScores[1] += 3;
  }

  const sortedDomains = Object.entries(domainScores).sort((left, right) => {
    if (right[1] === left[1]) {
      return Number(left[0]) - Number(right[0]);
    }
    return right[1] - left[1];
  });

  const [bestDomainId, bestScore] = sortedDomains[0];
  let domainId = Number(bestDomainId);

  if (!bestScore) {
    if (
      haystack.includes("security") ||
      haystack.includes("compliance") ||
      haystack.includes("governance") ||
      haystack.includes("iam")
    ) {
      domainId = 5;
    } else if (
      haystack.includes("bias") ||
      haystack.includes("fairness") ||
      haystack.includes("explainability") ||
      haystack.includes("guardrails")
    ) {
      domainId = 4;
    } else if (
      haystack.includes("rag") ||
      haystack.includes("knowledge base") ||
      haystack.includes("prompt") ||
      haystack.includes("fine-tuning")
    ) {
      domainId = 3;
    } else if (
      haystack.includes("generative ai") ||
      haystack.includes("foundation model") ||
      haystack.includes("llm")
    ) {
      domainId = 2;
    } else {
      domainId = 1;
    }
  }

  return {
    domainId,
    domainKey: DOMAIN_DEFINITIONS[domainId].key,
    domainLabel: DOMAIN_DEFINITIONS[domainId].label,
  };
}

function withDomainMetadata(question) {
  return {
    ...question,
    ...inferDomainFromQuestion(question),
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

  const meta = parseBody(sections.meta);
  const english = parseBody(sections.english);
  const korean = parseBody(sections.korean);
  const explicitWrongLines = sections.wrong.filter(Boolean);
  const explanationCandidates = sections.explanation.filter(
    (line) => !/^[-\s]*정답\s*[:：]/.test(line),
  );
  const { explanationLines, wrongLines: derivedWrongLines } =
    splitExplanationAndWrongLines(explanationCandidates);
  const wrongLines = [...explicitWrongLines, ...derivedWrongLines];
  const promptKo = korean.question || english.question || meta.question;
  const promptEn = english.question || meta.question || korean.question;

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

  let options = mergeBilingualOptions(
    english.options.length ? english.options : meta.options,
    korean.options,
  );
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
    return withDomainMetadata({
      ...base,
      type: "multi-select",
      options,
      answerKeys: multiAnswerKeys,
      requiredSelections: multiAnswerKeys.length,
    });
  }

  const promptLinesKo = extractQuestionBullets(sections.korean);
  const promptLinesEn = extractQuestionBullets(sections.english);
  const choicePoolKo = extractChoicePool(sections.korean);
  const choicePoolEn = extractChoicePool(sections.english);
  const wrongChoicePool = extractChoicePoolFromWrongLines(wrongLines);
  const choicePool = uniqueStrings([
    ...(choicePoolKo.length ? choicePoolKo : choicePoolEn),
    ...wrongChoicePool,
  ]);
  const questionText = [heading, promptEn, promptKo].join("\n");

  if (isKnownOrdering || /order|올바른 순서|순서를/i.test(questionText)) {
    const orderingItems = extractOrderingItems(sections.answer, explanationLines);
    const orderingQuestion = buildOrderingQuestion(base, orderingItems);
    if (orderingQuestion) {
      return withDomainMetadata(orderingQuestion);
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
    const manualStructuredQuestion = buildManualStructuredQuestion(questionNumber, base);
    if (manualStructuredQuestion) {
      return withDomainMetadata(manualStructuredQuestion);
    }

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
    ].filter(Boolean);

    if (matchingCandidates.length) {
      return withDomainMetadata(matchingCandidates[0]);
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
    return withDomainMetadata({
      ...base,
      type: "single-choice",
      options,
      answerKey,
      answerText,
    });
  }

  return withDomainMetadata({
    ...base,
    type: "unsupported",
  });
}

const matches = [...html.matchAll(/Question\s+(\d+)/g)];
const parsedQuestions = matches.map((match, index) => {
  const questionNumber = Number(match[1]);
  const start = match.index;
  const end = index + 1 < matches.length ? matches[index + 1].index : html.length;
  return parseSegment(questionNumber, html.slice(start, end));
});

function applyQuestionOverrides(question) {
  if (question.sourceNumber === 185) {
    return withDomainMetadata({
      ...question,
      promptEn:
        "A company needs to customize a base model that is hosted on Amazon Bedrock.\nSelect the correct model customization method from the following list of company requirements. Each model customization method should be selected one or more times.",
      promptKo:
        "한 회사가 Amazon Bedrock에 호스팅된 베이스 모델을 맞춤화해야 합니다.\n다음 회사 요구사항에 맞는 모델 커스터마이징 방법을 선택하십시오. 각 방법은 하나 이상 선택할 수 있습니다.",
      explanation: [
        "Fine-tuning은 특정 작업/예제에 대한 성능 개선에 사용됩니다.",
        "Continued pre-training은 도메인 지식 강화나 비식별 데이터로 추가 학습에 적합합니다.",
      ],
      glossary: [
        "Fine-tuning: 라벨된 데이터로 특정 작업에 맞게 모델을 조정",
        "Continued pre-training: 도메인 관련 데이터로 사전 학습을 이어감",
      ],
      type: "matching",
      choicePool: ["Continued pre-training", "Fine-tuning"],
      allowRepeat: true,
      rows: [
        {
          id: "185-row-1",
          prompt: "The company wants to improve the model's performance on specific tasks and examples.",
          answer: "Fine-tuning",
        },
        {
          id: "185-row-2",
          prompt: "The company wants to improve the model's domain knowledge by providing specific documents.",
          answer: "Continued pre-training",
        },
        {
          id: "185-row-3",
          prompt: "The company wants to retrain the model by using more unlabeled data over time.",
          answer: "Continued pre-training",
        },
      ],
    });
  }

  if (question.sourceNumber === 188) {
    return withDomainMetadata({
      ...question,
      promptEn:
        "A company is designing a customer service chatbot by using a fine-tuned large language model (LLM). The company wants to ensure that the chatbot uses responsible AI characteristics.\nSelect the correct responsible AI characteristic from the following list for each application design action. Each responsible AI characteristic should be selected one time or not at all.",
      promptKo:
        "회사는 Fine-tuning된 LLM을 사용해 고객 서비스 챗봇을 설계하고 있으며, 책임 있는 AI 특성을 반영하려 합니다.\n각 설계 활동에 대해 올바른 Responsible AI 특성을 선택하세요. 각 특성은 한 번만 선택하거나 선택하지 않을 수 있습니다.",
      type: "matching",
      choicePool: ["Governance", "Privacy and security", "Safety", "Transparency"],
      allowRepeat: false,
      rows: [
        {
          id: "188-row-1",
          prompt: "Anonymize personal information during training data preparation",
          answer: "Privacy and security",
        },
        {
          id: "188-row-2",
          prompt: "Design the customer service chatbot to provide explainable decisions",
          answer: "Transparency",
        },
        {
          id: "188-row-3",
          prompt: "Use Amazon Bedrock Guardrails to prevent harmful output and misuse of the chatbot",
          answer: "Safety",
        },
      ],
    });
  }

  return question;
}

const supportedQuestions = parsedQuestions.filter(
  (question) => question.type !== "unsupported",
).map(applyQuestionOverrides);

const domainDistribution = supportedQuestions.reduce((accumulator, question) => {
  const domainId = question.domainId || 1;
  const current = accumulator[domainId] || {
    domainId,
    domainKey: DOMAIN_DEFINITIONS[domainId].key,
    domainLabel: DOMAIN_DEFINITIONS[domainId].label,
    count: 0,
  };
  current.count += 1;
  accumulator[domainId] = current;
  return accumulator;
}, {});

const payload = {
  generatedAt: new Date().toISOString(),
  source: {
    file: SOURCE_HTML,
    totalQuestions: parsedQuestions.length,
  },
  supportedCount: supportedQuestions.length,
  skippedCount: parsedQuestions.length - supportedQuestions.length,
  domainDistribution: Object.values(domainDistribution).sort(
    (left, right) => left.domainId - right.domainId,
  ),
  questions: supportedQuestions,
};

const fileContents = `window.EXAM_PRACTICE_DATA = ${JSON.stringify(
  payload,
  null,
  2,
)};\n`;

fs.writeFileSync(OUTPUT_JS, fileContents, "utf8");

console.log(
  `Generated ${payload.supportedCount} supported questions from ${payload.source.totalQuestions} source questions.`,
);
