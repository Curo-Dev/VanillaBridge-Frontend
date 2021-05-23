import React, {
  FC,
  Fragment,
} from "react";
import {
  MainPage,
} from "src/components/pages";
import {
  CoreProvider
} from "src/modules";

export const App: FC = () => {
  return (
    <CoreProvider>
      <MainPage />
    </CoreProvider>
  );
}
