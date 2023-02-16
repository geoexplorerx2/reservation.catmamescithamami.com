import { FC, ReactNode, useEffect, useRef } from 'react';

interface ModalType {
    show: boolean,
    children: ReactNode,
    closeModal: () => void,
    acceptAndclose?: () => void,
    modalPanelClassNames?: string
}

const Modal: FC<ModalType> = ({ show, children, closeModal, modalPanelClassNames }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const overlayRef = useRef<HTMLDivElement>(null)
    const modalPanelRef = useRef<HTMLDivElement>(null)
    const closeModalOnClickOutside = (event: MouseEvent) => {
        
        console.log('handle click outside called')
        if (!overlayRef.current || modalPanelRef?.current?.contains(event.target as Node) ) return;
        if ( overlayRef.current.contains(event.target as Node) ) {
            closeModal()
        }
      };
    
      useEffect(() => {
        if(!show) return
        if (closeModalOnClickOutside) {
          document.removeEventListener("click", closeModalOnClickOutside);
        }
         document.addEventListener("click", closeModalOnClickOutside);
        return () => {
          document.removeEventListener("click", closeModalOnClickOutside);
        };
      }, [show]);

    return (
        <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25 transition-opacity duration-500 ${show ? 'block opacity-100 z-10' : 'z-[-1] opacity-0 '}`} ref={overlayRef}>
       
        <section className={`${modalPanelClassNames} fixed bg-white w-4/5 max-h-[90vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2 rounded-[10px] transition-all`} ref={modalPanelRef}>
         <div className='absolute top-0 right-0 w-10 h-10 flex justify-center items-center border rounded-full  bg-white text-[#800000] text-3xl translate-x-1/2 -translate-y-1/2' onClick={closeModal}> X </div>
            <div className='w-full max-h-[80vh] overflow-y-scroll mb-4'>
              {children}
            </div>
        </section>
        </div>
    );
};

export default Modal