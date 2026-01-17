
import React from 'react';

export const Technology: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-800">Gestão de Tecnologia</h1>
        <p className="text-slate-500">Use ferramentas inteligentes para reduzir o embate direto e garantir o sono.</p>
      </header>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-6">
        <div className="flex items-center space-x-4 pb-4 border-b border-slate-100">
          <div className="bg-google-multi p-3 rounded-lg flex space-x-1">
             <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
             <div className="w-2 h-6 bg-red-500 rounded-full"></div>
             <div className="w-2 h-6 bg-yellow-500 rounded-full"></div>
             <div className="w-2 h-6 bg-green-500 rounded-full"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Google Family Link</h2>
            <p className="text-sm text-slate-500 italic">"Deixe que o sistema seja o vilão, não você."</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-slate-700 uppercase text-xs tracking-wider">Passo a Passo de Configuração</h3>
          <div className="space-y-3">
            {[
              { t: 'Instalação', d: 'Baixe o app "Family Link" no seu celular e conecte a conta Google dele.' },
              { t: 'Limites Diários', d: 'No seu app, vá em "Limite Diário" ou "Hora de Dormir".' },
              { t: 'Bloqueio Automático', d: 'Configure a hora de dormir para as 20:00 pontualmente.' },
              { t: 'Prevenção', d: 'O app impede que ele desinstale o controle sem a sua senha.' }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                <span className="bg-slate-800 text-white w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold">{idx + 1}</span>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{step.t}</h4>
                  <p className="text-slate-500 text-sm">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
          <h4 className="text-amber-800 font-bold mb-1 flex items-center">
            <i className="fa-solid fa-triangle-exclamation mr-2"></i>
            Atenção ao Wi-Fi
          </h4>
          <p className="text-amber-700 text-sm leading-relaxed">
            Se houver resistência na entrega física, não lute. Use o <strong>App do Roteador</strong> para "pausar" 
            a internet do dispositivo dele ou desligue o Wi-Fi da casa. Sem conexão, o celular perde o atrativo.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2">Por que as 20:00?</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-center"><i className="fa-solid fa-check text-green-400 mr-2"></i> Higiene do sono (sem luz azul)</li>
            <li className="flex items-center"><i className="fa-solid fa-check text-green-400 mr-2"></i> Espaço para conversa em família</li>
            <li className="flex items-center"><i className="fa-solid fa-check text-green-400 mr-2"></i> Redução da irritabilidade matinal</li>
            <li className="flex items-center"><i className="fa-solid fa-check text-green-400 mr-2"></i> Desintoxicação de dopamina</li>
          </ul>
        </div>
        <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-bold mb-4 border-b border-indigo-500 pb-2 text-indigo-100">Código de Acesso</h3>
          <p className="text-sm opacity-90 leading-relaxed">
            Você possui um "Código de Acesso do Responsável" no app. Use-o para dar bônus de 15-30 minutos 
            quando ele merecer por bom comportamento ou ajuda extra. Isso gera valor à sua autoridade.
          </p>
        </div>
      </div>
    </div>
  );
};
