import React from 'react';
import catmamescithammamLogo from '../../assets/logo/catmamescithammamLogo.svg';


const RegistryEnd = () => {
  return (
    <div className='absolute top-1/2 -translate-y-1/2 flex flex-col items-center space-y-[80px] px-5'>
        <img  src={ catmamescithammamLogo } className='w-60 h-36' />
        <h2 className='text-[#800000] text-[28px] font-semibold'>
            Thanks for your interest !
        </h2>
        <p className='text-lg text-center max-w-[500px]'>
          Here is the classic lorem ipsum passage followed by Boparai’s odd, yet mesmerizing version.
        </p>
    </div>
  )
};

export default RegistryEnd;