
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './views/Home';
import { Contract } from './views/Contract';
import { Technology } from './views/Technology';
import { Strategy } from './views/Strategy';
import { Routine } from './views/Routine';

enum View {
  HOME = 'home',
  CONTRACT = 'contract',
  TECH = 'tech',
  STRATEGY = 'strategy',
  ROUTINE = 'routine'
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderView = () => {
    switch (currentView) {
      case View.HOME: return <Home onNavigate={setCurrentView} />;
      case View.CONTRACT: return <Contract />;
      case View.TECH: return <Technology />;
      case View.STRATEGY: return <Strategy />;
      case View.ROUTINE: return <Routine />;
      default: return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

export default App;
export { View };
