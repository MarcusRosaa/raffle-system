import { useEffect, useState } from "react";
import * as S from "./styles";
import { FiChevronDown, FiChevronUp, FiMinus } from "react-icons/fi";

import {
  MainButton,
  SearchInput,
  MainInput,
  MainTextArea,
  MainButtonConfirm,
  MiniButton,
  Label,
  LabelLegend,
  FileUploader,
  DateInput,
  SelectMenu,
  SelectMenuButton,
} from "../../../../utils/inputs";

import { useBuyersView } from "./context";

const BuyersView = () => {
  const {
    buyersFilterList,
    handleChangeAtiveFilter,
    filteredRafflesTitle,
    buyerData,
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
  } = useBuyersView();

  const [searchValue, setSearchValue] = useState("");

  const handleExportBuyersList = () => {
    //
  };

  return (
    <S.BuyersView>
      <S.BuyersViewMain>
        <S.BuyersViewMainHeader>
          <S.BuyersViewMainHeaderMainMenus>
            <SelectMenu
              title="Selecione uma rifa"
              options={buyersFilterList.map((raffle) => ({
                id: raffle.rafflesId,
                label: raffle.rafflesTitle,
              }))}
              width={280}
              height={160}
              hasFilter={false}
              // hasTitle={false}
              onSelect={(item) => handleChangeAtiveFilter(item.id)}
            >
              <SelectMenuButton>Filtrar por rifa</SelectMenuButton>
            </SelectMenu>
            <SearchInput
              placeholder="Pesquise por um comprador ..."
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              width="100%"
              height="40px"
            />
          </S.BuyersViewMainHeaderMainMenus>

          <S.BuyersViewMainHeaderMenus>
            <MainButton onClick={handleExportBuyersList}>
              Exportar Lista de Compradores
            </MainButton>
          </S.BuyersViewMainHeaderMenus>
        </S.BuyersViewMainHeader>
        <S.BuyersViewMainContainer>
          <S.BuyersViewMainContainerHeader>
            <S.MainContainerHeaderFilterTitle>
              Filtrando compradores das rifas:
              <b>{filteredRafflesTitle}</b>
            </S.MainContainerHeaderFilterTitle>
            <S.MainContainerHeaderListLegend>
              <span className="label_name">
                <S.FilterSpan
                  onClick={toogleOrderBuyerName}
                  isActive={orderNameBuyersList !== "default"}
                >
                  Nome do comprador{" "}
                  <FilterIndicator mode={orderNameBuyersList} />
                </S.FilterSpan>
              </span>
              <span className="label_number">
                <S.FilterSpan
                  onClick={toogleOrderBuyerNumber}
                  isActive={orderNumberBuyersList !== "default"}
                >
                  Telefone <FilterIndicator mode={orderNumberBuyersList} />
                </S.FilterSpan>
              </span>
              <span className="label_quantity">
                <S.FilterSpan
                  onClick={toogleOrderBuyerQuantity}
                  isActive={orderQuantityBuyersList !== "default"}
                >
                  Qntd. de Rifas{" "}
                  <FilterIndicator mode={orderQuantityBuyersList} />
                </S.FilterSpan>
              </span>
              <span className="label_purchase_amount">
                <S.FilterSpan
                  onClick={toogleOrderBuyerPurchase}
                  isActive={orderPurchaseBuyersList !== "default"}
                >
                  Faturado <FilterIndicator mode={orderPurchaseBuyersList} />
                </S.FilterSpan>
              </span>
              <span className="label_date">
                <S.FilterSpan
                  onClick={toogleOrderBuyerDate}
                  isActive={orderDateBuyersList !== "default"}
                >
                  Data da compra <FilterIndicator mode={orderDateBuyersList} />
                </S.FilterSpan>
              </span>
            </S.MainContainerHeaderListLegend>
          </S.BuyersViewMainContainerHeader>
          <S.BuyersViewMainContainerContent>
            <S.MainContainerContentWrapper>
              {buyerData?.map((raffleBuyer) => (
                <BuyerCard raffleBuyer={raffleBuyer} />
              ))}
            </S.MainContainerContentWrapper>
          </S.BuyersViewMainContainerContent>
        </S.BuyersViewMainContainer>
      </S.BuyersViewMain>
    </S.BuyersView>
  );
};

export default BuyersView;

// ========================================================== BUYER LIST CARD

export const BuyerCard = ({ raffleBuyer }) => {
  return (
    <S.BuyerCard>
      <S.BuyerCardName>{raffleBuyer.buyerName}</S.BuyerCardName>
      <S.BuyerCardNumber>{raffleBuyer.buyerNumber}</S.BuyerCardNumber>
      <S.BuyerCardQuantity>{raffleBuyer.buyerQuantity}</S.BuyerCardQuantity>
      <S.BuyerCardPurchaseAmount>
        {raffleBuyer.buyerTotalPurchaseAmount}
      </S.BuyerCardPurchaseAmount>
      <S.BuyerCardDate>{raffleBuyer.buyerDate}</S.BuyerCardDate>
    </S.BuyerCard>
  );
};

// ========================================================== FILTER INDICATOR

export const FilterIndicator = ({ mode }) => {
  return (
    <S.FilterIndicator>
      {mode === "asc" ? (
        <FiChevronDown />
      ) : mode === "dsc" ? (
        <FiChevronUp />
      ) : (
        <FiMinus />
      )}
    </S.FilterIndicator>
  );
};
