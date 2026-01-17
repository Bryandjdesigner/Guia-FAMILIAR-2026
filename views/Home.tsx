
import React from 'react';
import { View } from '../App';

interface HomeProps {
  onNavigate: (view: View) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="text-center space-y-4">
        <div className="inline-block p-4 bg-indigo-100 rounded-full mb-4">
          <i className="fa-solid fa-people-roof text-4xl text-indigo-600"></i>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">Bem-vindo, Marcelo.</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Este guia foi criado para transformar a convivência com o Guilherme em 2026, 
          unindo <strong>ordem com afeto</strong> e reconstruindo a autoridade com respeito.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card 
          icon="fa-file-signature" 
          title="O Acordo Visual" 
          description="Crie um contrato de convivência para que as regras sejam transparentes e compartilhadas."
          onClick={() => onNavigate(View.CONTRACT)}
          color="indigo"
        />
        <Card 
          icon="fa-mobile-screen" 
          title="Gestão de Tecnologia" 
          description="Aprenda a configurar o bloqueio automático e gerenciar o celular sem ser o vilão."
          onClick={() => onNavigate(View.TECH)}
          color="blue"
        />
        <Card 
          icon="fa-calendar-check" 
          title="Rotina e Horários" 
          description="Estabeleça tarefas para o período em que você está no trabalho e defina os bônus."
          onClick={() => onNavigate(View.ROUTINE)}
          color="emerald"
        />
        <Card 
          icon="fa-brain" 
          title="Táticas de Enfrentamento" 
          description="Saiba como reagir a gritos e desafios mantendo o controle emocional e a firmeza."
          onClick={() => onNavigate(View.STRATEGY)}
          color="purple"
        />
      </div>

      <div className="bg-indigo-600 rounded-2xl p-8 text-white shadow-xl flex items-center space-x-6">
        <div className="hidden sm:block">
          <i className="fa-solid fa-lightbulb text-5xl opacity-50"></i>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Lembre-se do Objetivo</h3>
          <p className="opacity-90">O comportamento agressivo pode ser frustração. Mostrar que em sua casa existe ordem e amor transformará essa relação.</p>
        </div>
      </div>
    </div>
  );
};

const Card: React.FC<{ icon: string, title: string, description: string, onClick: () => void, color: string }> = ({ icon, title, description, onClick, color }) => {
  const colors: Record<string, string> = {
    indigo: 'hover:border-indigo-500 bg-indigo-50 text-indigo-600',
    blue: 'hover:border-blue-500 bg-blue-50 text-blue-600',
    emerald: 'hover:border-emerald-500 bg-emerald-50 text-emerald-600',
    purple: 'hover:border-purple-500 bg-purple-50 text-purple-600',
  };

  return (
    <button 
      onClick={onClick}
      className="text-left p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all group"
    >
      <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 transition-colors ${colors[color]}`}>
        <i className={`fa-solid ${icon} text-xl`}></i>
      </div>
      <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{title}</h3>
      <p className="mt-2 text-slate-500 text-sm leading-relaxed">{description}</p>
    </button>
  );
};
