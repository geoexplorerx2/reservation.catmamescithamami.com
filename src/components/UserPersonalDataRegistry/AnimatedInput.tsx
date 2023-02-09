import React, { useEffect, useState } from 'react'
import logo_3 from "../../assets/logo/logo_3.svg";

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
    setIsFocused(false)
  }

  useEffect(()=> {
    console.log(isFocused)
  }, [isFocused])
  return (
      <div className='bg-white py-3 px-8 rounded-2xl flex justify-start items-center'>
          <img className='mr-6 w-5' src={logo} alt={logo} />
          <div className='relative flex items-center'>
            <label className={`${isFocused || inputValue.length > 0 ? "-translate-y-5" : "" } text-xs font-semibold hover:animate-spin absolute z-[9]`}>
              {label} 
            </label>
            <input type={inputType} name={inputType} onChange={(e)=> onChange(e)} onFocus={() => onFocus()} onBlur={()=> onBlur()} className={`${isFocused ? "opacity-100" : "opacity-0"} relative z-10 bg-transparent border-0 focus:border-0 mt-4`} />
          </div>
        </div>
  )
}

export default AnimatedInput