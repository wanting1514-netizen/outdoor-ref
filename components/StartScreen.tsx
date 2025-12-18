
import React from 'react';
import { Play, BookOpen, AlertTriangle, ShieldCheck, ArrowRight, Flag, Users, ClipboardList } from 'lucide-react';
import { Category } from '../types';

interface StartScreenProps {
  onStart: (category?: Category) => void;
  totalQuestions: number;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart, totalQuestions }) => {
  const categories: { id: Category; title: string; desc: string; icon: React.ReactNode; color: string }[] = [
    {
      id: 'safety_concept',
      title: '户外安全观',
      desc: '安全定义、意识表现(知情意)、自然观',
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      color: 'green'
    },
    {
      id: 'referee_basics',
      title: '裁判工作概论',
      desc: '裁判定义、素质要求、规程原则',
      icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
      color: 'indigo'
    },
    {
      id: 'rules_officiating',
      title: '竞赛规则与执裁',
      desc: '赛道执法、项目规则(山地车/绳索)、TA站',
      icon: <Flag className="w-6 h-6 text-red-600" />,
      color: 'red'
    },
    {
      id: 'risk_management',
      title: '风险管理',
      desc: '风险识别、管控手段、高危指标、“两两”检查',
      icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
      color: 'orange'
    },
    {
      id: 'start_finish_athlete',
      title: '起终点与运动员',
      desc: '功能区设置、检录流程、服务保障',
      icon: <Users className="w-6 h-6 text-blue-600" />,
      color: 'blue'
    },
    {
      id: 'org_management',
      title: '组织与管理',
      desc: '赛事手册、后勤保障(三保障)、评价体系',
      icon: <ClipboardList className="w-6 h-6 text-purple-600" />,
      color: 'purple'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center space-y-8 animate-fade-in pb-10">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mt-8">
          山地户外赛事裁判题库
        </h1>
        <p className="text-lg text-gray-600">
          基于裁判培训教材编写，覆盖安全观、规则、风险管理全流程。
          <br/>共收录 <strong>{totalQuestions}</strong> 道考点题目。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl mt-4">
        {categories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => onStart(cat.id)}
            className={`group bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col text-left hover:shadow-md hover:border-${cat.color}-200 transition-all duration-200`}
          >
            <div className="flex items-center mb-3">
              <div className={`bg-${cat.color}-50 p-3 rounded-lg mr-4 group-hover:bg-${cat.color}-100 transition-colors`}>
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800">{cat.title}</h3>
            </div>
            <p className="text-sm text-gray-500 mb-4 flex-grow">{cat.desc}</p>
            <div className={`flex items-center text-${cat.color}-600 font-medium text-sm mt-auto`}>
              开始练习 <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>

      <div className="pt-6 w-full max-w-sm">
        <button
          onClick={() => onStart()}
          className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-gray-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          <span>全卷模拟测试</span>
          <Play className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
