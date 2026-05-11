const QUIZ_STORAGE_KEY = "aws-ai-practitioner-quiz-state-v1";
const DAILY_AUTH_STORAGE_KEY = "aws-ai-practitioner-daily-auth-v1";
const SEOUL_TIMEZONE = "Asia/Seoul";
const PASSWORD_PREFIX = "260314";
const PASSWORD_BASE_DATE = {
  year: 2026,
  month: 3,
  day: 14,
};

const appData = window.AWS_AI_QUIZ_DATA || {
  supportedCount: 0,
  source: { totalQuestions: 0 },
  questions: [],
};

const questions = appData.questions || [];
const questionById = new Map(questions.map((question) => [question.id, question]));

function isQuestionRoute() {
  const normalizedPath = window.location.pathname.replace(/index\.html$/, "");
  return /\/question\/?$/.test(normalizedPath);
}

function getQuestionRouteUrl() {
  const currentUrl = new URL(window.location.href);
  const normalizedPath = currentUrl.pathname.replace(/index\.html$/, "");

  if (/\/question\/?$/.test(normalizedPath)) {
    return currentUrl.toString();
  }

  currentUrl.pathname = normalizedPath.endsWith("/")
    ? `${normalizedPath}question/`
    : `${normalizedPath}/question/`;
  currentUrl.search = "";
  currentUrl.hash = "";
  return currentUrl.toString();
}

const elements = {
  appShell: document.querySelector(".app-shell"),
  hero: document.getElementById("hero"),
  heroStats: document.getElementById("hero-stats"),
  startButton: document.getElementById("start-button"),
  mainContent: document.getElementById("main-content"),
  segmentedButtons: document.querySelectorAll(".segmented__button"),
  quizView: document.getElementById("quiz-view"),
  glossaryView: document.getElementById("glossary-view"),
  modeBadge: document.getElementById("mode-badge"),
  questionId: document.getElementById("question-id"),
  questionTitle: document.getElementById("question-title"),
  questionSubtitle: document.getElementById("question-subtitle"),
  questionPrompt: document.getElementById("question-prompt"),
  questionPromptEnglish: document.getElementById("question-prompt-english"),
  toggleEnglishButton: document.getElementById("toggle-english-button"),
  optionsForm: document.getElementById("options-form"),
  checkAnswerButton: document.getElementById("check-answer-button"),
  newRandomButton: document.getElementById("new-random-button"),
  nextQuestionButton: document.getElementById("next-question-button"),
  feedbackCard: document.getElementById("feedback-card"),
  wrongNoteSummary: document.getElementById("wrong-note-summary"),
  wrongNoteList: document.getElementById("wrong-note-list"),
  removeCurrentWrongButton: document.getElementById("remove-current-wrong-button"),
  clearWrongButton: document.getElementById("clear-wrong-button"),
  glossarySearch: document.getElementById("glossary-search"),
  glossaryGrid: document.getElementById("glossary-grid"),
};

const state = {
  mode: "random",
  currentQuestionId: null,
  selectedKey: "",
  answerChecked: false,
  englishVisible: false,
  started: isQuestionRoute(),
  session: loadState(),
};

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(QUIZ_STORAGE_KEY) || "{}");
    return {
      totals: {
        solved: Number(parsed?.totals?.solved || 0),
        correct: Number(parsed?.totals?.correct || 0),
      },
      wrongBook: parsed?.wrongBook && typeof parsed.wrongBook === "object" ? parsed.wrongBook : {},
    };
  } catch (error) {
    return {
      totals: { solved: 0, correct: 0 },
      wrongBook: {},
    };
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
    "기준일: 2026-03-14",
    "예시 기준: 2026-05-11 -> 26031459",
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

function stripBullet(line = "") {
  return line.replace(/^-+\s*/, "").trim();
}

function escapeHtml(value = "") {
  return value
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
    .filter((questionId) => questionById.has(questionId));
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

function getQuestionPool() {
  if (state.mode === "wrong") {
    return getWrongIds();
  }
  return questions.map((question) => question.id);
}

function getCurrentQuestion() {
  return questionById.get(state.currentQuestionId) || null;
}

function getOptionText(question, optionKey) {
  return question.options.find((option) => option.key === optionKey)?.text || "";
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

function renderMode() {
  const isGlossary = state.mode === "glossary";
  elements.quizView.classList.toggle("is-hidden", isGlossary);
  elements.glossaryView.classList.toggle("is-hidden", !isGlossary);

  elements.segmentedButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });

  if (!isGlossary) {
    elements.modeBadge.textContent = state.mode === "wrong" ? "오답 복습" : "랜덤";
  }
}

function renderAppPhase() {
  const hasStarted = state.started;
  elements.hero.classList.toggle("is-hidden", hasStarted);
  elements.mainContent.classList.toggle("is-hidden", !hasStarted);
  elements.appShell.classList.toggle("app-shell--started", hasStarted);
}

function startQuiz() {
  window.location.href = getQuestionRouteUrl();
}

function selectQuestion(questionId) {
  state.currentQuestionId = questionId;
  state.selectedKey = "";
  state.answerChecked = false;
  elements.feedbackCard.classList.add("is-hidden");
  elements.checkAnswerButton.disabled = true;
  renderQuestion();
}

function ensureQuestionForMode() {
  const pool = getQuestionPool();

  if (!pool.length) {
    state.currentQuestionId = null;
    state.selectedKey = "";
    state.answerChecked = false;
    renderQuestion();
    return;
  }

  if (!pool.includes(state.currentQuestionId)) {
    selectQuestion(pickRandom(pool));
    return;
  }

  renderQuestion();
}

function buildOptionCard(question, option) {
  return `
    <label class="option-card" data-option-key="${escapeHtml(option.key)}">
      <input
        type="radio"
        name="answer"
        value="${escapeHtml(option.key)}"
        ${state.selectedKey === option.key ? "checked" : ""}
      />
      <span class="option-card__inner">
        <span class="option-card__key">${escapeHtml(option.key)}</span>
        <span class="option-card__text">${escapeHtml(option.text)}</span>
      </span>
    </label>
  `;
}

function renderQuestion() {
  const question = getCurrentQuestion();

  if (!question) {
    elements.questionId.textContent = state.mode === "wrong" ? "오답 없음" : "Q -";
    elements.questionTitle.textContent = "표시할 문제가 없습니다.";
    elements.questionSubtitle.textContent =
      state.mode === "wrong"
        ? "오답 노트에 문제를 하나 이상 쌓으면 여기서 다시 풀 수 있습니다."
        : `원본 ${appData.source.totalQuestions}문항 중 단일 선택형 ${appData.supportedCount}문항만 추렸습니다.`;
    elements.questionPrompt.textContent =
      state.mode === "wrong"
        ? "랜덤 문제에서 틀린 문항이 생기면 자동으로 저장됩니다."
        : "랜덤 새로 뽑기를 눌러 문제를 시작하세요.";
    elements.questionPromptEnglish.textContent = "";
    elements.optionsForm.innerHTML = "";
    elements.checkAnswerButton.disabled = true;
    elements.toggleEnglishButton.disabled = true;
    elements.feedbackCard.classList.add("is-hidden");
    renderWrongNote();
    return;
  }

  elements.toggleEnglishButton.disabled = false;
  elements.questionId.textContent = `Q ${question.sourceNumber}`;
  elements.questionTitle.textContent = question.title;
  elements.questionSubtitle.textContent =
    state.mode === "wrong"
      ? "오답 노트에 저장된 문제입니다."
      : `원본 ${appData.source.totalQuestions}문항 중 단일 선택형 ${appData.supportedCount}문항만 제공합니다.`;
  elements.questionPrompt.textContent = question.promptKo;
  elements.questionPromptEnglish.textContent = question.promptEn || "";
  elements.questionPromptEnglish.classList.toggle("is-hidden", !state.englishVisible);
  elements.toggleEnglishButton.textContent = state.englishVisible ? "영문 숨기기" : "영문 보기";
  elements.optionsForm.innerHTML = question.options.map((option) => buildOptionCard(question, option)).join("");

  elements.optionsForm.querySelectorAll(".option-card").forEach((card) => {
    const key = card.dataset.optionKey;
    const input = card.querySelector("input");
    const isSelected = key === state.selectedKey;

    card.classList.toggle("is-selected", isSelected);
    if (state.answerChecked) {
      card.classList.toggle("is-correct", key === question.answerKey);
      card.classList.toggle(
        "is-wrong",
        key === state.selectedKey && state.selectedKey !== question.answerKey,
      );
      input.disabled = true;
    } else {
      card.classList.remove("is-correct", "is-wrong");
      input.disabled = false;
    }
  });

  elements.checkAnswerButton.disabled = !state.selectedKey || state.answerChecked;
  renderWrongNote();
}

function parseWrongExplanations(question) {
  return question.wrongExplanations.map((line) => {
    const clean = stripBullet(line);
    const keyMatch = clean.match(/^([A-E])\s*->\s*([^:]+)(?::\s*(.*))?$/);

    if (keyMatch) {
      return {
        key: keyMatch[1],
        label: keyMatch[2].trim(),
        description: (keyMatch[3] || "").trim(),
        raw: clean,
      };
    }

    const namedMatch = clean.match(/^([^:]+):\s*(.*)$/);
    if (namedMatch) {
      return {
        key: "",
        label: namedMatch[1].trim(),
        description: namedMatch[2].trim(),
        raw: clean,
      };
    }

    return {
      key: "",
      label: "",
      description: clean,
      raw: clean,
    };
  });
}

function getAnswerReason(question) {
  return stripBullet(question.explanation[0] || `${getOptionText(question, question.answerKey)}가 문제의 요구사항과 가장 직접적으로 맞습니다.`);
}

function getWrongReviewLines(question, selectedKey) {
  const selectedOptionText = getOptionText(question, selectedKey);
  const wrongDetails = parseWrongExplanations(question);
  const matched =
    wrongDetails.find((item) => item.key === selectedKey) ||
    wrongDetails.find((item) => normalizeText(item.label) === normalizeText(selectedOptionText));

  if (matched) {
    return [`${selectedOptionText} 선택 시 주의: ${matched.description || matched.raw}`];
  }

  if (question.explanation.length > 1) {
    return question.explanation.slice(1).map(stripBullet);
  }

  return [
    `이 문항의 핵심은 ${getOptionText(question, question.answerKey)}입니다.`,
    "선택한 보기보다 문제 요구사항과 더 직접적으로 맞는 답을 골라야 합니다.",
  ];
}

function getGlossaryLines(question) {
  if (question.glossary.length) {
    return question.glossary.map(stripBullet);
  }

  const fallbackTerm = getOptionText(question, question.answerKey);
  return [`${fallbackTerm}: ${getAnswerReason(question)}`];
}

function renderFeedback(isCorrect) {
  const question = getCurrentQuestion();
  const selectedText = getOptionText(question, state.selectedKey);
  const correctText = getOptionText(question, question.answerKey);
  const wrongReviewLines = isCorrect ? [] : getWrongReviewLines(question, state.selectedKey);
  const wrongSummaryLines = parseWrongExplanations(question)
    .filter((item) => item.description)
    .map((item) => `${item.key ? `${item.key}. ` : ""}${item.label}: ${item.description}`);

  const glossaryLines = getGlossaryLines(question);

  const feedbackHtml = `
    <div class="feedback-card__status ${isCorrect ? "is-correct" : "is-wrong"}">
      ${isCorrect ? "정답입니다" : "오답입니다"}
    </div>
    <h3 class="feedback-card__title">정답</h3>
    <p class="feedback-card__line">${escapeHtml(question.answerKey)}. ${escapeHtml(correctText)}</p>
    <h3 class="feedback-card__title">정답 이유</h3>
    <p class="feedback-card__line">${escapeHtml(getAnswerReason(question))}</p>
    <h3 class="feedback-card__title">해설</h3>
    <ul class="feedback-list">
      ${question.explanation.map((line) => `<li>${escapeHtml(stripBullet(line))}</li>`).join("")}
    </ul>
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
          <p class="feedback-card__line">선택한 답: ${escapeHtml(state.selectedKey)}. ${escapeHtml(selectedText)}</p>
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

function updateWrongBook(question, isCorrect) {
  const existing = state.session.wrongBook[question.id] || {
    wrongCount: 0,
    correctCount: 0,
    lastSelectedKey: "",
    lastResult: "",
    updatedAt: "",
  };

  if (isCorrect) {
    if (state.session.wrongBook[question.id]) {
      existing.correctCount += 1;
      existing.lastSelectedKey = state.selectedKey;
      existing.lastResult = "correct";
      existing.updatedAt = new Date().toISOString();
      state.session.wrongBook[question.id] = existing;
    }
    return;
  }

  existing.wrongCount += 1;
  existing.lastSelectedKey = state.selectedKey;
  existing.lastResult = "wrong";
  existing.updatedAt = new Date().toISOString();
  state.session.wrongBook[question.id] = existing;
}

function checkAnswer() {
  const question = getCurrentQuestion();
  if (!question || !state.selectedKey || state.answerChecked) {
    return;
  }

  state.answerChecked = true;
  const isCorrect = state.selectedKey === question.answerKey;
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

function renderWrongNote() {
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
      const excerpt = question.promptKo.split("\n")[0];
      const lastResultLabel = record.lastResult === "correct" ? "최근 정답" : "최근 오답";

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
                    Q ${questionId}
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
}

function attachEvents() {
  elements.startButton.addEventListener("click", startQuiz);

  elements.segmentedButtons.forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  elements.optionsForm.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) {
      return;
    }
    state.selectedKey = target.value;
    elements.checkAnswerButton.disabled = !state.selectedKey || state.answerChecked;
    renderQuestion();
  });

  elements.checkAnswerButton.addEventListener("click", checkAnswer);

  elements.newRandomButton.addEventListener("click", () => {
    selectQuestion(pickRandom(getQuestionPool()));
  });

  elements.nextQuestionButton.addEventListener("click", () => {
    const pool = getQuestionPool();
    selectQuestion(pickRandom(pool));
  });

  elements.toggleEnglishButton.addEventListener("click", () => {
    state.englishVisible = !state.englishVisible;
    renderQuestion();
  });

  elements.glossarySearch.addEventListener("input", renderGlossary);
  elements.clearWrongButton.addEventListener("click", clearWrongBook);
  elements.removeCurrentWrongButton.addEventListener("click", removeCurrentQuestionFromWrongBook);

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const jumpQuestionId = target.dataset.jumpQuestion;
    if (!jumpQuestionId) {
      return;
    }

    const questionId = Number(jumpQuestionId);
    if (!questionById.has(questionId)) {
      return;
    }

    state.mode = getWrongIds().includes(questionId) ? "wrong" : "random";
    renderMode();
    selectQuestion(questionId);
  });
}

function init() {
  if (!requireDailyPassword()) {
    return;
  }

  buildHeroStats();
  attachEvents();
  renderAppPhase();
  renderMode();
  renderGlossary();
  selectQuestion(pickRandom(getQuestionPool()));
}

init();
