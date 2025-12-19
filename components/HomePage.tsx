
import React from 'react';
import { BookOpen, PenTool, Award, Shield } from 'lucide-react';

interface HomePageProps {
  onSelectMode: (mode: 'recitation' | 'exam') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectMode }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 animate-fade-in pb-12">
      <div className="text-center mb-12 max-w-2xl">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
             <Shield className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          山地户外赛事<br/><span className="text-blue-600">裁判知识库</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          基于裁判培训教材打造的专业学习工具。<br/>
          通过闪卡记忆核心考点，通过模拟考试巩固学习成果。
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Recitation Mode Card */}
        <button
          onClick={() => onSelectMode('recitation')}
          className="group relative bg-white p-8 rounded-2xl shadow-md border-2 border-transparent hover:border-indigo-100 hover:shadow-xl transition-all duration-300 text-left overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <BookOpen className="w-24 h-24 text-indigo-600 transform group-hover:scale-110 transition-transform" />
          </div>
          
          <div className="bg-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
            <BookOpen className="w-7 h-7 text-indigo-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
            背诵模式
          </h2>
          <p className="text-gray-500 mb-6">
            将文档整理为知识点闪卡。按章节浏览，点击翻转查看详细内容，适合考前突击记忆。
          </p>
          
          <span className="inline-flex items-center text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform">
            开始背诵 <span className="ml-2">→</span>
          </span>
        </button>

        {/* Exam Mode Card */}
        <button
          onClick={() => onSelectMode('exam')}
          className="group relative bg-white p-8 rounded-2xl shadow-md border-2 border-transparent hover:border-blue-100 hover:shadow-xl transition-all duration-300 text-left overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <PenTool className="w-24 h-24 text-blue-600 transform group-hover:scale-110 transition-transform" />
          </div>
          
          <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
            <Award className="w-7 h-7 text-blue-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
            考试模式
          </h2>
          <p className="text-gray-500 mb-6">
            全真模拟测试题库。支持分章节练习和全卷综合测试，自动评分并提供详细解析。
          </p>
          
          <span className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
            进入考场 <span className="ml-2">→</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
