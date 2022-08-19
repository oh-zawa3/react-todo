import React, { memo, useCallback, useState } from "react";
import { initialTextValue, SELECT_VALUES } from "../../const";
import { SelectBox } from "./SelectBox";
import { TextFields } from "./TextFields";


export const TemplateForm = memo(() => {
  /** SelectBox についての state */
  const [selectValue, setSelectValue] = useState(SELECT_VALUES[1]);
  /** TextFields についての state */
  const [textValue, setTextValue] = useState(initialTextValue);

  /** SelectBoxの値の管理 */
  const handleChangeSelect = useCallback((event) => {
    setSelectValue({
      value: event.target.value,
      label: event.target.value,
    });
    setTextValue("");
  }, []);

  /** TextFieldsの値の管理 */
  const handleChangeText = useCallback((event) => {
    setTextValue((textValue) => ({
      ...textValue,
      [event.target.name]: event.target.value,
    }))}, []);

  console.log(textValue);

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

    </>
  );
});
