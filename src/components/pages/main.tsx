import React, {
  FC,
} from "react";
import styled from "styled-components";

const MainBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #222222;
`;

export const Main: FC = () => {
  return (
    <MainBlock>
      1231s
    </MainBlock>
  );
}