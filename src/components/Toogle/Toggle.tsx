import React, { FC, useState } from 'react'

const Toggle: FC = () => {
    const [activeOption, setActiveOption] = useState('firstOption')
  return (
    <div className=' border-2 border-gray-500 p-[10px] relative '>
        <div className='grid grid-cols-2 relative'>
            <div className={`absolute w-1/2 h-full z-0 bg-[#800000] border border-orange-400 transition-all  ${activeOption === 'secondOption' ? 'translate-x-full' : ''}`}>

            </div>
            <div className={`h-full bg-transparent flex items-center justify-center relative z-10 transition-all ${activeOption === 'firstOption' ? 'text-white' : '' }`} onClick={() => {setActiveOption('firstOption')}}>
                    first option
            </div>
            <div className={`h-full bg-transparent p-3 px-11 flex items-center justify-center relative z-10 transition-all ${activeOption === 'secondOption' ? 'text-white' : ''}`} onClick={() => {setActiveOption('secondOption')}}>
                    second option
            </div>
        </div>
    </div>
  )
}

export default Toggle