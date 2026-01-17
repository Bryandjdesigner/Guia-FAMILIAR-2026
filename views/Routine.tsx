
import React from 'react';

export const Routine: React.FC = () => {
  const routineData = [
    { period: 'Manhã', act: 'Acordar (9h-10h), café e uma tarefa doméstica (ex: louça).' },
    { period: 'Pós-Almoço', act: 'Tempo livre de celular (descanso/jogos).' },
    { period: 'Tarde', act: '1h de atividade produtiva (leitura ou estudo de algo que goste).' },
    { period: '16:00 - 20:00', act: 'Tempo com o Pai / Celular liberado (se tarefas feitas).' },
    { period: '20:00', act: 'Bloqueio automático / Jantar em família / Preparar sono.' }
  ];

  const rewards = [
    { cat: 'Bônus Fim de Semana', req: 'Metas diárias cumpridas.', rew: 'Celular até 22:30 na Sex/Sáb.' },
    { cat: 'Chef da Noite', req: 'Ajudar sem precisar mandar.', rew: 'Escolher o cardápio (Pizza/Hambúrger).' },
    { cat: 'Bônus de Atitude', req: 'Respeito e sem enfrentamento.', rew: 'Passeio à escolha (Shopping/Estádio).' },
    { cat: 'Meta Mensal', req: 'Consistência o mês todo.', rew: 'Prêmio especial (Roupa/Jogo/Extra).' }
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-800">Rotina & Recompensas</h1>
        <p className="text-slate-500">Estruture o dia dele enquanto você trabalha e incentive os bons hábitos.</p>
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-800 p-4 text-white font-bold text-center text-sm uppercase tracking-widest">
          Sugestão de Rotina (Férias)
        </div>
        <div className="divide-y divide-slate-100">
          {routineData.map((item, idx) => (
            <div key={idx} className="p-4 md:p-6 flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0">
              <span className="w-32 font-bold text-indigo-600 text-sm shrink-0">{item.period}</span>
              <span className="text-slate-600 text-sm">{item.act}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Sistema de Incentivos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((reward, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-200 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded uppercase tracking-tighter">
                  {reward.cat}
                </span>
                <i className="fa-solid fa-award text-emerald-500"></i>
              </div>
              <div className="space-y-2">
                <p className="text-xs text-slate-400"><strong>Requisito:</strong> {reward.req}</p>
                <p className="text-sm font-semibold text-slate-700"><strong>Prêmio:</strong> {reward.rew}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-600 p-8 rounded-2xl text-white flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="text-4xl">
          <i className="fa-solid fa-hand-holding-heart opacity-50"></i>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Seja o Exemplo</h3>
          <p className="text-sm opacity-90 leading-relaxed">
            Se você quer que ele largue o celular às 20h, tente reduzir o seu uso também. 
            Se ele vir você lendo, assistindo algo ou conversando com ele, ele seguirá o seu ritmo natural. 
            <strong> Valorize o esforço:</strong> elogie quando ele entregar sem brigar.
          </p>
        </div>
      </div>
    </div>
  );
};
