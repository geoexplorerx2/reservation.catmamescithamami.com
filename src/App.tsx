import React, { useState } from 'react';
import './App.css';
import { MasterFooter, MasterHeader } from './components';
import { Homepage } from './views';

function App() {
  const [updateStepsViews, setUpdateStepsViews] = useState<any>();

  return (
    <div className='min-h-screen overflow-hidden bg-[#EEEEEE]'>
      <MasterHeader />
        <Homepage updateStepsViews = { updateStepsViews } />
      <MasterFooter onStepViewChange={(updatestepviews: any) => setUpdateStepsViews(updatestepviews)} />
    </div>
  );
};

export default App;
