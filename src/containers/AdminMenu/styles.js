import styled from "styled-components";

import {
  adminMenuWidth,
  adminViewsHeight,
  responsiveMobile,
  responsiveTablet,
} from "../../assets/styles/global";
import Colors from "../../utils/colors";

export const AdminMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: ${adminMenuWidth};
  height: 100%;
`;

export const AdminMenuLogo = styled.div`
  display: flex;
  align-items: center;
  width: ${adminMenuWidth};
  height: ${adminViewsHeight};
  padding: 0 15px;

  font-size: 18px;
  line-height: 20px;
  font-weight: 800;
  letter-spacing: 0.5px;

  svg {
    font-size: 42px;
    margin-right: 8px;

    margin-top: 2px;

    color: ${Colors.active};
  }

  color: ${Colors.whitePrimary};
`;

export const AdminMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${adminMenuWidth};
  height: calc(100% - ${adminViewsHeight});
`;

export const AdminMenusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${adminMenuWidth};
  height: fit-content;
  /* row-gap: 3px; */
`;

export const AdminMenuMain = styled(AdminMenusWrapper)``;

export const AdminMenuConfigs = styled(AdminMenusWrapper)``;

export const AdminMenuButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 15px;
  cursor: pointer;

  text-align: left;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;

  background-color: ${(props) =>
    props.isActive ? Colors.tertiary : "transparent"};
  color: ${(props) => (props.isActive ? Colors.whiteTertiary : Colors.gray)};

  svg {
    font-size: 19px;
    margin-right: 6px;
    transition: 0.1s;

    stroke: ${(props) => (props.isActive ? Colors.whiteTertiary : Colors.gray)};
  }

  &:hover {
    background-color: ${(props) =>
      props.isActive ? Colors.tertiary : Colors.secondary};

    color: ${Colors.whiteTertiary};

    svg {
      stroke: ${Colors.whiteTertiary};
    }
  }

  &::after {
    display: ${(props) => (props.isActive ? "flex" : "none")};
    content: "";
    position: absolute;
    right: 15px;
    width: 5px;
    height: 5px;
    border-radius: 100%;

    background-color: ${Colors.active};
  }
`;
