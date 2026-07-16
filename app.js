const materials = [
  {
    id: 1, type: "典例素材", title: "“背包书记”把群众诉求记在随身本上",
    summary: "基层干部坚持走村入户，将群众反映的问题逐项记录、限时办理。",
    tags: ["品德", "群众意识", "基层治理", "担当"],
    body: "某地基层干部坚持随身携带民情记录本，每周进村入户，记录道路维修、养老服务、产业帮扶等诉求，并建立办理台账。事情不论大小，都明确责任人和反馈期限。",
    use: "适用于群众路线、基层干部担当、调查研究、为民服务等主题。使用时不要只讲人物事迹，还要说明其体现了从群众中来、到群众中去的工作方法。"
  },
  {
    id: 2, type: "热点案例", title: "政务服务从“群众跑腿”转向“数据跑路”",
    summary: "多地推动跨部门数据共享，让高频事项实现一次提交、并联办理。",
    tags: ["科技", "基层治理", "数字政府", "便民服务"],
    body: "部分地区通过统一数据平台整合公安、人社、民政等部门的办事信息，把串联审批改为并联协同，使群众只需提交一次材料。与此同时，也保留线下窗口和帮办服务，照顾老年人等群体。",
    use: "可用于数字政府、技术赋能、服务型政府等题目。论述时兼顾效率与数字鸿沟，更能体现分析的全面性。"
  },
  {
    id: 3, type: "人物典例", title: "一辈子只做一件事：文物修复师的择一事终一生",
    summary: "在缓慢细致的修复工作中，以耐心和专业守护文化记忆。",
    tags: ["品德", "爱岗敬业", "文化", "工匠精神"],
    body: "文物修复工作往往需要数月甚至数年，修复师面对重复、精细且难以即时获得掌声的工作，依然坚持尊重历史、最小干预，用长期主义守护文化遗产。",
    use: "适合用于爱岗敬业、文化传承、工匠精神、青年职业选择等主题。最好结合岗位谈如何将热爱转化为专业能力和责任意识。"
  },
  {
    id: 4, type: "真题关联", title: "面对新技术，基层干部既要会用也要善治",
    summary: "人工智能进入公共服务场景后，效率、隐私和公平需要同步考虑。",
    tags: ["科技", "人工智能", "基层治理", "风险意识"],
    body: "智能客服、辅助审批和城市治理算法可以提高公共服务效率，但训练数据偏差、个人信息保护以及老年群体使用困难等问题，也要求制度和技术共同完善。",
    use: "适用于人工智能治理、科技伦理、数字政府类题目。可采用“肯定价值—分析风险—提出边界”的结构。"
  },
  {
    id: 5, type: "地方实践", title: "社区议事厅：把矛盾化解在居民家门口",
    summary: "居民、物业、社区工作者围绕公共事务共同协商，推动问题就地解决。",
    tags: ["基层治理", "协商民主", "社区", "群众意识"],
    body: "社区定期围绕停车、加装电梯、公共空间使用等议题组织居民议事，先听取各方利益诉求，再形成可执行方案，并公开进度与结果。",
    use: "适用于基层协商、矛盾调解、社区治理等题目。回答组织管理题时，可转化为收集意见、协商方案、公开反馈三个步骤。"
  },
  {
    id: 6, type: "文化案例", title: "年轻人用短视频让非遗被更多人看见",
    summary: "传统技艺借助新表达触达年轻受众，也带来内容浅表化的讨论。",
    tags: ["文化", "创新", "青年", "新媒体"],
    body: "越来越多年轻创作者用短视频、直播和数字展览呈现传统技艺，使小众非遗获得新的关注。但传播不能只追求猎奇和流量，还需要准确呈现文化内涵。",
    use: "适合文化传承、青年担当、网络传播等题目。论述时可以强调形式创新服务于内容传承。"
  }
];

const state = { filter: "全部", search: "", mode: "single", aiMode: "single", thinkingSeconds: 0, recordingSeconds: 0, timer: null, pendingTimeouts: [], stream: null, recorder: null, chunks: [], isRecording: false };
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function navigate(page) {
  $$('.page').forEach(el => el.classList.toggle('active', el.id === `page-${page}`));
  $$('.bottom-nav button').forEach(el => el.classList.toggle('active', el.dataset.nav === page));
  $('#page-title').textContent = $(`#page-${page}`).dataset.title;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openSheet(id) {
  $$('.bottom-sheet.open').forEach(sheet => sheet.classList.remove('open'));
  const sheet = document.getElementById(id);
  if (!sheet) return;
  $('#sheet-overlay').classList.add('open');
  sheet.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSheets() {
  $$('.bottom-sheet.open').forEach(sheet => sheet.classList.remove('open'));
  $('#sheet-overlay').classList.remove('open');
  document.body.style.overflow = '';
  clearInterval(state.timer);
  state.pendingTimeouts.forEach(timeout => clearTimeout(timeout));
  state.pendingTimeouts = [];
  if (state.isRecording) {
    state.isRecording = false;
    if (state.recorder?.state === 'recording') state.recorder.stop();
    state.stream?.getTracks().forEach(track => track.stop());
  }
}

function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(el.toastTimer);
  el.toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

function renderMaterials() {
  const query = state.search.trim().toLowerCase();
  const filtered = materials.filter(item => {
    const matchesFilter = state.filter === '全部' || item.tags.includes(state.filter);
    const haystack = [item.title, item.summary, item.type, ...item.tags].join(' ').toLowerCase();
    return matchesFilter && (!query || haystack.includes(query));
  });
  $('#result-count').textContent = `${filtered.length} 条`;
  $('#material-list').innerHTML = filtered.map(item => `
    <article class="material-card" data-material-id="${item.id}">
      <div class="material-top"><span class="material-type">${item.type}</span><span class="material-arrow">→</span></div>
      <h3>${item.title}</h3><p>${item.summary}</p>
      <div class="tag-row">${item.tags.map(tag => `<span># ${tag}</span>`).join('')}</div>
    </article>`).join('');
  $('#material-empty').classList.toggle('hidden', filtered.length > 0);
  $$('.material-card').forEach(card => card.addEventListener('click', () => showMaterial(Number(card.dataset.materialId))));
}

function showMaterial(id) {
  const item = materials.find(material => material.id === id);
  if (!item) return;
  $('#material-detail').innerHTML = `<div class="material-detail">
    <span class="material-detail-type">${item.type}</span><h2 class="material-detail-title">${item.title}</h2>
    <p class="material-detail-summary">${item.summary}</p><div class="related-tags">${item.tags.map(tag => `<button data-related-tag="${tag}"># ${tag}</button>`).join('')}</div>
    <div class="detail-divider"></div><h3>案例内容</h3><p>${item.body}</p><h3>答题怎么用</h3><p>${item.use}</p>
    <button class="primary-button full" data-demo-action="已收藏到你的素材库">收藏这个素材</button></div>`;
  openSheet('material-sheet');
  $$('[data-related-tag]', $('#material-detail')).forEach(button => button.addEventListener('click', () => {
    state.filter = button.dataset.relatedTag;
    state.search = button.dataset.relatedTag;
    $('#material-search').value = state.search;
    closeSheets(); navigate('library'); renderMaterials();
  }));
  bindDemoActions($('#material-detail'));
}

function formatTime(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

function startThinking() {
  closeSheets(); openSheet('practice-sheet');
  state.thinkingSeconds = 0; state.recordingSeconds = 0; state.isRecording = false;
  $('#thinking-box').classList.remove('hidden'); $('#record-box').classList.add('hidden');
  $('#recording-playback').classList.add('hidden');
  $('#record-button').classList.remove('recording'); $('#record-button span').textContent = '开始作答';
  $('#thinking-timer').textContent = '00:00';
  clearInterval(state.timer);
  state.timer = setInterval(() => { state.thinkingSeconds += 1; $('#thinking-timer').textContent = formatTime(state.thinkingSeconds); }, 1000);
}

async function beginRecording() {
  clearInterval(state.timer);
  state.isRecording = true; state.recordingSeconds = 0; state.chunks = [];
  $('#thinking-box').classList.add('hidden'); $('#record-box').classList.remove('hidden');
  $('#record-button').classList.add('recording'); $('#record-button span').textContent = '结束作答';
  $('#recording-timer').textContent = '00:00'; $('#recording-label').textContent = '正在录音';
  state.timer = setInterval(() => { state.recordingSeconds += 1; $('#recording-timer').textContent = formatTime(state.recordingSeconds); }, 1000);
  if (navigator.mediaDevices?.getUserMedia && window.MediaRecorder) {
    try {
      state.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      state.recorder = new MediaRecorder(state.stream);
      state.recorder.ondataavailable = event => { if (event.data.size) state.chunks.push(event.data); };
      state.recorder.onstop = () => {
        if (!state.chunks.length) return;
        const audioURL = URL.createObjectURL(new Blob(state.chunks, { type: state.recorder.mimeType || 'audio/webm' }));
        $('#recording-playback').src = audioURL;
      };
      state.recorder.start();
    } catch (error) {
      toast('未获得麦克风权限，本次将以演示模式继续');
    }
  } else toast('当前浏览器不支持录音，本次将以演示模式继续');
}

function finishRecording() {
  state.isRecording = false; clearInterval(state.timer);
  if (state.recorder?.state === 'recording') state.recorder.stop();
  state.stream?.getTracks().forEach(track => track.stop());
  $('#record-button').classList.remove('recording'); $('#recording-label').textContent = '录音已完成';
  $('#recording-playback').classList.toggle('hidden', !state.chunks.length);
  state.pendingTimeouts.push(setTimeout(() => {
    closeSheets(); openSheet('analysis-sheet');
    $('#analysis-loader').classList.remove('hidden'); $('#analysis-result').classList.add('hidden');
    state.pendingTimeouts.push(setTimeout(() => { $('#analysis-loader').classList.add('hidden'); $('#analysis-result').classList.remove('hidden'); }, 1800));
  }, 550));
}

function startMatching() {
  closeSheets(); openSheet('matching-sheet');
  $('#matching-status').textContent = '已找到 1 / 3 人';
  $('#matched-user-two').textContent = '?'; $('#matched-user-two').classList.remove('found');
  $('#matched-user-three').textContent = '?'; $('#matched-user-three').classList.remove('found');
  state.pendingTimeouts.push(setTimeout(() => { $('#matched-user-two').textContent = '周'; $('#matched-user-two').classList.add('found'); $('#matching-status').textContent = '已找到 2 / 3 人'; }, 1000));
  state.pendingTimeouts.push(setTimeout(() => { $('#matched-user-three').textContent = '陈'; $('#matched-user-three').classList.add('found'); $('#matching-status').textContent = '匹配成功，即将进入答题'; }, 2100));
  state.pendingTimeouts.push(setTimeout(startThinking, 3000));
}

function startAIPractice() {
  $('#practice-step').textContent = state.aiMode === 'single' ? 'AI 单练 · 1 道题' : 'AI 模拟 · 第 1 / 3 题';
  startThinking();
}

function bindDemoActions(root = document) {
  $$('[data-demo-action]', root).forEach(button => button.addEventListener('click', () => toast(button.dataset.demoAction)));
}

$$('[data-nav]').forEach(button => button.addEventListener('click', () => navigate(button.dataset.nav)));
$$('[data-open-sheet]').forEach(button => button.addEventListener('click', () => openSheet(button.dataset.openSheet)));
$$('[data-close-sheet]').forEach(button => button.addEventListener('click', closeSheets));
$('#sheet-overlay').addEventListener('click', closeSheets);
$('#start-ai-button').addEventListener('click', () => openSheet('ai-sheet'));
$('#start-match-button').addEventListener('click', () => openSheet('match-sheet'));
$('#quick-practice-button').addEventListener('click', () => openSheet('ai-sheet'));
$('#review-practice-button').addEventListener('click', () => openSheet('ai-sheet'));
$('#confirm-ai-button').addEventListener('click', startAIPractice);
$('#confirm-match-button').addEventListener('click', startMatching);
$('#record-button').addEventListener('click', () => state.isRecording ? finishRecording() : beginRecording());
$('#view-report-button').addEventListener('click', () => { closeSheets(); navigate('review'); });
$('#notification-button').addEventListener('click', () => toast('今晚 21:00 基层治理专题赛，已有 826 人预约'));
$$('[data-mode]').forEach(card => card.addEventListener('click', () => {
  $$('[data-mode]').forEach(el => el.classList.remove('active')); card.classList.add('active'); state.mode = card.dataset.mode;
  $('#practice-step').textContent = state.mode === 'single' ? '第 1 / 1 题' : '第 1 / 3 题';
}));
$$('[data-ai-mode]').forEach(card => card.addEventListener('click', () => {
  $$('[data-ai-mode]').forEach(el => el.classList.remove('active'));
  card.classList.add('active'); state.aiMode = card.dataset.aiMode;
  $('#practice-step').textContent = state.aiMode === 'single' ? 'AI 单练 · 1 道题' : 'AI 模拟 · 第 1 / 3 题';
}));
$$('.filter-chip').forEach(chip => chip.addEventListener('click', () => {
  $$('.filter-chip').forEach(el => el.classList.remove('active')); chip.classList.add('active'); state.filter = chip.dataset.filter; renderMaterials();
}));
$('#material-search').addEventListener('input', event => { state.search = event.target.value; renderMaterials(); });
bindDemoActions(); renderMaterials();
