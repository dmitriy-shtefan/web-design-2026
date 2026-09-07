const lessonSteps = [
  {
    label: 'Старт', shortLabel: 'HTML', kicker: 'Що таке HTML?',
    title: 'Теги пояснюють браузеру, що є чим.',
    description: 'HTML описує структуру сторінки. Текст пишемо між відкривальним і закривальним тегами.',
    rules: [['<h1>...</h1>', 'головний заголовок'], ['<p>...</p>', 'абзац тексту']],
    starter: '<h1>Привіт!</h1>\n<p>Це моя перша сторінка.</p>',
    task: 'Заміни «Привіт!» на своє ім’я, а текст абзацу — на власне речення.',
    hint: '',
    question: 'Для чого HTML-теги потрібні браузеру?',
    answers: ['Щоб описувати структуру сторінки', 'Щоб визначати кольори та оформлення сторінки', 'Щоб програмувати реакції на дії користувача'],
    correctAnswer: 0,
  },
  {
    label: 'Заголовки', shortLabel: 'h1–h6', kicker: 'Заголовки h1–h6',
    title: 'Від головної думки до маленького підрозділу.',
    description: 'Є шість рівнів заголовків. <h1> — головний заголовок сторінки, а <h2>–<h6> утворюють нижчі рівні структури.',
    rules: [['<h1>', 'головний заголовок'], ['<h2> ... <h6>', 'заголовки підрозділів']],
    starter: '<h1>Світ тварин</h1>\n<h2>Домашні тварини</h2>\n<h3>Коти</h3>\n<h4>Породи котів</h4>\n<h5>Короткошерсті</h5>\n<h6>Абісинська кішка</h6>',
    task: 'Зміни тему сторінки на улюблений фільм, гру або книгу. Збережи всі шість рівнів заголовків.',
    hint: 'Не видаляй h1–h6: заміни лише текст усередині кожного заголовка.',
    question: 'Який тег позначає головний заголовок сторінки?',
    answers: ['<h6>', '<p>', '<h1>'], correctAnswer: 2,
  },
  {
    label: 'Текст', shortLabel: 'p · b · i', kicker: 'Абзаци й виділення',
    title: 'Текст може бути звичайним, напівжирним або курсивним.',
    description: '<p> створює абзац, <b> виділяє текст напівжирним, а <i> — курсивом. Теги b та i можна вкладати всередину абзацу.',
    rules: [['<p>', 'абзац'], ['<b>', 'напівжирне виділення'], ['<i>', 'текст курсивом']],
    starter: '<h1>Моє хобі</h1>\n<p>Я люблю футбол і музику.</p>',
    task: 'Зміни текст. Одне слово виділи за допомогою <b>, а інше напиши курсивом за допомогою <i>.',
    hint: 'Приклад: <p>Я люблю <b>футбол</b> і <i>музику</i>.</p>',
    question: 'Який тег створює абзац?',
    answers: ['<p>', '<b>', '<h2>'], correctAnswer: 0,
  },
  {
    label: 'Розділення', shortLabel: 'br · hr', kicker: 'Новий рядок і розділювач',
    title: 'br переносить, а hr розділяє.',
    description: '<br> переносить текст на новий рядок. <hr> проводить горизонтальну лінію між частинами сторінки. Ці теги не потребують закривальної пари.',
    rules: [['<br>', 'перенесення рядка'], ['<hr>', 'тематичний розділювач']],
    starter: '<h1>Моє меню</h1>\n<p>Піца\nСалат\nМорозиво</p>\n<p>Смачного!</p>',
    task: 'Постав три страви на окремі рядки за допомогою двох <br>. Перед «Смачного!» додай <hr>.',
    hint: 'Після перших двох страв додай <br>, а між абзацами — <hr>.',
    question: 'Що створює новий рядок без нового абзацу?',
    answers: ['<hr>', '<br>', '<p>'], correctAnswer: 1,
  },
  {
    label: 'Посилання', shortLabel: 'a', kicker: 'Посилання a',
    title: 'Один дотик — і ми на іншій сторінці.',
    description: '<a> створює посилання. Адресу записуємо в атрибуті href, а видимий текст — між тегами.',
    rules: [['<a>', 'посилання'], ['href="..."', 'адреса переходу']],
    starter: '<h1>Корисні сайти</h1>\n<p>Тут можна дізнатися більше:</p>\n<a href="https://google.com">Відкрити Google</a>',
    task: 'Зміни текст посилання на «Мій улюблений сайт». Адреса має починатися з https://.',
    hint: 'Правильна форма: <a href="https://google.com">Текст посилання</a>',
    question: 'Де в посиланні записана адреса сайту?',
    answers: ['У h1', 'В атрибуті href', 'У тегу br'], correctAnswer: 1,
  },
  {
    label: 'Кнопка', shortLabel: 'button', kicker: 'Кнопка button',
    title: 'HTML створює кнопку. Дію додамо пізніше.',
    description: '<button> створює кнопку. Сам HTML задає її місце й напис, а складну реакцію на натискання зазвичай програмують мовою JavaScript.',
    rules: [['<button>', 'інтерактивна кнопка'], ['JavaScript', 'поведінка після натискання']],
    starter: '<h1>Моя кнопка</h1>\n<p>Який у тебе сьогодні настрій?</p>\n<button>Чудовий!</button>',
    task: 'Зміни напис кнопки на власний. Залиши текст усередині тегів <button> і </button>.',
    hint: 'Приклад: <button>Мені подобається!</button>',
    question: 'Що потрібно додати, щоб кнопка виконувала складну дію?',
    answers: ['JavaScript', 'Ще один h1', 'Тег br'], correctAnswer: 0,
  },
  {
    label: 'Мініпроєкт', shortLabel: 'Фінал', kicker: 'Фінальний мініпроєкт',
    title: 'Збери всі теги у свою першу сторінку.',
    description: 'Створи сторінку «Про мене». Змінюй текст сміливо: перевірка шукає потрібні теги, а не точні слова.',
    rules: [['9 тегів', 'в одному проєкті'], ['100%', 'твоя власна сторінка']],
    starter: '<h1>Привіт! Я Марко</h1>\n\n<h2>Про мене</h2>\n<p>Мені 13 років. Я вивчаю <b>HTML</b>.</p>\n\n<hr>\n\n<h2>Мені подобається</h2>\n<p><i>Музика</i><br>\nMinecraft<br>\nФутбол</p>\n\n<a href="https://google.com">Мій улюблений сайт</a>\n\n<br><br>\n<button>Привітатися</button>',
    task: 'Заміни ім’я, вік, захоплення, адресу й написи на власні. Потім пройди фінальну перевірку.',
    hint: 'Орієнтуйся на чекліст біля кнопки «Перевірити крок». Зелені пункти вже виконані.',
    question: 'Для чого HTML-теги потрібні браузеру?',
    answers: ['Щоб описувати структуру сторінки', 'Щоб визначати кольори та оформлення сторінки', 'Щоб програмувати реакції на дії користувача'],
    correctAnswer: 0,
  },
];

const tagButtons = ['<h1>', '<h2>', '<h3>', '<p>', '<b>', '<i>', '<br>', '<hr>', '<a>', '<button>'];
const insertions = {
  '<h1>': '<h1>Заголовок</h1>', '<h2>': '<h2>Підзаголовок</h2>', '<h3>': '<h3>Менший заголовок</h3>',
  '<p>': '<p>Новий абзац</p>', '<b>': '<b>важливо</b>', '<i>': '<i>курсив</i>',
  '<br>': '<br>', '<hr>': '<hr>', '<a>': '<a href="https://google.com">Посилання</a>',
  '<button>': '<button>Кнопка</button>',
};

const storageKey = 'html-tablet-lesson-github-v1';
const app = document.querySelector('#app');
let state = {
  currentStep: 0,
  codes: lessonSteps.map((step) => step.starter),
  completed: [],
  answers: {},
  feedback: '',
  showHint: false,
  mobileView: 'code',
};

function escapeHtml(value) {
  return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function formatInline(value) {
  return escapeHtml(value).replace(/&lt;\/?[a-z][a-z0-9]*&gt;/gi, (tag) => `<code>${tag}</code>`);
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(saved?.codes) && saved.codes.length === lessonSteps.length) state.codes = saved.codes;
    if (Array.isArray(saved?.completed)) state.completed = saved.completed;
    if (saved?.answers && typeof saved.answers === 'object') state.answers = saved.answers;
  } catch { /* Починаємо урок із чистого стану. */ }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify({ codes: state.codes, completed: state.completed, answers: state.answers }));
}

function parseCode(code) {
  return new DOMParser().parseFromString(code, 'text/html');
}

function hasText(doc, selector) {
  return Boolean(doc.querySelector(selector)?.textContent?.trim());
}

function validateStep(index, code) {
  const doc = parseCode(code);
  if (index === 0) return hasText(doc, 'h1') && hasText(doc, 'p') && !code.includes('Привіт!');
  if (index === 1) return [1, 2, 3, 4, 5, 6].every((level) => hasText(doc, `h${level}`));
  if (index === 2) return hasText(doc, 'p') && hasText(doc, 'b') && hasText(doc, 'i');
  if (index === 3) return doc.querySelectorAll('br').length >= 2 && Boolean(doc.querySelector('hr'));
  if (index === 4) {
    const link = doc.querySelector('a');
    return Boolean(link?.textContent?.trim() && link.getAttribute('href')?.startsWith('https://'));
  }
  if (index === 5) return hasText(doc, 'button') && doc.querySelector('button')?.textContent !== 'Чудовий!';
  return ['h1', 'h2', 'p', 'b', 'i', 'hr', 'a', 'button'].every((tag) => Boolean(doc.querySelector(tag))) && doc.querySelectorAll('br').length >= 2;
}

function projectChecklist(code) {
  const doc = parseCode(code);
  return [
    ['Головний заголовок h1', doc.querySelectorAll('h1').length >= 1],
    ['Щонайменше два h2', doc.querySelectorAll('h2').length >= 2],
    ['Абзац p', doc.querySelectorAll('p').length >= 1],
    ['Виділення b', doc.querySelectorAll('b').length >= 1],
    ['Курсив i', doc.querySelectorAll('i').length >= 1],
    ['Лінія hr', doc.querySelectorAll('hr').length >= 1],
    ['Два перенесення br', doc.querySelectorAll('br').length >= 2],
    ['Посилання a', doc.querySelectorAll('a').length >= 1],
    ['Кнопка button', doc.querySelectorAll('button').length >= 1],
  ];
}

function previewDocument(code) {
  return `<!doctype html><html lang="uk"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:system-ui,sans-serif;color:#14213d;padding:22px;line-height:1.6;overflow-wrap:anywhere}h1{font-size:2.4rem;line-height:1.1;margin:.2em 0 .45em}h2{font-size:1.8rem;margin:.8em 0 .3em}h3{font-size:1.45rem}h4{font-size:1.25rem}h5{font-size:1.1rem}h6{font-size:1rem}p{font-size:1.1rem}hr{border:0;border-top:3px solid #22d3ee;margin:24px 0}a{color:#087ea4;font-weight:700}button{font:inherit;font-weight:750;border:0;border-radius:12px;padding:12px 18px;background:#ffb547;color:#07101f}</style></head><body>${code}</body></html>`;
}

function progressPercent() {
  return Math.round((state.completed.length / lessonSteps.length) * 100);
}

function checklistMarkup() {
  return projectChecklist(state.codes[6]).map(([label, done]) => `
    <div class="checklist-item ${done ? 'done' : ''}"><span aria-hidden="true">${done ? '✓' : '○'}</span>${escapeHtml(label)}</div>
  `).join('');
}

function render() {
  const step = lessonSteps[state.currentStep];
  const code = state.codes[state.currentStep];
  const progress = progressPercent();
  const selectedAnswer = state.answers[state.currentStep];
  const isFinal = state.currentStep === lessonSteps.length - 1;

  app.innerHTML = `
    <header class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <div class="brand-icon" aria-hidden="true">&lt;/&gt;</div>
          <div class="brand-copy"><p class="brand-kicker">HTML</p><h1 class="brand-title">Сторінка починається з тегів</h1></div>
        </div>
        <div class="progress-wrap">
          <div class="progress-copy"><p class="progress-value">${progress}% пройдено</p><p class="progress-note">${state.completed.length} із 7 кроків</p></div>
          <div class="progress-track" aria-label="Прогрес уроку"><div class="progress-bar" style="width:${Math.max(progress, 4)}%"></div></div>
        </div>
      </div>
    </header>

    <nav class="mobile-steps" aria-label="Кроки уроку">
      ${lessonSteps.map((item, index) => `<button class="step-pill ${index === state.currentStep ? 'active' : ''} ${state.completed.includes(index) ? 'done' : ''}" data-step="${index}" ${index === state.currentStep ? 'aria-current="step"' : ''}>${state.completed.includes(index) ? '✓' : index + 1}&nbsp; ${escapeHtml(item.shortLabel)}</button>`).join('')}
    </nav>

    <div class="page">
      <aside class="sidebar">
        <nav class="sidebar-nav" aria-label="Кроки уроку">
          ${lessonSteps.map((item, index) => `<button class="side-step ${index === state.currentStep ? 'active' : ''} ${state.completed.includes(index) ? 'done' : ''}" data-step="${index}" ${index === state.currentStep ? 'aria-current="step"' : ''}><span class="step-number">${state.completed.includes(index) ? '✓' : index + 1}</span><span class="side-copy"><span>${escapeHtml(item.label)}</span><small>${escapeHtml(item.shortLabel)}</small></span></button>`).join('')}
        </nav>
      </aside>

      <main class="content">
        <section class="intro">
          <div><p class="kicker">${String(state.currentStep + 1).padStart(2, '0')} / ${escapeHtml(step.kicker)}</p><h2 class="lesson-title">${escapeHtml(step.title)}</h2><p class="description">${formatInline(step.description)}</p></div>
          <div class="rules">${step.rules.map(([tag, meaning]) => `<div class="rule"><code>${escapeHtml(tag)}</code><p>${escapeHtml(meaning)}</p></div>`).join('')}</div>
        </section>

        <section class="task" aria-labelledby="task-title"><div class="task-row"><span class="task-arrow" aria-hidden="true">→</span><div><h3 id="task-title">Твоє завдання</h3><p>${formatInline(step.task)}</p></div></div></section>

        <div class="view-tabs" role="group" aria-label="Вибір панелі">
          <button class="view-tab ${state.mobileView === 'code' ? 'active' : ''}" data-view="code">&lt;/&gt;&nbsp; Код</button>
          <button class="view-tab ${state.mobileView === 'preview' ? 'active' : ''}" data-view="preview">◉&nbsp; Результат</button>
        </div>

        <section class="workspace" data-view="${state.mobileView}">
          <div class="editor-pane">
            <div class="pane-header"><span class="pane-title">Твій HTML-код</span><button class="reset" id="reset-code">↻&nbsp; Скинути</button></div>
            <textarea id="code-editor" aria-label="HTML-код" spellcheck="false"></textarea>
            <div class="tag-buttons" aria-label="Швидке вставлення тегів">${tagButtons.map((tag) => `<button class="tag-button" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join('')}</div>
          </div>
          <div class="preview-pane">
            <div class="pane-header"><span class="pane-title">Результат у браузері</span><span class="live">наживо</span></div>
            <iframe id="preview" title="Попередній перегляд HTML" sandbox=""></iframe>
          </div>
        </section>

        ${state.currentStep > 0 ? `<section class="hint-wrap"><button class="hint-button ${state.showHint ? 'open' : ''}" id="toggle-hint" aria-expanded="${state.showHint}"><span class="hint-icon" aria-hidden="true">♧</span>${state.showHint ? 'Сховати підказку' : 'Показати підказку'}<span class="hint-chevron" aria-hidden="true">›</span></button>${state.showHint ? `<div class="hint-content">${formatInline(step.hint)}</div>` : ''}</section>` : ''}

        <section class="check-area">
          <div class="quiz">
            <div class="quiz-header"><span class="quiz-icon" aria-hidden="true">?</span><div><h3>Самоперевірка</h3><p>${escapeHtml(step.question)}</p></div></div>
            <div class="answers">${step.answers.map((answer, index) => {
              const selected = selectedAnswer === index;
              const revealed = Boolean(state.feedback) && selected;
              const resultClass = revealed ? (index === step.correctAnswer ? 'correct' : 'wrong') : (selected ? 'selected' : '');
              return `<button class="answer ${resultClass}" data-answer="${index}" aria-pressed="${selected}"><span class="answer-letter">${String.fromCharCode(65 + index)}</span>${escapeHtml(answer)}</button>`;
            }).join('')}</div>
          </div>
          <div class="check-side">
            ${isFinal ? `<div class="checklist"><h3>Чекліст проєкту</h3><div class="checklist-items" id="checklist-items">${checklistMarkup()}</div></div>` : ''}
            <button class="check-button" id="check-step">✓&nbsp; Перевірити крок</button>
            ${state.feedback === 'success' ? '<output class="feedback success"><strong>✓ Усе правильно!</strong><p>Код і відповідь пройшли перевірку.</p></output>' : ''}
            ${state.feedback === 'error' ? `<output class="feedback error"><strong>✕ Майже готово</strong><p>${state.currentStep === 0 ? 'Перевір відповідь і виконай завдання в коді.' : 'Перевір відповідь і виконай завдання в коді. Підказка допоможе.'}</p></output>` : ''}
          </div>
        </section>

        ${isFinal && state.completed.includes(6) ? '<section class="finish"><div class="finish-inner"><div class="finish-copy"><span class="finish-icon" aria-hidden="true">✦</span><div><p class="finish-kicker">Фініш</p><h3>Твоя перша HTML-сторінка готова!</h3><p>Завантаж її та відкрий у будь-якому браузері.</p></div></div><button class="download-button" data-download>⇩&nbsp; Завантажити HTML</button></div></section>' : ''}

        <footer class="footer-nav">
          <button class="nav-button" id="previous-step" ${state.currentStep === 0 ? 'disabled' : ''}>←&nbsp; <span>Попередній крок</span></button>
          <p class="autosave">Прогрес зберігається на цьому планшеті автоматично</p>
          ${isFinal ? '<button class="nav-button primary" data-download>⇩&nbsp; HTML</button>' : '<button class="nav-button primary" id="next-step"><span>Наступний крок</span>&nbsp; →</button>'}
        </footer>
      </main>
    </div>
  `;

  const editor = document.querySelector('#code-editor');
  editor.value = code;
  document.querySelector('#preview').srcdoc = previewDocument(code);
  bindEvents();
}

function goToStep(index) {
  state.currentStep = Math.max(0, Math.min(index, lessonSteps.length - 1));
  state.feedback = '';
  state.showHint = false;
  state.mobileView = 'code';
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateLiveCode(value) {
  state.codes[state.currentStep] = value;
  state.feedback = '';
  saveProgress();
  const preview = document.querySelector('#preview');
  if (preview) preview.srcdoc = previewDocument(value);
  const feedback = document.querySelector('.feedback');
  if (feedback) feedback.remove();
  const checklist = document.querySelector('#checklist-items');
  if (checklist) checklist.innerHTML = checklistMarkup();
}

function checkStep() {
  const step = lessonSteps[state.currentStep];
  const answerCorrect = state.answers[state.currentStep] === step.correctAnswer;
  const codeCorrect = validateStep(state.currentStep, state.codes[state.currentStep]);
  if (answerCorrect && codeCorrect) {
    state.feedback = 'success';
    if (!state.completed.includes(state.currentStep)) state.completed.push(state.currentStep);
  } else state.feedback = 'error';
  saveProgress();
  render();
  document.querySelector('.check-area')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function downloadHtml() {
  const content = `<!doctype html>\n<html lang="uk">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Моя перша сторінка</title>\n</head>\n<body>\n${state.codes[6]}\n</body>\n</html>`;
  const url = URL.createObjectURL(new Blob([content], { type: 'text/html;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'moja-persha-storinka.html';
  link.click();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  document.querySelectorAll('[data-step]').forEach((button) => button.addEventListener('click', () => goToStep(Number(button.dataset.step))));
  document.querySelectorAll('.view-tab[data-view]').forEach((button) => button.addEventListener('click', () => { state.mobileView = button.dataset.view; render(); }));
  document.querySelector('#code-editor')?.addEventListener('input', (event) => updateLiveCode(event.target.value));
  document.querySelector('#reset-code')?.addEventListener('click', () => { state.codes[state.currentStep] = lessonSteps[state.currentStep].starter; state.feedback = ''; saveProgress(); render(); });
  document.querySelectorAll('[data-tag]').forEach((button) => button.addEventListener('click', () => {
    const tag = button.dataset.tag;
    const current = state.codes[state.currentStep];
    state.codes[state.currentStep] = `${current}${current.endsWith('\n') ? '' : '\n'}${insertions[tag] || tag}`;
    state.feedback = '';
    saveProgress();
    render();
    document.querySelector('#code-editor')?.focus();
  }));
  document.querySelectorAll('[data-answer]').forEach((button) => button.addEventListener('click', () => { state.answers[state.currentStep] = Number(button.dataset.answer); state.feedback = ''; saveProgress(); render(); }));
  document.querySelector('#toggle-hint')?.addEventListener('click', () => { state.showHint = !state.showHint; render(); document.querySelector('.hint-wrap')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); });
  document.querySelector('#check-step')?.addEventListener('click', checkStep);
  document.querySelector('#previous-step')?.addEventListener('click', () => goToStep(state.currentStep - 1));
  document.querySelector('#next-step')?.addEventListener('click', () => goToStep(state.currentStep + 1));
  document.querySelectorAll('[data-download]').forEach((button) => button.addEventListener('click', downloadHtml));
}

function registerWebMcp() {
  if (!document.modelContext?.registerTool) return;
  try {
    document.modelContext.registerTool({
      name: 'open_lesson_step',
      title: 'Відкрити крок уроку',
      description: 'Відкриває один із семи кроків інтерактивного уроку HTML.',
      inputSchema: { type: 'object', properties: { step: { type: 'integer', minimum: 1, maximum: 7 } }, required: ['step'], additionalProperties: false },
      annotations: { readOnlyHint: false, untrustedContentHint: false },
      execute(input) {
        const value = Number(input?.step);
        if (!Number.isInteger(value) || value < 1 || value > 7) throw new Error('Крок має бути числом від 1 до 7.');
        goToStep(value - 1);
        return { step: value, label: lessonSteps[value - 1].label };
      },
    });
  } catch { /* Старі браузери просто ігнорують цей необов'язковий інтерфейс. */ }
}

loadProgress();
render();
registerWebMcp();
