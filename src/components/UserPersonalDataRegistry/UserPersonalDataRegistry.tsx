import React, { useEffect, useState } from 'react';
import { ToggleOptionType } from '../../types';
import Toggle from '../Toogle/Toggle';


const sampleOptions: ToggleOptionType[] = [
  {
      label: 'Male / Erkek',
      value: 'male',
      id: '0'
  },
  {
      label: 'Female / kadın',
      value: 'female',
      id: '1'
  },

]



const UserPersonalDataRegistry = () => {
  const [ selectedGender, setSelectedGender ] = useState<ToggleOptionType>()

  const handleToggle = (gender: ToggleOptionType) => {
    setSelectedGender(gender)
  }

  useEffect(() => {
    console.log('this is the selected gender: ', selectedGender)
  }, [selectedGender])
  

  return (
    <div>
      UserPersonalDataRegistry
      <Toggle options={sampleOptions} onChange={handleToggle} />  
    </div>
  )
};

export default UserPersonalDataRegistry;