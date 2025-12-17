import React from 'react';
import { RotateCcw, CheckCircle, XCircle, SkipForward } from 'lucide-react';
import { Question, QuestionType } from '../types';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  userAnswers: Record<number, any>;
  questions: Question[];
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ score, totalQuestions, userAnswers, questions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const skippedCount = Object.values(userAnswers).filter((a: any) => a?.skipped === true).length;

  // Helper to check correctness for display purposes
  const isCorrect = (q: Question, answer: any) => {
    // Skipped questions are treated as not correct for logic purposes
    if (answer?.skipped === true) return false;

    if (q.type === QuestionType.SHORT_ANSWER) {
      return answer?.isCorrect === true;
    }
    if (q.type === QuestionType.MULTI_CHOICE) {
      if (!Array.isArray(answer) || !Array.isArray(q.correctAnswer)) return false;
      const ansSet = new Set(answer);
      const corrSet = new Set(q.correctAnswer as string[]);
      if (ansSet.size !== corrSet.size) return false;
      for (let a of ansSet) if (!corrSet.has(a)) return false;
      return true;
    }
    if (q.type === QuestionType.FILL_IN_BLANK) {
        return typeof answer === 'string' && answer.trim() === (q.correctAnswer as string);
    }
    return answer === q.correctAnswer;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 animate-fade-in pb-20">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center sticky top-20 z-10 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">测试完成!</h2>
        <div className="flex flex-col items-center justify-center my-6">
          <div className={`text-6xl font-black ${percentage >= 80 ? 'text-green-600' : percentage >= 60 ? 'text-yellow-600' : 'text-red-600'}`}>
            {score} / {totalQuestions}
          </div>
          <div className="flex space-x-4 mt-2 text-lg text-gray-500">
              <span>正确率: {percentage}%</span>
              {skippedCount > 0 && <span className="text-yellow-600">已跳过: {skippedCount}</span>}
          </div>
        </div>
        
        <button
          onClick={onRestart}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <RotateCcw className="mr-2 -ml-1 h-5 w-5" />
          重新开始
        </button>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800 ml-1">答题详情回顾</h3>
        {questions.map((q, index) => {
          const userAnswer = userAnswers[q.id];
          const isSkipped = userAnswer?.skipped === true;
          const correct = !isSkipped && isCorrect(q, userAnswer);
          
          let displayUserAnswer = "";
          if (isSkipped) {
              displayUserAnswer = "已跳过";
          } else {
              if (q.type === QuestionType.SHORT_ANSWER) {
                  displayUserAnswer = userAnswer?.text || "(未回答)";
              } else if (Array.isArray(userAnswer)) {
                  displayUserAnswer = userAnswer.join(", ");
              } else if (typeof userAnswer === 'boolean') {
                  displayUserAnswer = userAnswer ? "正确" : "错误";
              } else {
                  displayUserAnswer = userAnswer as string;
              }
              displayUserAnswer = JSON.stringify(displayUserAnswer).replace(/^"|"$/g, ''); // Simple cleanup if needed, but manual handling above is better
          }

          let displayCorrectAnswer = "";
           if (Array.isArray(q.correctAnswer)) {
              displayCorrectAnswer = q.correctAnswer.join(", ");
          } else if (typeof q.correctAnswer === 'boolean') {
              displayCorrectAnswer = q.correctAnswer ? "正确" : "错误";
          } else {
              displayCorrectAnswer = q.correctAnswer as string;
          }

          const borderColor = isSkipped ? 'border-yellow-400' : (correct ? 'border-green-500' : 'border-red-500');
          const icon = isSkipped ? <SkipForward className="text-yellow-500 w-6 h-6" /> : (correct ? <CheckCircle className="text-green-500 w-6 h-6" /> : <XCircle className="text-red-500 w-6 h-6" />);

          return (
            <div key={q.id} className={`bg-white rounded-xl shadow-sm border-l-4 p-6 ${borderColor}`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                   <span className="font-mono text-sm text-gray-400 mr-3">#{index + 1}</span>
                   <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-600 uppercase tracking-wider">{
                       q.type === QuestionType.SINGLE_CHOICE ? "单选题" :
                       q.type === QuestionType.MULTI_CHOICE ? "多选题" :
                       q.type === QuestionType.TRUE_FALSE ? "判断题" :
                       q.type === QuestionType.FILL_IN_BLANK ? "填空题" : "简答题"
                   }</span>
                </div>
                {icon}
              </div>
              
              <h4 className="text-lg font-medium text-gray-900 mb-4">{q.question}</h4>
              
              <div className="grid md:grid-cols-2 gap-4 text-sm mb-4">
                 <div className="p-3 bg-gray-50 rounded-lg">
                    <span className="block text-xs text-gray-500 mb-1">你的答案</span>
                    <span className={`font-medium ${isSkipped ? 'text-yellow-600' : (correct ? 'text-green-700' : 'text-red-700')}`}>
                       {displayUserAnswer}
                    </span>
                 </div>
                 <div className="p-3 bg-blue-50 rounded-lg">
                    <span className="block text-xs text-gray-500 mb-1">正确答案</span>
                    <span className="font-medium text-blue-900">
                       {displayCorrectAnswer}
                    </span>
                 </div>
              </div>

              <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-100">
                 <p className="font-semibold text-gray-700 mb-1">解析 ({q.pageReference || "通用"}):</p>
                 {q.explanation}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultScreen;