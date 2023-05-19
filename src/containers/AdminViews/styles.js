import styled from "styled-components";

import {
  adminMenuWidth,
  adminViewsHeight,
  responsiveMobile,
  responsiveTablet,
} from "../../assets/styles/global";
import Colors from "../../utils/colors";

export const AdminViews = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - ${adminMenuWidth});
  height: 100%;
  border-radius: 10px;

  background-color: ${Colors.whiteSecondary};
`;

export const AdminViewsContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - ${adminViewsHeight});
  padding: 0 25px 25px 25px;

  /* border: 1px solid red; */

  /* background-color: ${Colors.whiteSecondary}; */
`;
