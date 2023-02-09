import React, { useEffect, useState } from 'react';
import './App.css';
import { MasterFooter, MasterHeader } from './components';
import { STEPPER_VIEWS } from './components/constants';
import { useStepper } from './hooks';
import { Homepage } from './views';

function App() {

  const [updateStepsViews, setUpdateStepsViews] = useState<any>();

  return (
    <div className='min-h-screen overflow-hidden bg-[#EEEEEE]'>
      <MasterHeader stepsState={updateStepsViews} />
        <Homepage updateStepsViews = { updateStepsViews } />
      <MasterFooter onStepViewChange={(updatestepviews: any) => setUpdateStepsViews(updatestepviews)} />
    </div>
  );
};

export default App;
