import React from 'react';
import logo_1 from "../../assets/logo/logo_1.svg";
import logo_2 from "../../assets/logo/logo_2.svg";
import logo_3 from "../../assets/logo/logo_3.svg";
import logo_4 from "../../assets/logo/logo_4.svg";
import AnimatedInput from './AnimatedInput';

import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const UserPersonalDataRegistry = () => {

  const [phone, setPhone] = useState('');
  
  return (
    <div className='container '>
      <form className='grid grid-cols-2 gap-10 mt-8'>

        <AnimatedInput label={'Name Surname / Adınız Soyadınız'} inputType={'text'} logo={logo_1} />

        <div className='bg-white py-3 px-8 rounded-2xl flex justify-start items-center'>
          <img className='mr-6 w-5' src={logo_2} alt="logo_2" />
          <label className='text-xs font-semibold'>
            Phone Number / Telefon Numaranız 
            <PhoneInput
              initialCountry="tr"
              value={phone}
              onChange={(phone) => setPhone(phone)}
            />
          </label>
        </div> 

        <AnimatedInput label={'E-mail Address / E-posta Adresiniz'} inputType={'email'} logo={logo_3} />
        <AnimatedInput label={'Birthday / Doğum Tarihiniz'} inputType={'date'} logo={logo_4} />
        
      </form>
    </div>
  )
};

export default UserPersonalDataRegistry;