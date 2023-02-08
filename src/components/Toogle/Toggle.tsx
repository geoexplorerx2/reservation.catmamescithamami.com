import React, { FC, useState } from 'react'
import { ToggleOptionType } from '../../types'


const sampleOptions: ToggleOptionType[] = [
    {
        label: 'First Option',
        value: 'first',
        id: '0'
    },
    {
        label: 'Second Option',
        value: 'second',
        id: '1'
    },

]

interface TooglePropsType {
    options?: ToggleOptionType[],
    onChange?: (option: ToggleOptionType) => void 
}

const Toggle: FC<TooglePropsType> = (props) => {
    const { options: optionsFromProps, onChange } = props
    const [options, setOptions] = useState(optionsFromProps ?? sampleOptions)
    const [activeOption, setActiveOption] = useState(sampleOptions[0])
    const handleChange = (option: ToggleOptionType) => {
        setActiveOption(option)
        onChange && onChange(option)
    } 
  return (
    <div className=' border-2 border-gray-500 p-[10px] relative '>
        <div className='grid grid-cols-2 relative'>
                <div className={`absolute w-1/2 h-full z-0 bg-[#800000] border border-orange-400 transition-all  ${activeOption.value === options[1].value ? 'translate-x-full' : ''}`}></div>
            {
            options.slice(0,2).map((option, index) => {
                const {label, value, id} = option
                return (
                    <div className={`h-full bg-transparent flex items-center justify-center relative z-10 transition-all py-3 px-11 ${activeOption.value === options[index].value  ? 'text-white' : '' }`} onClick={() => {handleChange(option)}}>
                            {label}
                    </div>

                )
            })
            }
            {/* <div className={`h-full bg-transparent p-3 px-11 flex items-center justify-center relative z-10 transition-all ${activeOption.value === 'secondOption' ? 'text-white' : ''}`} onClick={() => {setActiveOption('secondOption')}}>
                    second option
            </div> */}
        </div>
    </div>
  )
}

export default Toggle