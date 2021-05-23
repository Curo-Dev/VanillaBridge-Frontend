import {
  createContext,
} from "react";
import {
  ChatItemProps,
} from "src/components/molecules"

export type CoreContextProps = {
  chats: ChatItemProps[];
  setChat: (chat: ChatItemProps[]) => void;
};

const initialCoreContext: CoreContextProps = {
  chats: [],
  setChat: (chat: ChatItemProps[]) => { },
};

export const CoreContext = createContext<CoreContextProps>(initialCoreContext);