"use client";
import { createContext, useContext, useState } from "react";

type modalType = any;

const PortfolioModalContext = createContext<modalType>(false);

export function PortfolioMOdalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [portfolioModal, setPortfolioModal] = useState<modalType>(false);
  const [modalState, setModalState] = useState<object | null>(null);
  function handlePortfolioModal(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    item: object
  ) {
    setPortfolioModal(!portfolioModal);
    setModalState(item);
  }

  return (
    <PortfolioModalContext.Provider
      value={{
        portfolioModal: portfolioModal,
        handlePortfolioModal: handlePortfolioModal,
        modalState: modalState,
      }}
    >
      {children}
    </PortfolioModalContext.Provider>
  );
}

export function usePortfolioModalContext() {
  return useContext(PortfolioModalContext);
}
