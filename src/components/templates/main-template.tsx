import React, {
  FC,
  useState,
  useLayoutEffect,
} from "react";
import styled from "styled-components";
import {
  ChatList
} from "src/components/organisms";

const MainTemplateBlock = styled.div`
  width: 320px;
  height: 720px;
  display: flex;
  justify-content: center;
  background-color: #F6F6F8;
  border-radius: 15px;
`;

export const MainTemplate: FC = () => {
  
  return (
    <MainTemplateBlock>
      <ChatList chats={[]} />
    </MainTemplateBlock>
  );
};