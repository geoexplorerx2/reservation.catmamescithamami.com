import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import icon_phone from "../../assets/icons/icon_2.svg";

interface TooglePropsType {
  onInputChange?: any;
};

interface TelInputProps {
  onInputChange?: any;
  errors?: any;
};

const TelInput: FC<TelInputProps> = ({ onInputChange, errors }) => {
    
  const [phone, setPhone] = useState('');
  const [isFocused, setIsFocused]= useState(false);
  const [inputValue, setInputValue] = useState("");

  const onChange= (e:any) => {
    setPhone(phone)
    setInputValue(e);
    onInputChange && onInputChange(e);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className='bg-white py-3 px-8 rounded-2xl flex justify-start items-center relative cursor-pointer'  >
      {
        errors.telephone && 
        <div>
          {errors.telephone}
        </div>
      }
        <img className='mr-6 w-5' src={icon_phone} alt="icon_phone" />
        <div className='relative flex items-center'>
            <label className={`${isFocused || phone.length ? "-translate-y-5 transition ease-out" : "" } ${!isFocused ? "transition ease-out" : ""} absolute z-[9] text-xs font-semibold`}>
              Phone Number
            </label>
            <div 
              onFocus={()=> onFocus()} 
              onBlur={()=> onBlur()} 
              className={`${isFocused || phone.length ? "opacity-100" : "opacity-0"} translate-y-2 z-[11] transition ease-out`}
            >
              <PhoneInput
                initialCountry="tr"
                value={inputValue}
                onChange={(e)=> onChange(e)}
              />
            </div>
        </div>
    </div> 
  )
}

export default TelInput;