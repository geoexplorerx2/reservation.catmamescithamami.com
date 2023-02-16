import React, { useState } from 'react';
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
]

const UserPersonalDataRegistry = () => {
  const [toggleValue_1, SetToggleValue_1] = useState("")
  const [toggleValue_2, SetToggleValue_2] = useState("")
  
  const handleChange_1 = (e:ToggleOptionType) => {
    SetToggleValue_1(e?.label)
    console.log(e?.label)
  }

  const handleChange_2 = (e:ToggleOptionType) => {
    SetToggleValue_2(e?.label)
    console.log(e?.label)
  }
  return (
    <div className='container font-poppins'>
      <form className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-8'>

        <AnimatedInput label={'Name Surname'} inputType={'text'} logo={icon_person} />        
        <TelInput />
        <AnimatedInput label={'E-mail Address'} inputType={'email'} logo={icon_email} />
        {/* <AnimatedInput label={'Birthday / Doğum Tarihiniz'} inputType={'date'} logo={icon_date} /> */}
        <BirthDateInput />
        
        <div >
          <p className='text-sm font-medium mb-3'>Gender</p>
          <div className='bg-white rounded-2xl flex justify-start items-center'>
            <Toggle options={genderOptions} outerWrapperClassNames='max-w-50 ' labelClassNames='text-xs font-semibold' optionWrapperClassNames='px-5' onChange={(e)=> handleChange_1(e)} />
          </div>
        </div>

        <div >
          <p className='text-sm font-medium mb-3'>Therapist Preference</p>
          <div className='bg-white rounded-2xl flex justify-start items-center'>
            <Toggle options={genderOptions} outerWrapperClassNames='max-w-50' labelClassNames='text-xs font-semibold' optionWrapperClassNames='px-5' onChange={(e)=> handleChange_2(e)} />
          </div>
        </div>

      </form>
    </div>
  )
};

export default UserPersonalDataRegistry;