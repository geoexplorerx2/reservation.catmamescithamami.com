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
  inputName?: string;
};

const TelInput: FC<TelInputProps> = ({ onInputChange, errors, inputName }) => {

  const [phone, setPhone] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const errorKeys = Object.keys(errors);

  const onChange = (e: any) => {
    setPhone(e)
    console.log('phone :', phone)
    setInputValue(e);
    onInputChange && onInputChange(e);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    console.log('focus is: ', isFocused);
  }, [isFocused])

  return (
    <div className={`bg-white py-3 px-8 rounded-2xl flex justify-start items-center relative ${errorKeys.includes(inputName ?? "") ? " border-2 border-[#800000]" : ""}`} >
      <img className='mr-6 w-5' src={icon_phone} alt="icon_phone" />
      <div className='relative flex items-center'>
        <label className={`${isFocused || phone ? "-translate-y-5 transition ease-out" : ""} ${!isFocused ? "transition ease-out" : ""} absolute z-[9] text-xs font-semibold`}>
          Phone Number
        </label>
        <div
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          className={`${isFocused || phone.length ? "opacity-100" : "opacity-0"} cursor-pointer translate-y-2 z-[11] transition ease-out`}
        >
          <PhoneInput
            initialCountry="tr"
            value={inputValue}
            onChange={(e) => onChange(e)}
          />
        </div>
      </div>
      {
        inputName && errorKeys.includes(inputName)
        &&
        <div className='absolute top-[-25px] right-[7px] bg-[#800000] text-white py-1 px-2 rounded-md border-2 border-[#800000] text-xs'>
          {errors[inputName]}
        </div>
      }
    </div>
  )
}

export default TelInput;