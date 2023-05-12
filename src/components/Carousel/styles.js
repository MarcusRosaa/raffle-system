import { styled } from 'styled-components';

export const Container = styled.div`

  .swiper-container {
    width: 100%;
    height: 300px;
    margin: 20px auto;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-container.mySwiper2 .swiper-button-prev,
  .swiper-container.mySwiper2 .swiper-button-next {
    color: #fff;
  }

  .swiper-container.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .swiper-container.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
  }
`;
