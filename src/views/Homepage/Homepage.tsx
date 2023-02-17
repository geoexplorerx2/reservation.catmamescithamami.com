import React, { FC, useEffect } from 'react'
import services from '../../api/services';
import {
  CompanyRelatedInformation,
  RegistryEnd,
  UserHealthInformationRegistry,
  UserPersonalDataRegistry
} from '../../components';
import { STEPPER_VIEWS } from '../../components/constants';
import { useForm, useValidate } from '../../hooks';


interface HomepageProps {
  updateStepsViews?: any;
  onError?: any,
  handleChange?: any,
  errors?: any
};

const Homepage: FC<HomepageProps> = ({ updateStepsViews, onError, handleChange, errors }) => {
  // const server = services;
  // const activeStep = updateStepsViews?.find((step: any) => step.completed == false && step.display == true)
  // const activeStepFormatted = activeStep?.view.toLowerCase().replaceAll(' ', '')
  
  
  // const {
  //   values,
  //   errors,
  //   handleChange,
  //   handleSubmit
  // } = useForm(
  //        _handleRegistry, 
  //        useValidate, 
  //        activeStepFormatted ?? 'userpersonaldataregistry'
  //     );


  //   // useEffect(() => {
  //   //   console.log('erorrs are: ', errors)
  //   // } ,
  //   // [errors])
  //   // useEffect(() => {
  //   //   console.log('activeStep are: ', activeStep, 'and the name is: ', activeStepFormatted)
  //   // } ,
  //   // [activeStep])

  //   // useEffect(() => {
  //   //   console.log( 'updateStepsViews', updateStepsViews)
  //   // } ,
  //   // [updateStepsViews])

  // const completedSteps = updateStepsViews && updateStepsViews?.filter((steps: any) => steps.selected);

  // // handle registry
  // function _handleRegistry() {
  //   let registryData = {
  //     name_surname: values?.namesurname,
  //     phone: values?.telephone,
  //     country: values?.telephone.split(' ')[0],
  //     email: values?.email,
  //     birthday: new Date(values?.bithdate).toLocaleDateString().replaceAll('/', '-') ,
  //     gender: values?.gender ?? false,
  //     therapist_gender: values?.therapist ?? false,
  //     heart_problems: values?.heart_problems ?? false,
  //     blood_pressure: values?.blood_pressure ?? false,
  //     varicose_veins: values?.varicose_veins ?? false,
  //     asthma: values?.asthma ?? false,
  //     vertebral_problem: values?.vertebral_problem ?? false,
  //     joint_problems: values?.joint_problems ?? false,
  //     fractures: values?.fractures ?? false,
  //     skin_allergies: values?.skin_allergies ?? false,
  //     lodine_allergies: values?.lodine_allergies ?? false,
  //     hyperthyroidism: values?.hyperthyroidism ?? false,
  //     diabetes: values?.diabetes ?? false,
  //     epilepsy: values?.diabetes ?? false,
  //     pregnant: values?.pregnant ?? false,
  //     back_problems: values?.back_problems ?? false,
  //     covid: values?.covid ?? false,
  //     covid_note: values?.covid_note ?? '',
  //     surgery: values?.surgery ?? false ,
  //     surgery_note: values?.surgery_note ?? '',
  //     // isTermsOfServiceAccepted: values?.isTermsOfServiceAccepted ?? false

  //   };

  //   console.log('the registryData', registryData)
  //   // service call 
  //   if(completedSteps?.length == 3 && Object.keys(errors).length === 0 && values.isTermsOfServiceAccepted){
  //     server.registry(
  //       registryData
  //     ).then((res: any) => {
  //       console.log(res);
  //     });
  //   }

  //   // console.log({values}, {errors}, {updateStepsViews});
  // };


  // const completeRegistration  = () => {
  //   const isCompleteRegistrationStep = completedSteps?.length == 3
  //   const noErorrs = Object.keys(errors).length === 0
  //   if( isCompleteRegistrationStep && noErorrs ) _handleRegistry(); 
  // }

  // // useEffect(() => {
  // //   if(completedSteps?.length == 3 && Object.keys(errors).length === 0) _handleRegistry(); 
  // // }, [updateStepsViews]);
  
  // // handle submit 
  // useEffect(() => {
  //    handleSubmit()
  // }, [values]);
  
  // // handle errros cb
  // useEffect(() => {
  //   onError && onError(errors);
  // }, [errors])
  
  return (
    <div className='flex justify-center h-full overflow-y-scroll'>
     {updateStepsViews?.map((stepview: any, index: number) => (
      <>
        {
          // STEPPER_VIEWS.includes(stepview) && 
          STEPPER_VIEWS.indexOf(stepview.view) == 0 &&
          stepview.display &&
          <UserPersonalDataRegistry handleChange = {(event: any, type: any) => handleChange(event, type) } errors = { errors } values={values} />
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
          <CompanyRelatedInformation handleTermsOfServiceAcceptance={((e: boolean) => { handleChange(e, 'isTermsOfServiceAccepted') })} />
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