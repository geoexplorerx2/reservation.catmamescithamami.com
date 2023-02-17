import React, { FC, useState, useEffect } from 'react'
import { useIsMobile } from '../../hooks';
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
    defaultSelected?: 'left' | 'right',
    onChange?: (option: ToggleOptionType) => void 
    outerWrapperClassNames?: string,
    labelClassNames?: string,
    optionWrapperClassNames?: string;
    values?: any;
}

const Toggle: FC<TooglePropsType> = (props) => {
    const { options: optionsFromProps, onChange, outerWrapperClassNames, labelClassNames, optionWrapperClassNames, defaultSelected, values } = props
    const [options, setOptions] = useState(optionsFromProps ?? sampleOptions)
    const isMobile = useIsMobile()
    const selectDefaultOption = () => {
        let selectedItemIndex: number;
        if(defaultSelected){
            defaultSelected === 'left' ? selectedItemIndex = 0 : selectedItemIndex = 1
        } else {
            selectedItemIndex = 0
        }
        return options[selectedItemIndex] 
    }
    const [activeOption, setActiveOption] = useState(selectDefaultOption())
    const handleChange = (option: ToggleOptionType) => {
       
       option && setActiveOption(option)
        onChange && onChange(option)
    } 

    useEffect(()=> {
        console.log('values', values)
    })

    
  return (
    <div className={`${outerWrapperClassNames} bg-white rounded-[10px] p-[10px] relative w-full`}>
        <div className='grid grid-cols-2 relative '>
                <div className={`absolute w-1/2 h-full z-0 bg-[#800000] border transition-all rounded-[5px]  ${activeOption.value === options[1].value ? 'translate-x-full' : ''}`}></div>

            {
            options.slice(0,2).map((option, index) => {
                const {label, value, id} = option
                const shortenedLabel = label.split(' ')[0]
                
                return (
                    <div className={`${optionWrapperClassNames} h-full bg-transparent flex items-center justify-center relative z-10 transition-all py-3 md:px-11 whitespace-nowrap ${activeOption.value === options[index].value  ? 'text-white' : '' }`} onClick={() => {handleChange(option)}} key={id}>
                        <span className={`${labelClassNames}`}>
                            {isMobile ? shortenedLabel : label}
                        </span> 
                    </div>

                )
            })
            }

        </div>
    </div>
  )
}

export default Toggle