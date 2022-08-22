import React, { memo, useCallback, useState } from "react";
import { buttonName, initialTextValue, SELECT_VALUES } from "../../const";
import { TemplateButton } from "../button";
import { SelectBox } from "./SelectBox";
import { TextFields } from "./TextFields";


export const TemplateForm = memo(() => {
  /** SelectBox についての state */
  const [selectValue, setSelectValue] = useState(SELECT_VALUES[1]);
  /** TextFields についての state */
  const [textValue, setTextValue] = useState(initialTextValue);

  /** SelectBox の値の管理 */
  const handleChangeSelect = useCallback((event) => {
    setSelectValue({
      value: event.target.value,
      label: event.target.value,
    });
    setTextValue("");
  }, []);

  /** TextFields の値の管理 */
  const handleChangeText = useCallback((event) => {
    setTextValue((textValue) => ({
      ...textValue,
      [event.target.name]: event.target.value,
    }))
  }, []);

  console.log(textValue);

  //   /** 全てのボタンの挙動の管理  */
  // const handleClickButton = useCallBack((buttonName, event) => {
  //   /** textValue の追加の処理 */
  //   // buttonNameがそれぞれ”add,complete,remove"の時の挙動を書く
  //   if (buttonName === "add" && textValue !== "") {
  //     return null;
  //   }
  //   if (textValue === "") {
  //     return null;
  //   }
  // }, []);


  return (
    <>
      <SelectBox
        items={SELECT_VALUES}
        handleChange={handleChangeSelect}
        selectValue={selectValue}
      />
      <TextFields
        title={selectValue.label}
        textValue={textValue}
        handleChange={handleChangeText}
      />
      <TemplateButton
        title="追加"
        // buttonName={buttonName}
        // handleClick={handleClickButton}
      />
    </>
  );
});
