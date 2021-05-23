import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useContext,
  useState,
} from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import {
  ChatInput,
  ChatSendIcon,
} from "src/components/atoms";
import {
  CoreContext,
} from "src/modules";

type ChatSendBoxProps = {
  disabled: boolean;
};

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

const ChatSendBox = styled.div<ChatSendBoxProps>`
  width: 30px;
  min-width: 30px;
  height: 30px;
  background-color: #8A74FF;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 8px;

  opacity: ${props => props.disabled ? "0.5" : "1"};
`;

export const ChatBox: FC = () => {
  const {
    chats,
    setChat,
  } = useContext(CoreContext);
  const [text, setText] = useState({ text: "" });
  
  const onChangeEvent = (event: ChangeEvent) => {
    const {
      name,
      value,
    } = event.target as HTMLInputElement;
    setText(prevData => ({ ...prevData, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    chats.push({
      id: 1,
      created_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      photo_url: "",
      user_name: "",
      user_id: 2,
      msg: {
        mtype: "text",
        content: text.text,
      }
    });
    await setChat(chats);
    setText({ text: "" })

    let scroll = document.getElementById("scroll");
    scroll.scrollTop = scroll.scrollHeight;
  }

  return (
    <ChatBoxBlock>
      <ChatInputBox onSubmit={e => onSubmit(e)}>
        <ChatInput
          name="text"
          value={text.text}
          placeholder="메시지를 입력하세요"
          onChange={onChangeEvent} />
        <ChatSendBox disabled={text.text.length == 0}>
          <ChatSendIcon src="/arrow_upward.svg" />
        </ChatSendBox>
      </ChatInputBox>
    </ChatBoxBlock>
  )
};