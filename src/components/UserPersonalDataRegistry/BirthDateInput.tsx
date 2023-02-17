import React, { FC, useEffect, useRef, useState } from 'react'
import icon_date from "../../assets/icons/icon_4.svg";
import { createStyles } from '@mantine/core';
import { UiDatePicker } from '../../lib';

const useStyles = createStyles((theme: any) => ({
    input: {
        backgroundColor: 'transparent',
        border: 'none'
    },
    dropdown: {
        transform: 'translateX(-50px) !important'
    }
})) ;

interface BirthDateInputProps {
  onInputChange?: any;
  errors?: any;
};

const BirthDateInput: FC<BirthDateInputProps> = ({onInputChange, errors}) => {

  const[isFocused, setIsFocused] = useState(false);
  const[selectedDate, setSelectedDate] = useState()

  const DatepickerRef = useRef<HTMLInputElement>(null)
  const { classes } = useStyles();

  const onChange= (e:any) => {
    setSelectedDate(e);
    onInputChange && onInputChange(e, 'birthdate');
  };

  const Focus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    console.log('this is the slected Date,', selectedDate)
  },[selectedDate])

  return (
      <div className='bg-white py-3 px-8 rounded-2xl flex justify-start items-center'>
          <img className='mr-6 w-5' src={icon_date} alt={'calendar_icon'} />
          <div className='relative flex items-center'>
            <div className='relative z-20 bg-transparent'>
            {
              errors.bithdate && 
              <div>
                {errors.bithdate}
              </div>
            }
             <UiDatePicker
                name="birthdate"
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