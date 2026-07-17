/* 面试练场 PRO：在免费真题素材库基础上，展示训练、报告、模板与指导权益。 */

const memberAngles = {
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

function insertMemberInterface() {
  document.querySelector('.topbar>div').insertAdjacentHTML('beforeend', '<span class="member-top-badge">PRO 全功能会员</span>');
  document.querySelector('.eyebrow').textContent = '公务员面试训练场 · MEMBER EDITION';
  document.querySelector('.status-pill').innerHTML = '<i></i> PRO 已解锁 · AI与排位不限次';
  document.querySelector('.profile-card .member-tag').textContent = 'PRO会员 · 2027.07到期';

  const homeProfile = document.querySelector('.home-profile-card');
  homeProfile.insertAdjacentHTML('afterend', `
    <article class="member-status-card">
      <div class="member-crown">PRO</div>
      <div><span>全部权益已生效</span><strong>AI训练、真人排位、深度报告、无限模板不限使用</strong><small>本月已节省预计 ¥286 · 连续会员 8 个月</small></div>
      <button data-nav="library">浏览免费题库 ›</button>
    </article>`);
  document.querySelector('.member-status-card [data-nav="library"]').addEventListener('click', () => navigate('library'));

  const smartCard = document.querySelector('.smart-search-card');
  smartCard.querySelector('span').textContent = '免费公共工具库';
  smartCard.querySelector('strong').textContent = '真题、典例、搜索与标签关联对所有用户开放';
  const unlockButton = smartCard.querySelector('button');
  unlockButton.removeAttribute('data-open-sheet');
  unlockButton.removeAttribute('data-demo-action');
  unlockButton.textContent = '永久免费 ✓';
  unlockButton.addEventListener('click', () => toast('真题素材工具库对所有用户永久免费'));

  document.querySelector('#ai-sheet .match-note').innerHTML = '<span>PRO会员训练权益</span><strong>不限次数 · 完整报告</strong>';
  document.querySelector('#match-sheet .match-note').insertAdjacentHTML('beforebegin', '<div class="member-unlimited-note">PRO会员：排位赛不限每日场次，优先匹配同段位活跃用户</div>');

  const reportLock = document.querySelector('.member-report-lock');
  reportLock.className = 'member-detailed-report';
  reportLock.innerHTML = `
    <div class="member-detail-head"><div><span>PRO 深度诊断</span><h3>近7次表达短板与训练建议</h3></div><em>已解锁</em></div>
    <div class="member-detail-grid">
      <article><span>口头禅</span><strong>“然后” 11次</strong><small>较上周下降 28%</small></article>
      <article><span>最长停顿</span><strong>3.2秒</strong><small>发生在对策转换处</small></article>
      <article><span>结构完整度</span><strong>86%</strong><small>结尾升华偏重复</small></article>
      <article><span>建议专项</span><strong>组织管理</strong><small>未来7天练习 5 题</small></article>
    </div>
    <button data-demo-action="已生成未来7天PRO训练计划">生成专项训练计划</button>`;

  const templateQuota = document.querySelector('.template-quota');
  templateQuota.innerHTML = '<div><span>PRO会员</span><strong>已创建 4 套 · 数量不限</strong><small>支持老师分享、圈子导入和答题时悬浮提示</small></div><button data-demo-action="已打开新模板编辑器">＋ 新建模板</button>';

  const memberMenuButton = document.querySelector("#page-profile button[data-open-sheet='membership-sheet']");
  memberMenuButton.querySelector('strong').textContent = 'PRO会员中心与充值';
  memberMenuButton.querySelector('small').textContent = '有效期至 2027.07 · 全权益已开启';

  const memberPanel = document.querySelector("[data-commerce-panel='member']");
  memberPanel.innerHTML = `
    <div class="member-active-plan"><span>当前套餐</span><strong>练场 PRO 年度会员</strong><small>有效期至 2027年7月17日 · 已连续开通8个月</small><em>生效中</em></div>
    <div class="benefit-list"><p>✓ AI训练、三人排位与好友房不限次数</p><p>✓ 表达细节、口头禅及专项计划完整报告</p><p>✓ 可视化答题模板不限套数</p><p>✓ 一对一指导会员价与优先预约</p><p>✓ 专属训练活动与会员身份标识</p></div>
    <div class="member-renew-row"><button data-demo-action="续费功能将在正式版接入">续费一年 ¥888</button><button data-demo-action="会员兑换码入口已打开">兑换会员</button></div>`;

  document.querySelector('.detailed-coach-list article:first-child>em').textContent = '会员价 ¥359/次';
  document.querySelector('.detailed-coach-list article:nth-child(2)>em').textContent = '会员价 ¥149/次';
}

showQuestion = function(id) {
  const q = questions.find(item => item.id === id);
  if (!q) return;
  const related = materials.filter(item => item.tags.some(tag => q.tags.includes(tag))).slice(0, 3);
  document.querySelector('#material-detail').innerHTML = `<div class="material-detail member-question-detail"><span class="material-detail-type">${q.year} · ${q.region} · ${q.type}</span><h2 class="material-detail-title">${q.title}</h2><p class="material-detail-summary">${q.summary}</p><div class="related-tags">${q.tags.map(tag => `<button data-smart-tag="${tag}"># ${tag} ✦</button>`).join('')}</div><div class="detail-divider"></div><h3>PRO审题索引</h3><div class="member-question-outline"><p><b>核心矛盾</b><span>公共价值、现实堵点与执行边界之间的平衡</span></p><p><b>建议结构</b><span>${memberAngles[q.tags[0]] || '表态定位 → 原因影响 → 对策闭环 → 价值升华'}</span></p><p><b>高分提醒</b><span>避免只有口号，对策补充执行主体、具体动作和反馈机制。</span></p></div><h3>关联典例</h3><div class="member-inline-materials">${related.map(item => `<button data-member-material="${item.id}"><strong>${item.title}</strong><small>${item.tags.slice(0,3).join(' / ')}</small></button>`).join('')}</div><button class="primary-button full" id="question-practice-now">用这道题开始AI训练</button></div>`;
  openSheet('material-sheet');
  bindSmartTags(document.querySelector('#material-detail'));
  document.querySelectorAll('#material-detail [data-member-material]').forEach(button => button.addEventListener('click', () => showMaterial(Number(button.dataset.memberMaterial))));
  document.querySelector('#question-practice-now').addEventListener('click', () => openSheet('ai-sheet'));
};

showMaterial = function(id) {
  const item = materials.find(material => material.id === id);
  if (!item) return;
  const related = questions.filter(q => q.tags.some(tag => item.tags.includes(tag))).slice(0, 3);
  document.querySelector('#material-detail').innerHTML = `<div class="material-detail member-material-detail"><span class="material-detail-type">${item.type} · 免费完整素材</span><h2 class="material-detail-title">${item.title}</h2><p class="material-detail-summary">${item.summary}</p><div class="related-tags">${item.tags.map(tag => `<button data-smart-tag="${tag}"># ${tag} ✦</button>`).join('')}</div><div class="detail-divider"></div><h3>案例内容</h3><p>${item.body}</p><h3>答题怎么用</h3><p>${item.use}</p><div class="member-material-formula"><span>PRO模板联动示例</span><strong>这个案例说明，个人善意和专业担当只有通过组织协同与制度保障，才能形成持续的公共价值。</strong></div><h3>可以练这些题</h3><div class="member-inline-materials">${related.map(q => `<button data-member-question="${q.id}"><strong>${q.title}</strong><small>${q.year} · ${q.region} · ${q.type}</small></button>`).join('')}</div><div class="member-index-actions"><button data-demo-action="已收藏到我的素材库">收藏素材</button><button data-demo-action="已加入现象分析模板">加入我的模板</button><button data-smart-tag="${item.tags[0]}">查看标签关联</button></div></div>`;
  openSheet('material-sheet');
  bindSmartTags(document.querySelector('#material-detail'));
  bindDemoActions(document.querySelector('#material-detail'));
  document.querySelectorAll('#material-detail [data-member-question]').forEach(button => button.addEventListener('click', () => showQuestion(Number(button.dataset.memberQuestion))));
};

insertMemberInterface();
bindDemoActions();
renderLibrary();
setTimeout(() => toast('欢迎进入面试练场 PRO，全功能权限已开启'), 350);
