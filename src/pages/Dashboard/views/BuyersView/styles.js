import styled from "styled-components";

import { View } from "../../../../assets/styles/global";
import Colors from "../../../../utils/colors";

const viewHeaderHeight = "40px";

export const BuyersView = styled(View)`
  position: relative;
  display: flex;
  overflow: hidden;
`;

// ===================================================== VIEW MAIN

export const BuyersViewMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: 0.3s;

  /* border: 1px solid blue; */
`;

// ========================== VIEW MAIN HEADER

export const BuyersViewMainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: ${viewHeaderHeight};
  margin-bottom: 15px;
  padding-right: 5px;

  /* border: 1px solid red; */
`;

export const BuyersViewMainHeaderMainMenus = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const BuyersViewMainHeaderMenus = styled.div`
  display: flex;
`;

// ========================== VIEW MAIN CONTAINER

const labelNameWidth = "220px";
const labelNumberWidth = "160px";
const labelQuantityWidth = "155px";
const labelPurchaseAmountWidth = "125px";
const labelDateWidth = `calc(100% - ${labelNameWidth} - ${labelNumberWidth} - ${labelQuantityWidth} - ${labelPurchaseAmountWidth}) `;

export const BuyersViewMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - ${viewHeaderHeight} - 15px);

  /* border: 1px solid blue; */
`;

export const BuyersViewMainContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainContainerHeaderFilterTitle = styled.div`
  height: 35px;

  font-size: 18px;
  line-height: 18px;
  font-weight: 300;
  letter-spacing: 0.5px;

  /* border: 1px solid red; */

  b {
    margin-left: 4px;

    font-weight: 600;
  }
`;

export const MainContainerHeaderListLegend = styled.div`
  display: flex;
  height: 30px;
  padding-left: 15px;

  /* border: 1px solid red; */

  span {
    &.label_name {
      width: ${labelNameWidth};
    }

    &.label_number {
      width: ${labelNumberWidth};
    }

    &.label_quantity {
      width: ${labelQuantityWidth};
    }

    &.label_purchase_amount {
      width: ${labelPurchaseAmountWidth};
    }

    &.label_date {
      width: ${labelDateWidth};
    }
  }
`;

export const FilterSpan = styled.p`
  display: flex;
  align-items: center;

  width: fit-content;
  height: fit-content;
  padding: 3px 5px 3px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  font-size: 12px;
  line-height: 12px;
  font-weight: 500;
  text-transform: uppercase;

  background-color: ${(props) =>
    props.isActive ? Colors.messagesIndicator : Colors.lightGray};
  color: ${(props) => (props.isActive ? Colors.whitePrimary : Colors.darkGray)};

  &:hover {
    background-color: ${Colors.messagesIndicator};
    color: ${Colors.whitePrimary};

    svg {
      color: ${Colors.whitePrimary};
    }
  }

  svg {
    margin-left: 4px;

    color: ${(props) =>
      props.isActive ? Colors.whitePrimary : Colors.darkGray};
  }
`;

export const BuyersViewMainContainerContent = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 65px);
  overflow: auto;
  padding-right: 5px;

  /* border: 1px solid red; */
`;

export const MainContainerContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 4px;
`;

// ===================================================== BUYER LIST CARD

export const BuyerCard = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;

  background-color: rgba(0, 0, 0, 0.03) !important;
  border: 1px solid rgba(0, 0, 0, 0.4);

  &:hover {
    /* background-color: rgba(0, 0, 0, 0.025) !important; */
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
`;

const LegentText = styled.div`
  padding-right: 15px;

  font-size: 14px;
  /* line-height: 14px; */
  font-weight: 300;

  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 20px;
  max-height: 20px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const BuyerCardName = styled(LegentText)`
  display: flex;
  width: ${labelNameWidth};

  /* border: 1px solid gray; */
`;

export const BuyerCardNumber = styled(LegentText)`
  display: flex;
  width: ${labelNumberWidth};

  /* border: 1px solid gray; */
`;

export const BuyerCardQuantity = styled(LegentText)`
  display: flex;
  width: ${labelQuantityWidth};

  /* border: 1px solid gray; */
`;

export const BuyerCardPurchaseAmount = styled(LegentText)`
  display: flex;
  width: ${labelPurchaseAmountWidth};

  /* border: 1px solid gray; */
`;

export const BuyerCardDate = styled(LegentText)`
  display: flex;
  width: ${labelDateWidth};

  /* border: 1px solid gray; */
`;

// ===================================================== FILTER INDICATOR

export const FilterIndicator = styled.div`
  display: flex;

  svg {
    font-size: 16px;
    transition: 0.3s;
  }
`;
