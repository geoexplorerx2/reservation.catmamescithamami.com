import React, { useEffect, useRef, useState } from 'react'
import { UiDatePicker } from '../../lib';
import icon_date from "../../assets/icons/icon_4.svg";
import { createStyles } from '@mantine/core';



const useStyles = createStyles((theme) => ({
    input: {
        backgroundColor: 'transparent',
        border: 'none'
    },
    dropdown: {
        transform: 'translateX(-50px) !important'
    }
})) 

const BirthDateInput = () => {

  const[isFocused, setIsFocused] = useState(false);
  const[selectedDate, setSelectedDate] = useState()


  const DatepickerRef = useRef<HTMLInputElement>(null)
  const {classes} = useStyles()


  const onChange= (e:any) => {
    setSelectedDate(e);
  }

  const Focus = () => {
    setIsFocused(true);
  }

  const onBlur = () => {
    setIsFocused(false);
  }

  useEffect(() => {
    console.log('this is the slected Date,', selectedDate)
  } ,
  [selectedDate])

  return (
      <div className='bg-white py-3 px-8 rounded-2xl flex justify-start items-center'>
          <img className='mr-6 w-5' src={icon_date} alt={'calendar_icon'} />
          <div className='relative flex items-center'>
            <div className='relative z-20 bg-transparent'>
             <UiDatePicker 
                value={selectedDate} 
                onChange={onChange}
                ref={DatepickerRef} 
                onFocus={Focus} 
                onBlur={onBlur} 
                classNames={{input: classes.input, dropdown: classes.dropdown}} 
                />
            </div>
            <label className={`${selectedDate ? "-translate-y-5 " : "" } ${!isFocused ? "" : ""} text-xs transition ease-out font-semibold absolute z-[9]`}>
                <span>
                 Birth date
                </span>
            </label>
          </div>
        </div>
  )
}

export default BirthDateInput