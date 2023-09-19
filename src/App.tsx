import React, { useEffect, useState } from 'react';
import services from './api/services';
import './App.css';
import { MasterFooter, MasterHeader } from './components';
import { STEPPER_VIEWS } from './components/constants';
import { useForm, useStepper, useValidate } from './hooks';
import { Homepage } from './views';
import {Countries} from './__Countries__'
function App() {
  const [updateStepsViews, setUpdateStepsViews] = useState<any>();
  const [hasErrors, setHasErrors] = useState<any>();
  const [continueClick, setContinueClick] = useState(false);
  
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

  // useEffect(() => {
  //   console.log('registryData values are: ', values)
  // }, [values])
  
 
  const completedSteps = updateStepsViews && updateStepsViews?.filter((steps: any) => steps.selected);
  let Country = Countries.filter((item=>`+${item.calling_code}`===values?.telephone?.split(' ')[0]))
  console.log('Country::',Country)
  // handle registry
  function _handleRegistry() {
    let registryData = {
      name_surname: values?.namesurname,
      phone: `${((values?.telephone?.split(' ')[0]+' '+values?.telephone?.split(' ')[1]+' '+values?.telephone?.split(' ')[2]+' '+values?.telephone?.split(' ')[3]+' '+values?.telephone?.split(' ')[4])?.split('u'))[0]}`,
      country: Country[0]?.country,
      email: values?.email,
      birthday: new Date(values?.bithdate).toLocaleDateString().replaceAll('/', '-') ,
      gender: values?.gender ?? 'female',
      therapist_gender: values?.therapist ?? 'female',
      heart_problems: values?.heart_problems ?? 'no',
      blood_pressure: values?.blood_pressure ?? 'no',
      varicose_veins: values?.varicose_veins ?? 'no',
      asthma: values?.asthma ?? 'no',
      vertebral_problem: values?.vertebral_problem ?? 'no',
      joint_problems: values?.joint_problems ?? 'no',
      fractures: values?.fractures ?? 'no',
      skin_allergies: values?.skin_allergies ?? 'no',
      lodine_allergies: values?.lodine_allergies ?? 'no',
      hyperthyroidism: values?.hyperthyroidism ?? 'no',
      diabetes: values?.diabetes ?? 'no',
      epilepsy: values?.diabetes ?? 'no',
      pregnant: values?.pregnant ?? 'no',
      back_problems: values?.back_problems ?? 'no',
      covid: values?.covid ?? 'no',
      covid_note: values?.covid_note ?? '',
      surgery: values?.surgery ?? 'no' ,
      surgery_note: values?.surgery_note ?? '',
      signature: values?.signatureBase64Img ?? values?.signature
      // isTermsOfServiceAccepted: values?.isTermsOfServiceAccepted ?? false
    };

    // service call 
    if (completedSteps?.length == 3 && Object.keys(errors).length === 0 && values.isTermsOfServiceAccepted) {
      return server.registry(
        registryData
      ).then((res: any) => {
        return { 
          status: res?.status, 
          payload: res 
        }
      }).catch(error => {
        return { 
          status: 'unsuccesfull', 
          payload: error 
        }
      })
    }
  };


  const completeRegistration = () => {
    const isCompleteRegistrationStep = completedSteps?.length == 3
    const noErorrs = Object.keys(errors).length === 0
    if (isCompleteRegistrationStep && noErorrs) return _handleRegistry();
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
      <Homepage updateStepsViews={updateStepsViews}
        // onError = {(errors: any) => setHasErrors(errors)}
        handleChange={handleChange}
        errors={continueClick && errors}
        values={values}
      />
      <MasterFooter 
        onStepViewChange={(updatestepviews: any) => setUpdateStepsViews(updatestepviews)} 
        hasErrors={hasErrors} 
        completeRegistry={completeRegistration} 
        onContinueClick={(nextClick: any) => setContinueClick(nextClick)}
      />
    </div>
  );
};

export default App;
