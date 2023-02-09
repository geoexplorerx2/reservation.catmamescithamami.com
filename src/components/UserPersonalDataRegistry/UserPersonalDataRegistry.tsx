import React from 'react';
import icon_person from "../../assets/icons/icon_1.svg";

import icon_email from "../../assets/icons/icon_3.svg";
import icon_date from "../../assets/icons/icon_4.svg";
import { Question, ToggleOptionType } from '../../types';
import Toggle from '../Toogle/Toggle';
import AnimatedInput from './AnimatedInput';
import TelInput from './TelInput';


const genderOptions: ToggleOptionType[] = [ 
    {
      label: 'Male / Erkek',
      value: 'yes',
      id: '1',
    },
    {
      label: 'Female / Kadın',
      value: 'no',
      id: '2',
    }
]

const UserPersonalDataRegistry = () => {

  const handleChange = (e:ToggleOptionType) => {
    console.log(e)
  }
  return (
    <div className='container font-poppins'>
      <form className='grid grid-cols-2 gap-10 mt-8'>

        <AnimatedInput label={'Name Surname / Adınız Soyadınız'} inputType={'text'} logo={icon_person} />        
        <TelInput />
        <AnimatedInput label={'E-mail Address / E-posta Adresiniz'} inputType={'email'} logo={icon_email} />
        <AnimatedInput label={'Birthday / Doğum Tarihiniz'} inputType={'date'} logo={icon_date} />
        
        <div >
          <p className='text-sm font-medium mb-3'>Gender / Cinsiyetiniz</p>
          <div className='bg-white rounded-2xl flex justify-start items-center'>
            <Toggle options={genderOptions} outerWrapperClassNames='max-w-50 ' labelClassNames='text-xs font-semibold' optionWrapperClassNames='px-5' />
          </div>
        </div>

        <div >
          <p className='text-sm font-medium mb-3'>Therapist Preference / Terapist Terchiniz</p>
          <div className='bg-white rounded-2xl flex justify-start items-center'>
            <Toggle options={genderOptions} outerWrapperClassNames='max-w-50' labelClassNames='text-xs font-semibold' optionWrapperClassNames='px-5' onChange={(e)=> handleChange(e)} />
          </div>
        </div>

      </form>
    </div>
  )
};

export default UserPersonalDataRegistry;