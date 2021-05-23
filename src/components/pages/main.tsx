import React, {
  FC,
  useLayoutEffect,
  useState,
  useContext,
} from "react";
import styled from "styled-components";
import {
  MainTemplate,
} from "src/components/templates"
import {
   ChatItemProps,
} from "src/components/molecules";
import {
  chatList,
  CoreContext,
} from "src/modules";

const MainBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222222;
`;

export const MainPage: FC = () => {
  const {
    setChat,
    chats
  } = useContext(CoreContext)

  useLayoutEffect(() => {
    const loadChat = async () => {
      setChat(await chatList());
    };
    
    loadChat()
    console.log("LOAD CHAT");
    
  }, []);

  chats.sort((x, y) => {
    return x.id < y.id ? -1 : x.id > y.id ? 1 : 0;
  });

  chats.sort((x, y) => {
    const xd: any = new Date(x.created_at);
    const yd: any = new Date(y.created_at);
    return xd - yd;
  }); // 서버 측에서 처리하면 이 부분은 없애도 될 거 같다....
  

  return (
    <MainBlock>
      <MainTemplate title={"test"} chats={chats}/>
    </MainBlock>
  );
};