import React from 'react';
import icon_person from "../../assets/icons/icon_1.svg";

import icon_email from "../../assets/icons/icon_3.svg";
import icon_date from "../../assets/icons/icon_4.svg";
import AnimatedInput from './AnimatedInput';
import TelInput from './TelInput';
const UserPersonalDataRegistry = () => {

  return (
    <div className='container '>
      <form className='grid grid-cols-2 gap-10 mt-8'>

        <AnimatedInput label={'Name Surname / Adınız Soyadınız'} inputType={'text'} logo={icon_person} />

        
            <TelInput />
          

        <AnimatedInput label={'E-mail Address / E-posta Adresiniz'} inputType={'email'} logo={icon_email} />
        <AnimatedInput label={'Birthday / Doğum Tarihiniz'} inputType={'date'} logo={icon_date} />
        
      </form>
    </div>
  )
};

export default UserPersonalDataRegistry;