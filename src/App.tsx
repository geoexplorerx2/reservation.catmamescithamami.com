import React, { useEffect, useState } from 'react';
import services from './api/services';
import './App.css';
import { MasterFooter, MasterHeader } from './components';
import { STEPPER_VIEWS } from './components/constants';
import { useForm, useStepper, useValidate } from './hooks';
import { Homepage } from './views';

function App() {
  const [updateStepsViews, setUpdateStepsViews] = useState<any>();
  const [hasErrors, setHasErrors] = useState<any>();
  const server = services;
  const activeStep = updateStepsViews?.find((step: any) => step.completed == false && step.display == true)
  const activeStepFormatted = activeStep?.view.toLowerCase().replaceAll(' ', '')

  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(
         _handleRegistry, 
         useValidate, 
         activeStepFormatted ?? 'userpersonaldataregistry'
      );


      useEffect(() => {
        console.log('registryData values are: ', values)
      } ,[values])

  const completedSteps = updateStepsViews && updateStepsViews?.filter((steps: any) => steps.selected);

  // handle registry
  function _handleRegistry() {
    let registryData = {
      name_surname: values?.namesurname,
      phone: values?.telephone,
      country: values?.telephone.split(' ')[0],
      email: values?.email,
      birthday: new Date(values?.bithdate).toLocaleDateString().replaceAll('/', '-') ,
      gender: values?.gender ?? false,
      therapist_gender: values?.therapist ?? false,
      heart_problems: values?.heart_problems ?? false,
      blood_pressure: values?.blood_pressure ?? false,
      varicose_veins: values?.varicose_veins ?? false,
      asthma: values?.asthma ?? false,
      vertebral_problem: values?.vertebral_problem ?? false,
      joint_problems: values?.joint_problems ?? false,
      fractures: values?.fractures ?? false,
      skin_allergies: values?.skin_allergies ?? false,
      lodine_allergies: values?.lodine_allergies ?? false,
      hyperthyroidism: values?.hyperthyroidism ?? false,
      diabetes: values?.diabetes ?? false,
      epilepsy: values?.diabetes ?? false,
      pregnant: values?.pregnant ?? false,
      back_problems: values?.back_problems ?? false,
      covid: values?.covid ?? false,
      covid_note: values?.covid_note ?? '',
      surgery: values?.surgery ?? false ,
      surgery_note: values?.surgery_note ?? '',
      // isTermsOfServiceAccepted: values?.isTermsOfServiceAccepted ?? false

    };
    
    // service call 
    if(completedSteps?.length == 3 && Object.keys(errors).length === 0 && values.isTermsOfServiceAccepted){
     return server.registry(
        registryData
      ).then((res: any) => {
        console.log(res);
        return {status: res?.status, payload: res}
      }).catch( error => {
        console.log(error)
        return {status: 'unsuccesfull', payload: error}
      })
    }

    // console.log({values}, {errors}, {updateStepsViews});
  };


  const completeRegistration  = () => {
    const isCompleteRegistrationStep = completedSteps?.length == 3
    const noErorrs = Object.keys(errors).length === 0
    if( isCompleteRegistrationStep && noErorrs ) return _handleRegistry(); 
  }

  // useEffect(() => {
  //   if(completedSteps?.length == 3 && Object.keys(errors).length === 0) _handleRegistry(); 
  // }, [updateStepsViews]);
  
  // handle submit 
  useEffect(() => {
     handleSubmit()
  }, [values]);
  
  // handle errros cb
  // useEffect(() => {
  //   onError && onError(errors);
  // }, [errors])
  useEffect(() => {
     setHasErrors(errors);
  }, [errors])
  


  return (
    <div className='h-screen overflow-hidden bg-[#EEEEEE]'>
      <MasterHeader stepsState={updateStepsViews} />
        <Homepage updateStepsViews = { updateStepsViews } 
          // onError = {(errors: any) => setHasErrors(errors)}
          handleChange={handleChange}
          errors={errors}
          values={values}
           />
      <MasterFooter onStepViewChange={(updatestepviews: any) => setUpdateStepsViews(updatestepviews)} hasErrors = { hasErrors } completeRegistry={completeRegistration} />
    </div>
  );
};

export default App;
