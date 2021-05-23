import React, {
  FC,
} from "react";
import styled from "styled-components";
import {
  ChatInput, ChatSendIcon,
} from "src/components/atoms";

const ChatBoxBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  background-color: white;
  padding: 10px 15px;
`;

const ChatInputBox = styled.form`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  border: 1px solid #b8b8b8;
  border-radius: 5px;
`;

const ChatSendBox = styled.div`
  width: 30px;
  min-width: 30px;
  height: 30px;
  background-color: #8A74FF;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  margin-right: 8px;
`;

export const ChatBox: FC = () => {
  return (
    <ChatBoxBlock>
      <ChatInputBox>
        <ChatInput placeholder="메시지를 입력하세요"/>
        <ChatSendBox>
          <ChatSendIcon src="/arrow_upward.svg" />
        </ChatSendBox>
      </ChatInputBox>
    </ChatBoxBlock>
  )
};