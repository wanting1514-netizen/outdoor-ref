
import { Question, QuestionType } from './types';

export const quizData: Question[] = [
  // ==========================================
  // 1. 户外安全观 (p24-25)
  // ==========================================
  {
    id: 101,
    category: 'safety_concept',
    type: QuestionType.SINGLE_CHOICE,
    question: "根据文档，安全的定义是：指没有危险，没有损失的状态、过程、结果，且：",
    options: ["生命至上", "主体与环境相容相适", "预防为主", "风险可控"],
    correctAnswer: "主体与环境相容相适",
    explanation: "原文 p24：安全：指没有危险，没有损失的状态、过程、结果，主体与环境相容相适、则为安全。",
    pageReference: "p24"
  },
  {
    id: 102,
    category: 'safety_concept',
    type: QuestionType.FILL_IN_BLANK,
    question: "户外安全观中关于安全的通俗表述是：“无危为安，______”。",
    correctAnswer: "无损为全",
    explanation: "原文 p24：正所谓“无危为安，无损为全”。",
    pageReference: "p24"
  },
  {
    id: 103,
    category: 'safety_concept',
    type: QuestionType.MULTI_CHOICE,
    question: "正确的户外安全观包括以下哪些内容？",
    options: [
      "树立正确的自然观，要对大自然有“敬畏之心”",
      "树立“规矩意识”，正确处理“自由与服从”的关系",
      "提倡“探险”而不“冒险”，正确处理“探索与安全”的关系",
      "树立责任意识，正确处理“快乐与责任”的关系"
    ],
    correctAnswer: [
      "树立正确的自然观，要对大自然有“敬畏之心”",
      "树立“规矩意识”，正确处理“自由与服从”的关系",
      "提倡“探险”而不“冒险”，正确处理“探索与安全”的关系",
      "树立责任意识，正确处理“快乐与责任”的关系"
    ],
    explanation: "原文 p24：正确的户外安全观 4 点全部列出。",
    pageReference: "p24"
  },
  {
    id: 104,
    category: 'safety_concept',
    type: QuestionType.MULTI_CHOICE,
    question: "牢固树立安全意识中，“意识”表现为哪三者的统一？",
    options: ["知", "情", "意", "行"],
    correctAnswer: ["知", "情", "意"],
    explanation: "原文 p24-25：意识表现为知、情、意三者的统一。",
    pageReference: "p24-25"
  },
  {
    id: 105,
    category: 'safety_concept',
    type: QuestionType.MULTI_CHOICE,
    question: "安全意识中的“意”指意志，主要表现为：",
    options: ["自我克制", "毅力", "信心", "顽强不屈"],
    correctAnswer: ["自我克制", "毅力", "信心", "顽强不屈"],
    explanation: "原文 p25：意指意志，是指人类追求某种目的和理想时表现出来的自我克制、毅力、信心和顽强不屈等精神状态。",
    pageReference: "p25"
  },
  {
    id: 106,
    category: 'safety_concept',
    type: QuestionType.MULTI_CHOICE,
    question: "意识具有哪三大特点？",
    options: ["自觉性", "目的性", "能动性", "客观性"],
    correctAnswer: ["自觉性", "目的性", "能动性"],
    explanation: "原文 p25：意识具有自觉性（如饥饿）、目的性（如集中注意力）、能动性（如产生兴趣）3 大特点。",
    pageReference: "p25"
  },
  {
    id: 107,
    category: 'safety_concept',
    type: QuestionType.TRUE_FALSE,
    question: "户外安全工作需要带有强制性。",
    correctAnswer: true,
    explanation: "原文 p25：(4) 户外安全，需要带有强制性。",
    pageReference: "p25"
  },
  {
    id: 108,
    category: 'safety_concept',
    type: QuestionType.SINGLE_CHOICE,
    question: "户外安全工作的最终结果是：",
    options: ["消除一切隐患", "没有安全问题的发生", "救援体系完善", "保险全覆盖"],
    correctAnswer: "没有安全问题的发生",
    explanation: "原文 p25：户外安全工作的最终结果，就是没有安全问题的发生。",
    pageReference: "p25"
  },
  {
    id: 109,
    category: 'safety_concept',
    type: QuestionType.SINGLE_CHOICE,
    question: "“情”指情感，是指人类对 ______ 的感受和评价。",
    options: ["客观事物", "主观臆断", "风险评估", "比赛结果"],
    correctAnswer: "客观事物",
    explanation: "原文 p25：情指情感，是指人类对客观事物的感受和评价。",
    pageReference: "p25"
  },
  {
    id: 110,
    category: 'safety_concept',
    type: QuestionType.MULTI_CHOICE,
    question: "全面落实户外安全观，需要从哪三个方面把握户外安全？",
    options: ["状态", "过程", "结果", "预案"],
    correctAnswer: ["状态", "过程", "结果"],
    explanation: "原文 p25：(2) 从状态、过程、结果三方面把握户外安全。",
    pageReference: "p25"
  },
  {
    id: 111,
    category: 'safety_concept',
    type: QuestionType.FILL_IN_BLANK,
    question: "个人安全意识的获得，需要 ______ 的学习和实践的积累。",
    correctAnswer: "理论",
    explanation: "原文 p25：个人安全意识的获得，需要理论的学习和实践的积累。",
    pageReference: "p25"
  },

  // ==========================================
  // 2. 裁判工作概论 (p26-27, p3)
  // ==========================================
  {
    id: 201,
    category: 'referee_basics',
    type: QuestionType.SINGLE_CHOICE,
    question: "裁判员既是竞赛中的“执法人员”，又是竞赛的：",
    options: ["服务人员", "组织者和领导者", "旁观者", "辅助人员"],
    correctAnswer: "组织者和领导者",
    explanation: "原文 p26：裁判员既是竞赛中的“执法人员”，又是竞赛的组织者和领导者。",
    pageReference: "p26"
  },
  {
    id: 202,
    category: 'referee_basics',
    type: QuestionType.MULTI_CHOICE,
    question: "裁判员的基本要求包括哪些？",
    options: ["坚持原则", "精通业务", "严格的组织纪律", "具备一定的体能、技能"],
    correctAnswer: ["坚持原则", "精通业务", "严格的组织纪律", "具备一定的体能、技能"],
    explanation: "原文 p26：3、裁判员的基本要求（1）-（4）。",
    pageReference: "p26"
  },
  {
    id: 203,
    category: 'referee_basics',
    type: QuestionType.MULTI_CHOICE,
    question: "竞赛规程的基本原则是：",
    options: ["可行性原则", "公平性原则", "稳定性原则", "灵活性原则"],
    correctAnswer: ["可行性原则", "公平性原则", "稳定性原则"],
    explanation: "原文 p26：三、3、竞赛规程的基本原则：可行性、公平性、稳定性。",
    pageReference: "p26"
  },
  {
    id: 204,
    category: 'referee_basics',
    type: QuestionType.SINGLE_CHOICE,
    question: "竞赛规则是某一体育项目竞赛的“通则”，其特点是：",
    options: ["经常变化", "相对稳定", "每场比赛都不同", "由裁判长临时决定"],
    correctAnswer: "相对稳定",
    explanation: "原文 p26：竞赛规则是某一体育项目竞赛的“通则”，相对稳定。",
    pageReference: "p26"
  },
  {
    id: 205,
    category: 'referee_basics',
    type: QuestionType.MULTI_CHOICE,
    question: "户外裁判员工作的特殊性表现在哪些方面？（6点）",
    options: ["裁判工作", "保护工作", "后勤工作", "协调工作", "救援工作", "其他工作"],
    correctAnswer: ["裁判工作", "保护工作", "后勤工作", "协调工作", "救援工作", "其他工作"],
    explanation: "原文 p27：户外裁判员工作的特殊性 6 点：裁判、保护、后勤、协调、救援、其他（如协助记者）。",
    pageReference: "p27"
  },
  {
    id: 206,
    category: 'referee_basics',
    type: QuestionType.SINGLE_CHOICE,
    question: "在赛事评价体系（六字方针）中，“顺畅”的分值估计是：",
    options: ["60-70 分", "71-85 分", "86-95 分", "90-100 分"],
    correctAnswer: "71-85 分",
    explanation: "原文 p3：(1)安全60-70，(2)顺畅71-85，(3)精彩86-95。",
    pageReference: "p3"
  },
  {
    id: 207,
    category: 'referee_basics',
    type: QuestionType.SINGLE_CHOICE,
    question: "“安全监督”这一特殊裁判工作，一般由谁担任？",
    options: ["志愿者", "当地向导", "同行中经验丰富、具备一定技术级别的人员", "赞助商代表"],
    correctAnswer: "同行中经验丰富、具备一定技术级别的人员",
    explanation: "原文 p27：一般由同行中经验丰富、具备一定技术级别的人员担任。",
    pageReference: "p27"
  },
  {
    id: 208,
    category: 'referee_basics',
    type: QuestionType.FILL_IN_BLANK,
    question: "山地户外运动副总裁判长至少需要设置 ______ 名。",
    correctAnswer: "2",
    explanation: "原文 p27 (OCR page 3)：山地户外运动副总裁判长至少需要设置 2 名。",
    pageReference: "p27/p3"
  },
  {
    id: 209,
    category: 'referee_basics',
    type: QuestionType.MULTI_CHOICE,
    question: "裁判员的基本任务包括：",
    options: ["维持竞赛秩序", "维持竞赛正义", "创造世界纪录", "选拔优秀人才"],
    correctAnswer: ["维持竞赛秩序", "维持竞赛正义"],
    explanation: "原文 p26：4、裁判员基本任务：（1）维持竞赛秩序（2）维持竞赛正义。",
    pageReference: "p26"
  },
  {
    id: 210,
    category: 'referee_basics',
    type: QuestionType.TRUE_FALSE,
    question: "竞赛规程是由竞赛组织委员会（组委会）根据竞赛计划而制定的。",
    correctAnswer: true,
    explanation: "原文 p26：竞赛规程是由竞赛组织委员会（组委会）根据竞赛计划而制定的。",
    pageReference: "p26"
  },
  {
    id: 211,
    category: 'referee_basics',
    type: QuestionType.SINGLE_CHOICE,
    question: "某一比赛规则如有变化，可用什么方式修订？",
    options: ["口头通知", "补充规则", "会议记录", "赛后补发"],
    correctAnswer: "补充规则",
    explanation: "原文 p26：具体某一比赛规则如有变化，可用“补充规则”方式修订。",
    pageReference: "p26"
  },
  {
    id: 212,
    category: 'referee_basics',
    type: QuestionType.MULTI_CHOICE,
    question: "裁判法（户外赛）主要内容包括哪些？（选出3个）",
    options: ["技术会方法", "路标设置方法", "警告方法", "媒体采访方法"],
    correctAnswer: ["技术会方法", "路标设置方法", "警告方法"],
    explanation: "原文 p26：列举了12点裁判法内容，媒体采访不在其中。",
    pageReference: "p26"
  },

  // ==========================================
  // 3. 组织与管理 (p5, p30-31, p101-104)
  // ==========================================
  {
    id: 301,
    category: 'org_management',
    type: QuestionType.MULTI_CHOICE,
    question: "赛事手册通常包括哪四类？",
    options: ["会务手册", "秩序册", "裁判手册", "运动员手册"],
    correctAnswer: ["会务手册", "秩序册", "裁判手册", "运动员手册"],
    explanation: "原文 p5：一、4类：会务手册 秩序册 裁判手册 运动员手册。",
    pageReference: "p5"
  },
  {
    id: 302,
    category: 'org_management',
    type: QuestionType.SINGLE_CHOICE,
    question: "制作赛事手册时，内容要求是：",
    options: ["越详细越好", "精确且简洁", "多用图片", "内容丰富"],
    correctAnswer: "精确且简洁",
    explanation: "原文 p5：1. 内容要“精确且简洁”。",
    pageReference: "p5"
  },
  {
    id: 303,
    category: 'org_management',
    type: QuestionType.MULTI_CHOICE,
    question: "户外赛工作流程中，赛前准备阶段包括：",
    options: ["举办地合作意向", "初勘", "定线详勘", "发布竞赛通知"],
    correctAnswer: ["举办地合作意向", "初勘", "定线详勘", "发布竞赛通知"],
    explanation: "原文 p30-31：户外赛的工作流程 12 点中的部分内容。",
    pageReference: "p30-31"
  },
  {
    id: 304,
    category: 'org_management',
    type: QuestionType.MULTI_CHOICE,
    question: "后勤裁判的“三个保障”是指：",
    options: ["服务保障", "竞技（赛）保障", "安全保障", "资金保障"],
    correctAnswer: ["服务保障", "竞技（赛）保障", "安全保障"],
    explanation: "原文 p11/p104：后勤裁判的三个保障：服务保障、竞技（赛）保障、安全保障。",
    pageReference: "p11/p104"
  },
  {
    id: 305,
    category: 'org_management',
    type: QuestionType.MULTI_CHOICE,
    question: "后勤裁判的“保障后勤”具体内容包括：",
    options: ["通讯", "救援", "气象", "安保"],
    correctAnswer: ["通讯", "救援", "气象", "安保"],
    explanation: "原文 p11/p104：保障后勤：通讯 救援 气象 安保。",
    pageReference: "p104"
  },
  {
    id: 306,
    category: 'org_management',
    type: QuestionType.MULTI_CHOICE,
    question: "赛事评价体系中，“精彩”层次的分值估计是：",
    options: ["60-70", "71-85", "86-95"],
    correctAnswer: ["86-95"],
    explanation: "原文 p3：(3)“精彩”分值估计：86—95 分。",
    pageReference: "p3"
  },
  {
    id: 307,
    category: 'org_management',
    type: QuestionType.SINGLE_CHOICE,
    question: "赛事纠纷处理委员会意见不统一时，应按照什么原则表决？",
    options: ["总裁判长决定", "简单多数", "三分之二多数", "搁置争议"],
    correctAnswer: "简单多数",
    explanation: "原文 p3：(2) 意见不统一时按照简单多数的原则，投票表决。",
    pageReference: "p3"
  },
  {
    id: 308,
    category: 'org_management',
    type: QuestionType.SINGLE_CHOICE,
    question: "总裁判长一般也是比赛的：",
    options: ["赞助商", "定线员", "急救队长", "主持人"],
    correctAnswer: "定线员",
    explanation: "原文 p3：总裁判长一般也是比赛的定线员，制定并参与试线工作。",
    pageReference: "p3"
  },
  {
    id: 309,
    category: 'org_management',
    type: QuestionType.MULTI_CHOICE,
    question: "定线的基本原则包括（6点中的）：",
    options: ["满足竞赛项目需要", "便于裁判工作", "便于后勤支持", "便于观看和记者报道", "不影响环保"],
    correctAnswer: ["满足竞赛项目需要", "便于裁判工作", "便于后勤支持", "便于观看和记者报道", "不影响环保"],
    explanation: "原文 p30-31：定线的基本原则6点。",
    pageReference: "p30-31"
  },
  {
    id: 310,
    category: 'org_management',
    type: QuestionType.FILL_IN_BLANK,
    question: "关门点（关门时间）的计算通常是：最快运动员速度 x ______。",
    correctAnswer: "2",
    explanation: "原文 p31：关门点（最快运动员速度 x2）。",
    pageReference: "p31"
  },
  {
    id: 311,
    category: 'org_management',
    type: QuestionType.MULTI_CHOICE,
    question: "赛后工作（工作流程-赛后工作）包括：",
    options: ["垃圾清理", "费用结算", "赛后总结", "装备回收整理"],
    correctAnswer: ["垃圾清理", "费用结算", "赛后总结", "装备回收整理"],
    explanation: "原文 p11/p104：赛后工作包含垃圾、费用、总结、装备。",
    pageReference: "p104"
  },
  {
    id: 312,
    category: 'org_management',
    type: QuestionType.TRUE_FALSE,
    question: "赛事纠纷处理委员会负责对对抗诉做出裁决，也可干涉比赛事务。",
    correctAnswer: false,
    explanation: "原文 p3：(7) 除上述规定外，赛事纠纷处理委员会不得干涉任何比赛事务。",
    pageReference: "p3"
  },

  // ==========================================
  // 4. 风险管理 (p32-34, p5)
  // ==========================================
  {
    id: 401,
    category: 'risk_management',
    type: QuestionType.SINGLE_CHOICE,
    question: "风险就是指某种不幸事件发生的 ______ 与其产生的后果的组合。",
    options: ["必然性", "可能性", "随机性", "突发性"],
    correctAnswer: "可能性",
    explanation: "原文 p32：风险就是指某种不幸事件发生的可能性与其产生的后果的组合。",
    pageReference: "p32"
  },
  {
    id: 402,
    category: 'risk_management',
    type: QuestionType.MULTI_CHOICE,
    question: "对风险的认知包括哪些方面？",
    options: ["风险是客观存在的", "风险存在未知性和不确定性", "风险有可控和不可控两种", "风险是可以完全消除的"],
    correctAnswer: ["风险是客观存在的", "风险存在未知性和不确定性", "风险有可控和不可控两种"],
    explanation: "原文 p32：对风险的认知三点。",
    pageReference: "p32"
  },
  {
    id: 403,
    category: 'risk_management',
    type: QuestionType.SINGLE_CHOICE,
    question: "风险与安全的关系是：",
    options: ["相互独立", "对立统一", "完全排斥", "没有关系"],
    correctAnswer: "对立统一",
    explanation: "原文 p32：风险与安全是对立统一关系。",
    pageReference: "p32"
  },
  {
    id: 404,
    category: 'risk_management',
    type: QuestionType.MULTI_CHOICE,
    question: "户外赛事造成风险的因素主要包括：",
    options: ["自然因素", "人为因素", "突发因素", "耦合因素"],
    correctAnswer: ["自然因素", "人为因素", "突发因素", "耦合因素"],
    explanation: "原文 p33：户外赛事造成风险的因素：自然、人为、突发、耦合。",
    pageReference: "p33"
  },
  {
    id: 405,
    category: 'risk_management',
    type: QuestionType.MULTI_CHOICE,
    question: "全面把控赛事风险的手段方法包括：",
    options: ["审核参赛队伍资格", "体检报告", "风险告知书", "装备检查", "技术操作培训", "运动员技术会"],
    correctAnswer: ["审核参赛队伍资格", "体检报告", "风险告知书", "装备检查", "技术操作培训", "运动员技术会"],
    explanation: "原文 p33-34：全面把控赛事风险的手段方法（6个）。",
    pageReference: "p33-34"
  },
  {
    id: 406,
    category: 'risk_management',
    type: QuestionType.FILL_IN_BLANK,
    question: "体检报告审核中，高危项目的年龄要求通常是 ______ 岁。",
    correctAnswer: "18-63",
    explanation: "原文 p34：体检报告；高危 18-63 非高危 18-65。",
    pageReference: "p34"
  },
  {
    id: 407,
    category: 'risk_management',
    type: QuestionType.SHORT_ANSWER,
    question: "绳索技能设置中，“两两”检查制度的具体含义是什么？（10分必背题）",
    correctAnswer: "“一两”检查运动员穿戴安全设备情况，检查运动员安全装备与绳索之间的连接情况；“二两”每个环节必须有两个裁判独立检查。",
    explanation: "原文 p5：严格执行“两两”检查制度的具体描述。",
    pageReference: "p5"
  },
  {
    id: 408,
    category: 'risk_management',
    type: QuestionType.SINGLE_CHOICE,
    question: "主操作台的保护点设置不得少于 ______ 处。",
    correctAnswer: "2",
    options: ["1", "2", "3", "4"],
    explanation: "原文 p5：主操作台的保护点设置不得少于 2 处。",
    pageReference: "p5"
  },
  {
    id: 409,
    category: 'risk_management',
    type: QuestionType.MULTI_CHOICE,
    question: "山地越野赛活动符合以下哪些指标之一即视为“高危险赛事”？",
    options: ["有海拔 3500 米以上的路线", "有夜间赛程安排", "距离超过 42.195 千米", "有绳索技术装备使用"],
    correctAnswer: ["有海拔 3500 米以上的路线", "有夜间赛程安排", "距离超过 42.195 千米"],
    explanation: "原文 p36-37：山地越野赛高危险指标 3 项。第 4 项是山地多项赛的指标。",
    pageReference: "p36-37"
  },
  {
    id: 410,
    category: 'risk_management',
    type: QuestionType.MULTI_CHOICE,
    question: "户外拓展赛事活动符合以下哪些指标视为高危？",
    options: ["使用专业技术装备", "设置有距离地面 2 米以上的项目", "距离超过 10 公里", "有游泳项目"],
    correctAnswer: ["使用专业技术装备", "设置有距离地面 2 米以上的项目"],
    explanation: "原文 p37：户外拓展赛事活动指标：1 使用专业技术装备；2 设置有距离地面 2 米以上的项目。",
    pageReference: "p37"
  },
  {
    id: 411,
    category: 'risk_management',
    type: QuestionType.MULTI_CHOICE,
    question: "对赛中存在安全隐患的应对方法包括：",
    options: ["交通管制", "工作人员警示", "防止动物伤害", "医疗救援安保方案", "危险路段技术处理", "紧急预案"],
    correctAnswer: ["交通管制", "工作人员警示", "防止动物伤害", "医疗救援安保方案", "危险路段技术处理", "紧急预案"],
    explanation: "原文 p34：对赛中存在安全隐患的应对方法（8个中的部分）。",
    pageReference: "p34"
  },
  {
    id: 412,
    category: 'risk_management',
    type: QuestionType.TRUE_FALSE,
    question: "一般而言，户外赛事的风险越大，挑战就越大，赛事就越精彩。",
    correctAnswer: true,
    explanation: "原文 p32：一般而言，户外赛事的风险越大，挑战就越大，赛事就越精彩。",
    pageReference: "p32"
  },
  {
    id: 413,
    category: 'risk_management',
    type: QuestionType.SINGLE_CHOICE,
    question: "熟练掌握赛事中发现风险的基本步骤有几个？",
    options: ["2个", "3个", "4个", "5个"],
    correctAnswer: "3个",
    explanation: "原文 p33：一、熟练掌握赛事中发现风险的基本步骤（3 步）。",
    pageReference: "p33"
  },
  {
    id: 414,
    category: 'risk_management',
    type: QuestionType.FILL_IN_BLANK,
    question: "对赛事中突发险情（应急措施），应迅速摸清情况，熟悉医疗安保方案，并紧急报告 ______。",
    correctAnswer: "上级",
    explanation: "原文 p5：(三) 紧急报告上级，以备启动应急预案。",
    pageReference: "p5"
  },

  // ==========================================
  // 5. 竞赛规则与执裁 (p36, p98, p101)
  // ==========================================
  {
    id: 501,
    category: 'rules_officiating',
    type: QuestionType.MULTI_CHOICE,
    question: "制定竞赛规则的基本原则是：",
    options: ["权威性", "可操作性", "稳定性", "公平性"],
    correctAnswer: ["权威性", "可操作性", "稳定性"],
    explanation: "原文 p36：2、制定竞赛规则的基本原则：权威性、可操作性、稳定性。",
    pageReference: "p36"
  },
  {
    id: 502,
    category: 'rules_officiating',
    type: QuestionType.MULTI_CHOICE,
    question: "竞赛规则的基本功能包括：",
    options: ["制约功能", "协调功能", "促进功能", "盈利功能"],
    correctAnswer: ["制约功能", "协调功能", "促进功能"],
    explanation: "原文 p36：1.制约功能；2.协调功能；3 促进功能。",
    pageReference: "p36"
  },
  {
    id: 503,
    category: 'rules_officiating',
    type: QuestionType.MULTI_CHOICE,
    question: "探险越野赛的四大基本组成要素包括：",
    options: ["长距离大耐力", "模拟探险", "无机械动力", "定向（导航）技术"],
    correctAnswer: ["长距离大耐力", "模拟探险", "无机械动力", "定向（导航）技术"],
    explanation: "原文 p98：探险越野赛四大基本组成要素。",
    pageReference: "p98"
  },
  {
    id: 504,
    category: 'rules_officiating',
    type: QuestionType.TRUE_FALSE,
    question: "山地车比赛中，所有运动员必须穿戴头盔，否则不允许参加比赛。",
    correctAnswer: true,
    explanation: "原文 p98：山地车比赛，所有运动员必须穿戴头盔。",
    pageReference: "p98"
  },
  {
    id: 505,
    category: 'rules_officiating',
    type: QuestionType.SINGLE_CHOICE,
    question: "山地车比赛中，不遵守“推行”规定的，将被罚时：",
    options: ["5 分钟", "10 分钟", "15 分钟", "取消成绩"],
    correctAnswer: "10 分钟",
    explanation: "原文 p98：不遵守“推行”规定的，罚时 10 分钟。",
    pageReference: "p98"
  },
  {
    id: 506,
    category: 'rules_officiating',
    type: QuestionType.SINGLE_CHOICE,
    question: "山地车团队赛中，队员之间距离不得超过：",
    options: ["50 米", "100 米", "150 米", "200 米"],
    correctAnswer: "100 米",
    explanation: "原文 p98：团队赛中，队员之间距离不得超过 100 米。",
    pageReference: "p98"
  },
  {
    id: 507,
    category: 'rules_officiating',
    type: QuestionType.TRUE_FALSE,
    question: "绳索项目中，原则上采用“双保护”措施，即每名运动员必须有主保护和副保护。",
    correctAnswer: true,
    explanation: "原文 p98：(3)原则上，本项目采用“双保护”措施。",
    pageReference: "p98"
  },
  {
    id: 508,
    category: 'rules_officiating',
    type: QuestionType.SINGLE_CHOICE,
    question: "关于医疗救护，运动员接受静脉注射一次若小于等于 100ml，将被罚时：",
    options: ["5 分钟", "10 分钟", "20 分钟", "不罚时"],
    correctAnswer: "10 分钟",
    explanation: "原文 p98/p100：运动员接受静脉注射，一次小于等于 100ml，罚时 10 分钟。",
    pageReference: "p100"
  },
  {
    id: 509,
    category: 'rules_officiating',
    type: QuestionType.TRUE_FALSE,
    question: "在户外比赛中，医生的决定是最终决定。",
    correctAnswer: true,
    explanation: "原文 p98/p100：(1)医生的决定是最终决定。",
    pageReference: "p100"
  },
  {
    id: 510,
    category: 'rules_officiating',
    type: QuestionType.MULTI_CHOICE,
    question: "线路裁判的基本素质包括哪些？",
    options: ["具备良好的身体素质及体能", "熟悉并理解竞赛规程及规则", "熟练掌握 GPS 相关知识", "具备环保意识"],
    correctAnswer: ["具备良好的身体素质及体能", "熟悉并理解竞赛规程及规则", "熟练掌握 GPS 相关知识", "具备环保意识"],
    explanation: "原文 p98/p7：线路裁判基本素质 6 点。",
    pageReference: "p7"
  },
  {
    id: 511,
    category: 'rules_officiating',
    type: QuestionType.SINGLE_CHOICE,
    question: "交替站（TA 站）的定义是：项目与项目之间进行 ______ 的站点。",
    options: ["休息", "转换", "补给", "医疗"],
    correctAnswer: "转换",
    explanation: "原文 p101：交替站（TA 站）：项目与项目之间进行转换的站点。",
    pageReference: "p101"
  },
  {
    id: 512,
    category: 'rules_officiating',
    type: QuestionType.MULTI_CHOICE,
    question: "交替站（TA 站）设置的原则包括：",
    options: ["公平性", "封闭性", "顺畅性", "美观性"],
    correctAnswer: ["公平性", "封闭性", "顺畅性"],
    explanation: "原文 p101：交替站设置的原则：公平性、封闭性、顺畅性。",
    pageReference: "p101"
  },
  {
    id: 513,
    category: 'rules_officiating',
    type: QuestionType.FILL_IN_BLANK,
    question: "TA1 站必须在起点发枪前 ______ 小时完成布置。",
    correctAnswer: "1",
    explanation: "原文 p102：TA1 必须在起点发枪前 1 小时完成布置。",
    pageReference: "p102"
  },
  {
    id: 514,
    category: 'rules_officiating',
    type: QuestionType.MULTI_CHOICE,
    question: "线路裁判执法原则包括：",
    options: ["领会定线员意图", "擅自改变布置", "做好赛前准备", "保证赛事安全顺畅"],
    correctAnswer: ["领会定线员意图", "做好赛前准备", "保证赛事安全顺畅"],
    explanation: "原文 p98：不得在不请示的情况下擅自改变工作。",
    pageReference: "p98"
  },
  {
    id: 515,
    category: 'rules_officiating',
    type: QuestionType.MULTI_CHOICE,
    question: "线路裁判的执法方式包括：",
    options: ["语言", "手势", "口哨", "旗子"],
    correctAnswer: ["语言", "手势", "口哨", "旗子"],
    explanation: "原文 p98：执法方式：语言、手势、口哨、旗子。",
    pageReference: "p98"
  },
  {
    id: 516,
    category: 'rules_officiating',
    type: QuestionType.TRUE_FALSE,
    question: "在绳索项目中，运动员完成项目后必须尽快离开项目区域。",
    correctAnswer: true,
    explanation: "原文 p98：(2)运动员完成绳索项目后，必须尽快离开项目区域。",
    pageReference: "p98"
  },
  {
    id: 517,
    category: 'rules_officiating',
    type: QuestionType.MULTI_CHOICE,
    question: "交替站（TA站）的工作任务包括：",
    options: ["设计布置交替站", "维护秩序", "手动记录时间", "提供补给", "协调安保医疗"],
    correctAnswer: ["设计布置交替站", "维护秩序", "手动记录时间", "提供补给", "协调安保医疗"],
    explanation: "原文 p101：工作任务7点，全选。",
    pageReference: "p101"
  },
  {
    id: 518,
    category: 'rules_officiating',
    type: QuestionType.MULTI_CHOICE,
    question: "中登协将探险越野赛分为哪三个等级？",
    options: ["A", "B", "C", "D"],
    correctAnswer: ["A", "B", "C"],
    explanation: "原文 p30：中登协将探险越野赛分为 A B C 三个等级。",
    pageReference: "p30"
  },
  {
    id: 519,
    category: 'rules_officiating',
    type: QuestionType.MULTI_CHOICE,
    question: "交替站（TA站）的裁判员站位分为：",
    options: ["前位（入口）", "中位（站内）", "后位（出口）", "外位（观众区）"],
    correctAnswer: ["前位（入口）", "中位（站内）", "后位（出口）"],
    explanation: "原文 p102：交替裁判员站位：前位、中位、后位。",
    pageReference: "p102"
  },

  // ==========================================
  // 6. 起终点与运动员 (p9-11)
  // ==========================================
  {
    id: 601,
    category: 'start_finish_athlete',
    type: QuestionType.SINGLE_CHOICE,
    question: "赛事起终点设置的功能区通常有多少个？",
    options: ["8 个", "10 个", "12 个", "14 个"],
    correctAnswer: "14 个",
    explanation: "原文 p9：功能区的设置？14 个功能区。",
    pageReference: "p9"
  },
  {
    id: 602,
    category: 'start_finish_athlete',
    type: QuestionType.MULTI_CHOICE,
    question: "起终点功能区包括以下哪些？",
    options: ["主席台", "运动员站位区", "检录区", "补给区", "成绩统计区", "医疗区"],
    correctAnswer: ["主席台", "运动员站位区", "检录区", "补给区", "成绩统计区", "医疗区"],
    explanation: "原文 p9：列举了14个功能区。",
    pageReference: "p9"
  },
  {
    id: 603,
    category: 'start_finish_athlete',
    type: QuestionType.SINGLE_CHOICE,
    question: "起点区域应使用明显的标志物进行标识，例如：",
    options: ["出发拱门", "旗帜", "地贴", "警戒线"],
    correctAnswer: "出发拱门",
    explanation: "原文 p9：起点区域应使用明显的标志物进行标识，例如出发拱门。",
    pageReference: "p9"
  },
  {
    id: 604,
    category: 'start_finish_athlete',
    type: QuestionType.SINGLE_CHOICE,
    question: "对于有强制装备要求的赛事，应设置：",
    options: ["出发隔离区", "休息区", "采访区", "售卖区"],
    correctAnswer: "出发隔离区",
    explanation: "原文 p9：对于有强制装备要求的赛事，应设置出发隔离区。",
    pageReference: "p9"
  },
  {
    id: 605,
    category: 'start_finish_athlete',
    type: QuestionType.FILL_IN_BLANK,
    question: "成绩在公示处公示 ______ 分钟无异议后，方可进行颁奖仪式。",
    correctAnswer: "15",
    explanation: "原文 p10：成绩公示处公示 15 分钟。",
    pageReference: "p10"
  },
  {
    id: 606,
    category: 'start_finish_athlete',
    type: QuestionType.MULTI_CHOICE,
    question: "检录流程通常包括：",
    options: ["核对运动员身份及组别", "检查号码布佩戴", "检查强制装备", "检查芯片对应"],
    correctAnswer: ["核对运动员身份及组别", "检查号码布佩戴", "检查强制装备", "检查芯片对应"],
    explanation: "原文 p10：检录流程内容。",
    pageReference: "p10"
  },
  {
    id: 607,
    category: 'start_finish_athlete',
    type: QuestionType.MULTI_CHOICE,
    question: "运动员服务的特点包括：",
    options: ["量化指标明确", "服务对象真实", "竞争压力巨大", "媒体关注度高"],
    correctAnswer: ["量化指标明确", "服务对象真实", "竞争压力巨大", "媒体关注度高"],
    explanation: "原文 p10：运动员服务的特点 4 点。",
    pageReference: "p10"
  },
  {
    id: 608,
    category: 'start_finish_athlete',
    type: QuestionType.MULTI_CHOICE,
    question: "运动员信息管理的基本原则是：",
    options: ["合法性原则", "安全性原则", "准确性原则", "保密性原则"],
    correctAnswer: ["合法性原则", "安全性原则", "准确性原则", "保密性原则"],
    explanation: "原文 p11：运动员信息管理的基本原则 4 点。",
    pageReference: "p11"
  },
  {
    id: 609,
    category: 'start_finish_athlete',
    type: QuestionType.SINGLE_CHOICE,
    question: "发令的准备工作中，在起跑线处需要拉好：",
    options: ["警戒线", "冲刺带", "隔离网", "广告牌"],
    correctAnswer: "冲刺带",
    explanation: "原文 p10：(三) 起跑线处拉好冲刺带。",
    pageReference: "p10"
  },
  {
    id: 610,
    category: 'start_finish_athlete',
    type: QuestionType.MULTI_CHOICE,
    question: "终点运动员保障工作包括：",
    options: ["保暖工作", "引导录入成绩", "分发奖牌", "引导领取补给", "医疗检查"],
    correctAnswer: ["保暖工作", "引导录入成绩", "分发奖牌", "引导领取补给", "医疗检查"],
    explanation: "原文 p10：终点运动员保障工作内容。",
    pageReference: "p10"
  },
  {
    id: 611,
    category: 'start_finish_athlete',
    type: QuestionType.SINGLE_CHOICE,
    question: "成绩公布流程中，计时裁判长核对成绩后，需经谁确认后签字？",
    options: ["裁判组长", "总裁判长", "技术代表", "赛事总监"],
    correctAnswer: "总裁判长",
    explanation: "原文 p10：总裁判长确认后签字。",
    pageReference: "p10"
  },
  {
    id: 612,
    category: 'start_finish_athlete',
    type: QuestionType.FILL_IN_BLANK,
    question: "终点收尾工作中，赛道裁判长收容返回后，需与 ______ 一起核对运动员人数。",
    correctAnswer: "起终点裁判",
    explanation: "原文 p10：待赛道裁判长收容返回后一起核对运动员人数（原文语境推断为起终点组）。",
    pageReference: "p10"
  }
];
