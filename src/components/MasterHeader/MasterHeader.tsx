import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../../lib';
import catmamescithammamLogo from '../../assets/logo/catmamescithammamLogo.svg';
import { STEPPER_VIEWS } from '../constants';
import LanguagePicker from '../LanguagePicker/LanguagePicker';

interface MasterHeaderProps {
  stepsState?: any
}

const MasterHeader: FC<MasterHeaderProps> = (props) => {
  const {stepsState} = props;

  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);

  const isLastStep = stepsState?.find((step: any) => step?.view === 'Registry End')?.display

  return (
    <div className={`${ isLastStep ? 'hidden' : '' } z-10 w-full h-[150px] sticky top-0 left-0 backdrop-blur-2xl bg-[#FFFFFF] bg-opacity-70 shadow-md backdrop-filter`}>
        <div className="container flex justify-between">
            <div className='mx-9 p-9'>
              <Logo img= { catmamescithammamLogo }   />
            </div>
            <div className='py-14'>
              <LanguagePicker openDropdownMenu={openDropdownMenu} setOpenDropdownMenu={setOpenDropdownMenu} icon={undefined} modeLight={undefined}  />
            </div>
        </div>
    </div>
  )
}

export default MasterHeader;