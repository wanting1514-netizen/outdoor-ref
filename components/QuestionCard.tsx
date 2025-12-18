
import React, { useState, useEffect } from 'react';
import { Question, QuestionType } from '../types';
import { Check, X, HelpCircle, Eye, SkipForward, ArrowLeft } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: any, isCorrect: boolean) => void;
  onPrevious?: () => void;
  isLast: boolean;
  currIndex: number;
  total: number;
  initialAnswer?: any; // To restore state
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, onPrevious, isLast, currIndex, total, initialAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false); 
  const [inputVal, setInputVal] = useState('');
  const [shortAnswerSelfRated, setShortAnswerSelfRated] = useState<boolean | null>(null);

  // Reset or Restore state when question changes
  useEffect(() => {
    if (initialAnswer) {
        if (initialAnswer.skipped) {
            setSelectedOption(null);
            setShowFeedback(false);
            setInputVal('');
            setShortAnswerSelfRated(null);
            setIsRevealed(false);
        } else {
            // Restore answer
            if (question.type === QuestionType.SHORT_ANSWER) {
                setInputVal(initialAnswer.text);
                setShortAnswerSelfRated(initialAnswer.isCorrect);
            } else if (question.type === QuestionType.FILL_IN_BLANK) {
                setInputVal(initialAnswer);
            } else {
                setSelectedOption(initialAnswer);
            }
            setShowFeedback(true);
            setIsRevealed(true); 
        }
    } else {
        // New question
        setSelectedOption(null);
        setShowFeedback(false);
        setIsRevealed(false);
        setInputVal('');
        setShortAnswerSelfRated(null);
        
        if (question.type === QuestionType.FILL_IN_BLANK) {
            setTimeout(() => document.getElementById('fill-input')?.focus(), 100);
        }
    }
  }, [question.id, initialAnswer]);

  const handleSubmit = () => {
    if (showFeedback) return;

    let correct = false;
    let answerPayload: any = selectedOption;

    switch (question.type) {
      case QuestionType.SINGLE_CHOICE:
      case QuestionType.TRUE_FALSE:
        correct = selectedOption === question.correctAnswer;
        break;
      
      case QuestionType.MULTI_CHOICE:
        if (Array.isArray(selectedOption) && Array.isArray(question.correctAnswer)) {
          const sel = new Set(selectedOption);
          const cor = new Set(question.correctAnswer);
          correct = sel.size === cor.size && [...sel].every(x => cor.has(x));
        }
        break;
      
      case QuestionType.FILL_IN_BLANK:
        answerPayload = inputVal;
        correct = inputVal.trim().toLowerCase() === (question.correctAnswer as string).trim().toLowerCase();
        break;
        
      case QuestionType.SHORT_ANSWER:
          answerPayload = { text: inputVal, isCorrect: false };
          break;
    }

    setShowFeedback(true);
    // Modified: Always reveal immediately. 
    setIsRevealed(true);
  };

  const handleSkip = () => {
    onAnswer({ skipped: true }, false);
  };

  const handleNext = () => {
     let correct = false;
     
     if (question.type === QuestionType.SHORT_ANSWER) {
         correct = shortAnswerSelfRated === true;
         onAnswer({ text: inputVal, isCorrect: correct }, correct);
     } else {
          switch (question.type) {
            case QuestionType.SINGLE_CHOICE:
            case QuestionType.TRUE_FALSE:
                correct = selectedOption === question.correctAnswer;
                break;
            case QuestionType.MULTI_CHOICE:
                const sel = new Set(selectedOption as string[]);
                const cor = new Set(question.correctAnswer as string[]);
                correct = sel.size === cor.size && [...sel].every(x => cor.has(x));
                break;
            case QuestionType.FILL_IN_BLANK:
                correct = inputVal.trim() === (question.correctAnswer as string).trim();
                break;
          }
          onAnswer(question.type === QuestionType.FILL_IN_BLANK ? inputVal : selectedOption, correct);
     }
  };

  // -- Render Helpers --

  const renderSingleChoice = () => (
    <div className="space-y-3">
      {question.options?.map((opt) => {
        let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex justify-between items-center ";
        if (showFeedback) {
          if (isRevealed && opt === question.correctAnswer) {
              btnClass += "border-green-500 bg-green-50 text-green-900 shadow-sm";
          } else if (selectedOption === opt) {
              btnClass += "border-red-500 bg-red-50 text-red-900 shadow-sm";
          } else {
              btnClass += "border-gray-200 opacity-50 grayscale";
          }
        } else {
          btnClass += selectedOption === opt ? "border-blue-500 bg-blue-50 text-blue-900 shadow-md" : "border-gray-200 hover:border-blue-300 hover:bg-gray-50";
        }

        return (
          <button
            key={opt}
            onClick={() => !showFeedback && setSelectedOption(opt)}
            disabled={showFeedback}
            className={btnClass}
          >
            <span className="font-medium text-lg">{opt}</span>
            {showFeedback && isRevealed && opt === question.correctAnswer && <Check className="w-6 h-6 text-green-600" />}
            {showFeedback && selectedOption === opt && opt !== question.correctAnswer && <X className="w-6 h-6 text-red-600" />}
          </button>
        );
      })}
    </div>
  );

  const renderMultiChoice = () => {
    const currentSel = (selectedOption as string[]) || [];
    return (
        <div className="space-y-3">
        <p className="text-sm text-gray-500 italic mb-2">* 多选题：请选择所有正确选项</p>
        {question.options?.map((opt) => {
            const isSelected = currentSel.includes(opt);
            const isCorrect = (question.correctAnswer as string[]).includes(opt);
            
            let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex justify-between items-center ";
            
            if (showFeedback) {
                if (isRevealed && isCorrect) {
                    btnClass += "border-green-500 bg-green-50 text-green-900 shadow-sm"; 
                } else if (isSelected) {
                    btnClass += "border-red-500 bg-red-50 text-red-900 shadow-sm"; 
                } else {
                    btnClass += "border-gray-200 opacity-50 grayscale";
                }
            } else {
                btnClass += isSelected ? "border-blue-500 bg-blue-50 text-blue-900 shadow-md" : "border-gray-200 hover:border-blue-300 hover:bg-gray-50";
            }

            return (
            <button
                key={opt}
                onClick={() => {
                    if (showFeedback) return;
                    if (isSelected) setSelectedOption(currentSel.filter(s => s !== opt));
                    else setSelectedOption([...currentSel, opt]);
                }}
                disabled={showFeedback}
                className={btnClass}
            >
                <span className="font-medium text-lg">{opt}</span>
                <div className="flex items-center">
                    {showFeedback && isRevealed && isCorrect && <Check className="w-6 h-6 text-green-600" />}
                    {showFeedback && isSelected && !isCorrect && <X className="w-6 h-6 text-red-600" />}
                </div>
            </button>
            );
        })}
        </div>
    );
  };

  const renderTrueFalse = () => (
      <div className="flex space-x-4">
          {[true, false].map(val => {
              const label = val ? "正确" : "错误";
              let btnClass = "flex-1 p-6 rounded-xl border-2 text-center text-xl font-bold transition-all flex items-center justify-center space-x-2 ";
              
              if (showFeedback) {
                  if (isRevealed && val === question.correctAnswer) {
                      btnClass += "border-green-500 bg-green-50 text-green-800 shadow-sm";
                  } else if (selectedOption === val) {
                      btnClass += "border-red-500 bg-red-50 text-red-800 shadow-sm";
                  } else {
                      btnClass += "border-gray-200 opacity-50 grayscale";
                  }
              } else {
                  btnClass += selectedOption === val 
                    ? (val ? "border-green-500 bg-green-50 text-green-800" : "border-red-500 bg-red-50 text-red-800") 
                    : "border-gray-200 hover:bg-gray-50 text-gray-600";
              }

              return (
                  <button 
                    key={label}
                    onClick={() => !showFeedback && setSelectedOption(val)}
                    disabled={showFeedback}
                    className={btnClass}
                  >
                      <span>{label}</span>
                      {showFeedback && isRevealed && val === question.correctAnswer && <Check className="w-6 h-6" />}
                      {showFeedback && selectedOption === val && val !== question.correctAnswer && <X className="w-6 h-6" />}
                  </button>
              )
          })}
      </div>
  );

  const renderFillInBlank = () => {
      const isCorrect = inputVal.trim().toLowerCase() === (question.correctAnswer as string).trim().toLowerCase();
      
      return (
        <div className="space-y-4">
            <div className="relative">
                <input 
                    id="fill-input"
                    type="text" 
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    disabled={showFeedback}
                    placeholder="在此输入答案..."
                    className={`w-full p-4 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors
                        ${showFeedback 
                            ? (isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50') 
                            : 'border-gray-300'}`}
                />
            </div>
            {showFeedback && !isCorrect && isRevealed && (
                <div className="text-red-600 font-medium animate-fade-in">
                    正确答案: {question.correctAnswer as string}
                </div>
            )}
        </div>
      );
  };

  const renderShortAnswer = () => (
      <div className="space-y-4">
          <textarea
             value={inputVal}
             onChange={(e) => setInputVal(e.target.value)}
             disabled={showFeedback}
             placeholder="请输入你的简答..."
             className="w-full p-4 min-h-[120px] text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          />
          {showFeedback && (
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 animate-fade-in">
                  <h4 className="font-bold text-blue-900 flex items-center mb-2">
                      <Eye className="w-4 h-4 mr-2"/> 参考答案
                  </h4>
                  <p className="text-blue-800 mb-4 whitespace-pre-line leading-relaxed">
                      {question.correctAnswer as string}
                  </p>
                  
                  <div className="border-t border-blue-200 pt-4">
                      <p className="text-sm text-gray-600 mb-3 text-center">请对比参考答案，自行判定：</p>
                      <div className="flex space-x-4 justify-center">
                          <button 
                            onClick={() => setShortAnswerSelfRated(false)}
                            className={`px-4 py-2 rounded-lg flex items-center ${shortAnswerSelfRated === false ? 'bg-red-600 text-white ring-2 ring-offset-1 ring-red-300' : 'bg-white border border-red-300 text-red-600 hover:bg-red-50'}`}
                          >
                              <X className="w-4 h-4 mr-2"/> 我答错了
                          </button>
                          <button 
                            onClick={() => setShortAnswerSelfRated(true)}
                            className={`px-4 py-2 rounded-lg flex items-center ${shortAnswerSelfRated === true ? 'bg-green-600 text-white ring-2 ring-offset-1 ring-green-300' : 'bg-white border border-green-300 text-green-600 hover:bg-green-50'}`}
                          >
                              <Check className="w-4 h-4 mr-2"/> 我答对了
                          </button>
                      </div>
                  </div>
              </div>
          )}
      </div>
  );

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 pb-24">
        {/* Progress */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${((currIndex + 1) / total) * 100}%` }}></div>
        </div>
        
        <div className="flex justify-between items-center text-gray-500 text-sm font-medium">
             <span>第 {currIndex + 1} / {total} 题</span>
             <span className="bg-gray-100 px-2 py-1 rounded">
                 {question.type === QuestionType.SINGLE_CHOICE ? "单选题" :
                  question.type === QuestionType.MULTI_CHOICE ? "多选题" :
                  question.type === QuestionType.TRUE_FALSE ? "判断题" :
                  question.type === QuestionType.FILL_IN_BLANK ? "填空题" : "简答题"}
             </span>
        </div>

        {/* Question Text */}
        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
            {question.question}
        </h2>

        {/* Options / Input */}
        <div className="mt-8">
            {question.type === QuestionType.SINGLE_CHOICE && renderSingleChoice()}
            {question.type === QuestionType.MULTI_CHOICE && renderMultiChoice()}
            {question.type === QuestionType.TRUE_FALSE && renderTrueFalse()}
            {question.type === QuestionType.FILL_IN_BLANK && renderFillInBlank()}
            {question.type === QuestionType.SHORT_ANSWER && renderShortAnswer()}
        </div>

        {/* Explanation */}
        {showFeedback && isRevealed && (question.type !== QuestionType.SHORT_ANSWER || shortAnswerSelfRated !== null) && (
            <div className="mt-6 p-5 rounded-xl border-l-4 border-gray-300 bg-gray-50 animate-fade-in">
                <div className="flex items-start">
                    <HelpCircle className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-gray-900">试题解析</h4>
                        <p className="text-gray-700 mt-1 whitespace-pre-line leading-relaxed">{question.explanation}</p>
                        {question.pageReference && (
                            <span className="inline-block mt-2 text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded">
                                出处: {question.pageReference}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        )}

        {/* Fixed Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
            <div className="max-w-3xl mx-auto flex justify-between items-center">
                {/* Previous Button */}
                <button
                    onClick={onPrevious}
                    disabled={currIndex === 0}
                    className="flex items-center px-4 py-3 text-gray-600 font-bold hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    上一题
                </button>

                {!showFeedback ? (
                    <div className="flex space-x-3">
                        <button
                            onClick={handleSkip}
                            className="px-6 py-3 text-gray-600 font-bold hover:bg-gray-100 rounded-lg transition-colors flex items-center border border-gray-200"
                        >
                            <SkipForward className="w-5 h-5 mr-2 text-gray-500" />
                            跳过
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={
                                (question.type === QuestionType.MULTI_CHOICE && (!selectedOption || selectedOption.length === 0)) ||
                                (question.type !== QuestionType.MULTI_CHOICE && question.type !== QuestionType.FILL_IN_BLANK && question.type !== QuestionType.SHORT_ANSWER && selectedOption === null) ||
                                ((question.type === QuestionType.FILL_IN_BLANK || question.type === QuestionType.SHORT_ANSWER) && inputVal.trim() === '')
                            }
                            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            提交答案
                        </button>
                    </div>
                ) : (
                    // Feedback State - Now Directly Show Next/Finish
                    <button
                        onClick={handleNext}
                        disabled={question.type === QuestionType.SHORT_ANSWER && shortAnswerSelfRated === null}
                        className="px-8 py-3 bg-gray-900 text-white font-bold rounded-lg shadow hover:bg-gray-800 transition-colors disabled:opacity-50"
                    >
                        {isLast ? "查看结果" : "下一题"}
                    </button>
                )}
            </div>
        </div>
    </div>
  );
};

export default QuestionCard;
