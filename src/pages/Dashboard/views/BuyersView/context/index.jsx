import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";

import RafflesData from "../../../../../mock/mockData";

export const BuyersContext = createContext({});

const rafflesAllFilterId = "raffles-00";

const BuyersViewProvider = ({ children }) => {
  const [rafflesId, setRafflesId] = useState(rafflesAllFilterId);
  const [allBuyers, setAllBuyers] = useState([]);
  const [filteredBuyers, setFilteredBuyers] = useState([]);
  const [filteredRafflesTitle, setFilteredRafflesTitle] = useState("");

  const [buyerData, setBuyerData] = useState([]);

  const [orderNameBuyersList, setOrderNameBuyersList] = useState("default");
  const [orderNumberBuyersList, setOrderNumberBuyersList] = useState("default");
  const [orderQuantityBuyersList, setOrderQuantityBuyersList] =
    useState("default");
  const [orderPurchaseBuyersList, setOrderPurchaseBuyersList] =
    useState("default");
  const [orderDateBuyersList, setOrderDateBuyersList] = useState("default");

  const [activeOrderFilter, setActiveOrderFilter] = useState("");

  const buyersList = useMemo(() => {
    return RafflesData.map((raffle) => {
      const { rafflesId, rafflesTitle, rafflesBuyers } = raffle;
      return { rafflesId, rafflesTitle, rafflesBuyers };
    });
  }, []);

  const buyersFilterList = useMemo(() => {
    const rafflesMap = RafflesData.map((raffle) => {
      const { rafflesId, rafflesTitle } = raffle;
      return { rafflesId, rafflesTitle };
    });

    rafflesMap.unshift({
      rafflesId: rafflesAllFilterId,
      rafflesTitle: "Todas",
    });

    return rafflesMap;
  }, []);

  const handleChangeAtiveFilter = (rafflesId) => {
    setRafflesId(rafflesId);
  };

  useEffect(() => {
    console.log(filteredBuyers);
  }, [filteredBuyers]);

  // ========================================================

  useEffect(() => {
    if (rafflesId === rafflesAllFilterId) {
      setFilteredBuyers(allBuyers);
      setFilteredRafflesTitle("Todas");
    } else {
      const raffles = buyersList.find((item) => item.rafflesId === rafflesId);
      if (raffles) {
        setFilteredBuyers(raffles.rafflesBuyers);
        setFilteredRafflesTitle(raffles.rafflesTitle);
      } else {
        setFilteredBuyers([]);
        setFilteredRafflesTitle("");
      }
    }
  }, [rafflesId, allBuyers, buyersList]);

  useEffect(() => {
    const buyers = buyersList.reduce(
      (acc, item) => acc.concat(item.rafflesBuyers),
      []
    );
    setAllBuyers(buyers);
  }, [buyersList]);

  // ========================================================

  useEffect(() => {
    const sortedBuyers = [...filteredBuyers];

    switch (activeOrderFilter) {
      case "nameAsc":
        sortedBuyers.sort((a, b) => a.buyerName.localeCompare(b.buyerName));
        break;
      case "nameDsc":
        sortedBuyers.sort((a, b) => b.buyerName.localeCompare(a.buyerName));
        break;
      case "numberAsc":
        sortedBuyers.sort((a, b) => a.buyerNumber.localeCompare(b.buyerNumber));
        break;
      case "numberDsc":
        sortedBuyers.sort((a, b) => b.buyerNumber.localeCompare(a.buyerNumber));
        break;
      case "quantityAsc":
        sortedBuyers.sort((a, b) => a.buyerQuantity - b.buyerQuantity);
        break;
      case "quantityDsc":
        sortedBuyers.sort((a, b) => b.buyerQuantity - a.buyerQuantity);
        break;
      case "purchaseAsc":
        sortedBuyers.sort(
          (a, b) => a.buyerTotalPurchaseAmount - b.buyerTotalPurchaseAmount
        );
        break;
      case "purchaseDsc":
        sortedBuyers.sort(
          (a, b) => b.buyerTotalPurchaseAmount - a.buyerTotalPurchaseAmount
        );
        break;
      case "dateAsc":
        sortedBuyers.sort(
          (a, b) => new Date(a.buyerDate) - new Date(b.buyerDate)
        );
        break;
      case "dateDsc":
        sortedBuyers.sort(
          (a, b) => new Date(b.buyerDate) - new Date(a.buyerDate)
        );
        break;
      default:
        break;
    }

    setBuyerData(sortedBuyers);
  }, [activeOrderFilter, filteredBuyers]);

  const toogleAllDefault = () => {
    setOrderNameBuyersList("default");
    setOrderNumberBuyersList("default");
    setOrderQuantityBuyersList("default");
    setOrderPurchaseBuyersList("default");
    setOrderDateBuyersList("default");
  };

  const toogleOrderBuyerName = () => {
    toogleAllDefault();

    if (orderNameBuyersList === "asc") {
      setOrderNameBuyersList("default");
    } else if (orderNameBuyersList === "default") {
      setOrderNameBuyersList("dsc");
      setActiveOrderFilter("nameDsc");
    } else {
      setOrderNameBuyersList("asc");
      setActiveOrderFilter("nameAsc");
    }
  };

  const toogleOrderBuyerNumber = () => {
    toogleAllDefault();

    if (orderNumberBuyersList === "asc") {
      setOrderNumberBuyersList("default");
    } else if (orderNumberBuyersList === "default") {
      setOrderNumberBuyersList("dsc");
      setActiveOrderFilter("numberDsc");
    } else {
      setOrderNumberBuyersList("asc");
      setActiveOrderFilter("numberAsc");
    }
  };

  const toogleOrderBuyerQuantity = () => {
    toogleAllDefault();

    if (orderQuantityBuyersList === "asc") {
      setOrderQuantityBuyersList("default");
    } else if (orderQuantityBuyersList === "default") {
      setOrderQuantityBuyersList("dsc");
      setActiveOrderFilter("quantityDsc");
    } else {
      setOrderQuantityBuyersList("asc");
      setActiveOrderFilter("quantityAsc");
    }
  };

  const toogleOrderBuyerPurchase = () => {
    toogleAllDefault();

    if (orderPurchaseBuyersList === "asc") {
      setOrderPurchaseBuyersList("default");
      setActiveOrderFilter("default");
    } else if (orderPurchaseBuyersList === "default") {
      setOrderPurchaseBuyersList("dsc");
      setActiveOrderFilter("purchaseDsc");
    } else {
      setOrderPurchaseBuyersList("asc");
      setActiveOrderFilter("purchaseAsc");
    }
  };

  const toogleOrderBuyerDate = () => {
    toogleAllDefault();

    if (orderDateBuyersList === "asc") {
      setOrderDateBuyersList("default");
      setActiveOrderFilter("");
    } else if (orderDateBuyersList === "default") {
      setOrderDateBuyersList("dsc");
      setActiveOrderFilter("dateDsc");
    } else {
      setOrderDateBuyersList("asc");
      setActiveOrderFilter("dateAsc");
    }
  };

  return (
    <BuyersContext.Provider
      value={{
        buyersFilterList,
        handleChangeAtiveFilter,
        filteredRafflesTitle,
        orderNameBuyersList,
        orderNumberBuyersList,
        orderQuantityBuyersList,
        orderPurchaseBuyersList,
        orderDateBuyersList,
        toogleOrderBuyerName,
        toogleOrderBuyerNumber,
        toogleOrderBuyerQuantity,
        toogleOrderBuyerPurchase,
        toogleOrderBuyerDate,
        buyerData,
      }}
    >
      {children}
    </BuyersContext.Provider>
  );
};

function useBuyersView() {
  const context = useContext(BuyersContext);

  if (!context)
    throw new Error("useBuyersView must be used within a UserProvider");

  return context;
}

export { BuyersViewProvider, useBuyersView };
