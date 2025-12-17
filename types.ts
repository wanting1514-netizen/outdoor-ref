export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTI_CHOICE = 'MULTI_CHOICE',
  TRUE_FALSE = 'TRUE_FALSE',
  FILL_IN_BLANK = 'FILL_IN_BLANK',
  SHORT_ANSWER = 'SHORT_ANSWER'
}

export type Category = 'safety' | 'rules' | 'risk';

export interface Question {
  id: number;
  type: QuestionType;
  category: Category; // Added category
  question: string;
  options?: string[]; // For Choice questions
  correctAnswer?: string | string[] | boolean; // String for single/fill, Array for multi, Boolean for T/F
  explanation: string;
  pageReference?: string; // e.g., "p24"
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: Record<number, any>; // Store user answers by question ID
  isFinished: boolean;
  isStarted: boolean;
  activeQuestions: Question[]; // The subset of questions currently being played
}