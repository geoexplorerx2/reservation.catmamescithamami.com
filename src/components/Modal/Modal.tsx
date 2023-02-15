import { FC, ReactNode } from 'react';

interface ModalType {
    show: boolean,
    children: ReactNode,
    OnCloseModal: () => void
}

const Modal: FC<ModalType> = ({ show, children, OnCloseModal }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-25 transition-all duration-500 ${show ? 'block opacity-100' : 'opacity-0 hidden'}`}>
      <section className="fixed bg-white w-4/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 transition-all">
        {children}
        <button type="button" onClick={OnCloseModal}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal