const materials = [
  { id:1, type:"典例素材", title:"“背包书记”把群众诉求记在随身本上", summary:"基层干部坚持走村入户，将群众反映的问题逐项记录、限时办理。", tags:["品德","群众意识","基层治理","担当"], body:"某地基层干部坚持随身携带民情记录本，每周进村入户，记录道路维修、养老服务、产业帮扶等诉求，并建立办理台账。", use:"适用于群众路线、基层干部担当、调查研究、为民服务等主题。" },
  { id:2, type:"热点案例", title:"政务服务从“群众跑腿”转向“数据跑路”", summary:"多地推动跨部门数据共享，让高频事项实现一次提交、并联办理。", tags:["科技","基层治理","数字政府","便民服务"], body:"部分地区通过统一数据平台整合公安、人社、民政等部门信息，把串联审批改为并联协同。", use:"用于数字政府、技术赋能、服务型政府等题目时，应兼顾效率与数字鸿沟。" },
  { id:3, type:"人物典例", title:"文物修复师：择一事，终一生", summary:"在缓慢细致的修复工作中，以耐心和专业守护文化记忆。", tags:["品德","爱岗敬业","文化","工匠精神"], body:"文物修复工作往往需要数月甚至数年，修复师用长期主义守护文化遗产。", use:"适合爱岗敬业、文化传承、工匠精神、青年职业选择等主题。" },
  { id:4, type:"地方实践", title:"社区议事厅：把矛盾化解在家门口", summary:"居民、物业、社区工作者围绕公共事务共同协商。", tags:["基层治理","协商民主","社区","群众意识"], body:"社区围绕停车、加装电梯、公共空间等议题组织居民议事，形成可执行方案并公开进度。", use:"适用于基层协商、矛盾调解、社区治理等题目。" },
  { id:5, type:"科技案例", title:"人工智能进入公共服务后的效率与边界", summary:"效率、隐私、公平和可解释性需要同步考虑。", tags:["科技","人工智能","基层治理","风险意识"], body:"智能客服和辅助审批能提高效率，但数据偏差、信息保护和特殊群体使用困难也需重视。", use:"可采用“肯定价值—分析风险—提出边界”的表达结构。" },
  { id:6, type:"文化案例", title:"年轻人用短视频让非遗被更多人看见", summary:"传统技艺借助新表达触达年轻受众。", tags:["文化","创新","青年","新媒体"], body:"年轻创作者用短视频、直播和数字展览呈现传统技艺，使小众非遗获得新关注。", use:"适合文化传承、青年担当、网络传播等题目。" },
  { id:7, type:"人物典例", title:"重庆山火中的摩托车志愿者：凡人微光汇成救援力量", summary:"山火救援中，众多普通市民主动运送物资、保障通道，用实际行动回应公共需要。", tags:["乐于助人","志愿服务","青年担当","重庆"], body:"面对突发山火，摩托车骑手、社区居民和社会志愿者自发参与物资转运、道路引导和后勤保障。个体力量通过组织协同形成了强大的社会互助网络。", use:"可用于乐于助人、社会责任、青年担当、基层应急和社会动员等题目。答题时既要赞扬善意，也要强调专业救援、统一调度和安全边界。" },
  { id:8, type:"改革案例", title:"浙江“最多跑一次”：以流程再造回应群众办事痛点", summary:"从部门视角转向群众视角，通过数据共享和事项整合改善政务体验。", tags:["浙江","数字政府","为民服务","营商环境"], body:"改革围绕群众和企业办事需求，推动事项标准化、材料精简、数据共享和跨部门协同，让更多事项从多头办理转向一次提交、协同完成。", use:"适合数字政府、服务型政府、改革创新、营商环境等主题。建议使用“需求导向—流程再造—数据支撑—风险兜底”的逻辑。" },
  { id:9, type:"精神谱系", title:"塞罕坝建设者：在平凡岗位上创造绿色奇迹", summary:"几代建设者长期坚守艰苦地区，以专业和韧性推动生态修复。", tags:["爱岗敬业","担当作为","生态文明","河北"], body:"塞罕坝建设者长期面对高寒、风沙等困难，坚持植树造林、技术改进和生态管护，把荒原逐步建设为重要生态屏障。", use:"适用于爱岗敬业、艰苦奋斗、生态文明、长期主义和青年择业等主题。不要只讲奉献，还可补充科学方法与制度接力。" },
  { id:10, type:"人物典例", title:"樊锦诗守护敦煌：把个人选择融入文化传承", summary:"长期扎根文物保护一线，以专业研究和数字技术延续文化生命。", tags:["爱岗敬业","文化传承","担当作为","科技赋能"], body:"长期的文物保护工作需要耐心、专业和跨代接力。通过数字化采集、科学保护与公众传播，文化遗产获得更稳定的保存和更广泛的理解。", use:"可用于文化自信、敬业奉献、科技与文化融合、青年价值选择等题目。" },
  { id:11, type:"科技案例", title:"城市治理引入AI助手：效率提升之后仍需责任闭环", summary:"智能识别和辅助决策可以提高响应速度，但不能替代人的责任判断。", tags:["广东","人工智能","科技治理","风险意识"], body:"部分城市探索用智能系统辅助热线分派、事件识别和公共服务，但算法偏差、隐私保护、特殊群体使用和责任追溯仍需制度保障。", use:"适用于人工智能、智慧城市和技术治理题。可使用“效率价值—潜在风险—制度边界—人工兜底”的结构。" },
  { id:12, type:"基层实践", title:"社区微网格：让治理触角抵达居民身边", summary:"通过细化责任单元、常态走访和问题台账，提高社区问题发现与响应能力。", tags:["四川","基层治理","社区治理","群众工作"], body:"社区将服务和治理责任细化到更小单元，由社区工作者、网格力量和志愿者共同发现诉求、分类处置并反馈结果。", use:"适用于基层治理、社区服务、矛盾排查和应急响应。答题中要防止网格形式化和基层负担过重。" },
  { id:13, type:"公共服务", title:"暖心窗口延时服务：便利之外更要形成长效机制", summary:"工作人员主动帮助群众值得肯定，更应通过预约、帮办和弹性服务形成制度。", tags:["乐于助人","为民服务","窗口服务","制度建设"], body:"群众临近下班仍有紧急事项，窗口人员主动提供延时和帮办服务，解决了现实困难。个体善意需要通过服务标准、轮班安排和线上渠道转化为稳定机制。", use:"适用于服务意识、职业道德、好人好事和制度建设。可采用“肯定善意—分析需求—制度固化”的表达。" },
  { id:14, type:"团队案例", title:"跨部门联合专班：复杂任务中的协同不是简单相加", summary:"明确目标、责任清单和信息接口，才能避免多部门协作中的推诿与重复。", tags:["团队合作","组织协调","担当作为","执行力"], body:"面对涉及多个部门的复杂任务，联合专班通过任务分解、定期会商、数据共享和责任追踪形成工作闭环。", use:"适用于组织管理、人际协作、重大活动和专项整治题目。" }
];

const questions = [
  { id:101, year:"2026", region:"国考", type:"综合分析", title:"对于基层工作中“干部多跑腿，群众少跑路”的现象，你怎么看？", summary:"重点考查服务意识、数字政府与基层执行能力。", tags:["基层治理","群众意识","数字政府"] },
  { id:102, year:"2025", region:"浙江省考", type:"组织管理", title:"单位准备开展青年干部下基层调研活动，由你负责，你如何组织？", summary:"重点考查调研设计、对象覆盖、成果转化与过程协调。", tags:["调查研究","青年干部","组织管理"] },
  { id:103, year:"2025", region:"广东省考", type:"应急应变", title:"政务大厅系统故障，群众排队并产生不满，作为负责人你怎么办？", summary:"重点考查现场秩序、替代方案、信息沟通与复盘整改。", tags:["应急处置","群众工作","政务服务"] },
  { id:104, year:"2024", region:"江苏省考", type:"人际关系", title:"同事认为你工作方式太较真，影响团队氛围，你怎么办？", summary:"重点考查自我反思、原则性与协作方式。", tags:["沟通协调","团队合作","原则方法"] },
  { id:105, year:"2024", region:"四川省考", type:"综合分析", title:"一些年轻人通过短视频学习传统文化，对此你怎么看？", summary:"重点考查文化传播、形式创新与内容质量。", tags:["文化","青年","新媒体"] },
  { id:106, year:"2023", region:"山东省考", type:"综合分析", title:"人工智能逐渐应用于公共服务，有人期待，也有人担忧，你怎么看？", summary:"重点考查科技价值、治理风险与制度边界。", tags:["科技","人工智能","风险意识"] },
  { id:107, year:"2025模拟", region:"浙江专题", type:"综合分析", title:"某地持续推进政务服务“一件事一次办”，但部分老年人仍反映线上操作困难。对此你怎么看？", summary:"考查改革成效、数字适老化、线上线下协同与服务公平。", tags:["浙江","数字政府","为民服务","营商环境"] },
  { id:108, year:"2025模拟", region:"河北专题", type:"综合分析", title:"有人认为，新时代条件改善了，塞罕坝式的艰苦奋斗精神已经过时。请谈谈你的看法。", summary:"考查精神价值的时代转化、敬业担当与科学实干。", tags:["爱岗敬业","担当作为","生态文明","河北"] },
  { id:109, year:"2024模拟", region:"重庆专题", type:"组织管理", title:"单位计划开展“凡人善举·社区互助”志愿服务月活动，由你负责，你如何组织？", summary:"考查需求调研、志愿者管理、风险保障和长效机制。", tags:["乐于助人","志愿服务","组织管理","重庆"] },
  { id:110, year:"2025模拟", region:"广东专题", type:"综合分析", title:"城市治理中使用AI识别群众诉求，有人认为效率更高，也有人担心算法替代人工判断。你怎么看？", summary:"考查科技治理、隐私公平、责任边界与人工兜底。", tags:["广东","人工智能","科技治理","风险意识"] },
  { id:111, year:"2024模拟", region:"四川专题", type:"应急应变", title:"暴雨后社区多处积水，网格群信息混乱，独居老人求助，作为社区负责人你怎么办？", summary:"考查信息核实、重点人群保障、资源调度和灾后复盘。", tags:["四川","基层治理","应急处置","群众工作"] },
  { id:112, year:"2025模拟", region:"国考专题", type:"人际关系", title:"你负责一项跨部门任务，部分同事认为本部门工作最重，不愿继续配合，你怎么办？", summary:"考查目标共识、责任协调、换位沟通与工作闭环。", tags:["团队合作","组织协调","担当作为","执行力"] }
];

const libraryAngles = {
  "爱岗敬业":"价值认同 → 长期坚守 → 专业能力 → 平凡岗位创造公共价值",
  "担当作为":"明确责任 → 主动破题 → 协同推进 → 结果反馈与复盘",
  "乐于助人":"肯定善意 → 分析社会价值 → 强调专业边界 → 推动互助机制化",
  "为民服务":"群众需求 → 服务堵点 → 流程改进 → 公平可及与满意度",
  "浙江":"改革意识 → 数字赋能 → 群众体验 → 基层承接与适老兜底",
  "人工智能":"效率价值 → 算法风险 → 数据安全 → 人工兜底和责任追溯",
  "基层治理":"需求发现 → 多元协商 → 资源下沉 → 闭环反馈和减负增效",
  "文化传承":"文化价值 → 现实困境 → 创新表达 → 专业保护与人才接续",
  "组织管理":"明确目标 → 调研对象 → 流程分工 → 风险预案 → 效果复盘",
  "应急处置":"控制现场 → 重点保障 → 信息发布 → 资源调度 → 复盘整改"
};

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

function libraryMatchesTag(item, tag) {
  return item.tags.includes(tag) || item.type === tag || item.region?.includes(tag);
}

function ensureLibraryRelatedSheet() {
  if ($('#library-related-sheet')) return;
  document.body.insertAdjacentHTML('beforeend', `
    <section class="bottom-sheet library-related-sheet" id="library-related-sheet" aria-modal="true" role="dialog">
      <button class="sheet-close" data-close-related-sheet aria-label="关闭">×</button>
      <div id="library-related-detail"></div>
    </section>`);
  $('[data-close-related-sheet]').addEventListener('click', closeSheets);
}

function showRelatedLibrary(tag) {
  ensureLibraryRelatedSheet();
  const relatedQuestions=questions.filter(item=>libraryMatchesTag(item,tag)).slice(0,4);
  const relatedMaterials=materials.filter(item=>libraryMatchesTag(item,tag)).slice(0,4);
  const angle=libraryAngles[tag]||`${tag}的价值定位 → 现实问题 → 原因影响 → 可执行对策 → 长效机制`;
  $('#library-related-detail').innerHTML=`
    <span class="section-kicker">FREE KNOWLEDGE LINK</span>
    <h2>“${tag}”关联内容</h2>
    <p class="library-related-intro">真题、典例、搜索与标签关联永久免费开放。</p>
    <div class="library-related-summary"><div><strong>${relatedQuestions.length}</strong><span>关联真题</span></div><div><strong>${relatedMaterials.length}</strong><span>典例素材</span></div></div>
    <article class="library-answer-angle"><span>简要答题路径</span><strong>${angle}</strong></article>
    <div class="library-related-section"><h3>关联真题</h3>${relatedQuestions.map(q=>`<button data-related-question="${q.id}"><span>${q.year} · ${q.region}</span><strong>${q.title}</strong><small>${q.type} · ${q.tags.slice(0,3).join(' / ')}</small></button>`).join('')||'<p>题库正在补充该标签的专项题。</p>'}</div>
    <div class="library-related-section"><h3>可用典例</h3>${relatedMaterials.map(m=>`<button data-related-material="${m.id}"><span>${m.type}</span><strong>${m.title}</strong><small>${m.use}</small></button>`).join('')||'<p>素材库正在补充该标签的典例。</p>'}</div>
    <div class="library-related-actions"><button data-related-filter="questions" data-related-tag="${tag}">查看全部真题</button><button data-related-filter="materials" data-related-tag="${tag}">查看全部素材</button></div>`;
  openSheet('library-related-sheet');
  $$('[data-related-question]',$('#library-related-detail')).forEach(button=>button.addEventListener('click',()=>showQuestion(Number(button.dataset.relatedQuestion))));
  $$('[data-related-material]',$('#library-related-detail')).forEach(button=>button.addEventListener('click',()=>showMaterial(Number(button.dataset.relatedMaterial))));
  $$('[data-related-filter]',$('#library-related-detail')).forEach(button=>button.addEventListener('click',()=>{
    closeSheets(); navigate('library'); state.libraryView=button.dataset.relatedFilter; state.search=button.dataset.relatedTag; state.filter='全部';
    $$('[data-library-view]').forEach(tab=>tab.classList.toggle('active',tab.dataset.libraryView===state.libraryView));
    $$('.filter-chip').forEach(chip=>chip.classList.toggle('active',chip.dataset.filter==='全部'));
    $('#material-search').value=state.search; renderLibrary();
  }));
}

function bindSmartTags(root=document) {
  $$('[data-smart-tag]',root).forEach(button=>{
    if(button.dataset.smartTagBound)return;
    button.dataset.smartTagBound='true';
    button.addEventListener('click',event=>{event.stopPropagation();showRelatedLibrary(button.dataset.smartTag);});
  });
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
