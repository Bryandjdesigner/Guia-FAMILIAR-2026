
import React from 'react';

export const Strategy: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-left-4 duration-500">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-800">Estratégias de Autoridade</h1>
        <p className="text-slate-500">Como manter o controle sem gritar e sem perder a conexão afetiva.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl font-bold text-slate-800 flex items-center">
            <i className="fa-solid fa-shield-halved text-indigo-600 mr-3"></i>
            Enfrentamento Verbal
          </h2>
          <p className="text-sm text-slate-500 italic">Se ele gritar ou te desafiar:</p>
          <ul className="space-y-4">
            <li className="p-3 bg-slate-50 rounded-lg border-l-4 border-indigo-400">
              <span className="font-bold block text-sm">Mantenha a voz baixa</span>
              <span className="text-xs text-slate-500">Quanto mais ele gritar, mais baixo você fala. Isso anula o poder dele.</span>
            </li>
            <li className="p-3 bg-slate-50 rounded-lg border-l-4 border-indigo-400">
              <span className="font-bold block text-sm">A Técnica da Escolha</span>
              <span className="text-xs text-slate-500">"Você tem duas opções: desligar agora ou perder o acesso o dia todo amanhã."</span>
            </li>
            <li className="p-3 bg-slate-50 rounded-lg border-l-4 border-indigo-400">
              <span className="font-bold block text-sm">Saia de cena</span>
              <span className="text-xs text-slate-500">Após dar a escolha, não discuta. Dê espaço para ele processar a decisão.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-xl font-bold text-slate-800 flex items-center">
            <i className="fa-solid fa-handshake-angle text-emerald-600 mr-3"></i>
            Atividades Pós-20h
          </h2>
          <p className="text-sm text-slate-500 italic">O que fazer após o celular travar:</p>
          <ul className="space-y-3">
            {[
              { icon: 'fa-utensils', t: 'Cozinhar Juntos', d: 'Transforme o jantar em uma tarefa dele/nossa.' },
              { icon: 'fa-chess', t: 'Jogos de Tabuleiro', d: 'Truco, Uno ou Dominó geram disputa saudável.' },
              { icon: 'fa-tv', t: 'Série na TV', d: 'Assistir algo compartilhado é diferente do isolamento.' },
              { icon: 'fa-dumbbell', t: 'Caminhada/Futebol', d: 'Gasto de energia física ajuda no sono.' }
            ].map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-sm">
                <i className={`fa-solid ${item.icon} text-slate-400 w-5`}></i>
                <span><strong>{item.t}:</strong> {item.d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 space-y-6">
          <h3 className="text-2xl font-bold">O Roteiro da Conversa</h3>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 italic text-indigo-100 text-sm leading-relaxed">
            "Guilherme, eu quero que a gente pare de brigar por causa do celular. Para resolvermos isso de vez, instalei um app que gerencia o horário sozinho. Às 20h ele trava. Assim, a regra já está definida pelo sistema e eu não preciso mais ser o 'pai chato'. Isso vai nos ajudar a ter um tempo melhor juntos."
          </div>
          <p className="text-xs text-indigo-300">
            * Se ele reclamar, diga que cada casa tem sua regra e que agora o foco é a adaptação de vocês.
          </p>
        </div>
        <i className="fa-solid fa-quote-right absolute -bottom-4 -right-4 text-9xl opacity-10"></i>
      </div>

      <div className="bg-rose-50 border border-rose-100 p-6 rounded-2xl">
        <h4 className="text-rose-800 font-bold mb-4 flex items-center uppercase text-xs tracking-widest">
          <i className="fa-solid fa-ban mr-2"></i> Jamais use força física
        </h4>
        <p className="text-sm text-rose-700 leading-relaxed">
          Tentar tomar o celular da mão gera risco de agressão mútua e valida a rebeldia. 
          Use o <strong>poder das consequências</strong> e o <strong>controle remoto</strong> (Wi-Fi/Family Link). 
          Se ele não entregar, o aparelho simplesmente vira um "tijolo" sem utilidade.
        </p>
      </div>
    </div>
  );
};
