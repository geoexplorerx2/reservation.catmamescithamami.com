import React, { FC, useEffect } from 'react'
import services from '../../api/services';
import { 
  CompanyRelatedInformation, 
  RegistryEnd, 
  UserHealthInformationRegistry, 
  UserPersonalDataRegistry } from '../../components';
import { STEPPER_VIEWS } from '../../components/constants';
import { useForm, useValidate } from '../../hooks';


interface HomepageProps{
  updateStepsViews?: any;
  onError?: any
};

const Homepage: FC<HomepageProps> = ({ updateStepsViews, onError }) => {
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
      console.log('erorrs are: ', errors)
    } ,
    [errors])
    useEffect(() => {
      console.log('activeStep are: ', activeStep, 'and the name is: ', activeStepFormatted)
    } ,
    [activeStep])

    useEffect(() => {
      console.log( 'updateStepsViews', updateStepsViews)
    } ,
    [updateStepsViews])

  const completedSteps = updateStepsViews && updateStepsViews?.filter((steps: any) => steps.selected);

  console.log({values}, {errors}, {updateStepsViews});
  
  // handle registry
  function _handleRegistry() {
    let registryData = {
      name_surname: values?.namesurname,
      phone: values?.telephone,
      country: 'sdlkfm',
      email: values?.email,
      birthday: values?.birthdate,
      gender: 'wekdfml',
      therapist_gender: 'aeldkfm',
      heart_problems: 'kmlae',
      blood_pressure: 'fwklemad',
      varicose_veins: 'kmae',
      asthma: 'ae.kmd',
      vertebral_problem: 'falekd.m',
      joint_problems: 'amslkd',
      fractures: 'kamlsd',
      skin_allergies: 'kald',
      lodine_allergies: 'qkleMAD',
      hyperthyroidism: ';LAEKM',
      diabetes: ';LAEKM',
      epilepsy: ';LAEKM',
      pregnant: ';LAEKM',
      back_problems: ';LAEKM',
      covid: ';LAEKM',
      covid_note: ';LAEKM',
      surgery: ';LAEKM',
      surgery_note: ';LAEKM'
    };

    // service call 
    if(completedSteps?.length == 3 && Object.keys(errors).length === 0){
      server.registry(
        registryData
      );
    }

    // console.log({values}, {errors}, {updateStepsViews});
  };

  useEffect(() => {
    if(completedSteps?.length == 3 && Object.keys(errors).length === 0) _handleRegistry(); 
  }, [updateStepsViews]);
  
  // handle submit 
  useEffect(() => {
     handleSubmit()
  }, [values]);
  
  // handle errros cb
  useEffect(() => {
    onError && onError(errors);
  }, [errors])
  
  return (
    <div className='flex justify-center'>
     {updateStepsViews?.map((stepview: any, index: number) => (
      <>
        {
          // STEPPER_VIEWS.includes(stepview) && 
          STEPPER_VIEWS.indexOf(stepview.view) == 0 &&
          stepview.display &&
          <UserPersonalDataRegistry handleChange = {(event: any, type: any) => handleChange(event, type) } errors = { errors } />
        }
        {
          // STEPPER_VIEWS.includes(stepview) && 
          STEPPER_VIEWS.indexOf(stepview.view) == 1 &&
          stepview.display &&
          <UserHealthInformationRegistry handleToggleChange = {(event: any, type: any) => handleChange(event, type) } />
        }
        {
          // STEPPER_VIEWS.includes(stepview) && 
          STEPPER_VIEWS.indexOf(stepview.view) == 2 &&
          stepview.display &&
          <CompanyRelatedInformation />
        }
        {
          // STEPPER_VIEWS.includes(stepview) && 
          STEPPER_VIEWS.indexOf(stepview.view) == 3 &&
          stepview.display &&
          <RegistryEnd />
        }
      </>
     ))}
    </div>
  )
};

export default Homepage;