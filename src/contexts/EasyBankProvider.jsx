/* eslint-disable react/prop-types */
import useScreenSize from '../hooks/useScreenSize'
import { useContext, useEffect, useState } from "react"
import { createContext } from 'react';



const EasyBankContext = createContext();

function EasyBankProvider({ children }) {
    const [isMobile, setIsMobile] = useState(null);
  const screenSize = useScreenSize()

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 1000);
    },
    [screenSize.width]
  );

  return (
    <EasyBankContext.Provider
      value={{
        isMobile
      }}
    >
      {children}
    </EasyBankContext.Provider>
  );
}

function useBank() {
  const context = useContext(EasyBankContext);
  if (context === undefined)
    throw new Error("bankContext was used outside the EasyBankProvider");
  return context;
}

export { EasyBankProvider, useBank };