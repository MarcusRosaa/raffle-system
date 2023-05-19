import styled from "styled-components";
import Colors from "./colors";

import {
  IconButton as EGIconButton,
  SearchInput as EGSearchInput,
  TextInput as EGTextInput,
  TagInput as EGTagInput,
  SelectMenu as EGSelectMenu,
  Button as EGButton,
  Textarea,
  Label as EGLabel,
  FileUploader as EGFileUploader,
} from "evergreen-ui";

export const Label = styled(EGLabel)`
  font-size: 14px;
  /* margin-bottom: 4px; */
  font-weight: 500;

  color: ${Colors.tertiary};

  b {
    font-weight: 700;
  }
`;

export const LabelLegend = styled(EGLabel)`
  font-size: 13px;
  margin-top: -5px;
  margin-bottom: 2px;

  color: ${Colors.darkGray};
`;

export const ChatSearchInput = styled(EGTextInput)`
  font-size: 14px;
`;

export const SearchInput = styled(EGSearchInput)`
  width: 100%;

  font-size: 15px;

  svg {
    width: 17px;
    height: 17px;
  }
`;

export const SelectMenu = styled(EGSelectMenu)`
  /* width: 100%; */
  width: 200px;
`;

export const SelectMenuButton = styled(EGButton)`
  height: 100%;
  padding: 0 40px;
  /* width: fit-content; */

  font-size: 13px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const MainInput = styled(EGTextInput)`
  width: 100%;
  /* height: 100%; */

  /* font-size: 15px; */
`;

export const MainTextArea = styled(Textarea)`
  width: 100%;
  resize: none;

  /* font-size: 15px; */
`;

export const MainButton = styled(EGButton)`
  height: 100%;

  font-size: 13px;
  letter-spacing: 0.5px;
`;

export const MainButtonConfirm = styled(MainButton)`
  width: fit-content;
  height: fit-content;

  /* font-size: 15px; */
`;

export const MainIconButton = styled(EGIconButton)`
  /* display: flex; */
  transition: 0.2s;
`;

export const MiniButton = styled(EGButton)`
  /* height: 100%; */

  /* font-size: 15px; */
`;

export const FileUploader = styled(EGFileUploader)`
  padding: 20px;

  h3 {
    margin-top: 10px;

    font-size: 14px;
    line-height: 14px;
    font-weight: 300;

    b {
      font-weight: 500;

      color: ${Colors.messagesIndicator};
    }
  }

  div {
    width: 45px;
    height: 45px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const SelectMenuTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;

  font-size: 15px;
  line-height: 15px;
  font-weight: 500;
  text-transform: uppercase;
  /* letter-spacing: 0.5px; */

  color: ${Colors.tertiary};

  svg {
    margin-right: 4px;
    font-size: 20px;
    margin-top: 4px;
  }
`;

export const TagInput = styled(EGTextInput)`
  /* width: 100%; */

  /* font-size: 15px; */
  padding: 6px;

  strong {
    margin: 0 5px 5px 0;
  }
`;

export const ChatTextArea = styled.textarea`
  width: 100%;
  border-radius: 8px;
  padding: 11px 10px;

  font-size: 14px;
  height: 40px;
  min-height: 40px;
  resize: none;

  &:not(:focus) {
    height: 40px;
  }

  &:focus {
    height: 77px;
    min-height: 77px;
  }
`;

export const IconButton = styled(EGIconButton)`
  /* display: flex; */
  transition: 0.2s;

  border: ${(props) =>
    props.isActive
      ? `1px solid ${Colors.messagesIndicator} `
      : props.hasBorder
      ? `1px solid ${Colors.lightGray} `
      : "none"};

  .inverted_svg {
    transform: rotate(180deg);
  }
`;

export const HeaderIconButton = styled(EGIconButton)`
  position: relative;
  /* display: flex; */
  transition: 0.3s;
  border-radius: 50px;
  padding: 0 0 1px 1px;
  margin-left: 10px;

  background-color: transparent !important;
  /* border: 1px solid ${Colors.lightGray}; */
  outline: 1px solid transparent;
  border: none;

  outline: 1px solid ${Colors.gray};

  &:hover {
    background-color: ${Colors.whiteTertiary} !important;
    border: none !important;

    outline: 1px solid ${Colors.darkGray};

    .resize {
      transition: 0.2s;
      stroke: ${Colors.darkGray};
    }
  }

  .resize {
    transition: 0.2s;
    width: 19px;
    height: 19px;

    stroke: ${Colors.gray};
  }

  &::after {
    display: ${(props) => (props.isActive ? "flex" : "none")};
    content: "";
    position: absolute;
    top: 1px;
    right: 1px;
    width: 8px;
    height: 8px;
    border-radius: 50px;

    background-color: ${Colors.alert};
  }
`;
