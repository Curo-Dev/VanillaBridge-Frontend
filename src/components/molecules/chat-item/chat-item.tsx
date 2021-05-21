import React, {
  FC,
} from "react";
import styled from "styled-components";

export type ChatItemProps = {
  user_id: number;
  user_name: number;
  photo_url: string;
  created_at: Date;
  msg: {
    mtype: "text" | "photo";
    content: string
  }
}

const ChatItemBlock = styled.div`

`;

export const ChatItem: FC<ChatItemProps> = ({
  user_id,
  user_name,
  msg,
}) => {
  return (
    <ChatItemBlock>
      {msg.content}
    </ChatItemBlock>
  );
};