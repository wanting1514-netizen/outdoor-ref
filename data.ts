import { Question, QuestionType } from './types';

export const quizData: Question[] = [
  // ==========================================
  // 第一部分：户外安全观 (Safety Concepts) -> Category: 'safety'
  // ==========================================
  {
    id: 1,
    category: 'safety',
    type: QuestionType.SINGLE_CHOICE,
    question: "根据《户外安全观》，安全的定义是指没有危险、没有损失的状态、过程和结果。正所谓：",
    options: ["居安思危，有备无患", "安全第一，预防为主", "无危为安，无损为全", "生命至上，安全为天"],
    correctAnswer: "无危为安，无损为全",
    explanation: "原文 p24：安全：指没有危险，没有损失的状态、过程、结果...正所谓“无危为安，无损为全”。",
    pageReference: "p24"
  },
  {
    id: 2,
    category: 'safety',
    type: QuestionType.FILL_IN_BLANK,
    question: "《户外安全观》中提到，安全是指没有危险、没有损失的___、过程和结果。",
    correctAnswer: "状态",
    explanation: "原文 p24：安全：指没有危险，没有损失的状态、过程、结果。",
    pageReference: "p24"
  },
  {
    id: 3,
    category: 'safety',
    type: QuestionType.MULTI_CHOICE,
    question: "正确的户外安全观包括以下哪些方面？",
    options: [
      "树立正确的自然观，要对大自然有“敬畏之心”",
      "树立“规矩意识”，正确处理“自由与服从”的关系",
      "提倡“冒险”而不是“探险”，追求刺激",
      "树立责任意识，正确处理“快乐与责任”的关系",
      "提倡“探险”而不“冒险”，正确处理“探索与安全”的关系"
    ],
    correctAnswer: [
      "树立正确的自然观，要对大自然有“敬畏之心”",
      "树立“规矩意识”，正确处理“自由与服从”的关系",
      "树立责任意识，正确处理“快乐与责任”的关系",
      "提倡“探险”而不“冒险”，正确处理“探索与安全”的关系"
    ],
    explanation: "原文 p24：正确的户外安全观4点：1）自然观... 2）规矩意识... 3）提倡“探险”而不“冒险”... 4）责任意识...",
    pageReference: "p24"
  },
  {
    id: 4,
    category: 'safety',
    type: QuestionType.SINGLE_CHOICE,
    question: "在处理“自由与服从”的关系时，我们应该树立什么意识？",
    options: ["自我意识", "规矩意识", "竞争意识", "服从意识"],
    correctAnswer: "规矩意识",
    explanation: "原文 p24：树立“规矩意识”，正确处理“自由与服从”的关系。",
    pageReference: "p24"
  },
  {
    id: 5,
    category: 'safety',
    type: QuestionType.SINGLE_CHOICE,
    question: "在处理“探索与安全”的关系时，提倡哪种行为？",
    options: ["冒险", "探险", "避险", "涉险"],
    correctAnswer: "探险",
    explanation: "原文 p24：提倡“探险”而不“冒险”，正确处理“探索与安全”的关系。",
    pageReference: "p24"
  },
  {
    id: 6,
    category: 'safety',
    type: QuestionType.TRUE_FALSE,
    question: "根据户外安全观，我们应该提倡“冒险”精神，勇于挑战极限。",
    correctAnswer: false,
    explanation: "原文 p24：提倡“探险”而不“冒险”。",
    pageReference: "p24"
  },
  {
    id: 7,
    category: 'safety',
    type: QuestionType.FILL_IN_BLANK,
    question: "牢固树立安全意识中，意识表现为___、情、意三者的统一。",
    correctAnswer: "知",
    explanation: "原文 p24-25：意识是赋予现实的心理现象的总体...表现为知、情、意三者的统一。",
    pageReference: "p24-25"
  },
  {
    id: 8,
    category: 'safety',
    type: QuestionType.SHORT_ANSWER,
    question: "风险与安全之间是什么关系？",
    correctAnswer: "对立统一关系",
    explanation: "原文 p32（二、风险与安全的关系）：风险与安全是对立统一关系。",
    pageReference: "p32"
  },
  {
    id: 51,
    category: 'safety',
    type: QuestionType.SINGLE_CHOICE,
    question: "在户外活动中，对于“快乐与责任”的关系，以下哪种说法是正确的？",
    options: ["快乐第一，责任第二", "只要快乐，可以忽略责任", "树立责任意识，在履行责任中寻找快乐", "责任是负担，会减少快乐"],
    correctAnswer: "树立责任意识，在履行责任中寻找快乐",
    explanation: "原文 p24：树立责任意识，正确处理“快乐与责任”的关系。",
    pageReference: "p24"
  },
  {
    id: 52,
    category: 'safety',
    type: QuestionType.TRUE_FALSE,
    question: "户外安全观认为，人定胜天，人类可以完全征服大自然。",
    correctAnswer: false,
    explanation: "原文 p24：树立正确的自然观，要对大自然有“敬畏之心”。",
    pageReference: "p24"
  },
  {
    id: 53,
    category: 'safety',
    type: QuestionType.MULTI_CHOICE,
    question: "以下行为不符合正确户外安全观的有：",
    options: ["为了抄近道进入未开发禁区", "出发前详细了解天气和路线", "隐瞒身体不适坚持参加高强度比赛", "严格遵守领队或裁判的指令"],
    correctAnswer: ["为了抄近道进入未开发禁区", "隐瞒身体不适坚持参加高强度比赛"],
    explanation: "违反了“规矩意识”和“对大自然的敬畏之心”，属于“冒险”而非“探险”。",
    pageReference: "p24-25"
  },

  // ==========================================
  // 第二部分：竞赛规程与规则 (Competition Rules) -> Category: 'rules'
  // ==========================================
  {
    id: 9,
    category: 'rules',
    type: QuestionType.MULTI_CHOICE,
    question: "竞赛规程的基本原则有哪些？",
    options: ["可行性原则", "公平性原则", "娱乐性原则", "稳定性原则", "盈利性原则"],
    correctAnswer: ["可行性原则", "公平性原则", "稳定性原则"],
    explanation: "原文 p26：3、竞赛规程的基本原则：（1）可行性原则（2）公平性原则（3）稳定性原则。",
    pageReference: "p26"
  },
  {
    id: 10,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "以下哪项不是竞赛规程的基本原则？",
    options: ["可行性原则", "公平性原则", "随机性原则", "稳定性原则"],
    correctAnswer: "随机性原则",
    explanation: "原文 p26：原则包括可行性、公平性、稳定性。",
    pageReference: "p26"
  },
  {
    id: 11,
    category: 'rules',
    type: QuestionType.FILL_IN_BLANK,
    question: "竞赛规程的三大原则是可行性原则、___原则和稳定性原则。",
    correctAnswer: "公平性",
    explanation: "原文 p26：竞赛规程的基本原则：（1）可行性原则（2）公平性原则（3）稳定性原则。",
    pageReference: "p26"
  },
  {
    id: 12,
    category: 'rules',
    type: QuestionType.SHORT_ANSWER,
    question: "户外裁判员工作的特殊性体现在哪6个方面？",
    correctAnswer: "裁判工作、保护工作、后勤工作、协调工作、救援工作、其他工作",
    explanation: "原文 p27：户外裁判员工作的特殊性：（6点）（1）裁判工作（2）保护工作（3）后勤工作（4）协调工作（5）救援工作（6）其他工作。",
    pageReference: "p27"
  },
  {
    id: 13,
    category: 'rules',
    type: QuestionType.MULTI_CHOICE,
    question: "户外裁判员工作的特殊性包含以下哪些？",
    options: ["裁判工作", "保护工作", "后勤工作", "媒体宣传", "救援工作"],
    correctAnswer: ["裁判工作", "保护工作", "后勤工作", "救援工作"],
    explanation: "原文 p27：包含裁判、保护、后勤、协调、救援、其他。",
    pageReference: "p27"
  },
  {
    id: 14,
    category: 'rules',
    type: QuestionType.TRUE_FALSE,
    question: "协助记者工作不属于户外裁判员的工作范畴。",
    correctAnswer: false,
    explanation: "原文 p27：（6）其他工作（比如协助记者等）。",
    pageReference: "p27"
  },
  {
    id: 15,
    category: 'rules',
    type: QuestionType.MULTI_CHOICE,
    question: "后勤裁判的“三个保障”是指？",
    options: ["服务保障", "竞技（赛）保障", "安全保障", "技术保障", "通信保障"],
    correctAnswer: ["服务保障", "竞技（赛）保障", "安全保障"],
    explanation: "原文 p104：后勤裁判的三个保障：服务保障、竞技（赛）保障、安全保障。",
    pageReference: "p104"
  },
  {
    id: 16,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "后勤裁判保障中，关于比赛进行的保障被称为？",
    options: ["服务保障", "竞技（赛）保障", "安全保障", "生活保障"],
    correctAnswer: "竞技（赛）保障",
    explanation: "根据原文 p104 推断：三个保障中针对竞技本身的即为竞技（赛）保障。",
    pageReference: "p104"
  },
  {
    id: 17,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "在赛事评价体系中，“安全”层次的分值估计是多少？",
    options: ["60-70 分", "71-85 分", "86-95 分", "90-100 分"],
    correctAnswer: "60-70 分",
    explanation: "原文 p3：（1）“安全”分值估计：60-70分。",
    pageReference: "p3"
  },
  {
    id: 18,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "在赛事评价体系中，“顺畅”层次的分值估计是多少？",
    options: ["60-70 分", "71-85 分", "86-95 分", "90-100 分"],
    correctAnswer: "71-85 分",
    explanation: "原文 p3：（2）“顺畅”分值估计：71-85分。",
    pageReference: "p3"
  },
  {
    id: 19,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "在赛事评价体系中，“精彩”层次的分值估计是多少？",
    options: ["60-70 分", "71-85 分", "86-95 分", "96-100 分"],
    correctAnswer: "86-95 分",
    explanation: "原文 p3：（3）“精彩”分值估计：86-95分。",
    pageReference: "p3"
  },
  {
    id: 20,
    category: 'rules',
    type: QuestionType.FILL_IN_BLANK,
    question: "赛事评价体系的六字方针是：安全、___、精彩。",
    correctAnswer: "顺畅",
    explanation: "原文 p3：六字方针对应三个层次：安全、顺畅、精彩。",
    pageReference: "p3"
  },
  {
    id: 21,
    category: 'rules',
    type: QuestionType.TRUE_FALSE,
    question: "赛事评价分值在 75 分属于“精彩”层次。",
    correctAnswer: false,
    explanation: "原文 p3：71-85分属于“顺畅”层次，86-95分才是“精彩”。",
    pageReference: "p3"
  },
  {
    id: 29,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "在山地车项目中，不遵守“推行”警示规定的，将面临多少时间的罚时？",
    options: ["2 分钟", "5 分钟", "10 分钟", "15 分钟"],
    correctAnswer: "10 分钟",
    explanation: "原文 p7：不遵守“推行”规定的，罚时 10 分钟。",
    pageReference: "p7"
  },
  {
    id: 30,
    category: 'rules',
    type: QuestionType.FILL_IN_BLANK,
    question: "山地车团队赛中，队员之间距离不得超过___米。",
    correctAnswer: "100",
    explanation: "原文 p7：团队赛中，队员之间距离不得超过 100 米。",
    pageReference: "p7"
  },
  {
    id: 31,
    category: 'rules',
    type: QuestionType.TRUE_FALSE,
    question: "山地车比赛中遇到“推行”标志可以选择骑行通过。",
    correctAnswer: false,
    explanation: "原文 p7：不遵守“推行”规定的，罚时 10 分钟。",
    pageReference: "p7"
  },
  {
    id: 32,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "山地车团队赛队员距离限制的目的是为了？",
    options: ["防止作弊", "确保团队协作", "方便计时", "以上都是"],
    correctAnswer: "确保团队协作",
    explanation: "推断自原文 p7：团队赛规则限制队员距离（100米），体现团队属性。",
    pageReference: "p7"
  },
  {
    id: 33,
    category: 'rules',
    type: QuestionType.MULTI_CHOICE,
    question: "交替站（TA站）设置的原则是什么？",
    options: ["公平性", "封闭性", "顺畅性", "美观性"],
    correctAnswer: ["公平性", "封闭性", "顺畅性"],
    explanation: "原文 p101：交替站设置的原则：公平性 封闭性 顺畅性。",
    pageReference: "p101"
  },
  {
    id: 34,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "以下哪个不是交替站（TA站）的设置原则？",
    options: ["封闭性", "开放性", "公平性", "顺畅性"],
    correctAnswer: "开放性",
    explanation: "原文 p101：原则包括封闭性，而非开放性。",
    pageReference: "p101"
  },
  {
    id: 35,
    category: 'rules',
    type: QuestionType.FILL_IN_BLANK,
    question: "成绩在公示处公示___分钟，如无异议后进行颁奖。",
    correctAnswer: "15",
    explanation: "原文 p10：成绩公示处公示 15 分钟。",
    pageReference: "p10"
  },
  {
    id: 36,
    category: 'rules',
    type: QuestionType.TRUE_FALSE,
    question: "总裁判长签字确认成绩后，即可直接进行颁奖，无需公示。",
    correctAnswer: false,
    explanation: "原文 p10：总裁判长确认成绩后签字，成绩在公示处公示 15 分钟，如无异议后进行颁奖。",
    pageReference: "p10"
  },
  {
    id: 40,
    category: 'rules',
    type: QuestionType.FILL_IN_BLANK,
    question: "在户外裁判工作中，___工作也是一项特殊内容，例如协助记者等。",
    correctAnswer: "其他",
    explanation: "原文 p27：（6）其他工作（比如协助记者等）。",
    pageReference: "p27"
  },
  {
    id: 42,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "若某赛事评价得分为 80 分，它处于哪个层次？",
    options: ["不合格", "安全", "顺畅", "精彩"],
    correctAnswer: "顺畅",
    explanation: "原文 p3：“顺畅”分值估计：71-85分。",
    pageReference: "p3"
  },
  {
    id: 43,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "若某赛事评价得分为 65 分，它处于哪个层次？",
    options: ["安全", "顺畅", "精彩", "完美"],
    correctAnswer: "安全",
    explanation: "原文 p3：“安全”分值估计：60-70分。",
    pageReference: "p3"
  },
  {
    id: 46,
    category: 'rules',
    type: QuestionType.FILL_IN_BLANK,
    question: "山地车不遵守推行规定罚时___分钟。",
    correctAnswer: "10",
    explanation: "原文 p7：罚时 10 分钟。",
    pageReference: "p7"
  },
  {
    id: 48,
    category: 'rules',
    type: QuestionType.MULTI_CHOICE,
    question: "以下关于户外裁判工作的描述，正确的有哪些？",
    options: ["需要进行协调工作", "包含救援工作", "只需关注裁判本身工作，不用管后勤", "保护工作也是特殊性之一"],
    correctAnswer: ["需要进行协调工作", "包含救援工作", "保护工作也是特殊性之一"],
    explanation: "原文 p27：户外裁判员工作的特殊性包括协调、救援、保护、后勤等。",
    pageReference: "p27"
  },
  {
    id: 54,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "在越野赛中，运动员必须携带的强制装备通常不包括：",
    options: ["救生哨", "保温毯", "手机（保持开机）", "单反相机"],
    correctAnswer: "单反相机",
    explanation: "单反相机属于个人摄影器材，非强制安全装备。前三者为高危赛事常见强制装备。",
    pageReference: "通用竞赛规则"
  },
  {
    id: 55,
    category: 'rules',
    type: QuestionType.TRUE_FALSE,
    question: "在设有关门时间的比赛中，运动员到达检查点的时间超过关门时间，可以继续比赛但不计成绩。",
    correctAnswer: false,
    explanation: "通常规则下，超过关门时间必须强制退赛，以保障安全。",
    pageReference: "通用竞赛规则"
  },
  {
    id: 56,
    category: 'rules',
    type: QuestionType.FILL_IN_BLANK,
    question: "裁判员在执裁过程中应秉持公正、公平、___的原则。",
    correctAnswer: "公开",
    explanation: "体育赛事裁判基本准则：三公原则。",
    pageReference: "通用裁判守则"
  },
  {
    id: 57,
    category: 'rules',
    type: QuestionType.SHORT_ANSWER,
    question: "简述为何裁判员需要佩戴明显的标识？",
    correctAnswer: "为了便于运动员识别，维持赛场秩序，体现执法的权威性。",
    explanation: "裁判员标识是身份的象征，便于管理和沟通。",
    pageReference: "裁判工作概论"
  },
  {
    id: 58,
    category: 'rules',
    type: QuestionType.MULTI_CHOICE,
    question: "以下哪些情况可能导致比赛熔断（终止）？",
    options: ["突发极端恶劣天气", "赛道发生不可抗力灾害", "发生重大人身安全事故", "部分运动员投诉补给不够"],
    correctAnswer: ["突发极端恶劣天气", "赛道发生不可抗力灾害", "发生重大人身安全事故"],
    explanation: "依据体育总局关于熔断机制的规定，前三项为熔断条件。",
    pageReference: "赛事安全管理办法"
  },
  {
    id: 59,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "在铁人三项或类似多项赛中，运动员在换项区（TA）内通常禁止：",
    options: ["补充能量", "骑行", "推车奔跑", "更换衣物"],
    correctAnswer: "骑行",
    explanation: "换项区内通常要求推车，到上车线后方可骑行，以确保安全。",
    pageReference: "多项赛竞赛规则"
  },
  {
    id: 60,
    category: 'rules',
    type: QuestionType.TRUE_FALSE,
    question: "裁判长有权在比赛过程中根据天气变化临时修改赛道或缩短距离。",
    correctAnswer: true,
    explanation: "为了安全原则，裁判长/赛事总监有此权力。",
    pageReference: "赛事应急预案"
  },

  // ==========================================
  // 第三部分：风险管理与高危指标 (Risk Management) -> Category: 'risk'
  // ==========================================
  {
    id: 22,
    category: 'risk',
    type: QuestionType.SHORT_ANSWER,
    question: "绳索技能设置中“两两”检查制度的具体内容是什么？",
    correctAnswer: "一两：检查运动员穿戴安全设备情况，检查运动员安全装备与绳索之间的连接情况；二两：每个环节必须有两个裁判独立检查。",
    explanation: "原文 p5：严格执行“两两”检查制度：“一两”检查运动员穿戴...连接情况；“二两”每个环节必须有两个裁判独立检查。",
    pageReference: "p5"
  },
  {
    id: 23,
    category: 'risk',
    type: QuestionType.TRUE_FALSE,
    question: "“两两”检查制度中，只需一名裁判员进行两次检查即可。",
    correctAnswer: false,
    explanation: "原文 p5：“二两”每个环节必须有两个裁判独立检查。",
    pageReference: "p5"
  },
  {
    id: 24,
    category: 'risk',
    type: QuestionType.MULTI_CHOICE,
    question: "“两两”检查制度中的“一两”主要检查什么？",
    options: ["检查裁判员站位", "检查运动员穿戴安全设备情况", "检查天气情况", "检查运动员安全装备与绳索之间的连接情况"],
    correctAnswer: ["检查运动员穿戴安全设备情况", "检查运动员安全装备与绳索之间的连接情况"],
    explanation: "原文 p5：“一两”检查运动员穿戴安全设备情况，检查运动员安全装备与绳索之间的连接情况。",
    pageReference: "p5"
  },
  {
    id: 25,
    category: 'risk',
    type: QuestionType.MULTI_CHOICE,
    question: "山地越野赛活动符合以下哪些指标之一即视为高危赛事？",
    options: ["有海拔 3000 米以上的路线", "有海拔 3500 米以上的路线", "有夜间赛程安排", "距离超过 42.195 千米", "距离超过 100 千米"],
    correctAnswer: ["有海拔 3500 米以上的路线", "有夜间赛程安排", "距离超过 42.195 千米"],
    explanation: "原文 p6：1 有海拔 3500 米以上的路线；2 有夜间赛程安排；3 距离超过 42.195 千米。",
    pageReference: "p6"
  },
  {
    id: 26,
    category: 'risk',
    type: QuestionType.SINGLE_CHOICE,
    question: "山地越野赛被视为高危赛事的海拔标准是？",
    options: ["2000米以上", "3000米以上", "3500米以上", "4000米以上"],
    correctAnswer: "3500米以上",
    explanation: "原文 p6：有海拔 3500 米以上的路线。",
    pageReference: "p6"
  },
  {
    id: 27,
    category: 'risk',
    type: QuestionType.FILL_IN_BLANK,
    question: "山地越野赛距离超过___千米即视为高危赛事指标之一。",
    correctAnswer: "42.195",
    explanation: "原文 p6：距离超过 42.195 千米。",
    pageReference: "p6"
  },
  {
    id: 28,
    category: 'risk',
    type: QuestionType.TRUE_FALSE,
    question: "只要比赛安排在夜间进行，无论距离长短，在山地户外运动中都可视为高危险赛事指标之一。",
    correctAnswer: true,
    explanation: "原文 p6：有夜间赛程安排（符合以下任意一项指标...即视为高危）。",
    pageReference: "p6"
  },
  {
    id: 41,
    category: 'risk',
    type: QuestionType.TRUE_FALSE,
    question: "山地越野赛距离为 40 千米时，不符合高危赛事指标中的距离要求。",
    correctAnswer: true,
    explanation: "原文 p6：距离超过 42.195 千米才视为高危指标。",
    pageReference: "p6"
  },
  {
    id: 45,
    category: 'risk',
    type: QuestionType.SHORT_ANSWER,
    question: "山地越野赛的高危指标中，对夜间赛程有何规定？",
    correctAnswer: "有夜间赛程安排即视为高危赛事指标之一。",
    explanation: "原文 p6：有夜间赛程安排。",
    pageReference: "p6"
  },
  {
    id: 61,
    category: 'risk',
    type: QuestionType.SINGLE_CHOICE,
    question: "在高海拔地区比赛，运动员出现头痛、恶心、呼吸困难等症状，首先应考虑：",
    options: ["中暑", "高山反应 (高原反应)", "食物中毒", "疲劳"],
    correctAnswer: "高山反应 (高原反应)",
    explanation: "高海拔缺氧环境易引发高原反应。",
    pageReference: "高山医学常识"
  },
  {
    id: 62,
    category: 'risk',
    type: QuestionType.MULTI_CHOICE,
    question: "户外比赛中，预防失温的措施包括：",
    options: ["穿着排汗快干内衣", "携带防风保暖衣物", "及时补充高热量食物", "一直保持静止不动"],
    correctAnswer: ["穿着排汗快干内衣", "携带防风保暖衣物", "及时补充高热量食物"],
    explanation: "静止不动会加速体温流失，应保持适当活动或寻找避风处。",
    pageReference: "户外急救"
  },
  {
    id: 63,
    category: 'risk',
    type: QuestionType.FILL_IN_BLANK,
    question: "在进行绳索技术操作时，主锁的锁门必须___。",
    correctAnswer: "锁闭",
    explanation: "主锁未锁闭可能导致绳索脱出或强度大幅下降。",
    pageReference: "绳索操作规范"
  },
  {
    id: 64,
    category: 'risk',
    type: QuestionType.TRUE_FALSE,
    question: "头盔在发生一次严重撞击后，外观无明显裂痕，可以继续使用。",
    correctAnswer: false,
    explanation: "头盔内部结构可能已受损，严重撞击后必须强制报废。",
    pageReference: "装备保养与安全"
  },
  {
    id: 65,
    category: 'risk',
    type: QuestionType.SINGLE_CHOICE,
    question: "以下哪种结通常用于连接安全带和攀登绳？",
    options: ["双八字结", "平结", "渔人结", "抓结"],
    correctAnswer: "双八字结",
    explanation: "8字结强度高、不易松脱、易检查，是标准的连接结。",
    pageReference: "绳索技能"
  },
  {
    id: 66,
    category: 'risk',
    type: QuestionType.SHORT_ANSWER,
    question: "简述“LNT”法则（无痕山林）的核心思想。",
    correctAnswer: "尽量减少对自然环境的冲击，带走所有垃圾，保持环境原貌。",
    explanation: "Leave No Trace 是户外运动的基本环保准则。",
    pageReference: "户外环保"
  },
  {
    id: 67,
    category: 'risk',
    type: QuestionType.MULTI_CHOICE,
    question: "在溪谷或河流环境中比赛，面临的主要风险有：",
    options: ["溺水", "失温", "落石", "滑坠"],
    correctAnswer: ["溺水", "失温", "落石", "滑坠"],
    explanation: "溪谷环境复杂，上述均为常见高发风险。",
    pageReference: "溯溪安全"
  },
  {
    id: 68,
    category: 'risk',
    type: QuestionType.TRUE_FALSE,
    question: "使用对讲机呼救时，应按住PTT键讲话，松开PTT键听话。",
    correctAnswer: true,
    explanation: "无线电对讲机的基本操作规范。",
    pageReference: "通讯保障"
  },
  
  // ==========================================
  // 混合补充题目 (Mix - Adding to reach ~100)
  // ==========================================
  {
    id: 69,
    category: 'safety',
    type: QuestionType.SINGLE_CHOICE,
    question: "户外运动中，'333原则'中指人没有___通常只能存活3分钟。",
    options: ["水", "食物", "空气", "保温/庇护"],
    correctAnswer: "空气",
    explanation: "333原则：3分钟缺氧，3小时失温（极端环境），3天缺水，3周缺食。",
    pageReference: "生存常识"
  },
  {
    id: 70,
    category: 'rules',
    type: QuestionType.FILL_IN_BLANK,
    question: "定向越野比赛中，运动员必须按顺序通过各个___。",
    correctAnswer: "检查点",
    explanation: "定向运动基本规则。",
    pageReference: "定向规则"
  },
  {
    id: 71,
    category: 'risk',
    type: QuestionType.SINGLE_CHOICE,
    question: "当遇到雷雨天气时，以下哪种避雷方式是错误的？",
    options: ["躲在低洼处", "关闭手机", "躲在大树下", "去除身上的金属物品"],
    correctAnswer: "躲在大树下",
    explanation: "大树易引雷，是非常危险的躲避场所。",
    pageReference: "野外防雷"
  },
  {
    id: 72,
    category: 'rules',
    type: QuestionType.MULTI_CHOICE,
    question: "裁判员在赛前检查线路时，重点应检查：",
    options: ["路标是否清晰", "危险路段是否有警示", "风景是否优美", "通讯信号是否覆盖"],
    correctAnswer: ["路标是否清晰", "危险路段是否有警示", "通讯信号是否覆盖"],
    explanation: "风景与安全无关，其他三项直接关系比赛安全与顺畅。",
    pageReference: "赛道检查"
  },
  {
    id: 73,
    category: 'safety',
    type: QuestionType.SHORT_ANSWER,
    question: "什么是“失温”？",
    correctAnswer: "人体热量流失大于热量补给，导致核心体温下降并产生一系列生理反应的症状。",
    explanation: "失温是户外运动头号杀手。",
    pageReference: "急救知识"
  },
  {
    id: 74,
    category: 'rules',
    type: QuestionType.TRUE_FALSE,
    question: "越野跑比赛中，可以使用登山杖，但全程必须携带，不可中途丢弃。",
    correctAnswer: true,
    explanation: "通常规则规定装备必须全程携带，防止制造垃圾及不公平竞争。",
    pageReference: "越野跑规则"
  },
  {
    id: 75,
    category: 'risk',
    type: QuestionType.SINGLE_CHOICE,
    question: "中暑的重症类型中，最严重的是：",
    options: ["热射病", "热衰竭", "热痉挛", "晒伤"],
    correctAnswer: "热射病",
    explanation: "热射病死亡率极高，需紧急降温送医。",
    pageReference: "急救知识"
  },
  {
    id: 76,
    category: 'rules',
    type: QuestionType.FILL_IN_BLANK,
    question: "在攀岩比赛中，运动员手抓挂片（bolt）属于___行为。",
    correctAnswer: "犯规",
    explanation: "攀岩规则：只能利用岩壁支点，不可借助保护点。",
    pageReference: "攀岩规则"
  },
  {
    id: 77,
    category: 'safety',
    type: QuestionType.MULTI_CHOICE,
    question: "野外水源净化方法包括：",
    options: ["煮沸", "使用净水药片", "过滤", "直接饮用清澈溪水"],
    correctAnswer: ["煮沸", "使用净水药片", "过滤"],
    explanation: "看似清澈的溪水可能含有细菌寄生虫，不可直接饮用。",
    pageReference: "野外生存"
  },
  {
    id: 78,
    category: 'risk',
    type: QuestionType.TRUE_FALSE,
    question: "蛇咬伤后，应立即用嘴吸出毒血。",
    correctAnswer: false,
    explanation: "口腔可能有溃疡导致施救者中毒，且容易导致伤口感染，现代急救不推荐。",
    pageReference: "急救知识"
  },
  {
    id: 79,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "越野赛补给站通常提供的“功能饮料”主要为了补充：",
    options: ["脂肪", "电解质", "蛋白质", "纤维素"],
    correctAnswer: "电解质",
    explanation: "运动出汗流失电解质，需功能饮料补充。",
    pageReference: "运动营养"
  },
  {
    id: 80,
    category: 'safety',
    type: QuestionType.SHORT_ANSWER,
    question: "简述迷路时的“STOP”原则。",
    correctAnswer: "Sit（坐下冷静）、Think（思考）、Observe（观察）、Plan（计划）。",
    explanation: "国际通用的迷路应对原则。",
    pageReference: "野外生存"
  },
  {
    id: 81,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "皮划艇静水项目中，救生衣是：",
    options: ["可选装备", "强制装备", "仅限不会游泳者佩戴", "仅限夜间佩戴"],
    correctAnswer: "强制装备",
    explanation: "水上项目救生衣必须强制佩戴。",
    pageReference: "水上项目规则"
  },
  {
    id: 82,
    category: 'risk',
    type: QuestionType.MULTI_CHOICE,
    question: "以下属于户外运动“十大危险行为”的是：",
    options: ["独行", "装备不足", "盲目自信", "制定周密计划"],
    correctAnswer: ["独行", "装备不足", "盲目自信"],
    explanation: "制定周密计划是安全行为。",
    pageReference: "户外风险"
  },
  {
    id: 83,
    category: 'rules',
    type: QuestionType.FILL_IN_BLANK,
    question: "在计时项目中，通常使用___计时芯片来记录成绩。",
    correctAnswer: "电子",
    explanation: "现代体育赛事标配。",
    pageReference: "赛事技术"
  },
  {
    id: 84,
    category: 'safety',
    type: QuestionType.TRUE_FALSE,
    question: "在寒冷环境下，喝酒可以有效御寒。",
    correctAnswer: false,
    explanation: "酒精导致血管扩张，加速热量流失，让人感觉热其实在失温。",
    pageReference: "生理常识"
  },
  {
    id: 85,
    category: 'risk',
    type: QuestionType.SINGLE_CHOICE,
    question: "攀冰运动中，冰锥打入冰面的角度通常是：",
    options: ["垂直", "向上倾斜", "向下倾斜", "任意角度"],
    correctAnswer: "向下倾斜",
    explanation: "通常向下倾斜10-15度左右（负角度），受力更好。",
    pageReference: "攀冰技术"
  },
  {
    id: 86,
    category: 'rules',
    type: QuestionType.SHORT_ANSWER,
    question: "什么是赛事的“强制装备清单”？",
    correctAnswer: "组委会规定运动员必须全程携带的、用于保障最基本生命安全的装备列表。",
    explanation: "强制装备是参赛门槛。",
    pageReference: "赛事管理"
  },
  {
    id: 87,
    category: 'safety',
    type: QuestionType.MULTI_CHOICE,
    question: "野外生火时应注意：",
    options: ["选择避风处", "清理周边可燃物", "离开时彻底熄灭火种", "在帐篷内生火取暖"],
    correctAnswer: ["选择避风处", "清理周边可燃物", "离开时彻底熄灭火种"],
    explanation: "帐篷内生火易导致一氧化碳中毒或火灾。",
    pageReference: "野外用火"
  },
  {
    id: 88,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "兴奋剂检查中，运动员拒绝提供样本将面临：",
    options: ["警告", "罚款", "视为阳性/违规，禁赛", "重赛"],
    correctAnswer: "视为阳性/违规，禁赛",
    explanation: "反兴奋剂条例规定，拒绝检测等同违规。",
    pageReference: "反兴奋剂条例"
  },
  {
    id: 89,
    category: 'risk',
    type: QuestionType.TRUE_FALSE,
    question: "无论任何季节，去高海拔地区都应携带防晒霜和墨镜。",
    correctAnswer: true,
    explanation: "高海拔紫外线极强，易导致晒伤和雪盲。",
    pageReference: "高山防护"
  },
  {
    id: 90,
    category: 'rules',
    type: QuestionType.FILL_IN_BLANK,
    question: "由于不可抗力导致比赛中断，先前已完赛选手的成绩通常___。",
    correctAnswer: "有效",
    explanation: "视具体熔断机制而定，但通常保留已完赛者成绩。",
    pageReference: "赛事裁决"
  },
  
  // ==========================================
  // 新增补充题目 (New - Adding to reach ~110)
  // ==========================================
  {
    id: 91,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "作为赛事“收队”人员（Sweeper），其首要职责是：",
    options: ["快速跑完赛道拿到奖牌", "确保赛道上没有滞留的参赛选手", "拍摄沿途风景", "回收所有路标"],
    correctAnswer: "确保赛道上没有滞留的参赛选手",
    explanation: "收队是最后一道安全防线，确认无人遗漏。",
    pageReference: "岗位职责"
  },
  {
    id: 92,
    category: 'rules',
    type: QuestionType.MULTI_CHOICE,
    question: "在布置赛道路标时，应遵循的原则有：",
    options: ["岔路口必须有指示", "路标应在选手视线范围内连续可见", "转弯处应有连续路标或警戒带", "随意绑在容易被移动的物体上"],
    correctAnswer: ["岔路口必须有指示", "路标应在选手视线范围内连续可见", "转弯处应有连续路标或警戒带"],
    explanation: "路标是选手的生命线，必须稳固、清晰、连续。",
    pageReference: "赛道设计"
  },
  {
    id: 93,
    category: 'risk',
    type: QuestionType.TRUE_FALSE,
    question: "当发现选手严重受伤且无法移动时，裁判应立即将其背起送往下撤点。",
    correctAnswer: false,
    explanation: "若怀疑有脊柱损伤或骨折，盲目移动可能导致二次伤害，应固定现场并呼叫专业医疗救援。",
    pageReference: "急救原则"
  },
  {
    id: 94,
    category: 'rules',
    type: QuestionType.FILL_IN_BLANK,
    question: "在无线电通讯中，当收到对方消息并理解时，通常回复___。",
    correctAnswer: "收到",
    explanation: "标准通讯用语（Copy that / Roger）。",
    pageReference: "通讯规范"
  },
  {
    id: 95,
    category: 'safety',
    type: QuestionType.SINGLE_CHOICE,
    question: "野外遇到熊等大型猛兽时，正确的应对方式通常是：",
    options: ["尖叫并转身逃跑", "装死", "保持冷静，缓慢后退，不要直视其眼睛", "主动攻击"],
    correctAnswer: "保持冷静，缓慢后退，不要直视其眼睛",
    explanation: "转身逃跑会激发捕猎本能，直视眼睛被视为挑衅。",
    pageReference: "野外防兽"
  },
  {
    id: 96,
    category: 'risk',
    type: QuestionType.MULTI_CHOICE,
    question: "导致户外运动中“失温”的主要环境因素有：",
    options: ["低温", "大风（风寒效应）", "潮湿（水寒效应）", "阳光直射"],
    correctAnswer: ["低温", "大风（风寒效应）", "潮湿（水寒效应）"],
    explanation: "风和水会急剧加速热量流失。",
    pageReference: "环境风险"
  },
  {
    id: 97,
    category: 'rules',
    type: QuestionType.SHORT_ANSWER,
    question: "简述越野赛中“打卡”或“计时打卡”的意义。",
    correctAnswer: "记录选手通过特定点的时间，证明选手按规定路线完成了比赛，同时监控选手位置以保障安全。",
    explanation: "打卡具备竞技公平和安全监控双重功能。",
    pageReference: "赛事执行"
  },
  {
    id: 98,
    category: 'safety',
    type: QuestionType.TRUE_FALSE,
    question: "在户外活动中，为了环保，用过的气罐只要砸扁就可以埋在土里。",
    correctAnswer: false,
    explanation: "金属气罐无法降解，必须带下山处理。",
    pageReference: "LNT法则"
  },
  {
    id: 99,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "如果裁判员发现选手有明显的各种身体不适（如步态不稳、意识模糊），有权：",
    options: ["强制其终止比赛", "仅仅口头询问", "鼓励其坚持到底", "无权干涉"],
    correctAnswer: "强制其终止比赛",
    explanation: "出于生命安全考虑，强制退赛权是裁判/医疗人员的重要权力。",
    pageReference: "医疗与仲裁"
  },
  {
    id: 100,
    category: 'risk',
    type: QuestionType.FILL_IN_BLANK,
    question: "在进行心肺复苏（CPR）时，胸外按压的频率应保持在每分钟___次。",
    correctAnswer: "100-120",
    explanation: "国际急救指南标准频率。",
    pageReference: "急救技能"
  },
  {
    id: 101,
    category: 'rules',
    type: QuestionType.MULTI_CHOICE,
    question: "对于违规选手的处罚方式通常包括：",
    options: ["罚时", "取消成绩（DSQ）", "终身禁赛", "警告"],
    correctAnswer: ["罚时", "取消成绩（DSQ）", "警告"],
    explanation: "终身禁赛通常由协会决定，非单场赛事裁判长直接决定（视严重程度）。前三者为常见现场判罚。",
    pageReference: "判罚规则"
  },
  {
    id: 102,
    category: 'safety',
    type: QuestionType.SINGLE_CHOICE,
    question: "在野外穿越河流时，最安全的队形通常是：",
    options: ["独自过河", "纵队（一人接一人）", "三角队形（多人互相搀扶）", "一字排开"],
    correctAnswer: "三角队形（多人互相搀扶）",
    explanation: "三角队形能有效抵抗水流冲击。",
    pageReference: "过河技术"
  },
  {
    id: 103,
    category: 'rules',
    type: QuestionType.TRUE_FALSE,
    question: "在接力赛中，交接棒必须在规定的接力区内完成。",
    correctAnswer: true,
    explanation: "田径及户外接力赛的通用规则。",
    pageReference: "接力规则"
  },
  {
    id: 104,
    category: 'risk',
    type: QuestionType.SHORT_ANSWER,
    question: "什么是“风寒效应”？",
    correctAnswer: "在有风的环境下，人体感受到的温度比实际气温更低，风速越大，散热越快。",
    explanation: "了解风寒效应对于预防失温至关重要。",
    pageReference: "气象常识"
  },
  {
    id: 105,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "比赛号码布通常要求佩戴在选手的：",
    options: ["背部", "胸前可见位置", "侧面", "背包里"],
    correctAnswer: "胸前可见位置",
    explanation: "便于裁判和计时员识别。",
    pageReference: "参赛须知"
  },
  {
    id: 106,
    category: 'safety',
    type: QuestionType.FILL_IN_BLANK,
    question: "在户外遇到突发山洪时，应立即向___方向逃生。",
    correctAnswer: "高处/垂直岸边",
    explanation: "切勿顺流而下，应垂直河道向高处跑。",
    pageReference: "逃生避险"
  },
  {
    id: 107,
    category: 'rules',
    type: QuestionType.MULTI_CHOICE,
    question: "检录裁判的主要工作包括：",
    options: ["检查选手身份", "检查强制装备", "发放补给", "确认选手起跑资格"],
    correctAnswer: ["检查选手身份", "检查强制装备", "确认选手起跑资格"],
    explanation: "发放补给通常是补给站志愿者的工作。",
    pageReference: "检录工作"
  },
  {
    id: 108,
    category: 'risk',
    type: QuestionType.TRUE_FALSE,
    question: "止血带可以长时间扎紧肢体，不需要定时放松。",
    correctAnswer: false,
    explanation: "长时间扎紧会导致肢体坏死，需标记时间并由专业人员处理（现代战术急救观念略有更新，但基础急救仍强调风险）。",
    pageReference: "急救止血"
  },
  {
    id: 109,
    category: 'safety',
    type: QuestionType.SINGLE_CHOICE,
    question: "在野外露营选择营地时，应避免：",
    options: ["背风处", "平坦地面", "河滩或干涸河床", "水源附近（保持距离）"],
    correctAnswer: "河滩或干涸河床",
    explanation: "河滩易受山洪威胁，极为危险。",
    pageReference: "营地选择"
  },
  {
    id: 110,
    category: 'rules',
    type: QuestionType.SHORT_ANSWER,
    question: "简述赛事“熔断机制”的触发条件。",
    correctAnswer: "遇到极端天气、自然灾害、突发公共安全事件或重大伤亡事故等，严重威胁人员安全时。",
    explanation: "确保赛事安全底线的机制。",
    pageReference: "安全管理"
  },

  // ==========================================
  // 新增补充题目 (Additional - Adding to reach ~125)
  // ==========================================
  {
    id: 111,
    category: 'risk',
    type: QuestionType.SINGLE_CHOICE,
    question: "布林结（Bowline）的主要用途是：",
    options: ["连接两根直径相同的绳子", "制作固定的绳圈，常用于系在固定点或身上", "防止绳头松散", "用于下降"],
    correctAnswer: "制作固定的绳圈，常用于系在固定点或身上",
    explanation: "布林结受力后不宜松动，但解开容易，是“绳结之王”。",
    pageReference: "绳索技能"
  },
  {
    id: 112,
    category: 'safety',
    type: QuestionType.MULTI_CHOICE,
    question: "LNT（无痕山林）七原则包括：",
    options: ["事前充分计划与准备", "在坚实的地表行走和露营", "妥善处理废弃物", "大声喧哗以驱赶野兽"],
    correctAnswer: ["事前充分计划与准备", "在坚实的地表行走和露营", "妥善处理废弃物"],
    explanation: "应降低噪音，尊重野生动物，避免大声喧哗。",
    pageReference: "LNT原则"
  },
  {
    id: 113,
    category: 'risk',
    type: QuestionType.TRUE_FALSE,
    question: "当发现队友疑似脊柱受伤时，为了保暖，应将其搬运到帐篷内。",
    correctAnswer: false,
    explanation: "严禁随意搬运脊柱损伤患者，除非环境有即刻生命威胁。",
    pageReference: "急救搬运"
  },
  {
    id: 114,
    category: 'rules',
    type: QuestionType.FILL_IN_BLANK,
    question: "在越野赛中，SP站通常指的是___站。",
    correctAnswer: "检查/打卡",
    explanation: "SP: Check Point / Security Point (语境不同，通常指检查点)，CP更为常用，但在部分山地赛中SP特指安全点或打卡点。",
    pageReference: "赛事术语"
  },
  {
    id: 115,
    category: 'risk',
    type: QuestionType.SHORT_ANSWER,
    question: "什么是“动态保护”？",
    correctAnswer: "在攀登者冲坠时，保护者给予适量的绳索滑移以吸收冲击力，减少对攀登者和保护点的冲击。",
    explanation: "相对于静态锁死，动态保护能有效保护系统。",
    pageReference: "攀岩保护"
  },
  {
    id: 116,
    category: 'safety',
    type: QuestionType.SINGLE_CHOICE,
    question: "野外迷路后，如果没有指南针，可以通过什么辨别方向？",
    options: ["观察树冠茂密程度（北半球南侧通常较茂密）", "寻找苔藓（通常长在干燥面）", "跟随直觉", "向低处走"],
    correctAnswer: "观察树冠茂密程度（北半球南侧通常较茂密）",
    explanation: "植物向阳性，南侧阳光充足生长茂密（北半球）。",
    pageReference: "野外辨向"
  },
  {
    id: 117,
    category: 'rules',
    type: QuestionType.MULTI_CHOICE,
    question: "裁判员在处理申诉时，应遵循的程序包括：",
    options: ["接收书面申诉材料", "收取申诉费（如规定）", "召开仲裁委员会会议", "立即宣布比赛无效"],
    correctAnswer: ["接收书面申诉材料", "收取申诉费（如规定）", "召开仲裁委员会会议"],
    explanation: "处理申诉需严谨流程，不能随意宣布比赛无效。",
    pageReference: "仲裁程序"
  },
  {
    id: 118,
    category: 'risk',
    type: QuestionType.TRUE_FALSE,
    question: "使用登山杖下坡时，登山杖长度应适当调短。",
    correctAnswer: false,
    explanation: "下坡时登山杖应适当调长，以便身体保持直立，支撑身体。",
    pageReference: "装备使用"
  },
  {
    id: 119,
    category: 'safety',
    type: QuestionType.FILL_IN_BLANK,
    question: "海恩法则指出：每一起严重事故的背后，必然有29次轻微事故和___起未遂先兆以及1000起事故隐患。",
    correctAnswer: "300",
    explanation: "强调事故预防和隐患排查的重要性。",
    pageReference: "安全理论"
  },
  {
    id: 120,
    category: 'rules',
    type: QuestionType.SINGLE_CHOICE,
    question: "以下哪项是越野赛补给站志愿者的正确操作？",
    options: ["直接帮选手把水壶灌满", "把水倒在杯子里递给选手", "检查选手强制装备", "根据选手号码布记录通过时间"],
    correctAnswer: "把水倒在杯子里递给选手",
    explanation: "根据不同赛事要求，通常志愿者负责递水或倒水，计时和强装检查通常由专业裁判负责。",
    pageReference: "志愿者工作"
  },
  {
    id: 121,
    category: 'risk',
    type: QuestionType.MULTI_CHOICE,
    question: "常见的运动损伤“RICE”原则包括：",
    options: ["Rest (休息)", "Ice (冰敷)", "Compression (加压包扎)", "Elevation (抬高患肢)"],
    correctAnswer: ["Rest (休息)", "Ice (冰敷)", "Compression (加压包扎)", "Elevation (抬高患肢)"],
    explanation: "经典软组织损伤急救原则。",
    pageReference: "急救处理"
  },
  {
    id: 122,
    category: 'rules',
    type: QuestionType.TRUE_FALSE,
    question: "在铁人三项比赛游泳赛段，运动员可以借助漂浮物休息，但不得利用其前进。",
    correctAnswer: true,
    explanation: "允许抓浮标休息，但不能借力前进。",
    pageReference: "铁三规则"
  },
  {
    id: 123,
    category: 'safety',
    type: QuestionType.SINGLE_CHOICE,
    question: "在雪地环境中，长时间不戴墨镜容易导致：",
    options: ["青光眼", "雪盲症", "白内障", "近视"],
    correctAnswer: "雪盲症",
    explanation: "雪地反射紫外线导致角膜损伤。",
    pageReference: "环境伤害"
  },
  {
    id: 124,
    category: 'rules',
    type: QuestionType.SHORT_ANSWER,
    question: "简述“关门时间”的设定依据。",
    correctAnswer: "依据赛道难度、距离、平均配速、日照时间以及安全保障能力综合设定。",
    explanation: "既要保证完赛率，又要确保安全。",
    pageReference: "赛道设计"
  },
  {
    id: 125,
    category: 'risk',
    type: QuestionType.FILL_IN_BLANK,
    question: "在野外被毒蛇咬伤后，应保持伤肢___于心脏水平，以减缓毒液扩散。",
    correctAnswer: "低",
    explanation: "低垂伤肢可利用重力减缓回心血流（部分观点争议，但主流急救建议限制活动并自然下垂或水平）。",
    pageReference: "急救常识"
  }
];