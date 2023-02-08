import React, { useState, useEffect, useRef } from 'react';

const useStepper = ({ steps, currentStepNumber }: any) => {
    const [stepperSteps, setStep] = useState<any>([]);
    const stepsStateRef = useRef();

    useEffect(() => {
        // step object
        const stepsState = steps?.map((step: any, index: number) => {
            const stepObj: any = {};

            stepObj.view = step;
            stepObj.display = index === 0 ? true : false;
            stepObj.completed = false;
            stepObj.selected = index === 0 ? true : false;

            return stepObj;
        });

        stepsStateRef.current = stepsState;

        const currentSteps = updateStep(
            currentStepNumber - 1,
            stepsState
        );

        setStep(currentSteps);
    }, []);

    useEffect(() => {
        const currentSteps = updateStep(
            currentStepNumber - 1,
            stepsStateRef.current
        );
        setStep(currentSteps)
    }, [currentStepNumber]);

    // update step
    function updateStep(stepNumber: any, steps: any) {
        const newSteps = [...steps];
        let stepCounter = 0;

        while (stepCounter < newSteps.length) {
            // current step 
            if (stepCounter === stepNumber) {
                newSteps[stepCounter] = {
                    ...newSteps[stepCounter],
                    display: true,
                    selected: true,
                    completed: false
                }
                stepCounter++;
            }
            
            // previous step
            else if (stepCounter < stepNumber) {
                newSteps[stepCounter] = {
                    ...newSteps[stepCounter],
                    display: false,
                    selected: true,
                    completed: true
                };
                stepCounter++;
            }

            // next step
            else {
                newSteps[stepCounter] = {
                    ...newSteps[stepCounter],
                    display: false,
                    selected: false,
                    completed: false
                }
                stepCounter++;
            }
        }
        return newSteps
    };

    return {
        stepperSteps
    }
};

export default useStepper;