
export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTI_CHOICE = 'MULTI_CHOICE',
  TRUE_FALSE = 'TRUE_FALSE',
  FILL_IN_BLANK = 'FILL_IN_BLANK',
  SHORT_ANSWER = 'SHORT_ANSWER'
}

export type Category = 
  | 'safety_concept'      // 户外安全观
  | 'referee_basics'      // 裁判工作概论
  | 'org_management'      // 组织与管理 (含后勤)
  | 'risk_management'     // 风险管理 (含高危指标)
  | 'rules_officiating'   // 竞赛规则与执裁 (赛道、交替站)
  | 'start_finish_athlete'; // 起终点与运动员服务

export interface Question {
  id: number;
  type: QuestionType;
  category: Category;
  question: string;
  options?: string[];
  correctAnswer?: string | string[] | boolean;
  explanation: string;
  pageReference?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: Record<number, any>;
  isFinished: boolean;
  isStarted: boolean;
  activeQuestions: Question[];
}
