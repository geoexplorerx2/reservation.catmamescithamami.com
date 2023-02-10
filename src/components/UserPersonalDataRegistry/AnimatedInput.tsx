import React, { useEffect, useState } from 'react'

interface Info {
  label: string;
  inputType: string;
  logo: string;
}

const AnimatedInput = (props:Info) => {
  const {label, inputType, logo} = props

  const[isFocused, setIsFocused] = useState(false);
  const[inputValue, setInputValue] = useState("")

  const onChange= (e:any) => {
    setInputValue(e.target.value);
  }

  const onFocus = () => {
    setIsFocused(true);
  }

  const onBlur = () => {
    setIsFocused(false);
  }

  useEffect(()=> {
    console.log(isFocused);
    console.log(inputValue);
  }, [isFocused])
  
  return (
      <div className='bg-white py-3 px-8 rounded-2xl flex justify-start items-center'>
          <img className='mr-6 w-5' src={logo} alt={logo} />
          <div className='relative flex items-center'>
            <label className={`${isFocused || inputValue.length > 0 ? "-translate-y-5 transition ease-out" : "" } ${!isFocused ? "transition ease-out" : ""} text-xs font-semibold absolute z-[9]`}>
              {label} 
            </label>
            <input type={inputType} value={inputValue} name={inputType} onChange={(e)=> onChange(e)} onFocus={() => onFocus()} onBlur={()=> onBlur()} className={`${isFocused || inputValue.length ? "opacity-100" : "opacity-0"} transition ease-out bg-transparent border-0 focus:border-0 mt-4`} />
          </div>
        </div>
  )
}

export default AnimatedInput