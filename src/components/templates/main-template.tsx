import React, {
  FC,
} from "react";
import styled from "styled-components";
import {
  ChatList,
  ChatBox,
  Header,
} from "src/components/organisms";
import {
  ChatItemProps,
} from "src/components/molecules";

type MainTemplateProps = {
  title: string;
  chats: ChatItemProps[];
}

const MainTemplateBlock = styled.div`
  width: 320px;
  height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F6F6F8;
`;

export const MainTemplate: FC<MainTemplateProps> = ({
  title,
  chats,
}) => {
  return (
    <MainTemplateBlock>
      <Header />
      <ChatList chats={chats} />
      <ChatBox />
    </MainTemplateBlock>
  );
};