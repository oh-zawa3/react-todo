import React, { memo, useCallback, useState } from "react";
import { SELECT_VALUES } from "../../const";
import { SelectBox } from "./SelectBox";
import { TextFields } from "./TextFields";

export const VersatileForm = memo(() => {
  const [selectValue, setSelectValue] = useState(SELECT_VALUES[1]);
  const [textValue, setTextValue] = useState("");

  const handleChangeSelect = useCallback((event) => {
    setSelectValue({
      value: event.target.value,
      label: event.target.value,
    });
    setTextValue("");
  }, []);

  const handleChangeText = useCallback((event) => {
    setTextValue(event.target.value);
  }, []);

  console.log(selectValue);

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
