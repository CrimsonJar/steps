import React from "react";
import "./Input.css";
import Baton from "./Baton";
type Train = {
  id: number;
  date: string;
  distance: string;
  key: string;
};

type CurrentTrainProps = {
  train: Train;
  // onListChange: (index: string, value: string) => void;
  onEditClick: (trainId: string) => void;
  onDeleteClick: (trainId: string) => void;
};
const TrainItem: React.FC<CurrentTrainProps> = ({
  train,
  // onListChange,
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <div>
      <li>
        <span className='date'>{train.date}</span>
        <span className='distance'>{train.distance}</span>
        <Baton
          onClick={() => onEditClick(train.key)}
          name='E'
          className={"Edit"}
        />
        <Baton
          onClick={() => onDeleteClick(train.key)}
          name='✘'
          className={"Delete"}
        />
      </li>
    </div>
  );
};

export default TrainItem;
