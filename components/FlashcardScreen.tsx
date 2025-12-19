
import React, { useState } from 'react';
import { Flashcard } from '../types';
import { ArrowLeft, ArrowRight, RotateCw, BookOpen, Search } from 'lucide-react';

interface FlashcardScreenProps {
  cards: Flashcard[];
  onBack: () => void;
}

const FlashcardScreen: React.FC<FlashcardScreenProps> = ({ cards, onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter cards based on search
  const filteredCards = searchTerm 
    ? cards.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()) || c.content.toLowerCase().includes(searchTerm.toLowerCase()))
    : cards;

  const activeCard = filteredCards[currentIndex] || filteredCards[0];
  const displayIndex = currentIndex + 1;
  const total = filteredCards.length;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    setTimeout(() => {
        if (currentIndex < total - 1) setCurrentIndex(currentIndex + 1);
        else setCurrentIndex(0); 
    }, 150);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    setTimeout(() => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
        else setCurrentIndex(total - 1);
    }, 150);
  };

  const toggleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  // Reset index when search changes
  React.useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [searchTerm]);

  if (total === 0) {
      return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
              <div className="text-gray-500 text-lg mb-4">没有找到匹配的知识点</div>
              <button onClick={() => setSearchTerm('')} className="text-blue-600 font-bold hover:underline">
                  清除搜索
              </button>
              <button onClick={onBack} className="mt-8 flex items-center text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="w-4 h-4 mr-2"/> 返回首页
              </button>
          </div>
      )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 flex flex-col min-h-[85vh]">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <button 
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
        >
            <ArrowLeft className="w-5 h-5 mr-1" />
            首页
        </button>
        
        <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
                type="text" 
                placeholder="搜索..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 md:w-64 transition-all"
            />
        </div>
      </div>

      {/* Progress & Category */}
      <div className="flex justify-between items-end mb-4 px-2">
          <div>
            <span className="text-3xl font-bold text-gray-900">{displayIndex}</span>
            <span className="text-gray-400 text-lg font-medium mx-1">/</span>
            <span className="text-gray-500 font-medium">{total}</span>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full uppercase tracking-wider mb-1">
              {activeCard.category === 'safety_concept' ? "户外安全观" :
               activeCard.category === 'referee_basics' ? "裁判概论" :
               activeCard.category === 'rules_officiating' ? "规则执裁" :
               activeCard.category === 'risk_management' ? "风险管理" :
               activeCard.category === 'start_finish_athlete' ? "起终点服务" : "组织管理"}
          </span>
      </div>

      {/* Flashcard Area - Fixed Height for Layout Stability */}
      <div className="perspective-1000 mb-8 relative w-full h-[450px] md:h-[500px]">
        <div 
            className={`relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
            onClick={toggleFlip}
        >
            {/* Front Side */}
            <div className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center justify-center p-8 text-center">
                <div className="bg-blue-50 p-5 rounded-2xl mb-6">
                    <BookOpen className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
                    {activeCard.title}
                </h3>
                <div className="absolute bottom-8 left-0 right-0 text-gray-400 text-sm font-medium flex items-center justify-center space-x-2">
                    <RotateCw className="w-4 h-4" />
                    <span>点击卡片翻转</span>
                </div>
            </div>

            {/* Back Side */}
            <div 
                className="absolute inset-0 backface-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-xl flex flex-col p-8 md:p-12 rotate-y-180"
            >
                <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                    <div className="flex items-center justify-center mb-6">
                        <span className="text-blue-400 text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-blue-400/30 pb-1">
                            考点详情
                        </span>
                    </div>
                    <div className="text-white text-lg md:text-xl leading-relaxed whitespace-pre-line font-normal">
                        {activeCard.content}
                    </div>
                </div>
                
                {activeCard.pageReference && (
                    <div className="mt-6 pt-6 border-t border-gray-700 flex justify-center">
                        <div className="inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 transition-colors">
                            <BookOpen className="w-4 h-4 text-blue-300" />
                            <span className="text-gray-300 text-sm font-medium">
                                参考页码: {activeCard.pageReference}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-3 gap-4">
          <button 
            onClick={handlePrev}
            className="flex flex-col items-center justify-center py-4 bg-white rounded-2xl shadow-sm border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all group"
          >
              <ArrowLeft className="w-6 h-6 text-gray-600 mb-1 group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-bold text-gray-500">上一个</span>
          </button>
          
          <button 
            onClick={toggleFlip}
            className="flex flex-col items-center justify-center py-4 bg-blue-600 rounded-2xl shadow-lg hover:bg-blue-700 active:scale-95 transition-all text-white"
          >
              <RotateCw className={`w-6 h-6 mb-1 transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
              <span className="text-xs font-bold opacity-90">{isFlipped ? "返回问题" : "查看考点"}</span>
          </button>

          <button 
            onClick={handleNext}
            className="flex flex-col items-center justify-center py-4 bg-white rounded-2xl shadow-sm border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all group"
          >
              <ArrowRight className="w-6 h-6 text-gray-600 mb-1 group-hover:translate-x-1 transition-transform" />
              <span className="text-xs font-bold text-gray-500">下一个</span>
          </button>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default FlashcardScreen;
