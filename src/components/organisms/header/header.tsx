import React, {
  FC,
} from "react";
import styled from "styled-components";
import {
  ChatHeaderIcon,
} from "src/components/atoms";

const HeaderBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background-color: white;
  padding: 10px 15px;
`;

export const Header: FC = () => {
  return (
    <HeaderBlock>
      <ChatHeaderIcon src="/arrow.svg" alt=""/>
    </HeaderBlock>
  )
};