import React, { memo, useCallback, useState } from "react";
import { initialTextValue, SELECT_VALUES } from "../../const";
import { TemplateButton } from "../button";
import { SelectBox } from "./SelectBox";
import { TextFields } from "./TextFields";


export const TemplateForm = memo(() => {
  /** SelectBox についての state */
  const [selectValue, setSelectValue] = useState(SELECT_VALUES[1]);
  /** TextFields についての state */
  const [textValue, setTextValue] = useState(initialTextValue);
  /**TemplateButtonについての state */
  const [outputValue, setOutputValue] = useState({});

  /** SelectBox の値の管理 */
  const handleChangeSelect = useCallback((event) => {
    setSelectValue({
      value: event.target.value,
      label: event.target.value,
    });
    setTextValue(initialTextValue);
  }, []);

  /** TextFields の値の管理 */
  const handleChangeText = useCallback((event) => {
    setTextValue((textValue) => ({
      ...textValue,
      [event.target.name]: event.target.value,
    }))
  }, []);

  console.log(textValue);

    /** 全てのボタンの挙動の管理  */
  const handleClickButton = useCallback((event) => {
    setOutputValue((outputValue) => ({
      ...outputValue,
      [event.target.title]: event.target.value
    }))
    alert(outputValue);
  }, []);


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
        title={selectValue}
        outputValue={textValue}
        // buttonName={buttonName}
        handleClick={handleClickButton}
      />
    </>
  );
});
