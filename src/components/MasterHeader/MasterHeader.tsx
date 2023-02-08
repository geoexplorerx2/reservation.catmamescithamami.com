import React from 'react';
import { Logo } from '../../lib';
import catmamescithammamLogo from '../../assets/logo/catmamescithammamLogo.svg';

const MasterHeader = () => {
  return (
    <div className='w-[834px] h-[150px] backdrop-blur-2xl bg-[#FFFFFF] bg-opacity-70 shadow-md  backdrop-filter'>
        <div className="container flex justify-center">
            <div className='mt-8'>
              <Logo img= { catmamescithammamLogo }   />
            </div>
        </div>
    </div>
  )
}

export default MasterHeader;