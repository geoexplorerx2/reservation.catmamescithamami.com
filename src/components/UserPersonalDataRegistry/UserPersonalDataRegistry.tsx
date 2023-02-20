import React, { FC, useState, useEffect } from 'react';
import icon_person from "../../assets/icons/icon_1.svg";

import icon_email from "../../assets/icons/icon_3.svg";
import icon_date from "../../assets/icons/icon_4.svg";
import { Question, ToggleOptionType } from '../../types';
import Toggle from '../Toogle/Toggle';
import AnimatedInput from './AnimatedInput';
import TelInput from './TelInput';
import { UiDatePicker } from '../../lib';
import BirthDateInput from './BirthDateInput';

const genderOptions: ToggleOptionType[] = [
  {
    label: 'Male',
    value: 'yes',
    id: '1',
  },
  {
    label: 'Female',
    value: 'no',
    id: '2',
  }
];

interface UserPersonalDataRegistryProps {
  handleChange?: any;
  errors?: any;
  values?: any;
};

const UserPersonalDataRegistry: FC<UserPersonalDataRegistryProps> = ({ handleChange, errors, values }) => {

  const [toggleValue_1, SetToggleValue_1] = useState("")
  const [toggleValue_2, SetToggleValue_2] = useState("")

  const handleChange_1 = (e: ToggleOptionType) => {
    SetToggleValue_1(e?.label)
    console.log(e?.label)
  }

  const handleChange_2 = (e: ToggleOptionType) => {
    SetToggleValue_2(e?.label)
    console.log(e?.label)
  };

  const handleInputChange = (event: any, inputType: any = null) => {
    handleChange && handleChange(event, inputType);
  };

  useEffect(()=> {
    console.log('values', values)
})


  return (
    <div className='container font-poppins h-[calc(100%_-_250px)] overflow-y-scroll scrollbar-hide '>
      <form className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-8'>

        <AnimatedInput
          label={'Name Surname'}
          inputType={'text'}
          inputName='namesurname'
          logo={icon_person}
          onInputChange={(e: any) => handleInputChange(e)}
          errors={errors}
          values={values}
        />

        <TelInput
          onInputChange={(e: any) => handleInputChange(e, 'telephone')}
          errors={errors}
          inputName='telephone'
          values={values}
        />

        <AnimatedInput
          label={'E-mail Address'}
          inputType={'email'}
          inputName='email'
          logo={icon_email}
          onInputChange={(e: any) => handleChange(e)}
          errors={errors}
          values={values}
        />

        {/* <AnimatedInput label={'Birthday / Doğum Tarihiniz'} inputType={'date'} logo={icon_date} /> */}
        <BirthDateInput
          onInputChange={(e: any) => handleInputChange(e, 'bithdate')}
          errors={errors}
          inputName='bithdate'
          values={values}
        />

        <div>
          <p className='text-sm font-medium mb-3'>Gender</p>
          <div className='bg-white rounded-2xl flex justify-start items-center'>
            <Toggle
              options={genderOptions}
              outerWrapperClassNames='max-w-50'
              labelClassNames='text-xs font-semibold'
              optionWrapperClassNames='px-5'
              onChange={(e: any) => handleInputChange(e.label?.toLowerCase(), 'gender')}
              values={values.gender}
              defaultSelected= {values.gender === 'male' ? 'left' : 'right'}
            //  onChange={(e)=> handleChange_1(e)} 
            />
          </div>
        </div>

        <div >
          <p className='text-sm font-medium mb-3'>Therapist Preference</p>
          <div className='bg-white rounded-2xl flex justify-start items-center'>
            <Toggle
              options={genderOptions}
              outerWrapperClassNames='max-w-50'
              labelClassNames='text-xs font-semibold'
              optionWrapperClassNames='px-5'
              onChange={(e: any) => handleInputChange(e.label?.toLowerCase(), 'therapist')}
              values={values.gender}
              defaultSelected= {values.therapist === 'male' ? 'left' : 'right'}
            //  onChange={(e)=> handleChange_2(e)} 
            />
          </div>
        </div>

      </form>
    </div>
  )
};

export default UserPersonalDataRegistry;