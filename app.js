const QUIZ_STORAGE_KEY = "aws-ai-practitioner-quiz-state-v1";
const EXAM_STORAGE_KEY = "aws-ai-practitioner-exam-state-v1";
const DAILY_AUTH_STORAGE_KEY = "aws-ai-practitioner-daily-auth-v1";
const SEOUL_TIMEZONE = "Asia/Seoul";
const PASSWORD_PREFIX = "260314";
const EXAM_TOTAL_QUESTIONS = 65;
const EXAM_UNSCORED_QUESTIONS = 15;
const EXAM_DURATION_MINUTES = 90;
const EXAM_POINTS_PER_SCORED_QUESTION = 20;
const EXAM_PASSING_SCORE = 700;
const EXAM_DOMAIN_BLUEPRINT = [
  { domainId: 1, count: 13 },
  { domainId: 2, count: 16 },
  { domainId: 3, count: 18 },
  { domainId: 4, count: 9 },
  { domainId: 5, count: 9 },
];
const PASSWORD_BASE_DATE = {
  year: 2026,
  month: 3,
  day: 14,
};

const QUESTION_TYPE_LABELS = {
  "single-choice": "단일 선택형",
  "multi-select": "복수 선택형",
  matching: "매칭형",
  ordering: "순서형",
};

const ORDER_MODE_LABELS = {
  random: "랜덤",
  sequence: "순서",
  reverse: "역순",
};

const appData = window.AWS_AI_QUIZ_DATA || {
  supportedCount: 0,
  source: { totalQuestions: 0 },
  domainDistribution: [],
  questions: [],
};

const questions = appData.questions || [];
const questionById = new Map(questions.map((question) => [question.id, question]));

function isQuestionRoute() {
  const normalizedPath = window.location.pathname.replace(/index\.html$/, "");
  return /\/question\/?$/.test(normalizedPath);
}

function normalizeSessionMode(value = "") {
  return value === "exam" ? "exam" : "practice";
}

function getSessionModeFromUrl() {
  const currentUrl = new URL(window.location.href);
  return normalizeSessionMode(currentUrl.searchParams.get("session") || "");
}

function shouldStartFreshExamFromUrl() {
  const currentUrl = new URL(window.location.href);
  return currentUrl.searchParams.get("fresh") === "1";
}

function normalizeOrderMode(value = "") {
  if (value === "sequence" || value === "reverse" || value === "random") {
    return value;
  }
  return "random";
}

function getOrderModeFromUrl() {
  const currentUrl = new URL(window.location.href);
  return normalizeOrderMode(currentUrl.searchParams.get("order") || "");
}

function getRequestedQuestionIdFromUrl() {
  const currentUrl = new URL(window.location.href);
  const questionId = Number(currentUrl.searchParams.get("q") || 0);
  return questionById.has(questionId) ? questionId : null;
}

function getQuestionRouteUrl(
  orderMode = "random",
  questionId = null,
  sessionMode = "practice",
  freshExam = false,
) {
  const currentUrl = new URL(window.location.href);
  const normalizedPath = currentUrl.pathname.replace(/index\.html$/, "");
  const normalizedSessionMode = normalizeSessionMode(sessionMode);

  if (/\/question\/?$/.test(normalizedPath)) {
    if (normalizedSessionMode === "exam") {
      currentUrl.searchParams.set("session", "exam");
      currentUrl.searchParams.delete("order");
      if (freshExam) {
        currentUrl.searchParams.set("fresh", "1");
      } else {
        currentUrl.searchParams.delete("fresh");
      }
    } else {
      currentUrl.searchParams.delete("session");
      currentUrl.searchParams.delete("fresh");
      currentUrl.searchParams.set("order", normalizeOrderMode(orderMode));
    }
    if (questionId && questionById.has(questionId)) {
      currentUrl.searchParams.set("q", String(questionId));
    } else {
      currentUrl.searchParams.delete("q");
    }
    return currentUrl.toString();
  }

  currentUrl.pathname = normalizedPath.endsWith("/")
    ? `${normalizedPath}question/`
    : `${normalizedPath}/question/`;
  currentUrl.search = "";
  if (normalizedSessionMode === "exam") {
    currentUrl.searchParams.set("session", "exam");
    if (freshExam) {
      currentUrl.searchParams.set("fresh", "1");
    }
  } else {
    currentUrl.searchParams.set("order", normalizeOrderMode(orderMode));
  }
  if (questionId && questionById.has(questionId)) {
    currentUrl.searchParams.set("q", String(questionId));
  }
  currentUrl.hash = "";
  return currentUrl.toString();
}

function syncQuestionIdToUrl(questionId) {
  if (!isQuestionRoute()) {
    return;
  }

  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.delete("fresh");
  if (questionId && questionById.has(questionId)) {
    currentUrl.searchParams.set("q", String(questionId));
  } else {
    currentUrl.searchParams.delete("q");
  }
  window.history.replaceState({}, "", currentUrl.toString());
}

function getHomeUrl() {
  const currentUrl = new URL(window.location.href);
  const normalizedPath = currentUrl.pathname.replace(/index\.html$/, "");
  currentUrl.pathname = normalizedPath.replace(/\/question\/?$/, "/");
  currentUrl.search = "";
  currentUrl.hash = "";
  return currentUrl.toString();
}

const elements = {
  body: document.body,
  appShell: document.querySelector(".app-shell"),
  hero: document.getElementById("hero"),
  heroStats: document.getElementById("hero-stats"),
  overviewBoard: document.getElementById("overview-board"),
  questionStatusSummaryOverview: document.getElementById("question-status-summary-overview"),
  questionPaletteOverview: document.getElementById("question-palette-overview"),
  resetProgressButton: document.getElementById("reset-progress-button"),
  mainContent: document.getElementById("main-content"),
  panelToolbar: document.querySelector(".panel__toolbar"),
  segmentedButtons: document.querySelectorAll(".segmented__button"),
  quizView: document.getElementById("quiz-view"),
  glossaryView: document.getElementById("glossary-view"),
  modeBadge: document.getElementById("mode-badge"),
  questionId: document.getElementById("question-id"),
  domainBadge: document.getElementById("domain-badge"),
  quizProgress: document.getElementById("quiz-progress"),
  progressCompleted: document.getElementById("progress-completed"),
  progressCorrect: document.getElementById("progress-correct"),
  progressRemaining: document.getElementById("progress-remaining"),
  progressWrong: document.getElementById("progress-wrong"),
  openQuestionSheetButton: document.getElementById("open-question-sheet-button"),
  closeQuestionSheetButton: document.getElementById("close-question-sheet-button"),
  questionSheetBackdrop: document.getElementById("question-sheet-backdrop"),
  questionSheet: document.getElementById("question-sheet"),
  questionStatusSummarySheet: document.getElementById("question-status-summary-sheet"),
  questionPaletteSheet: document.getElementById("question-palette-sheet"),
  examBanner: document.getElementById("exam-banner"),
  examTimer: document.getElementById("exam-timer"),
  examProgressIndex: document.getElementById("exam-progress-index"),
  examProgressAnswered: document.getElementById("exam-progress-answered"),
  examProgressRemainingTime: document.getElementById("exam-progress-remaining-time"),
  questionCard: document.getElementById("question-card"),
  questionTitle: document.getElementById("question-title"),
  questionSubtitle: document.getElementById("question-subtitle"),
  questionPrompt: document.getElementById("question-prompt"),
  questionPromptSecondary: document.getElementById("question-prompt-english"),
  optionsForm: document.getElementById("options-form"),
  actionRow: document.getElementById("action-row"),
  checkAnswerButton: document.getElementById("check-answer-button"),
  nextQuestionButton: document.getElementById("next-question-button"),
  feedbackCard: document.getElementById("feedback-card"),
  examResultCard: document.getElementById("exam-result-card"),
  wrongNoteSummary: document.getElementById("wrong-note-summary"),
  wrongNoteList: document.getElementById("wrong-note-list"),
  removeCurrentWrongButton: document.getElementById("remove-current-wrong-button"),
  clearWrongButton: document.getElementById("clear-wrong-button"),
  glossarySearch: document.getElementById("glossary-search"),
  glossaryGrid: document.getElementById("glossary-grid"),
};

const state = {
  mode: "random",
  sessionMode: getSessionModeFromUrl(),
  startFreshExam: shouldStartFreshExamFromUrl(),
  orderMode: getOrderModeFromUrl(),
  requestedQuestionId: getRequestedQuestionIdFromUrl(),
  currentQuestionId: null,
  response: null,
  answerChecked: false,
  questionSheetOpen: false,
  started: isQuestionRoute(),
  session: loadState(),
  exam: loadExamState(),
};

let examTimerHandle = null;

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(QUIZ_STORAGE_KEY) || "{}");
    return {
      totals: {
        solved: Number(parsed?.totals?.solved || 0),
        correct: Number(parsed?.totals?.correct || 0),
      },
      wrongBook: parsed?.wrongBook && typeof parsed.wrongBook === "object" ? parsed.wrongBook : {},
      completedBook:
        parsed?.completedBook && typeof parsed.completedBook === "object"
          ? parsed.completedBook
          : {},
    };
  } catch (error) {
    return {
      totals: { solved: 0, correct: 0 },
      wrongBook: {},
      completedBook: {},
    };
  }
}

function createEmptyExamState() {
  return {
    active: false,
    completed: false,
    questionIds: [],
    unscoredIds: [],
    responses: {},
    currentIndex: 0,
    startedAt: "",
    expiresAt: "",
    endedAt: "",
    endedReason: "",
  };
}

function loadExamState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(EXAM_STORAGE_KEY) || "{}");
    return {
      active: Boolean(parsed?.active),
      completed: Boolean(parsed?.completed),
      questionIds: Array.isArray(parsed?.questionIds) ? parsed.questionIds.map(Number) : [],
      unscoredIds: Array.isArray(parsed?.unscoredIds) ? parsed.unscoredIds.map(Number) : [],
      responses: parsed?.responses && typeof parsed.responses === "object" ? parsed.responses : {},
      currentIndex: Number(parsed?.currentIndex || 0),
      startedAt: parsed?.startedAt || "",
      expiresAt: parsed?.expiresAt || "",
      endedAt: parsed?.endedAt || "",
      endedReason: parsed?.endedReason || "",
    };
  } catch (error) {
    return createEmptyExamState();
  }
}

function getDatePartsInTimeZone(date = new Date(), timeZone = SEOUL_TIMEZONE) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const parts = formatter.formatToParts(date);
  const year = Number(parts.find((part) => part.type === "year")?.value);
  const month = Number(parts.find((part) => part.type === "month")?.value);
  const day = Number(parts.find((part) => part.type === "day")?.value);
  const monthLabel = String(month).padStart(2, "0");
  const dayLabel = String(day).padStart(2, "0");

  return {
    year,
    month,
    day,
    dayKey: `${year}-${monthLabel}-${dayLabel}`,
  };
}

function toUtcDayNumber({ year, month, day }) {
  return Math.floor(Date.UTC(year, month - 1, day) / 86400000);
}

function getExpectedDailyPassword(date = new Date()) {
  const today = getDatePartsInTimeZone(date);
  const baseDayNumber = toUtcDayNumber(PASSWORD_BASE_DATE);
  const todayDayNumber = toUtcDayNumber(today);
  const elapsedDays = Math.max(0, todayDayNumber - baseDayNumber + 1);

  return {
    dayKey: today.dayKey,
    password: `${PASSWORD_PREFIX}${elapsedDays}`,
    elapsedDays,
  };
}

function loadDailyAuth() {
  try {
    const parsed = JSON.parse(localStorage.getItem(DAILY_AUTH_STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function saveDailyAuth(dayKey) {
  localStorage.setItem(
    DAILY_AUTH_STORAGE_KEY,
    JSON.stringify({
      dayKey,
      verifiedAt: new Date().toISOString(),
    }),
  );
}

function clearDailyAuth() {
  localStorage.removeItem(DAILY_AUTH_STORAGE_KEY);
}

function ejectFromPage() {
  document.body.innerHTML = "";
  window.location.replace("about:blank");
}

function requireDailyPassword() {
  const { dayKey, password } = getExpectedDailyPassword();
  const savedAuth = loadDailyAuth();

  if (savedAuth.dayKey === dayKey) {
    return true;
  }

  clearDailyAuth();

  const message = [
    "비밀번호를 입력하세요.",
    "힌트: 우리가 만난날 + 우리가 만난날로부터 몇일?",
    "예: 94062623 같은 형태",
    "인증은 Asia/Seoul 기준 오늘 23:59:59까지만 유효합니다.",
  ].join("\n");
  const enteredPassword = window.prompt(message, "");

  if (enteredPassword === password) {
    saveDailyAuth(dayKey);
    return true;
  }

  window.alert("비밀번호가 올바르지 않아 페이지를 종료합니다.");
  ejectFromPage();
  return false;
}

function saveState() {
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(state.session));
}

function saveExamState() {
  localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(state.exam));
}

function cloneValue(value) {
  if (value == null) {
    return value;
  }

  return JSON.parse(JSON.stringify(value));
}

function isExamMode() {
  return state.sessionMode === "exam";
}

function getExamTotalQuestions() {
  return state.exam.questionIds.length || EXAM_TOTAL_QUESTIONS;
}

function getExamUnscoredCount() {
  return state.exam.unscoredIds.length || EXAM_UNSCORED_QUESTIONS;
}

function getExamScoredCount() {
  return Math.max(0, getExamTotalQuestions() - getExamUnscoredCount());
}

function getQuestionDomainId(question) {
  return Number(question?.domainId || 1);
}

function pickExamQuestionIds() {
  const selectedIds = [];
  const usedIds = new Set();

  EXAM_DOMAIN_BLUEPRINT.forEach(({ domainId, count }) => {
    const domainPool = shuffleArray(
      questions
        .filter((question) => getQuestionDomainId(question) === domainId)
        .map((question) => question.id)
        .filter((questionId) => !usedIds.has(questionId)),
    );

    domainPool.slice(0, count).forEach((questionId) => {
      usedIds.add(questionId);
      selectedIds.push(questionId);
    });
  });

  if (selectedIds.length < EXAM_TOTAL_QUESTIONS) {
    const remainingPool = shuffleArray(
      questions
        .map((question) => question.id)
        .filter((questionId) => !usedIds.has(questionId)),
    );

    remainingPool
      .slice(0, EXAM_TOTAL_QUESTIONS - selectedIds.length)
      .forEach((questionId) => {
        usedIds.add(questionId);
        selectedIds.push(questionId);
      });
  }

  return shuffleArray(selectedIds).slice(0, Math.min(EXAM_TOTAL_QUESTIONS, questions.length));
}

function createExamSession() {
  const questionIds = pickExamQuestionIds();
  const unscoredIds = shuffleArray(questionIds).slice(
    0,
    Math.min(EXAM_UNSCORED_QUESTIONS, questionIds.length),
  );
  const startedAt = new Date();
  const expiresAt = new Date(startedAt.getTime() + EXAM_DURATION_MINUTES * 60 * 1000);

  return {
    active: true,
    completed: false,
    questionIds,
    unscoredIds,
    responses: {},
    currentIndex: 0,
    startedAt: startedAt.toISOString(),
    expiresAt: expiresAt.toISOString(),
    endedAt: "",
    endedReason: "",
  };
}

function getExamTimeRemainingMs() {
  if (!state.exam.expiresAt) {
    return 0;
  }

  return Math.max(0, new Date(state.exam.expiresAt).getTime() - Date.now());
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getExamElapsedMs() {
  const startedAt = state.exam.startedAt ? new Date(state.exam.startedAt).getTime() : Date.now();
  const endedAt = state.exam.endedAt ? new Date(state.exam.endedAt).getTime() : Date.now();
  return Math.max(0, endedAt - startedAt);
}

function getExamCurrentQuestionId() {
  return state.exam.questionIds[state.exam.currentIndex] || null;
}

function getExamStoredResponse(questionId) {
  if (!questionId) {
    return null;
  }

  return cloneValue(state.exam.responses[questionId]);
}

function setExamResponse(questionId, response) {
  if (!questionId) {
    return;
  }

  state.exam.responses[questionId] = cloneValue(response);
  saveExamState();
}

function initializeExamSession() {
  if (!isExamMode()) {
    return;
  }

  if (state.startFreshExam && state.exam.active && !state.exam.completed) {
    const confirmed = window.confirm(
      "진행 중인 모의시험이 있습니다.\n새로 시작하면 기존 시험 기록이 사라집니다.",
    );

    if (!confirmed) {
      state.startFreshExam = false;
    }
  }

  if (state.startFreshExam || !state.exam.questionIds.length) {
    state.exam = createExamSession();
    saveExamState();
  }

  state.startFreshExam = false;
}

function stripBullet(line = "") {
  return line.replace(/^-+\s*/, "").trim();
}

function escapeHtml(value = "") {
  const safe = String(value ?? "");
  return safe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeText(value = "") {
  return value
    .toLowerCase()
    .replace(/^[a-e]\.\s*/i, "")
    .replace(/[\"'()[\],.:;!?*]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function shuffleArray(items) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }
  return next;
}

function moveItem(items, fromIndex, toIndex) {
  const next = [...items];
  const [item] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, item);
  return next;
}

function getAccuracy() {
  const { solved, correct } = state.session.totals;
  if (!solved) {
    return "0%";
  }
  return `${Math.round((correct / solved) * 100)}%`;
}

function getWrongIds() {
  return Object.keys(state.session.wrongBook)
    .map(Number)
    .filter(
      (questionId) =>
        questionById.has(questionId) && !state.session.completedBook[questionId],
    );
}

function getCompletedIds() {
  return Object.keys(state.session.completedBook)
    .map(Number)
    .filter((questionId) => questionById.has(questionId));
}

function getQuestionStatus(questionId) {
  if (state.session.completedBook[questionId]) {
    return "correct";
  }

  if (state.session.wrongBook[questionId]) {
    return "wrong";
  }

  return "pending";
}

function getQuestionStatusCounts() {
  return questions.reduce(
    (counts, question) => {
      const status = getQuestionStatus(question.id);
      counts[status] += 1;
      return counts;
    },
    {
      pending: 0,
      correct: 0,
      wrong: 0,
    },
  );
}

function getExamAnsweredCount() {
  return state.exam.questionIds.filter((questionId) => {
    const question = questionById.get(questionId);
    return question && isResponseComplete(question, state.exam.responses[questionId]);
  }).length;
}

function getExamResultSummary() {
  const unscoredIdSet = new Set(state.exam.unscoredIds);
  const summary = {
    totalQuestions: state.exam.questionIds.length,
    totalCorrect: 0,
    totalWrong: 0,
    unanswered: 0,
    scoredQuestions: Math.max(0, state.exam.questionIds.length - state.exam.unscoredIds.length),
    scoredCorrect: 0,
    scoredWrong: 0,
    unscoredQuestions: state.exam.unscoredIds.length,
    unscoredCorrect: 0,
    unscoredWrong: 0,
  };

  state.exam.questionIds.forEach((questionId) => {
    const question = questionById.get(questionId);
    if (!question) {
      return;
    }

    const response = state.exam.responses[questionId];
    const isAnswered = isResponseComplete(question, response);
    const isUnscored = unscoredIdSet.has(questionId);

    if (!isAnswered) {
      summary.totalWrong += 1;
      summary.unanswered += 1;
      if (isUnscored) {
        summary.unscoredWrong += 1;
      } else {
        summary.scoredWrong += 1;
      }
      return;
    }

    if (isAnswerCorrect(question, response)) {
      summary.totalCorrect += 1;
      if (isUnscored) {
        summary.unscoredCorrect += 1;
      } else {
        summary.scoredCorrect += 1;
      }
      return;
    }

    summary.totalWrong += 1;
    if (isUnscored) {
      summary.unscoredWrong += 1;
    } else {
      summary.scoredWrong += 1;
    }
  });

  summary.score = summary.scoredCorrect * EXAM_POINTS_PER_SCORED_QUESTION;
  summary.passed = summary.score >= EXAM_PASSING_SCORE;
  return summary;
}

function getQuestionStatusLabel(status) {
  if (status === "correct") {
    return "정답";
  }

  if (status === "wrong") {
    return "오답";
  }

  return "미풀이";
}

function pickRandom(list) {
  if (!list.length) {
    return null;
  }

  if (list.length === 1) {
    return list[0];
  }

  let next = list[Math.floor(Math.random() * list.length)];
  if (next === state.currentQuestionId) {
    next = list[(list.indexOf(next) + 1) % list.length];
  }
  return next;
}

function sortQuestionIdsByOrder(questionIds) {
  const sorted = [...questionIds].sort((left, right) => left - right);
  return state.orderMode === "reverse" ? sorted.reverse() : sorted;
}

function getNextQuestionId(pool, currentQuestionId = state.currentQuestionId) {
  if (!pool.length) {
    return null;
  }

  if (state.orderMode === "random") {
    return pickRandom(pool);
  }

  const orderedPool = sortQuestionIdsByOrder(pool);

  if (!currentQuestionId) {
    return orderedPool[0];
  }

  if (state.orderMode === "sequence") {
    return orderedPool.find((questionId) => questionId > currentQuestionId) || orderedPool[0];
  }

  return orderedPool.find((questionId) => questionId < currentQuestionId) || orderedPool[0];
}

function getQuestionPool() {
  const basePool =
    state.mode === "wrong"
      ? getWrongIds()
      : questions
          .map((question) => question.id)
          .filter((questionId) => !state.session.completedBook[questionId]);

  if (state.orderMode === "random") {
    return basePool;
  }

  return sortQuestionIdsByOrder(basePool);
}

function getOrderModeDescription() {
  if (state.orderMode === "sequence") {
    return "낮은 번호부터 순서대로 풉니다.";
  }

  if (state.orderMode === "reverse") {
    return "높은 번호부터 역순으로 풉니다.";
  }

  return "남은 문제를 랜덤으로 보여줍니다.";
}

function getModeBadgeLabel() {
  if (state.mode === "wrong") {
    return `오답 · ${ORDER_MODE_LABELS[state.orderMode]}`;
  }

  return ORDER_MODE_LABELS[state.orderMode];
}

function getCurrentQuestion() {
  return questionById.get(state.currentQuestionId) || null;
}

function getOption(question, optionKey) {
  return question.options?.find((option) => option.key === optionKey) || null;
}

function getOptionPrimaryTextFromOption(option) {
  return option?.textEn || option?.textKo || option?.text || "";
}

function getOptionSecondaryTextFromOption(option) {
  if (!option?.textEn || !option?.textKo) {
    return "";
  }

  return normalizeText(option.textEn) === normalizeText(option.textKo) ? "" : option.textKo;
}

function getOptionText(question, optionKey) {
  return getOptionPrimaryTextFromOption(getOption(question, optionKey));
}

function getOptionSecondaryText(question, optionKey) {
  return getOptionSecondaryTextFromOption(getOption(question, optionKey));
}

function formatOptionLine(question, optionKey) {
  const primary = getOptionText(question, optionKey);
  const secondary = getOptionSecondaryText(question, optionKey);

  if (!primary) {
    return `${optionKey}.`;
  }

  return secondary
    ? `${optionKey}. ${primary} / ${secondary}`
    : `${optionKey}. ${primary}`;
}

function createInitialResponse(question) {
  if (!question) {
    return null;
  }

  if (question.type === "single-choice") {
    return "";
  }

  if (question.type === "multi-select") {
    return [];
  }

  if (question.type === "matching") {
    return Object.fromEntries(question.rows.map((row) => [row.id, ""]));
  }

  if (question.type === "ordering") {
    return shuffleArray(
      question.sequenceItems.map((text, index) => ({
        id: `${question.id}-sequence-${index + 1}`,
        text,
      })),
    );
  }

  return null;
}

function getQuestionTypeLabel(question) {
  return QUESTION_TYPE_LABELS[question?.type] || "문항";
}

function getQuestionDomainLabel(question) {
  return question?.domainLabel || "도메인 미분류";
}

function getQuestionDomainBadgeText(question) {
  return question?.domainId ? `도메인 ${question.domainId}` : "도메인";
}

function getQuestionTypeHelper(question) {
  if (!question) {
    return "";
  }

  if (question.type === "single-choice") {
    return "보기 1개를 선택하세요.";
  }

  if (question.type === "multi-select") {
    return `정답 ${question.requiredSelections}개를 선택하세요.`;
  }

  if (question.type === "matching") {
    return "각 항목마다 가장 맞는 답을 선택하세요.";
  }

  if (question.type === "ordering") {
    return "위아래 버튼으로 올바른 순서를 만드세요.";
  }

  return "";
}

function buildHeroStats() {
  const stats = [
    { label: "지원 문항", value: `${appData.supportedCount}문제` },
    { label: "누적 정답률", value: getAccuracy() },
    { label: "오답 노트", value: `${getWrongIds().length}문제` },
  ];

  elements.heroStats.innerHTML = stats
    .map(
      (item) => `
        <article class="stat-card">
          <span class="stat-card__label">${escapeHtml(item.label)}</span>
          <span class="stat-card__value">${escapeHtml(item.value)}</span>
        </article>
      `,
    )
    .join("");
}

function renderExamBanner() {
  if (!elements.examBanner || !isExamMode()) {
    return;
  }

  const totalQuestions = getExamTotalQuestions();
  const currentNumber = state.exam.completed
    ? totalQuestions
    : Math.min(state.exam.currentIndex + 1, totalQuestions);
  const answeredCount = getExamAnsweredCount();
  const timeLeft = getExamTimeRemainingMs();

  elements.examProgressIndex.textContent = `${currentNumber} / ${totalQuestions}`;
  elements.examProgressAnswered.textContent = `응답 ${answeredCount}문제`;
  elements.examProgressRemainingTime.textContent = `남은 ${formatDuration(timeLeft)}`;
  elements.examTimer.textContent = formatDuration(timeLeft);
  elements.examTimer.classList.toggle("is-expiring", timeLeft <= 10 * 60 * 1000);
}

function buildExamResultMarkup() {
  const summary = getExamResultSummary();
  const statusLabel =
    state.exam.endedReason === "time-up" ? "시간 종료" : "모의시험 완료";
  const elapsedTime = formatDuration(getExamElapsedMs());

  const stats = [
    { label: "전체 정답", value: `${summary.totalCorrect} / ${summary.totalQuestions}` },
    { label: "전체 오답", value: `${summary.totalWrong} / ${summary.totalQuestions}` },
    { label: "미응답", value: `${summary.unanswered}문제` },
    { label: "채점 정답", value: `${summary.scoredCorrect} / ${summary.scoredQuestions}` },
    { label: "채점 오답", value: `${summary.scoredWrong} / ${summary.scoredQuestions}` },
    { label: "채점 제외 정답", value: `${summary.unscoredCorrect} / ${summary.unscoredQuestions}` },
    { label: "채점 제외 오답", value: `${summary.unscoredWrong} / ${summary.unscoredQuestions}` },
    { label: "최종 점수", value: `${summary.score} / 1000` },
  ];

  return `
    <div class="exam-result-card__status ${summary.passed ? "is-pass" : "is-fail"}">
      ${summary.passed ? "통과권" : "재도전 필요"} · ${escapeHtml(statusLabel)}
    </div>
    <h3 class="exam-result-card__title">실전 65문제 결과</h3>
    <p class="exam-result-card__copy">
      총 ${summary.totalQuestions}문항 중 ${summary.unscoredQuestions}문항은 비채점으로 제외했습니다.
      채점 대상 ${summary.scoredQuestions}문항만 점수에 반영했고, 요청한 방식대로 1문항당
      ${EXAM_POINTS_PER_SCORED_QUESTION}점으로 계산했습니다.
    </p>
    <div class="exam-result-card__grid">
      ${stats
        .map(
          (item) => `
            <article class="exam-result-stat">
              <span class="exam-result-stat__label">${escapeHtml(item.label)}</span>
              <strong class="exam-result-stat__value">${escapeHtml(item.value)}</strong>
            </article>
          `,
        )
        .join("")}
    </div>
    <p class="exam-result-card__note">
      허수 15문항 중 정답 ${summary.unscoredCorrect}문제, 오답/미응답 ${summary.unscoredWrong}문제였습니다.
      실제 AWS 점수는 scaled score(100~1000)라 완전히 같지는 않지만, 이 모의시험은 요청하신
      방식대로 50문항 x 20점 기준으로 계산했습니다. 경과 시간은 ${elapsedTime}입니다.
    </p>
    <div class="exam-result-card__actions">
      <button class="primary-button" data-start-exam="true" type="button">
        새 실전 65문제 시작
      </button>
      <a class="secondary-button primary-link" href="${escapeHtml(getHomeUrl())}">
        홈으로 돌아가기
      </a>
    </div>
  `;
}

function renderExamResultCard() {
  if (!elements.examResultCard) {
    return;
  }

  if (!isExamMode() || !state.exam.completed) {
    elements.examResultCard.classList.add("is-hidden");
    elements.examResultCard.innerHTML = "";
    return;
  }

  elements.examResultCard.innerHTML = buildExamResultMarkup();
  elements.examResultCard.classList.remove("is-hidden");
}

function renderQuizProgress() {
  const correctCount = getCompletedIds().length;
  const wrongCount = getWrongIds().length;
  const completedCount = correctCount + wrongCount;
  const remainingCount = Math.max(0, questions.length - completedCount);

  if (elements.progressCompleted) {
    elements.progressCompleted.textContent = `완료 ${completedCount}문제`;
  }

  if (elements.progressCorrect) {
    elements.progressCorrect.textContent = `정답 ${correctCount}문제`;
  }

  if (elements.progressRemaining) {
    elements.progressRemaining.textContent = `남음 ${remainingCount}문제`;
  }

  if (elements.progressWrong) {
    elements.progressWrong.textContent = `오답 ${wrongCount}문제`;
  }
}

function buildQuestionStatusSummaryMarkup() {
  const counts = getQuestionStatusCounts();
  const entries = [
    { key: "pending", label: "미풀이", value: counts.pending },
    { key: "correct", label: "정답", value: counts.correct },
    { key: "wrong", label: "오답", value: counts.wrong },
  ];

  return entries
    .map(
      (entry) => `
        <article class="status-card status-card--${entry.key}">
          <span class="status-card__label">${escapeHtml(entry.label)}</span>
          <strong class="status-card__value">${entry.value}</strong>
        </article>
      `,
    )
    .join("");
}

function buildQuestionPaletteMarkup(kind = "sheet") {
  return questions
    .map((question) => {
      const status = getQuestionStatus(question.id);
      const isCurrent = kind === "sheet" && question.id === state.currentQuestionId;
      const classes = [
        "question-palette__item",
        `question-palette__item--${status}`,
        isCurrent ? "is-current" : "",
      ]
        .filter(Boolean)
        .join(" ");
      const label = String(question.sourceNumber);
      const ariaLabel = `문제 ${question.sourceNumber}, ${getQuestionStatusLabel(status)}`;

      if (kind === "overview") {
        return `
          <a
            class="${classes}"
            href="${escapeHtml(getQuestionRouteUrl(state.orderMode, question.id))}"
            aria-label="${escapeHtml(ariaLabel)}"
            title="${escapeHtml(`Q ${question.sourceNumber}`)}"
          >
            ${escapeHtml(label)}
          </a>
        `;
      }

      return `
        <button
          class="${classes}"
          type="button"
          data-jump-question="${question.id}"
          data-close-sheet="true"
          aria-label="${escapeHtml(ariaLabel)}"
          title="${escapeHtml(`Q ${question.sourceNumber}`)}"
        >
          ${escapeHtml(label)}
        </button>
      `;
    })
    .join("");
}

function renderQuestionStatusViews() {
  if (elements.questionStatusSummaryOverview) {
    elements.questionStatusSummaryOverview.innerHTML = buildQuestionStatusSummaryMarkup();
  }

  if (elements.questionPaletteOverview) {
    elements.questionPaletteOverview.innerHTML = buildQuestionPaletteMarkup("overview");
  }

  if (elements.questionStatusSummarySheet) {
    elements.questionStatusSummarySheet.innerHTML = buildQuestionStatusSummaryMarkup();
  }

  if (elements.questionPaletteSheet) {
    elements.questionPaletteSheet.innerHTML = buildQuestionPaletteMarkup("sheet");
  }
}

function setQuestionSheetOpen(isOpen) {
  state.questionSheetOpen = isOpen;

  if (!elements.questionSheet || !elements.questionSheetBackdrop) {
    return;
  }

  if (isOpen) {
    renderQuestionStatusViews();
  }

  elements.questionSheet.classList.toggle("is-hidden", !isOpen);
  elements.questionSheetBackdrop.classList.toggle("is-hidden", !isOpen);
  elements.questionSheet.setAttribute("aria-hidden", isOpen ? "false" : "true");
  elements.body.classList.toggle("is-sheet-open", isOpen);
}

function renderMode() {
  const examMode = isExamMode();
  const isGlossary = !examMode && state.mode === "glossary";
  elements.quizView.classList.toggle("is-hidden", isGlossary);
  elements.glossaryView.classList.toggle("is-hidden", !isGlossary);
  elements.nextQuestionButton.classList.toggle("is-hidden", examMode || isGlossary);
  elements.panelToolbar?.classList.toggle("is-hidden", examMode);
  elements.quizProgress?.classList.toggle("is-hidden", examMode);
  elements.openQuestionSheetButton?.classList.toggle("is-hidden", examMode);
  elements.examBanner?.classList.toggle("is-hidden", !examMode);
  elements.body.classList.toggle("is-exam-mode", examMode);

  if (examMode) {
    setQuestionSheetOpen(false);
  }

  elements.segmentedButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });

  if (!isGlossary) {
    elements.modeBadge.textContent = examMode ? "실전 65문제" : getModeBadgeLabel();
  }
}

function renderAppPhase() {
  const hasStarted = state.started;
  elements.hero.classList.toggle("is-hidden", hasStarted);
  elements.mainContent.classList.toggle("is-hidden", !hasStarted);
  elements.appShell.classList.toggle("app-shell--started", hasStarted);
}

function startQuiz() {
  window.location.href = getQuestionRouteUrl(state.orderMode, null, "practice");
}

function clearExamTimer() {
  if (examTimerHandle) {
    window.clearInterval(examTimerHandle);
    examTimerHandle = null;
  }
}

function finishExam(reason = "completed") {
  if (!isExamMode() || state.exam.completed) {
    return;
  }

  if (state.currentQuestionId) {
    setExamResponse(state.currentQuestionId, state.response);
  }

  state.exam.active = false;
  state.exam.completed = true;
  state.exam.currentIndex = state.exam.questionIds.length;
  state.exam.endedAt = new Date().toISOString();
  state.exam.endedReason = reason;
  state.currentQuestionId = null;
  state.response = null;
  state.answerChecked = false;
  elements.feedbackCard.classList.add("is-hidden");
  saveExamState();
  clearExamTimer();
  renderMode();
  renderQuestion();

  if (reason === "time-up") {
    window.alert("시험 시간이 끝났습니다. 끝끝!");
  }
}

function startExamTimer() {
  if (!isExamMode() || state.exam.completed || !state.exam.expiresAt) {
    clearExamTimer();
    return;
  }

  clearExamTimer();
  renderExamBanner();
  examTimerHandle = window.setInterval(() => {
    const remaining = getExamTimeRemainingMs();
    renderExamBanner();
    if (remaining <= 0) {
      finishExam("time-up");
    }
  }, 1000);
}

function startFreshExamSession() {
  state.exam = createExamSession();
  state.mode = "random";
  state.currentQuestionId = null;
  state.response = null;
  state.answerChecked = false;
  saveExamState();
  renderMode();
  ensureQuestionForMode();
}

function selectQuestion(questionId) {
  if (!questionId) {
    state.currentQuestionId = null;
    state.response = null;
    state.answerChecked = false;
    syncQuestionIdToUrl(null);
    elements.feedbackCard.classList.add("is-hidden");
    renderQuestion();
    return;
  }

  const question = questionById.get(questionId);
  state.currentQuestionId = questionId;
  state.response = isExamMode()
    ? getExamStoredResponse(questionId) ?? createInitialResponse(question)
    : createInitialResponse(question);
  state.answerChecked = false;
  syncQuestionIdToUrl(questionId);
  elements.feedbackCard.classList.add("is-hidden");
  renderQuestion();
}

function ensureExamQuestion() {
  initializeExamSession();

  if (state.exam.completed) {
    state.currentQuestionId = null;
    state.response = null;
    state.answerChecked = false;
    clearExamTimer();
    renderQuestion();
    return;
  }

  if (getExamTimeRemainingMs() <= 0) {
    finishExam("time-up");
    return;
  }

  const questionId = getExamCurrentQuestionId();
  if (!questionId) {
    finishExam("completed");
    return;
  }

  startExamTimer();
  selectQuestion(questionId);
}

function ensureQuestionForMode() {
  if (isExamMode()) {
    ensureExamQuestion();
    return;
  }

  const pool = getQuestionPool();

  if (state.requestedQuestionId && questionById.has(state.requestedQuestionId)) {
    const requestedId = state.requestedQuestionId;
    state.requestedQuestionId = null;
    selectQuestion(requestedId);
    return;
  }

  if (!pool.length) {
    state.currentQuestionId = null;
    state.response = null;
    state.answerChecked = false;
    elements.feedbackCard.classList.add("is-hidden");
    renderQuestion();
    return;
  }

  if (!pool.includes(state.currentQuestionId)) {
    selectQuestion(getNextQuestionId(pool));
    return;
  }

  renderQuestion();
}

function advanceExamQuestion() {
  const question = getCurrentQuestion();

  if (question) {
    setExamResponse(question.id, state.response);
  }

  const lastIndex = state.exam.questionIds.length - 1;
  if (state.exam.currentIndex >= lastIndex) {
    finishExam("completed");
    return;
  }

  state.exam.currentIndex += 1;
  saveExamState();
  selectQuestion(getExamCurrentQuestionId());
}

function goToNextQuestion() {
  if (isExamMode()) {
    advanceExamQuestion();
    return;
  }

  const pool = getQuestionPool();
  selectQuestion(getNextQuestionId(pool));
}

function isResponseComplete(question, response) {
  if (!question) {
    return false;
  }

  if (question.type === "single-choice") {
    return Boolean(response);
  }

  if (question.type === "multi-select") {
    return Array.isArray(response) && response.length === question.requiredSelections;
  }

  if (question.type === "matching") {
    return question.rows.every((row) => Boolean(response?.[row.id]));
  }

  if (question.type === "ordering") {
    return Array.isArray(response) && response.length === question.sequenceItems.length;
  }

  return false;
}

function isAnswerCorrect(question, response) {
  if (!question) {
    return false;
  }

  if (question.type === "single-choice") {
    return response === question.answerKey;
  }

  if (question.type === "multi-select") {
    const selectedKeys = [...response].sort();
    const answerKeys = [...question.answerKeys].sort();
    return (
      selectedKeys.length === answerKeys.length &&
      selectedKeys.every((key, index) => key === answerKeys[index])
    );
  }

  if (question.type === "matching") {
    return question.rows.every((row) => response?.[row.id] === row.answer);
  }

  if (question.type === "ordering") {
    return response.every((item, index) => item.text === question.sequenceItems[index]);
  }

  return false;
}

function getQuestionSubtitle(question) {
  if (!question) {
    return `원본 ${appData.source.totalQuestions}문항 전체를 유형별로 제공합니다.`;
  }

  if (isExamMode()) {
    return `${getQuestionDomainLabel(question)} · 실전 65문제 모의시험 · ${getQuestionTypeLabel(question)} · 정답과 해설은 종료 후에만 공개됩니다.`;
  }

  const prefix =
    state.mode === "wrong"
      ? "오답 노트에 저장된 문제입니다."
      : `원본 ${appData.source.totalQuestions}문항 전체를 유형별로 제공합니다.`;

  return `${getQuestionDomainLabel(question)} · ${prefix} · ${getQuestionTypeLabel(question)} · ${getOrderModeDescription()}`;
}

function renderQuestionDomainBadge(question) {
  if (!elements.domainBadge) {
    return;
  }

  if (!question) {
    elements.domainBadge.classList.add("is-hidden");
    elements.domainBadge.textContent = "도메인";
    elements.domainBadge.removeAttribute("title");
    return;
  }

  elements.domainBadge.textContent = getQuestionDomainBadgeText(question);
  elements.domainBadge.setAttribute("title", getQuestionDomainLabel(question));
  elements.domainBadge.classList.remove("is-hidden");
}

function buildChoiceOptionCard(question, option, inputType) {
  const isMultiSelect = inputType === "checkbox";
  const isSelected = isMultiSelect
    ? state.response.includes(option.key)
    : state.response === option.key;
  const isCorrectOption =
    state.answerChecked &&
    (question.type === "single-choice"
      ? question.answerKey === option.key
      : question.answerKeys.includes(option.key));
  const isWrongOption =
    state.answerChecked &&
    isSelected &&
    (question.type === "single-choice"
      ? question.answerKey !== option.key
      : !question.answerKeys.includes(option.key));
  const primaryText = getOptionPrimaryTextFromOption(option);
  const secondaryText = getOptionSecondaryTextFromOption(option);

  return `
    <label
      class="option-card ${isSelected ? "is-selected" : ""} ${isCorrectOption ? "is-correct" : ""} ${isWrongOption ? "is-wrong" : ""}"
      data-option-key="${escapeHtml(option.key)}"
    >
      <input
        type="${inputType}"
        name="answer"
        value="${escapeHtml(option.key)}"
        ${isSelected ? "checked" : ""}
        ${state.answerChecked ? "disabled" : ""}
      />
      <span class="option-card__inner">
        <span class="option-card__key">${escapeHtml(option.key)}</span>
        <span class="option-card__body">
          <span class="option-card__text">${escapeHtml(primaryText)}</span>
          ${
            secondaryText
              ? `<span class="option-card__subtext">${escapeHtml(secondaryText)}</span>`
              : ""
          }
        </span>
      </span>
    </label>
  `;
}

function buildSingleChoiceOptionsMarkup(question) {
  return `
    <div class="response-helper">${escapeHtml(getQuestionTypeHelper(question))}</div>
    ${question.options
      .map((option) => buildChoiceOptionCard(question, option, "radio"))
      .join("")}
  `;
}

function buildMultiSelectOptionsMarkup(question) {
  return `
    <div class="response-helper">${escapeHtml(getQuestionTypeHelper(question))}</div>
    ${question.options
      .map((option) => buildChoiceOptionCard(question, option, "checkbox"))
      .join("")}
  `;
}

function buildMatchingMarkup(question) {
  return `
    <div class="response-helper">${escapeHtml(getQuestionTypeHelper(question))}</div>
    <div class="matching-grid">
      ${question.rows
        .map((row) => {
          const selectedValue = state.response?.[row.id] || "";
          const isCorrectRow = state.answerChecked && selectedValue === row.answer;
          const isWrongRow = state.answerChecked && selectedValue && selectedValue !== row.answer;

          return `
            <article class="matching-row ${isCorrectRow ? "is-correct" : ""} ${isWrongRow ? "is-wrong" : ""}">
              <p class="matching-row__prompt">${escapeHtml(row.prompt)}</p>
              <label class="matching-row__select">
                <span>선택</span>
                <select data-row-id="${escapeHtml(row.id)}" ${state.answerChecked ? "disabled" : ""}>
                  <option value="">항목 선택</option>
                  ${question.choicePool
                    .map(
                      (choice) => `
                        <option value="${escapeHtml(choice)}" ${selectedValue === choice ? "selected" : ""}>
                          ${escapeHtml(choice)}
                        </option>
                      `,
                    )
                    .join("")}
                </select>
              </label>
              ${
                state.answerChecked && selectedValue !== row.answer
                  ? `<p class="matching-row__answer">정답: ${escapeHtml(row.answer)}</p>`
                  : ""
              }
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function buildOrderingMarkup(question) {
  return `
    <div class="response-helper">${escapeHtml(getQuestionTypeHelper(question))}</div>
    <div class="ordering-list">
      ${state.response
        .map((item, index) => {
          const correctItem = question.sequenceItems[index];
          const isCorrectPosition = state.answerChecked && item.text === correctItem;
          const isWrongPosition = state.answerChecked && item.text !== correctItem;

          return `
            <article class="ordering-item ${isCorrectPosition ? "is-correct" : ""} ${isWrongPosition ? "is-wrong" : ""}">
              <span class="ordering-item__order">${index + 1}</span>
              <div class="ordering-item__body">
                <p class="ordering-item__text">${escapeHtml(item.text)}</p>
                ${
                  state.answerChecked && item.text !== correctItem
                    ? `<p class="ordering-item__answer">이 위치 정답: ${escapeHtml(correctItem)}</p>`
                    : ""
                }
              </div>
              <div class="ordering-item__controls">
                <button
                  class="order-button"
                  type="button"
                  data-order-action="up"
                  data-order-index="${index}"
                  ${index === 0 || state.answerChecked ? "disabled" : ""}
                >
                  위
                </button>
                <button
                  class="order-button"
                  type="button"
                  data-order-action="down"
                  data-order-index="${index}"
                  ${index === state.response.length - 1 || state.answerChecked ? "disabled" : ""}
                >
                  아래
                </button>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderOptionsMarkup(question) {
  if (question.type === "single-choice") {
    return buildSingleChoiceOptionsMarkup(question);
  }

  if (question.type === "multi-select") {
    return buildMultiSelectOptionsMarkup(question);
  }

  if (question.type === "matching") {
    return buildMatchingMarkup(question);
  }

  if (question.type === "ordering") {
    return buildOrderingMarkup(question);
  }

  return "";
}

function renderQuestion() {
  const question = getCurrentQuestion();

  if (isExamMode()) {
    renderExamBanner();
    renderExamResultCard();
    elements.feedbackCard.classList.add("is-hidden");
    elements.wrongNoteSummary.classList.add("is-hidden");
    elements.nextQuestionButton.classList.add("is-hidden");

    if (state.exam.completed) {
      renderQuestionDomainBadge(null);
      elements.questionCard.classList.add("is-hidden");
      elements.optionsForm.classList.add("is-hidden");
      elements.actionRow.classList.add("is-hidden");
      return;
    }

    elements.questionCard.classList.remove("is-hidden");
    elements.optionsForm.classList.remove("is-hidden");
    elements.actionRow.classList.remove("is-hidden");
    elements.examResultCard.classList.add("is-hidden");

    if (!question) {
      renderQuestionDomainBadge(null);
      elements.questionId.textContent = "시험 준비 중";
      elements.questionTitle.textContent = "모의시험을 준비하는 중입니다.";
      elements.questionSubtitle.textContent =
        "잠시만 기다리면 첫 문항을 바로 시작합니다.";
      elements.questionPrompt.textContent = "";
      elements.questionPromptSecondary.textContent = "";
      elements.questionPromptSecondary.classList.add("is-hidden");
      elements.optionsForm.innerHTML = "";
      elements.checkAnswerButton.textContent = "다음 문제";
      elements.checkAnswerButton.disabled = true;
      return;
    }

    const currentNumber = Math.min(state.exam.currentIndex + 1, getExamTotalQuestions());
    const isLastQuestion = state.exam.currentIndex === state.exam.questionIds.length - 1;

    renderQuestionDomainBadge(question);
    elements.questionId.textContent = `${currentNumber} / ${getExamTotalQuestions()} · Q ${question.sourceNumber}`;
    elements.questionTitle.textContent = question.title;
    elements.questionSubtitle.textContent = getQuestionSubtitle(question);
    elements.questionPrompt.textContent = question.promptEn || question.promptKo;
    elements.questionPromptSecondary.textContent =
      question.promptEn && question.promptKo ? question.promptKo : "";
    elements.questionPromptSecondary.classList.toggle(
      "is-hidden",
      !(question.promptEn && question.promptKo),
    );
    elements.optionsForm.innerHTML = renderOptionsMarkup(question);
    elements.checkAnswerButton.textContent = isLastQuestion ? "시험 제출" : "다음 문제";
    elements.checkAnswerButton.disabled = false;
    return;
  }

  const pool = getQuestionPool();
  elements.questionCard.classList.remove("is-hidden");
  elements.optionsForm.classList.remove("is-hidden");
  elements.actionRow.classList.remove("is-hidden");
  elements.examResultCard.classList.add("is-hidden");

  if (!question) {
    renderQuestionDomainBadge(null);
    elements.questionId.textContent = state.mode === "wrong" ? "오답 없음" : "Q -";
    const completedCount = getCompletedIds().length;
    const solvedAll = state.mode === "random" && completedCount === questions.length;

    elements.questionTitle.textContent = solvedAll
      ? "모든 문제를 한 번씩 맞췄습니다."
      : "표시할 문제가 없습니다.";
    elements.questionSubtitle.textContent =
      state.mode === "wrong"
        ? "오답 노트에 문제를 하나 이상 쌓으면 여기서 다시 풀 수 있습니다."
        : solvedAll
          ? "메인 화면의 '처음부터 다시 풀기'로 기록을 초기화할 수 있습니다."
          : `원본 ${appData.source.totalQuestions}문항 전체를 유형별로 제공합니다.`;
    elements.questionPrompt.textContent =
      state.mode === "wrong"
        ? "문제를 틀리면 이곳에 자동으로 저장됩니다."
        : solvedAll
          ? `현재 ${completedCount}문제를 모두 완료했습니다.`
          : "고정된 '다음 문제' 버튼으로 계속 진행할 수 있습니다.";
    elements.questionPromptSecondary.textContent = "";
    elements.optionsForm.innerHTML = solvedAll
      ? `
        <div class="response-helper">
          새로 한 바퀴 다시 풀려면 아래 버튼으로 기록을 초기화하세요.
        </div>
        <button class="secondary-button" data-reset-progress="true" type="button">
          처음부터 다시 풀기
        </button>
      `
      : "";
    elements.checkAnswerButton.textContent = "정답 확인";
    elements.checkAnswerButton.disabled = true;
    elements.nextQuestionButton.disabled = true;
    elements.nextQuestionButton.classList.add("is-hidden");
    elements.feedbackCard.classList.add("is-hidden");
    renderQuizProgress();
    renderWrongNote();
    renderQuestionStatusViews();
    return;
  }

  renderQuestionDomainBadge(question);
  elements.questionId.textContent = `Q ${question.sourceNumber}`;
  elements.questionTitle.textContent = question.title;
  elements.questionSubtitle.textContent = getQuestionSubtitle(question);
  elements.questionPrompt.textContent = question.promptEn || question.promptKo;
  elements.questionPromptSecondary.textContent =
    question.promptEn && question.promptKo ? question.promptKo : "";
  elements.questionPromptSecondary.classList.toggle(
    "is-hidden",
    !(question.promptEn && question.promptKo),
  );
  elements.optionsForm.innerHTML = renderOptionsMarkup(question);
  elements.checkAnswerButton.textContent = state.answerChecked ? "다음" : "정답 확인";
  elements.checkAnswerButton.disabled = state.answerChecked ? !pool.length : false;
  elements.nextQuestionButton.disabled = !state.answerChecked || !pool.length;
  elements.nextQuestionButton.classList.toggle("is-hidden", !state.answerChecked);
  renderQuizProgress();
  renderWrongNote();
  renderQuestionStatusViews();
}

function parseWrongExplanations(question) {
  return (question.wrongExplanations || []).map((line) => {
    const clean = stripBullet(line);
    const arrowMatch = clean.match(/^([A-E](?:\s*,\s*[A-E])*)\s*->\s*(.+)$/);

    if (arrowMatch) {
      const body = arrowMatch[2].trim();
      const bodyMatch = body.match(/^([^:]+):\s*(.*)$/);
      return {
        keys: arrowMatch[1].split(/\s*,\s*/),
        label: bodyMatch ? bodyMatch[1].trim() : "",
        description: bodyMatch ? bodyMatch[2].trim() : body,
        raw: clean,
      };
    }

    const colonKeyMatch = clean.match(/^([A-E](?:\s*,\s*[A-E])*)\s*:\s*(.*)$/);
    if (colonKeyMatch) {
      return {
        keys: colonKeyMatch[1].split(/\s*,\s*/),
        label: "",
        description: colonKeyMatch[2].trim(),
        raw: clean,
      };
    }

    const namedMatch = clean.match(/^([^:]+):\s*(.*)$/);
    if (namedMatch) {
      return {
        keys: [],
        label: namedMatch[1].trim(),
        description: namedMatch[2].trim(),
        raw: clean,
      };
    }

    return {
      keys: [],
      label: "",
      description: clean,
      raw: clean,
    };
  });
}

function findWrongDetailForSelection(question, optionKey, optionText = "") {
  const wrongDetails = parseWrongExplanations(question);
  const secondaryText = getOptionSecondaryText(question, optionKey);
  return (
    wrongDetails.find((item) => item.keys.includes(optionKey)) ||
    wrongDetails.find((item) => normalizeText(item.label) === normalizeText(optionText)) ||
    wrongDetails.find((item) => normalizeText(item.label) === normalizeText(secondaryText)) ||
    null
  );
}

function getCorrectResponseLines(question) {
  if (question.type === "single-choice") {
    return [formatOptionLine(question, question.answerKey)];
  }

  if (question.type === "multi-select") {
    return question.answerKeys.map((key) => formatOptionLine(question, key));
  }

  if (question.type === "matching") {
    return question.rows.map((row) => `${row.prompt} -> ${row.answer}`);
  }

  if (question.type === "ordering") {
    return question.sequenceItems.map((item, index) => `${index + 1}. ${item}`);
  }

  return [];
}

function getSelectedResponseLines(question, response) {
  if (question.type === "single-choice") {
    return response ? [formatOptionLine(question, response)] : ["선택 안 함"];
  }

  if (question.type === "multi-select") {
    return response.length
      ? response.map((key) => formatOptionLine(question, key))
      : ["선택 안 함"];
  }

  if (question.type === "matching") {
    return question.rows.map((row) => `${row.prompt} -> ${response?.[row.id] || "선택 안 함"}`);
  }

  if (question.type === "ordering") {
    return response.map((item, index) => `${index + 1}. ${item.text}`);
  }

  return [];
}

function getAnswerReason(question) {
  if (question.explanation.length) {
    return stripBullet(question.explanation[0]);
  }

  const firstAnswerLine = getCorrectResponseLines(question)[0];
  return firstAnswerLine || "문제 요구사항과 가장 직접적으로 맞는 답입니다.";
}

function parseKeyedExplanationLines(lines = []) {
  return lines
    .map((line) => stripBullet(line))
    .map((clean) => {
      const match =
        clean.match(/^([A-E](?:\s*,\s*[A-E])*)\s*[:：]\s*(.*)$/) ||
        clean.match(/^([A-E](?:\s*,\s*[A-E])*)\s*->\s*(.*)$/);

      if (!match) {
        return null;
      }

      return {
        keys: match[1].split(/\s*,\s*/),
        description: match[2].trim(),
        raw: clean,
      };
    })
    .filter(Boolean);
}

function findExplanationDetailForSelection(question, optionKey) {
  return parseKeyedExplanationLines(question.explanation).find((item) =>
    item.keys.includes(optionKey),
  );
}

function getChoiceOptionReviewLines(question) {
  if (!["single-choice", "multi-select"].includes(question.type)) {
    return [];
  }

  return question.options.map((option) => {
    const isCorrectOption =
      question.type === "single-choice"
        ? option.key === question.answerKey
        : question.answerKeys.includes(option.key);
    const wrongDetail = findWrongDetailForSelection(
      question,
      option.key,
      getOptionText(question, option.key),
    );
    const explanationDetail = findExplanationDetailForSelection(question, option.key);
    const summary = isCorrectOption
      ? explanationDetail?.description || getAnswerReason(question)
      : wrongDetail?.description ||
        explanationDetail?.description ||
        "문제 요구사항과 직접 맞지 않는 보기입니다.";

    return `${formatOptionLine(question, option.key)}: ${summary}`;
  });
}

function getWrongReviewLines(question, response) {
  if (question.type === "single-choice") {
    const selectedOptionText = getOptionText(question, response);
    const matched = findWrongDetailForSelection(question, response, selectedOptionText);

    if (matched) {
      return [`${selectedOptionText} 선택 시 주의: ${matched.description || matched.raw}`];
    }

    if (question.explanation.length > 1) {
      return question.explanation.slice(1).map(stripBullet);
    }

    return [`이 문항의 핵심은 ${getOptionText(question, question.answerKey)}입니다.`];
  }

  if (question.type === "multi-select") {
    const lines = [];
    const wrongSelections = response.filter((key) => !question.answerKeys.includes(key));
    const missingSelections = question.answerKeys.filter((key) => !response.includes(key));

    if (wrongSelections.length) {
      lines.push(
        `불필요하게 선택한 보기: ${wrongSelections
          .map((key) => formatOptionLine(question, key))
          .join(", ")}`,
      );
    }

    if (missingSelections.length) {
      lines.push(
        `빠진 정답: ${missingSelections
          .map((key) => formatOptionLine(question, key))
          .join(", ")}`,
      );
    }

    wrongSelections.forEach((key) => {
      const matched = findWrongDetailForSelection(question, key, getOptionText(question, key));
      if (matched?.description) {
        lines.push(`${getOptionText(question, key)}: ${matched.description}`);
      }
    });

    if (lines.length) {
      return lines;
    }

    return question.explanation.map(stripBullet);
  }

  if (question.type === "matching") {
    return question.rows
      .filter((row) => response?.[row.id] !== row.answer)
      .map(
        (row) =>
          `${row.prompt}: 선택 ${response?.[row.id] || "선택 안 함"} / 정답 ${row.answer}`,
      );
  }

  if (question.type === "ordering") {
    return response
      .map((item, index) => {
        const correctItem = question.sequenceItems[index];
        if (item.text === correctItem) {
          return "";
        }
        return `${index + 1}단계: 선택 ${item.text} / 정답 ${correctItem}`;
      })
      .filter(Boolean);
  }

  return [];
}

function getGlossaryLines(question) {
  if (question.glossary.length) {
    return question.glossary.map(stripBullet);
  }

  const fallbackTerm = getCorrectResponseLines(question)[0] || "핵심 개념";
  return [`${fallbackTerm}: ${getAnswerReason(question)}`];
}

function renderFeedback(isCorrect) {
  const question = getCurrentQuestion();
  const selectedLines = getSelectedResponseLines(question, state.response);
  const correctLines = getCorrectResponseLines(question);
  const wrongReviewLines = isCorrect ? [] : getWrongReviewLines(question, state.response);
  const optionReviewLines = getChoiceOptionReviewLines(question);
  const wrongSummaryLines = optionReviewLines.length
    ? []
    : parseWrongExplanations(question)
        .filter((item) => item.description)
        .map((item) => {
          const keyPrefix = item.keys.length ? `${item.keys.join(", ")}. ` : "";
          const labelPrefix = item.label ? `${item.label}: ` : "";
          return `${keyPrefix}${labelPrefix}${item.description}`;
        });
  const glossaryLines = getGlossaryLines(question);

  const feedbackHtml = `
    <div class="feedback-card__status ${isCorrect ? "is-correct" : "is-wrong"}">
      ${isCorrect ? "정답입니다" : "오답입니다"}
    </div>
    <h3 class="feedback-card__title">정답</h3>
    <ul class="feedback-list">
      ${correctLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
    </ul>
    <h3 class="feedback-card__title">정답 이유</h3>
    <p class="feedback-card__line">${escapeHtml(getAnswerReason(question))}</p>
    ${
      !isCorrect
        ? `
          <h3 class="feedback-card__title">내 선택</h3>
          <ul class="feedback-list">
            ${selectedLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
          </ul>
        `
        : ""
    }
    <h3 class="feedback-card__title">해설</h3>
    <ul class="feedback-list">
      ${question.explanation.map((line) => `<li>${escapeHtml(stripBullet(line))}</li>`).join("")}
    </ul>
    ${
      optionReviewLines.length
        ? `
          <h3 class="feedback-card__title">보기별 해설</h3>
          <ul class="feedback-list">
            ${optionReviewLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
          </ul>
        `
        : ""
    }
    ${
      isCorrect
        ? wrongSummaryLines.length
          ? `
            <h3 class="feedback-card__title">오답 포인트</h3>
            <ul class="feedback-list">
              ${wrongSummaryLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
            </ul>
          `
          : ""
        : `
          <h3 class="feedback-card__title">오답 풀이</h3>
          <ul class="feedback-list">
            ${wrongReviewLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
          </ul>
        `
    }
    <h3 class="feedback-card__title">용어 정리</h3>
    <ul class="feedback-list">
      ${glossaryLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
    </ul>
  `;

  elements.feedbackCard.innerHTML = feedbackHtml;
  elements.feedbackCard.classList.remove("is-hidden");
}

function serializeResponseSummary(question, response) {
  return getSelectedResponseLines(question, response).join(" / ");
}

function updateWrongBook(question, isCorrect) {
  const existing = state.session.wrongBook[question.id] || {
    wrongCount: 0,
    correctCount: 0,
    lastSelectedKey: "",
    lastResponseSummary: "",
    lastResult: "",
    updatedAt: "",
  };

  if (isCorrect) {
    const completedAt = new Date().toISOString();
    state.session.completedBook[question.id] = {
      completedAt,
      lastResponseSummary: serializeResponseSummary(question, state.response),
    };
    delete state.session.wrongBook[question.id];
    return;
  }

  existing.wrongCount += 1;
  existing.lastSelectedKey = question.type === "single-choice" ? state.response : "";
  existing.lastResponseSummary = serializeResponseSummary(question, state.response);
  existing.lastResult = "wrong";
  existing.updatedAt = new Date().toISOString();
  state.session.wrongBook[question.id] = existing;
}

function checkAnswer() {
  const question = getCurrentQuestion();
  if (!question || state.answerChecked || !isResponseComplete(question, state.response)) {
    return;
  }

  state.answerChecked = true;
  const isCorrect = isAnswerCorrect(question, state.response);
  state.session.totals.solved += 1;
  if (isCorrect) {
    state.session.totals.correct += 1;
  }

  updateWrongBook(question, isCorrect);
  saveState();
  buildHeroStats();
  renderQuestion();
  renderFeedback(isCorrect);
}

function handlePrimaryAction() {
  const question = getCurrentQuestion();
  if (!question) {
    return;
  }

  if (isExamMode()) {
    if (!isResponseComplete(question, state.response)) {
      window.alert("문제를 풀지 않았습니다.");
    }

    goToNextQuestion();
    return;
  }

  if (state.answerChecked) {
    goToNextQuestion();
    return;
  }

  if (!isResponseComplete(question, state.response)) {
    window.alert("문제를 풀지 않았습니다.");
    goToNextQuestion();
    return;
  }

  checkAnswer();
}

function renderWrongNote() {
  if (isExamMode()) {
    elements.wrongNoteSummary.classList.add("is-hidden");
    return;
  }

  const wrongIds = getWrongIds();
  const currentQuestion = getCurrentQuestion();
  const isInWrongBook = currentQuestion && state.session.wrongBook[currentQuestion.id];

  elements.wrongNoteSummary.classList.toggle("is-hidden", state.mode !== "wrong");
  elements.removeCurrentWrongButton.classList.toggle("is-hidden", !isInWrongBook);
  elements.clearWrongButton.disabled = !wrongIds.length;

  if (!wrongIds.length) {
    elements.wrongNoteList.innerHTML = `
      <div class="empty-state">
        아직 저장된 오답이 없습니다.<br />
        문제를 틀리면 이곳에 자동으로 쌓입니다.
      </div>
    `;
    return;
  }

  const entries = wrongIds
    .map((questionId) => {
      const question = questionById.get(questionId);
      const record = state.session.wrongBook[questionId];
      return { question, record };
    })
    .sort((left, right) => new Date(right.record.updatedAt) - new Date(left.record.updatedAt));

  elements.wrongNoteList.innerHTML = entries
    .map(({ question, record }) => {
      const excerpt = (question.promptEn || question.promptKo).split("\n")[0];
      const lastResultLabel = record.lastResult === "correct" ? "최근 정답" : "최근 오답";
      const responseSummary = record.lastResponseSummary
        ? `<p class="wrong-item__answer">${escapeHtml(record.lastResponseSummary)}</p>`
        : "";

      return `
        <article class="wrong-item">
          <div class="wrong-item__top">
            <p class="wrong-item__title">Q ${question.sourceNumber}</p>
            <span class="pill pill--muted">${escapeHtml(lastResultLabel)}</span>
          </div>
          <div class="wrong-item__meta">
            틀린 횟수 ${record.wrongCount}회 · 다시 맞춘 횟수 ${record.correctCount}회
          </div>
          <p class="wrong-item__excerpt">${escapeHtml(excerpt)}</p>
          ${responseSummary}
          <button class="wrong-item__button" type="button" data-jump-question="${question.id}">
            이 문제 다시 보기
          </button>
        </article>
      `;
    })
    .join("");
}

function buildGlossaryIndex() {
  const glossaryMap = new Map();

  questions.forEach((question) => {
    const lines = getGlossaryLines(question);

    lines.forEach((line) => {
      const clean = stripBullet(line);
      const termMatch = clean.match(/^([^:]+):\s*(.*)$/);
      const term = termMatch ? termMatch[1].trim() : clean;
      const description = termMatch ? termMatch[2].trim() : getAnswerReason(question);
      const signature = normalizeText(term);

      if (!signature) {
        return;
      }

      if (!glossaryMap.has(signature)) {
        glossaryMap.set(signature, {
          term,
          description,
          relatedQuestions: [question.id],
        });
        return;
      }

      const existing = glossaryMap.get(signature);
      if (!existing.description && description) {
        existing.description = description;
      }
      if (!existing.relatedQuestions.includes(question.id)) {
        existing.relatedQuestions.push(question.id);
      }
    });
  });

  return [...glossaryMap.values()].sort((left, right) =>
    left.term.localeCompare(right.term, "ko"),
  );
}

const glossaryIndex = buildGlossaryIndex();

function renderGlossary() {
  const keyword = normalizeText(elements.glossarySearch.value || "");
  const list = glossaryIndex.filter((entry) => {
    if (!keyword) {
      return true;
    }
    return (
      normalizeText(entry.term).includes(keyword) ||
      normalizeText(entry.description).includes(keyword)
    );
  });

  if (!list.length) {
    elements.glossaryGrid.innerHTML = `
      <div class="empty-state">
        검색 결과가 없습니다.<br />
        다른 키워드로 다시 찾아보세요.
      </div>
    `;
    return;
  }

  elements.glossaryGrid.innerHTML = list
    .map((entry) => {
      const questionLinks = entry.relatedQuestions.slice(0, 5);
      return `
        <article class="glossary-card">
          <h3 class="glossary-card__term">${escapeHtml(entry.term)}</h3>
          <p class="glossary-card__desc">${escapeHtml(entry.description)}</p>
          <div class="glossary-card__links">
            ${questionLinks
              .map(
                (questionId) => `
                  <button class="glossary-card__link" type="button" data-jump-question="${questionId}">
                    Q ${questionById.get(questionId)?.sourceNumber || questionId}
                  </button>
                `,
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function setMode(mode) {
  if (isExamMode()) {
    state.mode = "random";
    renderMode();
    ensureQuestionForMode();
    return;
  }

  state.mode = mode;
  renderMode();

  if (mode === "glossary") {
    renderGlossary();
    return;
  }

  ensureQuestionForMode();
}

function clearWrongBook() {
  if (!getWrongIds().length) {
    return;
  }

  const confirmed = window.confirm("정말 초기화 하시겠습니까?");
  if (!confirmed) {
    return;
  }

  state.session.wrongBook = {};
  saveState();
  buildHeroStats();
  if (state.mode === "wrong") {
    ensureQuestionForMode();
  }
  renderWrongNote();
  renderQuestionStatusViews();
}

function resetProgress() {
  const confirmed = window.confirm(
    "정말 처음부터 다시 풀겠습니까?\n정답 기록, 오답 노트, 누적 통계가 모두 초기화됩니다.",
  );
  if (!confirmed) {
    return;
  }

  state.session = {
    totals: { solved: 0, correct: 0 },
    wrongBook: {},
    completedBook: {},
  };
  state.mode = "random";
  state.requestedQuestionId = null;
  state.currentQuestionId = null;
  state.response = null;
  state.answerChecked = false;
  setQuestionSheetOpen(false);
  elements.feedbackCard.classList.add("is-hidden");
  saveState();
  buildHeroStats();
  renderMode();
  renderGlossary();
  selectQuestion(getNextQuestionId(getQuestionPool(), null));
}

function removeCurrentQuestionFromWrongBook() {
  const question = getCurrentQuestion();
  if (!question) {
    return;
  }

  delete state.session.wrongBook[question.id];
  saveState();
  buildHeroStats();
  if (state.mode === "wrong") {
    ensureQuestionForMode();
  }
  renderWrongNote();
  renderQuestionStatusViews();
}

function updateResponseFromRadio(value) {
  state.response = value;
  if (isExamMode() && state.currentQuestionId) {
    setExamResponse(state.currentQuestionId, state.response);
  }
}

function updateResponseFromCheckbox(question, value, checked) {
  const selectedKeys = new Set(state.response);

  if (checked) {
    if (selectedKeys.size >= question.requiredSelections) {
      window.alert(`정답은 ${question.requiredSelections}개까지 선택할 수 있습니다.`);
      return false;
    }
    selectedKeys.add(value);
  } else {
    selectedKeys.delete(value);
  }

  state.response = question.options
    .map((option) => option.key)
    .filter((key) => selectedKeys.has(key));
  if (isExamMode() && state.currentQuestionId) {
    setExamResponse(state.currentQuestionId, state.response);
  }
  return true;
}

function updateResponseFromSelect(question, rowId, value) {
  if (!question.allowRepeat && value) {
    const duplicateRow = question.rows.find(
      (row) => row.id !== rowId && state.response?.[row.id] === value,
    );

    if (duplicateRow) {
      window.alert("같은 항목은 한 번만 선택할 수 있습니다.");
      return false;
    }
  }

  state.response = {
    ...state.response,
    [rowId]: value,
  };
  if (isExamMode() && state.currentQuestionId) {
    setExamResponse(state.currentQuestionId, state.response);
  }
  return true;
}

function updateOrdering(question, action, index) {
  const targetIndex = action === "up" ? index - 1 : index + 1;
  if (targetIndex < 0 || targetIndex >= question.sequenceItems.length) {
    return;
  }

  state.response = moveItem(state.response, index, targetIndex);
  if (isExamMode() && state.currentQuestionId) {
    setExamResponse(state.currentQuestionId, state.response);
  }
}

function attachEvents() {
  elements.resetProgressButton?.addEventListener("click", resetProgress);
  elements.openQuestionSheetButton?.addEventListener("click", () => setQuestionSheetOpen(true));
  elements.closeQuestionSheetButton?.addEventListener("click", () => setQuestionSheetOpen(false));
  elements.questionSheetBackdrop?.addEventListener("click", () => setQuestionSheetOpen(false));

  elements.segmentedButtons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  elements.optionsForm.addEventListener("change", (event) => {
    const question = getCurrentQuestion();
    if (!question || state.answerChecked) {
      return;
    }

    const target = event.target;

    if (target instanceof HTMLInputElement) {
      if (question.type === "single-choice" && target.type === "radio") {
        updateResponseFromRadio(target.value);
      }

      if (question.type === "multi-select" && target.type === "checkbox") {
        const changed = updateResponseFromCheckbox(question, target.value, target.checked);
        if (!changed) {
          renderQuestion();
          return;
        }
      }

      renderQuestion();
      return;
    }

    if (target instanceof HTMLSelectElement && question.type === "matching") {
      const changed = updateResponseFromSelect(question, target.dataset.rowId, target.value);
      if (!changed) {
        renderQuestion();
        return;
      }

      renderQuestion();
    }
  });

  elements.optionsForm.addEventListener("click", (event) => {
    const question = getCurrentQuestion();
    if (!question || question.type !== "ordering" || state.answerChecked) {
      return;
    }

    const button = event.target instanceof HTMLElement ? event.target.closest("[data-order-action]") : null;
    if (!(button instanceof HTMLButtonElement)) {
      return;
    }

    const index = Number(button.dataset.orderIndex);
    updateOrdering(question, button.dataset.orderAction, index);
    renderQuestion();
  });

  elements.checkAnswerButton.addEventListener("click", handlePrimaryAction);

  elements.nextQuestionButton.addEventListener("click", goToNextQuestion);

  elements.glossarySearch.addEventListener("input", renderGlossary);
  elements.clearWrongButton.addEventListener("click", clearWrongBook);
  elements.removeCurrentWrongButton.addEventListener("click", removeCurrentQuestionFromWrongBook);

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const startExamButton = target.closest("[data-start-exam]");
    if (startExamButton) {
      startFreshExamSession();
      return;
    }

    const resetButton = target.closest("[data-reset-progress]");
    if (resetButton) {
      resetProgress();
      return;
    }

    const jumpQuestionButton = target.closest("[data-jump-question]");
    if (!(jumpQuestionButton instanceof HTMLElement)) {
      return;
    }

    const questionId = Number(jumpQuestionButton.dataset.jumpQuestion);
    if (!questionById.has(questionId)) {
      return;
    }

    if (isExamMode()) {
      return;
    }

    if (jumpQuestionButton.dataset.closeSheet === "true") {
      setQuestionSheetOpen(false);
    }

    state.mode = getWrongIds().includes(questionId) ? "wrong" : "random";
    renderMode();
    selectQuestion(questionId);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.questionSheetOpen) {
      setQuestionSheetOpen(false);
    }
  });
}

function init() {
  if (!requireDailyPassword()) {
    return;
  }

  if (isExamMode()) {
    initializeExamSession();
  }

  buildHeroStats();
  attachEvents();
  renderAppPhase();
  renderMode();
  renderGlossary();
  ensureQuestionForMode();
}

init();
