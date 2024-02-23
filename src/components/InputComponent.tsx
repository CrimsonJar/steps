import React from "react";
import "./Input.css";

type InputProps = {
  inputValue: string;
  inputName: string;
  onChange: (fieldName: string, value: string) => void;
};

const InputComponent: React.FC<InputProps> = ({
  inputValue,
  inputName,
  onChange,
}) => {
  return (
    <>
      <div className='input-container'>
        <input
          className='input'
          type='text'
          value={inputValue}
          onChange={(e) => onChange(inputName, e.target.value)}
        />
      </div>
    </>
  );
};

export default InputComponent;
