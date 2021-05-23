import styled from "styled-components";

export const ChatProfileImage = styled.img`
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 10px;
  transition: all 0.4s;

  div[data-sent="true"] > & {
    display: none;
  }
`;

export const ChatContextImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
`;

export const ChatHeaderIcon = styled.img`
  width: 30px;
  height: auto;
  display: flex;
  cursor: pointer;
`;

export const ChatSendIcon = styled.img`
  width: 23px;
  height: auto;
  display: flex;
  cursor: pointer;
`;