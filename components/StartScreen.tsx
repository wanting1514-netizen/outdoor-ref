import React from 'react';
import { Play, BookOpen, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';
import { Category } from '../types';

interface StartScreenProps {
  onStart: (category?: Category) => void;
  totalQuestions: number;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, totalQuestions }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center space-y-8 animate-fade-in">
      <div className="space-y-4">
        <div className="bg-blue-100 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6 shadow-lg">
          <BookOpen className="w-10 h-10 text-blue-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          户外运动赛事裁判题库
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          基于《户外安全观》、《山地户外比赛裁判工作概论》及竞赛规则。
          <br/>点击下方模块进行专项练习，或点击底部按钮进行全量测试。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-4">
        <button 
          onClick={() => onStart('safety')}
          className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-lg hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="bg-green-50 p-4 rounded-full mb-4 group-hover:bg-green-100 transition-colors">
             <ShieldCheck className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">户外安全观</h3>
          <p className="text-sm text-gray-500 mb-4">安全意识、自然观与责任</p>
          <div className="mt-auto flex items-center text-green-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            专项练习 <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </button>

        <button 
          onClick={() => onStart('rules')}
          className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-lg hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="bg-indigo-50 p-4 rounded-full mb-4 group-hover:bg-indigo-100 transition-colors">
            <BookOpen className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">竞赛规则</h3>
          <p className="text-sm text-gray-500 mb-4">裁判职责、赛事流程与判罚</p>
          <div className="mt-auto flex items-center text-indigo-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            专项练习 <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </button>

        <button 
          onClick={() => onStart('risk')}
          className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-lg hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="bg-orange-50 p-4 rounded-full mb-4 group-hover:bg-orange-100 transition-colors">
            <AlertTriangle className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">风险管理</h3>
          <p className="text-sm text-gray-500 mb-4">急救常识、装备检查与高危指标</p>
          <div className="mt-auto flex items-center text-orange-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            专项练习 <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </button>
      </div>

      <div className="pt-8 w-full max-w-sm">
        <button
          onClick={() => onStart()}
          className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-gray-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          <span>全量题库测试 (共 {totalQuestions} 题)</span>
          <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default StartScreen;