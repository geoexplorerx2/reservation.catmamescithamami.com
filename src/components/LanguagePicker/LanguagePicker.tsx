import { Popover, Transition } from '@headlessui/react';
import React, { FC, Fragment, ReactNode, useEffect, useRef ,useState } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonPrimary from '../../lib/Button/ButtonPrimary';
import { ReactComponent as Chevron } from '../../assets/icons/chevron-down.svg';
interface LanguagePickerProps{
    openDropdownMenu: any,
    setOpenDropdownMenu: any,
};

export const Languages = [
  {
    id: 'en',
    name: 'English'
  },
  {
    id: 'tr',
    name: 'Türkçe'
  },
  {
    id: 'fr',
    name: 'Français'
  },
  {
    id: 'de',
    name: 'Deutsch'
  },
  {
    id: 'it',
    name: 'Italian'
  },
  {
    id: 'ru',
    name: 'Russian'
  },
  {
    id: 'es',
    name: 'Spanish'
  },
  {
    id: 'ar',
    name: 'Arabic'
  },
  {
    id: 'pl',
    name: 'Polish'
  }
];

const LanguagePicker: FC<LanguagePickerProps> = ({openDropdownMenu, setOpenDropdownMenu }) => {

  const [activeLang, setActiveLanguage] = useState<any>(Languages[0]);

  const containerRef = useRef<HTMLDivElement>(null);

  // @ts-ignore
  const { i18n } = useTranslation();

  const eventClickOutsideDiv = (event: MouseEvent) => {
    if (!containerRef.current) return;
    
    // click inside
    if (!openDropdownMenu || containerRef.current.contains(event.target as Node)) {
      return;
    }

    // click outside
    setOpenDropdownMenu(false);
  };

  useEffect(() => {
    if (eventClickOutsideDiv) {
      document.removeEventListener("click", eventClickOutsideDiv);
    };

    openDropdownMenu && document.addEventListener("click", eventClickOutsideDiv);

    return () => {
      document.removeEventListener("click", eventClickOutsideDiv);
    };

  }, [openDropdownMenu]);

  const handleLan = (langID: any) => {
    i18n.changeLanguage(langID);

    setActiveLanguage(
        Languages.find(lng => lng.id === langID)
    );

    setOpenDropdownMenu(false);
  };

  return (
   <Popover
      as="div"
      className={`menu-item menu-dropdown relative`}
      ref = { containerRef }
   >
    {({ open, close }) => (
      <>
        <Popover.Button
          as={'div'} 
          className="focus-visible focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          // ref={popoverButtonRef}
        >
            <ButtonPrimary
               type="button"
               className='w-[240px] h-[60px] bg-[#EEEEEE] rounded-[10px]'
               onClick={() => setOpenDropdownMenu(true)}
            >
                <span className="text-[16px] text-[#800000] font-poppins font-semibold leading-[24px]">
                    {activeLang?.name}
                </span>
                <span>
                  <Chevron className={`${openDropdownMenu ? '-rotate-90' : 'rotate-90'} transition ease-out ml-12`} />
                </span>
            </ButtonPrimary>
        </Popover.Button>

        <Transition
          as={Fragment}
          show={openDropdownMenu}
          appear
          enter="transition ease-out duration-150"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            static
            className="sub-menu will-change-transform absolute transform z-60 w-[260px] pt-3 right-0"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 py-2 grid grid-cols-2 gap-2">
             {
               Languages?.map((lang: any) => (
                  <div className="flex justify-arround mx-2">
                    <ButtonPrimary
                        type="button"
                        className = {`${activeLang.id == lang.id ? 'bg-[#800000]':'bg-[#fff] text-[#000]'} rounded-[8px] hover:border-[#800000]  border-2 border-[rgba(57, 68, 179, 20%)] flex justify-arround w-[106px] h-[50px] dark:text-white`} 
                        onClick={() => handleLan(lang.id)} 
                    >
                        <span className={`text-[16px]  ${activeLang.id !== lang.id ? "text-[#800000]" : "text-[#fff]"} font-poppins font-semibold leading-[24px]`}>
                          { lang.name } 
                        </span>
                    </ButtonPrimary>        
                  </div>
                ))
              }   
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
  )
};

export default LanguagePicker;