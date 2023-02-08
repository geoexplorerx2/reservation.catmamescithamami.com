import React, { FC } from 'react'
import { 
  CompanyRelatedInformation, 
  RegistryEnd, 
  UserHealthInformationRegistry, 
  UserPersonalDataRegistry } from '../../components';
import { STEPPER_VIEWS } from '../../components/constants';


interface HomepageProps{
  updateStepsViews?: any;
};

const Homepage: FC<HomepageProps> = ({ updateStepsViews }) => {

  return (
    <div className='flex justify-center'>
     {updateStepsViews?.map((stepview: any, index: number) => (
      <>
        {
          // STEPPER_VIEWS.includes(stepview) && 
          STEPPER_VIEWS.indexOf(stepview.view) == 0 &&
          stepview.display &&
          <UserPersonalDataRegistry />
        }
        {
          // STEPPER_VIEWS.includes(stepview) && 
          STEPPER_VIEWS.indexOf(stepview.view) == 1 &&
          stepview.display &&
          <UserHealthInformationRegistry />
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