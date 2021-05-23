import React, {
  FC,
  useState,
} from "react";
import {
  CoreContext,
  CoreContextProps,
} from "./core-context";
import {
  ChatItemProps,
} from "src/components/molecules"

export const CoreProvider: FC = ({
  children,
}) => {
  const setChat = (chats: ChatItemProps[]) => {
    setCore((prevState) => ({ ...prevState, chats, }));
  };
  const initialState: CoreContextProps = {
    chats: [],
    setChat,
  };
  const [
    core,
    setCore,
  ] = useState(initialState);
  return (
    <CoreContext.Provider value={core}>
      {children}
    </CoreContext.Provider>
  );
};