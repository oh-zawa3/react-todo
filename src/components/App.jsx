import React, { memo } from "react";
import { SelectBox } from "./SelectBox";
import { TextFields } from "./TextFields";

export const App = memo(() => {
  return (
    <>
      <h1>Hello world!</h1>
      <p>{<SelectBox />}</p>
      <p>{<TextFields />}</p>
    </>
  );
});
