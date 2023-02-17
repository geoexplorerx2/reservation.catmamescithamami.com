import React, { useEffect, useState } from 'react';
import './App.css';
import { MasterFooter, MasterHeader } from './components';
import { STEPPER_VIEWS } from './components/constants';
import { useStepper } from './hooks';
import { Homepage } from './views';

function App() {
  const [updateStepsViews, setUpdateStepsViews] = useState<any>();
  const [hasErrors, setHasErrors] = useState<any>();

  return (
    <div className='h-screen overflow-hidden bg-[#EEEEEE]'>
      <MasterHeader stepsState={updateStepsViews} />
        <Homepage updateStepsViews = { updateStepsViews } onError = {(errors: any) => setHasErrors(errors)} />
      <MasterFooter onStepViewChange={(updatestepviews: any) => setUpdateStepsViews(updatestepviews)} hasErrors = { hasErrors }  />
    </div>
  );
};

export default App;
