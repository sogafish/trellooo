import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Contents from './components/Contents';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Contents />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {state};
}

export default connect(mapStateToProps)(App);
