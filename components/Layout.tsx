
import React from 'react';
import { View } from '../App';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, onNavigate }) => {
  const menuItems = [
    { id: View.HOME, label: 'Início', icon: 'fa-house' },
    { id: View.CONTRACT, label: 'Acordo', icon: 'fa-file-signature' },
    { id: View.TECH, label: 'Tecnologia', icon: 'fa-mobile-screen' },
    { id: View.ROUTINE, label: 'Rotina', icon: 'fa-calendar-check' },
    { id: View.STRATEGY, label: 'Estratégias', icon: 'fa-brain' },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar / Desktop Nav */}
      <aside className="hidden md:flex flex-col w-64 bg-indigo-900 text-white sticky top-0 h-screen shadow-xl">
        <div className="p-6 border-b border-indigo-800">
          <h1 className="text-xl font-bold tracking-tight">Guia Familiar <span className="text-indigo-400">2026</span></h1>
          <p className="text-xs text-indigo-300 mt-1 uppercase font-semibold">Marcelo & Guilherme</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                currentView === item.id ? 'bg-indigo-700 text-white shadow-lg' : 'text-indigo-100 hover:bg-indigo-800'
              }`}
            >
              <i className={`fa-solid ${item.icon} w-5`}></i>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-6 text-[10px] text-indigo-400 text-center">
          Investindo em Ordem com Afeto
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around p-2 z-50">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center p-2 space-y-1 transition-colors ${
              currentView === item.id ? 'text-indigo-600' : 'text-slate-400'
            }`}
          >
            <i className={`fa-solid ${item.icon} text-lg`}></i>
            <span className="text-[10px] font-bold">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-1 pb-24 md:pb-0 overflow-auto">
        <div className="max-w-4xl mx-auto p-4 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
};
