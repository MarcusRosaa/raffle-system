import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
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
  }

  button {
    cursor: pointer;
  }
`;
