import React, {
  FC,
} from "react";
import styled from "styled-components";
import {
  ChatItem,
  ChatItemProps,
} from "src/components/molecules";

type ChatListProps = {
  chats: ChatItemProps[]
}

const ChatListBlock = styled.div`
  margin: 20px 10px;
  overflow-y: auto;
`;

export const ChatList: FC<ChatListProps> = ({
  chats
}) => {
  return (
    <ChatListBlock>
      {chats.map((chat, index) => (
        <ChatItem
          id={chat.id}
          user_id={chat.user_id}
          user_name={chat.user_name}
          created_at={chat.created_at}
          photo_url={chat.photo_url}
          msg={chat.msg}
          key={index}
          />
      ))}
    </ChatListBlock>
  );
};