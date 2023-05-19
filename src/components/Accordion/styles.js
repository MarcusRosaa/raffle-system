import styled from "styled-components";

// import {  } from "../../assets/styles/global";
import Colors from "../../utils/colors";

export const AccordionContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  padding-right: 5px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  /* border: 2px solid red; */
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  /* border: 2px solid red; */
`;

export const Accordion = styled.div`
  margin-bottom: 6px;

  &:last-of-type {
    margin-bottom: 0px;
  }

  .accordion {
    transition: 0.2s;
    /* background-color: transparent !important; */
    box-shadow: none;

    background-color: rgba(0, 0, 0, 0.03) !important;
    border: 1px solid rgba(0, 0, 0, 0.4);

    &:hover {
      /* background-color: rgba(0, 0, 0, 0.025) !important; */
      border: 1px solid rgba(0, 0, 0, 0.6);

      /* .accordion_header p {
        color: rgba(0, 0, 0, 1);
      } */
    }
  }

  .accordion_header {
    min-height: initial;

    .MuiSvgIcon-root {
      color: ${Colors.darkGray};
    }

    &.Mui-expanded {
      min-height: initial;
    }
  }

  .accordion_content {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 15px;
  }
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-right: 10px;
`;

// ========================================================== ACCORDION HEADER

export const AccordionHeaderImage = styled.div`
  display: flex;
  width: 60px;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AccordionHeaderLegend = styled.div`
  display: flex;
  width: calc(100% - 315px);
  flex-direction: column;
`;

export const AccordionHeaderTitle = styled.div`
  display: flex;
  margin-bottom: 4px;

  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  color: ${Colors.tertiary};
`;

export const AccordionHeaderDate = styled.p`
  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
  letter-spacing: 0.5px;

  /* text-transform: capitalize; */

  color: ${Colors.darkGray};

  b {
    font-weight: 500;
  }
`;

// ========================================================== ACCORDION CONTAINER

export const AccordionDetails = styled.div`
  display: flex;
  /* flex-direction: ; */
  flex-direction: ${(props) => (props.isOpen ? "column" : "row")};
  width: 100%;
`;

// export const AccordionDetailsMainContainer = styled.div`
//   display: flex;
//   width: 100%;

//   border: 1px solid red;
// `;

export const AccordionDetailsMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  column-gap: 5px;
  margin-top: 20px;

  /* border: 1px solid red; */
`;

export const AccordionDetailsImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  margin-bottom: ${(props) => (props.isOpen ? "30px" : "0")};
`;

export const AccordionDetailsImage = styled.div`
  display: flex;
  width: ${(props) => (props.isOpen ? "100%" : "250px")};
  height: 180px;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AccordionDetailsImageThumbs = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-top: 6px;
  column-gap: 5px;

  /* border: 1px solid red; */
`;

export const AccordionDetailsImageThumb = styled.div`
  display: flex;
  width: calc(100% / 5);
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s;

  opacity: ${(props) => (props.isActive ? 1 : 0.7)};
  /* border: 1px solid blue; */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    opacity: ${(props) => (props.isActive ? 1 : 0.8)};
  }
`;

export const AccordionDetailsMain = styled.div`
  display: flex;
  /* image height: 250px */
  width: ${(props) => (props.isOpen ? "100%" : "calc(100% - 610px)")};
  flex-direction: column;
  margin-bottom: ${(props) => (props.isOpen ? "25px" : "0")};
`;

export const AccordionDetailsTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
  row-gap: 3px;

  color: ${Colors.tertiary};

  h1 {
    font-size: 19px;
    line-height: 22px;
    font-weight: 500;
    letter-spacing: 0.5px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  h2 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0.5px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const AccordionDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
  letter-spacing: 0.5px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;

  color: ${Colors.darkGray};
`;

export const AccordionDetailsAwards = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  width: 100%;
  margin-bottom: 6px;

  font-size: 14px;
  line-height: 14px;
  font-weight: 300;
  letter-spacing: 0.5px;

  svg {
    margin-right: 4px;
    font-size: 24px;
  }

  &:last-of-type {
    margin-bottom: 0px;
  }

  &::after {
    position: absolute;
    left: 9px;
    bottom: 8px;
    display: flex;
    content: "${(props) => props.content.toString()}";

    font-size: 11px;
    font-weight: 500;

    color: ${Colors.darkGray};
  }
`;

export const AccordionDetailsLegend = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 5px 5px 12px;
  border-radius: 6px;
  margin-bottom: 5px;

  background-color: ${Colors.lightGray};
  color: ${Colors.darkGray};

  p {
    font-size: 13px;
    line-height: 13px;
    font-weight: 500;
    text-transform: uppercase;

    width: calc(100% - 100px);

    b {
      font-weight: 700;
    }
  }

  span {
    text-align: center;
    width: 90px;
    margin-left: 10px;
    padding: 2px 0;
    border-radius: 4px;

    font-size: 13px;
    font-weight: 500;

    background-color: white;
    color: ${Colors.tertiary};
  }
`;

export const AccordionDetailsInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isOpen ? "100%" : "340px")};
  padding-left: ${(props) => (props.isOpen ? "0" : "25px")};
  /* row-gap: 6px; */

  /* border: 1px solid red; */

  & div.container {
    display: flex;
    flex-direction: column;
    row-gap: 6px;

    margin-bottom: 5px;
  }
`;

export const AccordionDetailsInfosQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 5px 5px 12px;
  border-radius: 6px;

  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  text-transform: uppercase;

  background-color: ${Colors.messagesIndicator};
  color: ${Colors.whitePrimary};

  &:last-of-type {
    margin-bottom: 6px;
  }

  &.faturamento {
    width: 300px;
    margin-bottom: 0;

    p {
      width: calc(100% - 130px);
    }

    span {
      width: 120px;
    }
  }

  &.main {
    background-color: ${Colors.darkGray};
  }

  p {
    display: flex;
    align-items: center;
    width: calc(100% - 70px);

    svg {
      font-size: 21px;
      margin-right: 2px;
    }
  }

  span {
    text-align: center;
    width: 60px;
    margin-left: 10px;
    padding: 6px 0;
    border-radius: 4px;

    background-color: white;
    color: ${Colors.tertiary};
  }
`;

// ========================================================== DELETE MODAL

export const DialogTitle = styled.div`
  display: flex;

  font-size: 17px;
  line-height: 17px;
  font-weight: 600;
  /* letter-spacing: 0.5px; */
  text-transform: uppercase;
`;

export const DialogContent = styled.div`
  display: flex;

  font-size: 14px;
  line-height: 14px;
  font-weight: 300;
  letter-spacing: 0.5px;
`;
