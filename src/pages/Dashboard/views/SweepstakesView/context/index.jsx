import { createContext, useContext, useEffect, useState } from "react";

import RafflesData from "../../../../../mock/mockData";

export const SweepstakesContext = createContext({});

const SweepstakesViewProvider = ({ children }) => {
  const [isOpenSweepstakesViewMenu, setIsOpenSweepstakesViewMenu] =
    useState(false);
  const [isOnEditMode, setIsOnEditMode] = useState(false);

  const [sweepstakesList, setSweepstakesList] = useState([]);

  // ============================================ CONTROL MENU MODAL

  const handleOpenSweepstakesViewMenu = () => {
    setIsOpenSweepstakesViewMenu(true);
  };

  const handleCloseSweepstakesViewMenu = () => {
    setIsOpenSweepstakesViewMenu(false);
  };

  // ============================================ CONTROLL EDIT MODE

  // const handleActiveSweepstakesEditMode = () => {
  //   setIsOnEditMode(true);
  // };

  // const handleDesactiveSweepstakesEditMode = () => {
  //   setIsOnEditMode(false);
  // };

  // ============================================

  useEffect(() => {
    setSweepstakesList(RafflesData);
  }, []);

  return (
    <SweepstakesContext.Provider
      value={{
        isOnEditMode,
        // handleActiveSweepstakesEditMode,
        // handleDesactiveSweepstakesEditMode,

        isOpenSweepstakesViewMenu,
        handleOpenSweepstakesViewMenu,
        handleCloseSweepstakesViewMenu,

        sweepstakesList,
      }}
    >
      {children}
    </SweepstakesContext.Provider>
  );
};

function useSweepstakesView() {
  const context = useContext(SweepstakesContext);

  if (!context)
    throw new Error("useSweepstakesView must be used within a UserProvider");

  return context;
}

export { SweepstakesViewProvider, useSweepstakesView };
