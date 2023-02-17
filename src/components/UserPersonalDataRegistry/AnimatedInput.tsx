import React, { FC, InputHTMLAttributes, useEffect, useState } from 'react'

interface InfoProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputType: string;
  logo: string;
  inputName?: string;
  onInputChange?: any;
  errors?: any;
};

const AnimatedInput: FC<InfoProps> = (props) => {
  const {label, inputType, logo, inputName, onInputChange, errors} = props

  const[isFocused, setIsFocused] = useState(false);
  const[inputValue, setInputValue] = useState("");

  const errorkeys = Object.keys(errors);

  const onChange= (e:any) => {
    setInputValue(e.target.value);
    onInputChange && onInputChange(e)
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  useEffect(()=> {
    console.log(isFocused);
    console.log(inputValue);
  }, [isFocused]);
  
  return (
      <div className='bg-white py-3 px-8 rounded-2xl flex justify-start items-center'>
          <img className='mr-6 w-5' src={logo} alt={logo} />
          <div className='relative flex items-center'>
            <label className={`${isFocused || inputValue.length > 0 ? "-translate-y-5 transition ease-out" : "" } ${!isFocused ? "transition ease-out" : ""} text-xs font-semibold absolute z-[9]`}>
              {label} 
            </label>

            <input 
              type={inputType} 
              value={inputValue} 
              name={inputName} 
              onChange={(event) => onChange(event)} 
              onFocus={() => onFocus()} 
              onBlur={()=> onBlur()} 
              className={`${isFocused || inputValue.length ? "opacity-100" : "opacity-0"} transition ease-out bg-transparent border-0 focus:border-0 mt-4`} 
            />
            {
             inputName &&
             errorkeys.includes(inputName) && 
              <div>
                {errors[inputName]}
              </div>
            }
          </div>
          
        </div>
  )
}

export default AnimatedInput