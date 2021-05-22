import React, {
  FC,
} from "react";
import styled, {
  css
} from "styled-components";
import {
  ChatProfileImage,
  ChatContextImage,
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


type ChatItemBlockProps = {
  isMe: boolean;
};

const ChatItemBlock = styled.div<ChatItemBlockProps>`
  display: flex;
  
  ${props => props.isMe && css`
    flex-direction: row-reverse;
    img {
      display: none;
    }
    div {
      margin: 0;

      span {
        visibility: hidden;
      }

      div {
        background-color: #8A74FF;
        color: white;

        img {
          display: block;
        }
      }
    }
  `}
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
  max-width: 200px;
  display: flex;
  background-color: white;
  box-shadow: 1px 1px 1px #d2d2d2;
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
    <ChatItemBlock isMe={user_id == 2} >
      <ChatProfileImage src={photo_url} alt="" />
      <ChatItemContentBox>
        <ChatItemTitle>{user_name}</ChatItemTitle>
        <ChatItemChatBox>
          {msg.content && msg.content.split("\\n").map(x => {
            return <>{x} <br /></>;
          })}
          {msg.mtype === "photo" && <ChatContextImage src={photo_url} alt="" />}
        </ChatItemChatBox>
      </ChatItemContentBox>

    </ChatItemBlock>
  );
};