import { FC, ReactNode, useEffect, useRef } from 'react';

interface ModalType {
    show: boolean,
    children: ReactNode,
    OnCloseModal: () => void
}

const Modal: FC<ModalType> = ({ show, children, OnCloseModal }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const overlayRef = useRef<HTMLDivElement>(null)
    const modalPanelRef = useRef<HTMLDivElement>(null)
    const closeModalOnClickOutside = (event: MouseEvent) => {
        
        console.log('handle click outside called')
        if (!overlayRef.current || modalPanelRef?.current?.contains(event.target as Node) ) return;
        if ( overlayRef.current.contains(event.target as Node) ) {
            OnCloseModal()
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
        <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25 transition-all duration-500 ${show ? 'block opacity-100' : 'opacity-0 hidden'}`} ref={overlayRef}>
        <section className="fixed bg-white w-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 transition-all" ref={modalPanelRef}>
            {children}
            <button type="button" onClick={OnCloseModal}>
            Close
            </button>
        </section>
        </div>
    );
};

export default Modal