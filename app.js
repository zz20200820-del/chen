const materials = [
  { id:1, type:"典例素材", title:"“背包书记”把群众诉求记在随身本上", summary:"基层干部坚持走村入户，将群众反映的问题逐项记录、限时办理。", tags:["品德","群众意识","基层治理","担当"], body:"某地基层干部坚持随身携带民情记录本，每周进村入户，记录道路维修、养老服务、产业帮扶等诉求，并建立办理台账。", use:"适用于群众路线、基层干部担当、调查研究、为民服务等主题。" },
  { id:2, type:"热点案例", title:"政务服务从“群众跑腿”转向“数据跑路”", summary:"多地推动跨部门数据共享，让高频事项实现一次提交、并联办理。", tags:["科技","基层治理","数字政府","便民服务"], body:"部分地区通过统一数据平台整合公安、人社、民政等部门信息，把串联审批改为并联协同。", use:"用于数字政府、技术赋能、服务型政府等题目时，应兼顾效率与数字鸿沟。" },
  { id:3, type:"人物典例", title:"文物修复师：择一事，终一生", summary:"在缓慢细致的修复工作中，以耐心和专业守护文化记忆。", tags:["品德","爱岗敬业","文化","工匠精神"], body:"文物修复工作往往需要数月甚至数年，修复师用长期主义守护文化遗产。", use:"适合爱岗敬业、文化传承、工匠精神、青年职业选择等主题。" },
  { id:4, type:"地方实践", title:"社区议事厅：把矛盾化解在家门口", summary:"居民、物业、社区工作者围绕公共事务共同协商。", tags:["基层治理","协商民主","社区","群众意识"], body:"社区围绕停车、加装电梯、公共空间等议题组织居民议事，形成可执行方案并公开进度。", use:"适用于基层协商、矛盾调解、社区治理等题目。" },
  { id:5, type:"科技案例", title:"人工智能进入公共服务后的效率与边界", summary:"效率、隐私、公平和可解释性需要同步考虑。", tags:["科技","人工智能","基层治理","风险意识"], body:"智能客服和辅助审批能提高效率，但数据偏差、信息保护和特殊群体使用困难也需重视。", use:"可采用“肯定价值—分析风险—提出边界”的表达结构。" },
  { id:6, type:"文化案例", title:"年轻人用短视频让非遗被更多人看见", summary:"传统技艺借助新表达触达年轻受众。", tags:["文化","创新","青年","新媒体"], body:"年轻创作者用短视频、直播和数字展览呈现传统技艺，使小众非遗获得新关注。", use:"适合文化传承、青年担当、网络传播等题目。" }
];

const questions = [
  { id:101, year:"2026", region:"国考", type:"综合分析", title:"对于基层工作中“干部多跑腿，群众少跑路”的现象，你怎么看？", summary:"重点考查服务意识、数字政府与基层执行能力。", tags:["基层治理","群众意识","数字政府"] },
  { id:102, year:"2025", region:"浙江省考", type:"组织管理", title:"单位准备开展青年干部下基层调研活动，由你负责，你如何组织？", summary:"重点考查调研设计、对象覆盖、成果转化与过程协调。", tags:["调查研究","青年干部","组织管理"] },
  { id:103, year:"2025", region:"广东省考", type:"应急应变", title:"政务大厅系统故障，群众排队并产生不满，作为负责人你怎么办？", summary:"重点考查现场秩序、替代方案、信息沟通与复盘整改。", tags:["应急处置","群众工作","政务服务"] },
  { id:104, year:"2024", region:"江苏省考", type:"人际关系", title:"同事认为你工作方式太较真，影响团队氛围，你怎么办？", summary:"重点考查自我反思、原则性与协作方式。", tags:["沟通协调","团队合作","原则方法"] },
  { id:105, year:"2024", region:"四川省考", type:"综合分析", title:"一些年轻人通过短视频学习传统文化，对此你怎么看？", summary:"重点考查文化传播、形式创新与内容质量。", tags:["文化","青年","新媒体"] },
  { id:106, year:"2023", region:"山东省考", type:"综合分析", title:"人工智能逐渐应用于公共服务，有人期待，也有人担忧，你怎么看？", summary:"重点考查科技价值、治理风险与制度边界。", tags:["科技","人工智能","风险意识"] }
];

const state = { filter:"全部", search:"", libraryView:"questions", mode:"single", aiMode:"single", thinkingSeconds:0, recordingSeconds:0, timer:null, pendingTimeouts:[], stream:null, recorder:null, chunks:[], isRecording:false };
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];

function navigate(page) {
  $$('.page').forEach(el => el.classList.toggle('active', el.id === `page-${page}`));
  $$('.bottom-nav button').forEach(el => el.classList.toggle('active', el.dataset.nav === page));
  const target = $(`#page-${page}`);
  if (target) $('#page-title').textContent = target.dataset.title;
  window.scrollTo({top:0, behavior:'smooth'});
}

function openSheet(id) {
  $$('.bottom-sheet.open').forEach(sheet => sheet.classList.remove('open'));
  const sheet = document.getElementById(id);
  if (!sheet) return;
  $('#sheet-overlay').classList.add('open'); sheet.classList.add('open'); document.body.style.overflow='hidden';
}

function closeSheets() {
  $$('.bottom-sheet.open').forEach(sheet => sheet.classList.remove('open'));
  $('#sheet-overlay').classList.remove('open'); document.body.style.overflow=''; clearInterval(state.timer);
  state.pendingTimeouts.forEach(clearTimeout); state.pendingTimeouts=[];
  if (state.isRecording) { state.isRecording=false; if(state.recorder?.state==='recording') state.recorder.stop(); state.stream?.getTracks().forEach(track=>track.stop()); }
}

function toast(message) {
  const el=$('#toast'); el.textContent=message; el.classList.add('show'); clearTimeout(el.toastTimer); el.toastTimer=setTimeout(()=>el.classList.remove('show'),2200);
}

function matches(item) {
  const query=state.search.trim().toLowerCase();
  const filterMatch=state.filter==='全部'||item.tags.includes(state.filter);
  const text=[item.title,item.summary,item.type,item.year,item.region,...item.tags].filter(Boolean).join(' ').toLowerCase();
  return filterMatch&&(!query||text.includes(query));
}

function renderLibrary() {
  const isQuestions=state.libraryView==='questions';
  const list=(isQuestions?questions:materials).filter(matches);
  $('#library-heading').textContent=isQuestions?'历年真题':'典例素材';
  $('#library-kicker').textContent=isQuestions?'PAST EXAMS':'KNOWLEDGE MAP';
  $('#result-count').textContent=`${list.length} 条`;
  $('#question-list').classList.toggle('hidden',!isQuestions); $('#material-list').classList.toggle('hidden',isQuestions);
  if (isQuestions) {
    $('#question-list').innerHTML=list.map(q=>`<article class="exam-card" data-question-id="${q.id}"><div class="exam-top"><strong>${q.year} · ${q.region}</strong><span>${q.type} →</span></div><h3>${q.title}</h3><p>${q.summary}</p><div class="smart-tags">${q.tags.map(tag=>`<button data-smart-tag="${tag}"># ${tag}</button>`).join('')}</div></article>`).join('');
    $$('[data-question-id]').forEach(card=>card.addEventListener('click',()=>showQuestion(Number(card.dataset.questionId))));
  } else {
    $('#material-list').innerHTML=list.map(item=>`<article class="material-card" data-material-id="${item.id}"><div class="material-top"><span class="material-type">${item.type}</span><span class="material-arrow">→</span></div><h3>${item.title}</h3><p>${item.summary}</p><div class="smart-tags">${item.tags.map(tag=>`<button data-smart-tag="${tag}"># ${tag}</button>`).join('')}</div></article>`).join('');
    $$('[data-material-id]').forEach(card=>card.addEventListener('click',()=>showMaterial(Number(card.dataset.materialId))));
  }
  $('#material-empty').classList.toggle('hidden',list.length>0); bindSmartTags();
}

function bindSmartTags(root=document) {
  $$('[data-smart-tag]',root).forEach(button=>button.addEventListener('click',event=>{event.stopPropagation(); toast(`“${button.dataset.smartTag}”智能推荐为会员功能`); openSheet('membership-sheet');}));
}

function showQuestion(id) {
  const q=questions.find(item=>item.id===id); if(!q)return;
  $('#material-detail').innerHTML=`<div class="material-detail"><span class="material-detail-type">${q.year} · ${q.region} · ${q.type}</span><h2 class="material-detail-title">${q.title}</h2><p class="material-detail-summary">${q.summary}</p><div class="related-tags">${q.tags.map(tag=>`<button data-smart-tag="${tag}"># ${tag} ✦</button>`).join('')}</div><div class="detail-divider"></div><h3>参考考点</h3><p>审题定位、核心观点、原因影响、可执行对策与价值升华。正式题库将提供多层级参考答案和优秀作答录音。</p><button class="primary-button full" id="question-practice-now">用这道题开始练习</button></div>`;
  openSheet('material-sheet'); bindSmartTags($('#material-detail')); $('#question-practice-now').addEventListener('click',()=>openSheet('ai-sheet'));
}

function showMaterial(id) {
  const item=materials.find(material=>material.id===id); if(!item)return;
  $('#material-detail').innerHTML=`<div class="material-detail"><span class="material-detail-type">${item.type}</span><h2 class="material-detail-title">${item.title}</h2><p class="material-detail-summary">${item.summary}</p><div class="related-tags">${item.tags.map(tag=>`<button data-smart-tag="${tag}"># ${tag} ✦</button>`).join('')}</div><div class="detail-divider"></div><h3>案例内容</h3><p>${item.body}</p><h3>答题怎么用</h3><p>${item.use}</p><button class="primary-button full" data-demo-action="已收藏到你的素材库">收藏这个素材</button></div>`;
  openSheet('material-sheet'); bindSmartTags($('#material-detail')); bindDemoActions($('#material-detail'));
}

function formatTime(seconds){return `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;}
function startThinking(){closeSheets();openSheet('practice-sheet');state.thinkingSeconds=0;state.recordingSeconds=0;state.isRecording=false;$('#thinking-box').classList.remove('hidden');$('#record-box').classList.add('hidden');$('#recording-playback').classList.add('hidden');$('#record-button').classList.remove('recording');$('#record-button span').textContent='开始作答';$('#thinking-timer').textContent='00:00';state.timer=setInterval(()=>{$('#thinking-timer').textContent=formatTime(++state.thinkingSeconds);},1000);}

async function beginRecording(){clearInterval(state.timer);state.isRecording=true;state.recordingSeconds=0;state.chunks=[];$('#thinking-box').classList.add('hidden');$('#record-box').classList.remove('hidden');$('#record-button').classList.add('recording');$('#record-button span').textContent='结束作答';$('#recording-timer').textContent='00:00';$('#recording-label').textContent='正在录音';state.timer=setInterval(()=>{$('#recording-timer').textContent=formatTime(++state.recordingSeconds);},1000);if(navigator.mediaDevices?.getUserMedia&&window.MediaRecorder){try{state.stream=await navigator.mediaDevices.getUserMedia({audio:true});state.recorder=new MediaRecorder(state.stream);state.recorder.ondataavailable=e=>{if(e.data.size)state.chunks.push(e.data);};state.recorder.onstop=()=>{if(state.chunks.length)$('#recording-playback').src=URL.createObjectURL(new Blob(state.chunks,{type:state.recorder.mimeType||'audio/webm'}));};state.recorder.start();}catch{toast('未获得麦克风权限，本次以演示模式继续');}}else toast('当前浏览器不支持录音，本次以演示模式继续');}
function finishRecording(){state.isRecording=false;clearInterval(state.timer);if(state.recorder?.state==='recording')state.recorder.stop();state.stream?.getTracks().forEach(track=>track.stop());$('#record-button').classList.remove('recording');$('#recording-label').textContent='录音已完成';state.pendingTimeouts.push(setTimeout(()=>{closeSheets();openSheet('analysis-sheet');$('#analysis-loader').classList.remove('hidden');$('#analysis-result').classList.add('hidden');state.pendingTimeouts.push(setTimeout(()=>{$('#analysis-loader').classList.add('hidden');$('#analysis-result').classList.remove('hidden');},1500));},450));}
function startMatching(){closeSheets();openSheet('matching-sheet');$('#matching-status').textContent='已找到 1 / 3 人';$('#matched-user-two').textContent='?';$('#matched-user-three').textContent='?';state.pendingTimeouts.push(setTimeout(()=>{$('#matched-user-two').textContent='周';$('#matched-user-two').classList.add('found');$('#matching-status').textContent='已找到 2 / 3 人';},900));state.pendingTimeouts.push(setTimeout(()=>{$('#matched-user-three').textContent='陈';$('#matched-user-three').classList.add('found');$('#matching-status').textContent='匹配成功，即将进入答题';},1800));state.pendingTimeouts.push(setTimeout(startThinking,2600));}
function startAIPractice(){$('#practice-step').textContent=state.aiMode==='single'?'AI 单练 · 1 道题':'AI 模拟 · 第 1 / 3 题';startThinking();}
function bindDemoActions(root=document){$$('[data-demo-action]',root).forEach(button=>button.addEventListener('click',()=>toast(button.dataset.demoAction)));}

$$('[data-nav]').forEach(button=>button.addEventListener('click',()=>navigate(button.dataset.nav)));
$$('[data-open-sheet]').forEach(button=>button.addEventListener('click',()=>openSheet(button.dataset.openSheet)));
$$('[data-close-sheet]').forEach(button=>button.addEventListener('click',closeSheets));
$('#sheet-overlay').addEventListener('click',closeSheets);
$('#start-ai-button').addEventListener('click',()=>openSheet('ai-sheet')); $('#start-match-button').addEventListener('click',()=>openSheet('match-sheet')); $('#quick-practice-button').addEventListener('click',()=>openSheet('ai-sheet'));
$('#create-room-button').addEventListener('click',()=>openSheet('room-sheet')); $('#copy-room-code').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('724891');toast('房间号已复制');}catch{toast('房间号：724891');}}); $('#join-code-button').addEventListener('click',()=>toast($('#join-code-input').value.trim().length===6?'正在加入好友房间':'请输入6位房间号'));
$('#report-entry').addEventListener('click',()=>openSheet('report-sheet')); $('#report-entry').addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openSheet('report-sheet');}});
$('#confirm-ai-button').addEventListener('click',startAIPractice); $('#confirm-match-button').addEventListener('click',startMatching); $('#record-button').addEventListener('click',()=>state.isRecording?finishRecording():beginRecording()); $('#view-report-button').addEventListener('click',()=>openSheet('report-sheet'));
$('#notification-button').addEventListener('click',()=>openSheet('messages-sheet'));
$('#template-assist-button').addEventListener('click',()=>{const panel=$('#template-assist-panel');panel.classList.toggle('hidden');$('#template-assist-button em').textContent=panel.classList.contains('hidden')?'展开':'收起';});
$('#use-template-button').addEventListener('click',()=>{toast('已设为本次练习的辅助模板');openSheet('ai-sheet');});
$$('[data-mode]').forEach(card=>card.addEventListener('click',()=>{$$('[data-mode]').forEach(el=>el.classList.remove('active'));card.classList.add('active');state.mode=card.dataset.mode;$('#practice-step').textContent=state.mode==='single'?'第 1 / 1 题':'第 1 / 3 题';}));
$$('[data-ai-mode]').forEach(card=>card.addEventListener('click',()=>{$$('[data-ai-mode]').forEach(el=>el.classList.remove('active'));card.classList.add('active');state.aiMode=card.dataset.aiMode;}));
$$('[data-library-view]').forEach(button=>button.addEventListener('click',()=>{$$('[data-library-view]').forEach(el=>el.classList.remove('active'));button.classList.add('active');state.libraryView=button.dataset.libraryView;state.search='';$('#material-search').value='';$('#material-search').placeholder=state.libraryView==='questions'?'搜索题目、年份、地区、题型或考点':'搜索品质、地区、领域或典例关键词';renderLibrary();}));
$$('.filter-chip').forEach(chip=>chip.addEventListener('click',()=>{$$('.filter-chip').forEach(el=>el.classList.remove('active'));chip.classList.add('active');state.filter=chip.dataset.filter;renderLibrary();}));
$('#material-search').addEventListener('input',event=>{state.search=event.target.value;renderLibrary();});
$$('.circle-filter-row button').forEach(button=>button.addEventListener('click',()=>{$$('.circle-filter-row button').forEach(el=>el.classList.remove('active'));button.classList.add('active');toast(`已切换到“${button.textContent}”内容`);}));
$$('.coach-filter-row button').forEach(button=>button.addEventListener('click',()=>{$$('.coach-filter-row button').forEach(el=>el.classList.remove('active'));button.classList.add('active');toast(`正在查看${button.textContent}老师`);}));
$$('[data-commerce-tab]').forEach(button=>button.addEventListener('click',()=>{$$('[data-commerce-tab]').forEach(el=>el.classList.remove('active'));button.classList.add('active');$$('[data-commerce-panel]').forEach(panel=>panel.classList.toggle('hidden',panel.dataset.commercePanel!==button.dataset.commerceTab));}));
$$('.message-tabs button,.member-plan-row button').forEach(button=>button.addEventListener('click',()=>{[...button.parentElement.children].forEach(el=>el.classList.remove('active'));button.classList.add('active');}));
bindDemoActions(); renderLibrary();
