import React, {
  FC,
} from "react";
import styled from "styled-components";
import {
  ChatProfileImage,
  ChatItemTitle,
} from "src/components/atoms";

export type ChatItemProps = {
  id: number;
  user_id: number;
  user_name: string;
  photo_url: string;
  created_at: string;
  msg: {
    mtype: string;
    content?: string
  }
};

const ChatItemBlock = styled.div`
  display: flex;
`;

const ChatItemContentBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const ChatItemChatBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  background-color: white;
  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  padding: 5px 15px;
  margin: 5px 0;
`;

export const ChatItem: FC<ChatItemProps> = ({
  user_id,
  user_name,
  photo_url,
  msg,
  created_at,
}) => {
  
  return (
    <ChatItemBlock >
      <ChatProfileImage src={photo_url} alt="" />
      <ChatItemContentBox>
        <ChatItemTitle>{user_name}</ChatItemTitle>
        <ChatItemChatBox>
          {msg.content && msg.content.split("\\n").map(x => {
            return <>{x} <br /></>;
          })}
        </ChatItemChatBox>
      </ChatItemContentBox>

    </ChatItemBlock>
  );
};