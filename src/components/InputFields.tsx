import React, { useState } from "react";
import "./Input.css";
import InputComponent from "./InputComponent";
import Baton from "./Baton";
import ru from "date-fns/locale/ru";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type InputProps = {
  dateValue: Date | null;
  distanceValue: string;
  onDateChange: (fieldName: string, value: string) => void;
  onDistanceChange: (fieldName: string, value: string) => void;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const InputFields: React.FC<InputProps> = ({
  dateValue,
  distanceValue,
  onDateChange,
  onDistanceChange,
  onClick,
}) => {
  return (
    <div className='InputFields'>
      <DatePicker
        className='DatePicker'
        selected={dateValue}
        popperPlacement='left'
        dateFormat='dd.MM.yyyy'
        locale={ru}
        onChange={(date: Date | null) => {
          if (date !== null) {
            const stringValue = date.toISOString();
            onDateChange("fieldName", stringValue);
          }
        }}
      />
      <InputComponent
        inputName={"Пройдено км"}
        inputValue={distanceValue}
        onChange={onDistanceChange}
      />

      <Baton onClick={onClick} name='OK' className={"All-Correct"} />
    </div>
  );
};

export default InputFields;
