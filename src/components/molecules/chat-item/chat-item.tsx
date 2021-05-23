import React, {
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import {
  ChatProfileImage,
  ChatContextImage,
  ChatItemTitle,
  ChatTimeTitle,
} from "src/components/atoms";

import {
  CopyToClipboard
} from 'react-copy-to-clipboard';
import dayjs from "dayjs";
import 'dayjs/locale/ko' 

dayjs.locale('ko');

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
  margin-top: 10px;

  &[data-sent="true"] {
    margin-top: 0;
    flex-direction: row-reverse;
  }
`;

const ChatItemBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const ChatItemChatBox = styled.div`
  display: flex;
  align-items: flex-end;
  
  div[data-sent="true"] > div > & {
    flex-direction: row-reverse;
  }
`;

const ChatItemContext = styled.div`
  width: auto;
  height: auto;
  max-width: 190px;
  display: flex;
  background-color: white;
  box-shadow: 1px 1px 1px #d2d2d2;
  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  padding: 5px 15px;
  margin: 5px 5px;

  
  div[data-sent="true"] > div > div > & {
    background-color: #8A74FF;
    color: white;
  }
`

const ChatProfileModal = styled.img`
  width: 100%;
  height: auto;
  display: none;
`;

export const ChatItem: FC<ChatItemProps> = ({
  user_id,
  user_name,
  photo_url,
  msg,
  created_at,
}) => {
  const [isClick, setClick] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const date = dayjs(created_at);

  useEffect(() => {
    const onOutSideClick = (event: MouseEvent) => {
      const node = event.target as Node;
      
      if (!imgRef.current?.contains(node)) {
        imgRef.current.style.width = "30px";
        imgRef.current.style.height = "30px";
        imgRef.current.style.margin = null;
        imgRef.current.style.top = null;
        imgRef.current.style.bottom = null;
        imgRef.current.style.position = null;
      }
    };
    if (isClick) {     
      document.addEventListener("mousedown", onOutSideClick);
    } else {
      document.removeEventListener("mousedown", onOutSideClick);
    }
  }, [isClick])

  const onProfileClick = () => {
    if(imgRef.current != null) {
      imgRef.current.style.width = "300px";
      imgRef.current.style.height = "300px";
      imgRef.current.style.margin = "auto";
      imgRef.current.style.top = "50%";
      imgRef.current.style.bottom = "50%";
      imgRef.current.style.position = "absolute";
      setClick(true);
    }
  }

  return (
    <CopyToClipboard text={msg.content}>
    <ChatItemBlock data-sent={user_id === 2} >
      <ChatProfileImage
        ref={imgRef}
        onClick={onProfileClick}
        src={photo_url}
        alt="" />
      <ChatItemBox>
        <ChatItemTitle>{user_name}</ChatItemTitle>
        <ChatItemChatBox>
          <ChatItemContext>

              {msg.content && msg.content.split("\\n").map(x => {
                return <>{x} <br /></>;
              })}

            {msg.mtype === "photo" && <ChatContextImage src={"https://imgur.com/lfH8tyf.png"} alt="잘생긴 사진은 너굴맨이 처리했으니 안심하라구!" />}
          </ChatItemContext>
          <ChatTimeTitle>
            {date.format("A h:mm")}
          </ChatTimeTitle>
        </ChatItemChatBox>
      </ChatItemBox>
    </ChatItemBlock>
    </CopyToClipboard>
  );
};