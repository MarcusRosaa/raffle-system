import styled from "styled-components";

import { View } from "../../../../assets/styles/global";
import Colors from "../../../../utils/colors";

const viewMenuWidth = "380px";
const viewHeaderHeight = "40px";

export const SweepstakesView = styled(View)`
  position: relative;
  display: flex;
  overflow: hidden;
`;

// ===================================================== VIEW MAIN

export const SweepstakesViewMain = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) =>
    props.isActive ? `calc(100% - ${viewMenuWidth} - 15px)` : "100%"};
  transition: 0.3s;

  /* border: 1px solid blue; */
`;

// ========================== VIEW MAIN HEADER

export const SweepstakesViewMainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${viewHeaderHeight};
  margin-bottom: 15px;
  padding-right: 5px;

  /* border: 1px solid red; */
`;

export const SweepstakesViewMainHeaderSearch = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
`;

export const SweepstakesViewMainHeaderMenus = styled.div`
  display: flex;
`;

// ========================== VIEW MAIN CONTAINER

export const SweepstakesViewMainContainer = styled.div`
  display: flex;
  height: calc(100% - ${viewHeaderHeight} - 15px);

  /* border: 1px solid blue; */
`;

// ===================================================== VIEW MENU

export const SweepstakesViewMenu = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  width: ${viewMenuWidth};
  height: 100%;
  transition: 0.3s;

  right: ${(props) => (props.isActive ? "0" : `-${viewMenuWidth}`)};

  padding-left: 15px;
  margin-left: 15px;

  border-left: 1px solid ${Colors.border};
`;

// ========================== VIEW MENU HEADER

export const SweepstakesViewMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${viewHeaderHeight};
  margin-bottom: 15px;

  span {
    flex-direction: column;
  }

  /* border: 1px solid red; */
`;

export const HeaderTitle = styled.div`
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;

  color: ${Colors.tertiary};
`;

export const HeaderLegend = styled.div`
  margin-top: 4px;

  font-size: 13px;
  line-height: 13px;
  font-weight: 300;
  letter-spacing: 0.5px;

  color: ${Colors.gray};

  b {
    font-weight: 500;

    color: ${Colors.gray};
  }
`;

export const HeaderClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`;

// ========================== VIEW MENU CONTAINER

export const SweepstakesViewMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - ${viewHeaderHeight} - 15px);
  padding-right: 10px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  /* border: 1px solid blue; */
`;

// ========================================================== CREATE SWEEPSTAKES FORM

export const CreateSweepstakesForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 5px;

  span {
    flex-direction: column;
    display: flex;
    width: 100%;
    margin-bottom: 15px;

    row-gap: 6px;

    &.divisor {
      margin-bottom: 14px;

      font-size: 13px;
      line-height: 13px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;

      color: ${Colors.darkGray};

      &.cotas {
        margin-top: 12px;
      }
    }
  }
`;

export const SavedRepliesEditAlert = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;

  div {
    display: flex;
    align-items: center;
    width: calc(100% - 100px);
    margin-right: 20px;

    svg {
      width: 23px;
      height: 23px;
      margin-right: 7px;

      font-size: 23px;

      color: ${Colors.messagesIndicator};
    }

    span {
      display: flex;
      flex-direction: column;
      width: calc(100% - 30px);

      p {
        font-size: 12px;
        line-height: 12px;
        font-weight: 300;
        margin-bottom: 1px;

        color: ${Colors.darkGray};
      }

      b {
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;

        color: ${Colors.messagesIndicator};
      }
    }
  }
`;
