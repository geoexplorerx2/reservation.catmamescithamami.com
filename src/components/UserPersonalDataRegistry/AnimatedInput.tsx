import React, { FC, InputHTMLAttributes, useEffect, useState } from 'react'

interface InfoProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputType: string;
  logo: string;
  inputName?: string;
  onInputChange?: any;
  errors?: any;
  values?: any;
};

const AnimatedInput: FC<InfoProps> = (props) => {
  const { label, inputType, logo, inputName, onInputChange, errors, values } = props

  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const errorKeys = Object.keys(errors);

  const onChange = (e: any) => {
    setInputValue(e.target.value);
    onInputChange && onInputChange(e)
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    // console.log(isFocused);
    // console.log(inputValue);
  }, [isFocused]);

  useEffect(()=> {
    console.log('fffffffffff', values[inputName ?? ''])
  }, [inputValue])

  return (
    <div className={`bg-white py-3 px-8 rounded-2xl flex justify-start items-center relative ${errorKeys.includes(inputName ?? "") ? " border-2 border-[#800000]" : ""}`}>
      <img className='mr-6 w-5' src={logo} alt={logo} />
      <div className='relative flex items-center'>
        <label className={`${isFocused || values[inputName ?? ''] ? "-translate-y-5 transition ease-out" : ""} ${!isFocused ? "transition ease-out" : ""} text-xs font-semibold absolute z-[9]`}>
          {label}
        </label>

        <input
          type={inputType}
          value={values[inputName ?? '']}
          name={inputName}
          onChange={(event) => onChange(event)}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          className={`${isFocused || values[inputName ?? ''] ? "opacity-100" : "opacity-0"} cursor-pointer transition ease-out bg-transparent border-0 focus:border-0 mt-4`}
        />
      </div>
      {
        inputName &&
        errorKeys.includes(inputName) &&
        <div className='absolute top-[-25px] right-[7px] bg-[#800000] text-white py-1 px-2 rounded-md border-2 border-[#800000] text-xs'>
          {errors[inputName]}
        </div>
      }
    </div>
  )
}

export default AnimatedInput