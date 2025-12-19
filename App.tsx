
import React, { useState } from 'react';
import { quizData, flashcardData } from './data';
import { QuizState, Category } from './types';
import HomePage from './components/HomePage';
import FlashcardScreen from './components/FlashcardScreen';
import StartScreen from './components/StartScreen';
import QuestionCard from './components/QuestionCard';
import ResultScreen from './components/ResultScreen';
import { Home, Layers } from 'lucide-react';

type AppMode = 'home' | 'recitation' | 'exam';

const App: React.FC = () => {
  const [appMode, setAppMode] = useState<AppMode>('home');
  
  // Quiz State
  const [gameState, setGameState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    answers: {},
    isFinished: false,
    isStarted: false,
    activeQuestions: []
  });

  // Mode Navigation
  const goToHome = () => {
      if (appMode === 'exam' && gameState.isStarted && !gameState.isFinished) {
          if (!window.confirm("正在答题中，返回首页将丢失进度。确认返回？")) {
              return;
          }
      }
      setAppMode('home');
      setGameState(prev => ({ ...prev, isStarted: false, isFinished: false, answers: {}, score: 0 }));
  };

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
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm backdrop-blur-md bg-opacity-90">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={goToHome}
          >
            <div className="bg-blue-600 p-1.5 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
                 <Layers className="w-5 h-5" />
            </div>
            <div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">OutdoorRef</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {appMode === 'exam' && gameState.isStarted && !gameState.isFinished && (
                <div className="hidden sm:block text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 animate-fade-in">
                当前得分: {currentLiveScore}
                </div>
            )}
            
            {appMode !== 'home' && (
                <button 
                    onClick={goToHome}
                    className="flex items-center text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-lg hover:bg-gray-100"
                    title="返回首页"
                >
                    <Home className="w-5 h-5" />
                </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-5xl mx-auto p-4 md:p-8">
        
        {/* MODE: HOME */}
        {appMode === 'home' && (
            <HomePage onSelectMode={setAppMode} />
        )}

        {/* MODE: RECITATION */}
        {appMode === 'recitation' && (
            <FlashcardScreen 
                cards={flashcardData} 
                onBack={goToHome} 
            />
        )}

        {/* MODE: EXAM */}
        {appMode === 'exam' && (
            <>
                {!gameState.isStarted ? (
                <StartScreen 
                    onStart={startQuiz} 
                    onBack={goToHome}
                    totalQuestions={quizData.length} 
                />
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
            </>
        )}

      </main>
    </div>
  );
};

export default App;
