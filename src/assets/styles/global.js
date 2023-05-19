import styled, { createGlobalStyle } from "styled-components";

import Colors from "../../utils/colors";

export const responsiveDesktop = "1000px";
export const responsiveTablet = "760px";
export const responsiveMobile = "480px";

export const adminMenuWidth = "240px";
export const adminViewsHeight = "80px";

export default createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
    /* 100;200;300;400;500;600;700;800;900 */
  }

  :root {
    font-size: 14px;

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }

  :root {
    // Font Sizes
    --fsize-xxs: 10px;
    --fsize-xs: 12px;
    --fsize-s: 14px;
    --fsize-regular: 16px;
    --fsize-l: 18px;
    --fsize-xl: 20px;
    --fsize-xxl: 22px;
  }

  body {
    font-size: 16px;
    background: #f0f0f0;
    user-select: none;
  }

  button {
    cursor: pointer;
  }

  // ------------------------- SCROLL BAR

  ::-webkit-scrollbar {
    width: 10px;
    z-index: 1000;
  }

  ::-webkit-scrollbar-track {
    background: ${Colors.scrollbarTrack};
  }

  ::-webkit-scrollbar-thumb {
    background: ${Colors.scrollbarThumb};
    border-radius: 10px;
  }
`;

export const Window = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const View = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
