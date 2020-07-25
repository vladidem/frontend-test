import React, { createContext, useState } from 'react';

const ModalContext = createContext({});

const ModalProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const withModalProvider = (Component) => ({ children, ...props }) => (
  <ModalProvider>
    <Component {...props}>{children}</Component>
  </ModalProvider>
);

export { ModalProvider, ModalContext, withModalProvider };
