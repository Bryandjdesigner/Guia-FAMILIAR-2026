
import React from 'react';

export const Contract: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-8 text-white text-center">
          <h2 className="text-sm font-bold tracking-widest uppercase opacity-75 mb-2">Acordo de Convivência</h2>
          <h1 className="text-3xl font-black">MARCELO & GUILHERME</h1>
          <p className="mt-4 text-slate-400 italic">"Garantir uma casa de respeito, descanso e alegria em 2026."</p>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          <section className="space-y-4">
            <h3 className="flex items-center text-xl font-bold text-indigo-600">
              <span className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
              Responsabilidades Diárias (07:00 - 16:00)
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                <i className="fa-solid fa-bed text-slate-400 mt-1 mr-3"></i>
                <div>
                  <span className="font-bold block">Organização</span>
                  <span className="text-sm text-slate-500">Arrumar a própria cama e manter o quarto organizado.</span>
                </div>
              </li>
              <li className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                <i className="fa-solid fa-sink text-slate-400 mt-1 mr-3"></i>
                <div>
                  <span className="font-bold block">Higiene da Casa</span>
                  <span className="text-sm text-slate-500">Lavar e guardar a louça que utilizar durante o dia.</span>
                </div>
              </li>
              <li className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                <i className="fa-solid fa-shower text-slate-400 mt-1 mr-3"></i>
                <div>
                  <span className="font-bold block">Higiene Pessoal</span>
                  <span className="text-sm text-slate-500">Banho tomado, obrigatoriamente, até as 18:00.</span>
                </div>
              </li>
              <li className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                <i className="fa-solid fa-book text-slate-400 mt-1 mr-3"></i>
                <div>
                  <span className="font-bold block">Atividade Offline</span>
                  <span className="text-sm text-slate-500">1 hora de leitura, estudo ou exercício físico.</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="flex items-center text-xl font-bold text-blue-600">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
              Regras do Telemóvel (Celular)
            </h3>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 space-y-3">
              <div className="flex items-center space-x-3 text-blue-800">
                <i className="fa-solid fa-clock text-blue-500"></i>
                <span className="font-semibold">Horário Limite: 20:00 pontualmente.</span>
              </div>
              <p className="text-sm text-blue-700 leading-relaxed pl-7">
                Às 20:00, o aparelho deve ser entregue ou colocado no local combinado para carregar na sala. 
                A regra mantém-se durante as férias para preservar a rotina familiar.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="flex items-center text-xl font-bold text-red-600">
              <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
              Consequências (Se falhar)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-red-100 rounded-xl bg-red-50/50">
                <span className="text-xs font-bold text-red-500 uppercase">Atraso no Banho</span>
                <p className="text-sm font-medium text-slate-800 mt-1">-1 hora de celular no dia seguinte.</p>
              </div>
              <div className="p-4 border border-red-100 rounded-xl bg-red-50/50">
                <span className="text-xs font-bold text-red-500 uppercase">Não Entregar às 20h</span>
                <p className="text-sm font-medium text-slate-800 mt-1">Perda total do aparelho por 24 horas.</p>
              </div>
              <div className="p-4 border border-red-100 rounded-xl bg-red-50/50">
                <span className="text-xs font-bold text-red-500 uppercase">Desrespeito</span>
                <p className="text-sm font-medium text-slate-800 mt-1">Suspensão de celular e saídas (a definir).</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="flex items-center text-xl font-bold text-emerald-600">
              <span className="bg-emerald-100 text-emerald-600 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
              Bônus de Sucesso
            </h3>
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center space-x-6">
              <i className="fa-solid fa-trophy text-emerald-500 text-3xl"></i>
              <p className="text-emerald-800 text-sm">
                Se o acordo for respeitado de segunda a sexta, o horário no sábado vai até <strong>22:30</strong> e poderemos combinar uma <strong>atividade especial</strong> (cinema, lanche ou saída).
              </p>
            </div>
          </section>

          <div className="grid grid-cols-2 gap-12 pt-10 border-t border-slate-100">
            <div className="text-center space-y-4">
              <div className="h-px bg-slate-300 w-full mx-auto"></div>
              <p className="font-bold text-slate-700">MARCELO (PAI)</p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-px bg-slate-300 w-full mx-auto"></div>
              <p className="font-bold text-slate-700">GUILHERME (FILHO)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 text-white text-sm">
        <h4 className="font-bold mb-2 flex items-center">
          <i className="fa-solid fa-comment-dots mr-2 text-indigo-400"></i>
          Dica para a Conversa
        </h4>
        <p className="opacity-80 leading-relaxed">
          Escolha um momento de calma, não durante uma briga. Explique que você o ama e quer que morar com você dê certo, 
          mas que a casa precisa de ordem para funcionar enquanto você trabalha.
        </p>
      </div>
    </div>
  );
};
