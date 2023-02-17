import React, { FC, useEffect, useRef, useState } from 'react'
import icon_date from "../../assets/icons/icon_4.svg";
import { createStyles } from '@mantine/core';
import { UiDatePicker } from '../../lib';
import { ReactComponent as Excl_icon } from '../../assets/icons/exclamation-mark.svg';

const useStyles = createStyles((theme: any) => ({
  input: {
    backgroundColor: 'transparent',
    border: 'none'
  },
  dropdown: {
    transform: 'translateX(-50px) !important'
  }
}));

interface BirthDateInputProps {
  onInputChange?: any;
  errors?: any;
  inputName?: string;
};

const BirthDateInput: FC<BirthDateInputProps> = ({ onInputChange, errors, inputName }) => {

  const [isFocused, setIsFocused] = useState(false);
  const [selectedDate, setSelectedDate] = useState()

  const errorKeys = Object.keys(errors)

  const DatepickerRef = useRef<HTMLInputElement>(null)
  const { classes } = useStyles();

  const onChange = (e: any) => {
    setSelectedDate(e);
    onInputChange && onInputChange(e, 'birthdate');
  };

  const Focus = () => {
    setIsFocused(true);
  }

  const onBlur = () => {
    setIsFocused(false);
  }

  useEffect(() => {
    console.log('this is the slected Date,', selectedDate)
  },
    [selectedDate])

  return (
    <div className={`bg-white py-3 px-8 rounded-2xl flex justify-start items-center relative ${errorKeys.includes(inputName ?? "") ? " border-2 border-[#800000]" : ""}`}>
      <img className='mr-6 w-5' src={icon_date} alt={'calendar_icon'} />
      <div className='relative flex items-center'>
        <div className='relative z-20 bg-transparent'>
          <UiDatePicker
            name={inputName}
            value={selectedDate}
            onChange={onChange}
            ref={DatepickerRef}
            onFocus={Focus}
            onBlur={onBlur}
            classNames={{ input: classes.input, dropdown: classes.dropdown }}
          />
        </div>
        <label className={`${selectedDate ? "-translate-y-5 " : ""} ${!isFocused ? "" : ""} text-xs transition ease-out font-semibold absolute z-[9]`}>
          <span>
            Birth date
          </span>
        </label>

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

export default BirthDateInput