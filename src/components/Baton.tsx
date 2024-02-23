import React from "react";
import "./Input.css";

type CurrentTrainProps = {
  name: string;
  className: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};
const Baton: React.FC<CurrentTrainProps> = ({ onClick, name, className }) => {
  return (
    <div
      onClick={onClick}
      data-tooltip={`${className}`}
      className={`Baton ${className}`}
    >
      {name}
    </div>
  );
};

export default Baton;
