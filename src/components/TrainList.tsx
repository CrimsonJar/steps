import React from "react";
import "./Input.css";
import TrainItem from "./TrainItem";
type Trains = {
  id: number;
  date: string;
  distance: string;
  key: string;
};

type TrainListProps = {
  trains: Trains[];
  onEditClick: (trainId: string) => void;
  onDeleteClick: (trainId: string) => void;
};
const TrainList: React.FC<TrainListProps> = ({
  trains,
  // onListChange,
  onEditClick,
  onDeleteClick,
}) => {
  const sortedTrains = [...trains].sort((a, b) => {
    const dateA = new Date(a.date.split(".").reverse().join("-"));
    const dateB = new Date(b.date.split(".").reverse().join("-"));
    return dateA.getTime() - dateB.getTime();
  });

  return (
    <div>
      <ol>
        {sortedTrains.map((train) => (
          <TrainItem
            key={train.key}
            train={train}
            // onListChange={onListChange}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </ol>
    </div>
  );
};

export default TrainList;
