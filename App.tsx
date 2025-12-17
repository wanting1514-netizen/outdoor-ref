import React, { useState } from 'react';
import { quizData } from './data';
import { QuizState, Category } from './types';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import ResultScreen from './components/ResultScreen';
import { Home } from 'lucide-react';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: {},
    isFinished: false,
    isStarted: false,
    activeQuestions: []
  });

  const startQuiz = (category?: Category) => {
    const questions = category 
      ? quizData.filter(q => q.category === category)
      : quizData;

    setGameState({
      currentQuestionIndex: 0,
      score: 0, 
      answers: {},
      isFinished: false,
      isStarted: true,
      activeQuestions: questions
    });
  };

  const handleAnswer = (answer: any, isCorrect: boolean) => {
    const currentQ = gameState.activeQuestions[gameState.currentQuestionIndex];
    const nextAnswers = { ...gameState.answers, [currentQ.id]: answer };
    
    if (gameState.currentQuestionIndex + 1 < gameState.activeQuestions.length) {
      setGameState(prev => ({
        ...prev,
        answers: nextAnswers,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        answers: nextAnswers,
        isFinished: true,
      }));
    }
  };

  const handlePrevious = () => {
    if (gameState.currentQuestionIndex > 0) {
        setGameState(prev => ({
            ...prev,
            currentQuestionIndex: prev.currentQuestionIndex - 1
        }));
    }
  };

  const restartQuiz = () => {
    setGameState({
      currentQuestionIndex: 0,
      score: 0,
      answers: {},
      isFinished: false,
      isStarted: false,
      activeQuestions: []
    });
  };

  // Exit quiz with confirmation logic
  const exitQuiz = () => {
      if (gameState.isFinished) {
          // If already finished, just go back to home without confirmation
          restartQuiz();
          return;
      }
      
      // If in progress, confirm
      if (window.confirm("正在答题中，确定要结束作答并返回首页吗？进度将不会保存。")) {
        restartQuiz();
      }
  };

  const currentLiveScore = Object.entries(gameState.answers).filter(([id, ans]: [string, any]) => {
      const q = quizData.find(q => q.id === parseInt(id));
      if (!q || ans.skipped) return false;
      
      if (q.type === 'SHORT_ANSWER') return ans.isCorrect === true;
      if (q.type === 'SINGLE_CHOICE' || q.type === 'TRUE_FALSE') return ans === q.correctAnswer;
      if (q.type === 'FILL_IN_BLANK') return typeof ans === 'string' && ans.trim().toLowerCase() === (q.correctAnswer as string).trim().toLowerCase();
      if (q.type === 'MULTI_CHOICE') {
          if (!Array.isArray(ans)) return false;
          const s1 = new Set(ans);
          const s2 = new Set(q.correctAnswer as string[]);
          return s1.size === s2.size && [...s1].every(x => s2.has(x));
      }
      return false;
  }).length;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span 
                className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text cursor-pointer"
                onClick={() => { if(gameState.isStarted) exitQuiz(); }}
            >
              OutdoorRef
            </span>
            <span className="text-xs text-gray-500 border border-gray-200 rounded px-1">v1.3</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {gameState.isStarted && !gameState.isFinished && (
                <div className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                得分: {currentLiveScore}
                </div>
            )}
            
            {gameState.isStarted && (
                <button 
                    onClick={exitQuiz}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                    title="返回首页"
                >
                    <Home className="w-5 h-5" />
                    <span className="ml-1 text-sm font-medium hidden sm:inline">返回首页</span>
                </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-8">
        {!gameState.isStarted ? (
          <StartScreen onStart={startQuiz} totalQuestions={quizData.length} />
        ) : gameState.isFinished ? (
          <ResultScreen 
            score={currentLiveScore} 
            totalQuestions={gameState.activeQuestions.length} 
            userAnswers={gameState.answers}
            questions={gameState.activeQuestions}
            onRestart={restartQuiz} 
          />
        ) : (
          <QuestionCard
            key={gameState.activeQuestions[gameState.currentQuestionIndex].id}
            currIndex={gameState.currentQuestionIndex}
            total={gameState.activeQuestions.length}
            question={gameState.activeQuestions[gameState.currentQuestionIndex]}
            onAnswer={handleAnswer}
            onPrevious={handlePrevious}
            initialAnswer={gameState.answers[gameState.activeQuestions[gameState.currentQuestionIndex].id]}
            isLast={gameState.currentQuestionIndex === gameState.activeQuestions.length - 1}
          />
        )}
      </main>
    </div>
  );
};

export default App;