import React from 'react';
import Header from './components/Header';
import Contents from './components/Contents';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Contents />
    </div>
  );
};

export default App;
