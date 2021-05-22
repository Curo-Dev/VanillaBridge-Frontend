import styled from "styled-components";

export const ChatItemTitle = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 500;

  div[data-sent="true"] > div > & {
    display: none;
  }
`;

export const ChatDateTitle = styled.span`
  display: block;
  background-color: #b2b2b2;
  color: white;
  font-size: 12px;
  font-weight: 500;
  border-radius: 15px;
  padding: 2px 15px;
  margin: 10px 0;
`;

export const ChatTimeTitle = styled.span`
  display: block;
  color: #b4b4b4;
  font-size: 12px;
  margin: 0px 0px 10px 2px;
`;