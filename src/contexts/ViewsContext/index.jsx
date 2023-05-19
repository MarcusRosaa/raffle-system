import { createContext, useContext, useState, useCallback } from "react";

import {
  HiOutlineChartPie,
  HiOutlineBookmark,
  HiOutlineSpeakerphone,
  HiOutlineUserGroup,
  HiOutlineCog,
  HiOutlineUserCircle,
} from "react-icons/hi";

import ResumeView from "../../pages/Dashboard/views/ResumeView";
import SweepstakesView from "../../pages/Dashboard/views/SweepstakesView";
import BuyersView from "../../pages/Dashboard/views/BuyersView";

export const ViewsContext = createContext({});

const viewsMenuData = [
  {
    viewId: "view-resumo",
    viewLabel: "Estatísticas",
    viewTitle: "Estatísticas",
    viewIcon: <HiOutlineChartPie />,
    viewComponent: <ResumeView />,
  },
  {
    viewId: "view-sorteios",
    viewLabel: "Sorteios",
    viewTitle: "Lista de Sorteios",
    viewIcon: <HiOutlineSpeakerphone />,
    viewComponent: <SweepstakesView />,
  },
  {
    viewId: "view-compradores",
    viewLabel: "Compradores",
    viewTitle: "Lista de Compradores",
    viewIcon: <HiOutlineUserGroup />,
    viewComponent: <BuyersView />,
  },
  {
    viewId: "view-sobre",
    viewLabel: "Sobre",
    viewTitle: "Sobre a sua empresa",
    viewIcon: <HiOutlineBookmark />,
    viewComponent: <></>,
  },
];

const viewsMenuSettingsData = [
  {
    viewId: "view-configuracoes",
    viewLabel: "Configurações",
    viewTitle: "Configure a aplicação",
    viewIcon: <HiOutlineCog />,
    viewComponent: <></>,
  },
  {
    viewId: "view-minha-conta",
    viewLabel: "Minha Conta",
    viewTitle: "Detalhes da conta",
    viewIcon: <HiOutlineUserCircle />,
    viewComponent: <></>,
  },
];

const ViewsProvider = ({ children }) => {
  const [viewActive, setViewActive] = useState(viewsMenuData[1]);

  const handleChangeView = useCallback((viewRef) => {
    setViewActive(viewRef);
  }, []);

  return (
    <ViewsContext.Provider
      value={{
        viewsMenuData,
        viewsMenuSettingsData,
        viewActive,
        handleChangeView,
      }}
    >
      {children}
    </ViewsContext.Provider>
  );
};

function useViews() {
  const context = useContext(ViewsContext);

  if (!context) throw new Error("useViews must be used within a UserProvider");

  return context;
}

export { ViewsProvider, useViews };
