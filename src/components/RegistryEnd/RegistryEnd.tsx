import React from 'react';
import { useTranslation } from 'react-i18next';
import catmamescithammamLogo from '../../assets/logo/catmamescithammamLogo.svg';


const RegistryEnd = () => {
  const refreshPage = () => {
    window.location.reload();
  }
  const { t } = useTranslation()
  return (
    <div className='absolute top-1/2 -translate-y-1/2 flex flex-col items-center space-y-[80px] px-5'>
        <img  src={ catmamescithammamLogo } className='w-60 h-36' alt='' />
        <h2 className='text-[#800000] text-[28px] font-semibold'>
            {t("THANKS_FOR_YOUR_INTEREST_!")}
        </h2>
        {/* <p className='text-lg text-center max-w-[500px]'>
          Here is the classic lorem ipsum passage followed by Boparai’s odd, yet mesmerizing version.
        </p> */}
        <button onClick={() => refreshPage()} className='border-2 border-[#800000] bg-[#800000] rounded-lg text-white py-5 px-10'>{t("MAKE_A_NEW_RESERVATION")}</button>
    </div>
  )
};

export default RegistryEnd;