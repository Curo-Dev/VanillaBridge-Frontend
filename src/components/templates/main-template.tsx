import React, {
  FC,
} from "react";
import styled from "styled-components";
import {
  ChatList,
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
  justify-content: center;
  background-color: #F6F6F8;
  border-radius: 15px;
`;

export const MainTemplate: FC<MainTemplateProps> = ({
  title,
  chats,
}) => {
  return (
    <MainTemplateBlock>
      <ChatList chats={chats} />
    </MainTemplateBlock>
  );
};