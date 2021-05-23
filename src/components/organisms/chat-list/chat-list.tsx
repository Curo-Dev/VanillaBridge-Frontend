import React, {
  FC,
  useLayoutEffect,
  useRef,
} from "react";
import styled from "styled-components";
import {
  ChatItem,
  ChatItemProps,
} from "src/components/molecules";
import {
  ChatDateTitle,
} from "src/components/atoms"

type ChatListProps = {
  chats: ChatItemProps[]
}

const ChatListBlock = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatDateBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const ChatList: FC<ChatListProps> = ({
  chats
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if(scrollRef.current != null)  {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chats])

  return (
    <ChatListBlock ref={scrollRef}>
      {chats.map((chat, index) => { // 개인적으로 fromEntities 이용해서 Object 안에 넣고 Key 값 돌리고 싶은데 PASS!
        let [prevDate] = index === 0 ? [""] : chats[index - 1].created_at.split(" "); 
        let [date] = chat.created_at.split(" ");

        const dateD = new Date(date);
        
        const dateStr = `${dateD.getFullYear()}년 ${dateD.getMonth()}월 ${dateD.getDate()}일`;

        return (
          <>
            {prevDate === date || 
              <ChatDateBox>
                <ChatDateTitle>
                  {dateStr}
                </ChatDateTitle>
              </ChatDateBox>
            }


              <ChatItem
                id={chat.id}
                user_id={chat.user_id}
                user_name={chat.user_name}
                created_at={chat.created_at}
                photo_url={chat.photo_url}
                msg={chat.msg}
                key={index}
                />
          </>
        )
      })}
      
    </ChatListBlock>
  );
};