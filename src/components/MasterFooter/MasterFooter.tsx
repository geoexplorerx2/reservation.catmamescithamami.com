import React, { FC, useEffect, useState } from 'react';
import { useIsMobile, useStepper } from '../../hooks';
import ButtonPrimary from '../../lib/Button/ButtonPrimary';
import { STEPPER_VIEWS } from '../constants';

interface MasterFooterProps{
  onStepViewChange?: Function;
};

const MasterFooter: FC<MasterFooterProps> = ({onStepViewChange}) => {
	const [currentStep, setCurrentStep] = useState<number>(1);
  const isMobile = useIsMobile()
  const { stepperSteps } = useStepper({
    steps: STEPPER_VIEWS, 
    currentStepNumber: currentStep
  });
  
  // handle steper on step view
  const handleStepper = (type: string) => {
    let nextStep = currentStep;
    type == 'next' ? nextStep++ : nextStep--;

    if(nextStep > 0 && nextStep <= STEPPER_VIEWS?.length) setCurrentStep(nextStep); 
  };

  // update view callback
  useEffect(() => {
    onStepViewChange && onStepViewChange(stepperSteps);
  }, [stepperSteps]);
  
  return (
    <div className={`${currentStep == STEPPER_VIEWS.length && 'hidden'} sticky top-[100vh] bottom-0 w-full h-[100px] backdrop-blur-2xl bg-[#FFFFFF] bg-opacity-70 shadow-md backdrop-filter border-t-4 border-[#CBCBCB]`}>
        <div className={`container flex ${currentStep == 1 && 'justify-center'}`}> 

          <div className={`${currentStep == 1 ? 'py-4 w-full max-w-[760px] ' : 'w-full py-4 flex flex-row justify-between space-x-[20px]'}`}>
            <div className={`${currentStep == 1 && 'hidden'}`}>
              {
                isMobile 
                ? 
                  <ButtonPrimary 
                  type="button"
                  className='!h-[48px] w-[48px]  py-2 bg-[#800000] rounded-[10px]' 
                  onClick={() => handleStepper('')}
                  >
                  <span className='font-black text-lg'>
                       &#60;
                  </span>
                  </ButtonPrimary>
                :  
                <ButtonPrimary 
                  type="button"
                  className='w-[240px] h-[60px] bg-[#EEEEEE] rounded-[10px]' 
                  onClick={() => handleStepper('')}
                >
                  <span className="text-[16px] text-[#800000] font-poppins font-semibold leading-[24px]">
                    Previous / Onceki
                  </span>
                </ButtonPrimary>
              }
            </div>
            <div className='w-full flex justify-end'>
              <ButtonPrimary 
                type="button" 
                className={`${ currentStep == 1 ? 'w-full h-[60px] bg-[#800000] rounded-[10px]' : 'w-full max-w-[500px] h-[60px] bg-[#800000] rounded-[10px]'}`} 
                onClick={() => handleStepper('next')}
              >
                  <span className="text-[16px] text-[#FFFFFF] font-poppins font-semibold leading-[24px]">
                    Continue / Devam Et
                  </span>
              </ButtonPrimary>
            </div>
          </div>
        
        </div>
    </div>
  )
};

export default MasterFooter;