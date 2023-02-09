import React, { useEffect } from 'react';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import icon_phone from "../../assets/icons/icon_2.svg";

const TelInput = () => {
    
  const [phone, setPhone] = useState('');
  const [isFocused, setIsFocused]= useState(false);

  const onFocus = () => {
    setIsFocused(true);
  }

  const onBlur = () => {
    setIsFocused(false);
  }

  useEffect (() => {
    console.log('focus is: ', isFocused)
  }, [isFocused])
  
  return (
    <div className='bg-white py-3 px-8 rounded-2xl flex justify-start items-center relative'>
        <img className='mr-6 w-5' src={icon_phone} alt="icon_phone" />

        <div className='relative flex items-center'>
            <label className={`${isFocused || phone.length ? "-translate-y-5 transition ease-out" : "" } ${!isFocused ? "transition ease-out" : ""} absolute z-[9] text-xs font-semibold`}>
            Phone Number / Telefon Numaranız 
            </label>
            <div onFocus={()=> onFocus()} onBlur={()=> onBlur()}  className={`${isFocused || phone.length ? "opacity-100" : "opacity-0"} translate-y-2 z-[11] transition ease-out`}>
                <PhoneInput
                initialCountry="tr"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                />
            </div>
        </div>
    </div> 
  )
}

export default TelInput