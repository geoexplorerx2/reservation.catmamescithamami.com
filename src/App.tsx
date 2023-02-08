import React from 'react';
import './App.css';
import { MasterFooter, MasterHeader } from './components';
import { Homepage } from './views';

function App() {
  return (
    <>
      <MasterHeader />
        <Homepage />
      <MasterFooter />
    </>
  );
};

export default App;
