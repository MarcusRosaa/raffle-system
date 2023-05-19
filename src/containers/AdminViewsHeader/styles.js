import styled from "styled-components";

import {
  adminViewsHeight,
  responsiveMobile,
  responsiveTablet,
} from "../../assets/styles/global";
import Colors from "../../utils/colors";

export const AdminViewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${adminViewsHeight};
  padding: 0 25px;

  /* border: 1px solid blue; */
`;

export const AdminViewsHeaderTitle = styled.div`
  display: flex;

  font-size: 22px;
  line-height: 22px;
  font-weight: 200;
  letter-spacing: 0.5px;
`;

export const AdminViewsHeaderConfigs = styled.div`
  display: flex;
  align-items: center;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 12px 6px 13px;
  margin-left: 15px;
  cursor: pointer;
  border-radius: 6px;

  background-color: ${Colors.whiteTertiary};

  /* border-left: 1px solid ${Colors.lightGray}; */

  &:hover {
  }
`;

export const UserDetailsName = styled.p`
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;

  b {
    font-weight: 300;

    color: ${Colors.darkGray};
  }
`;
