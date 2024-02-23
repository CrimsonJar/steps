import React, { useState } from "react";
import "./App.css";
import moment from "moment";
import "moment/locale/ru";

import TrainList from "./components/TrainList";
import InputFields from "./components/InputFields";
const generateKey = () => {
  return Math.random().toString(36).substr(2, 4);
};
function App() {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const [currentDistance, setCurrentDistance] = useState("");
  const [currentKey, setCurrentKey] = useState("");
  const [trains, setTrains] = useState<
    { id: number; date: string; distance: string; key: string }[]
  >([]);

  const handleDateChange = (fieldName: string, value: string) => {
    const dateValue = value ? new Date(value) : null; // Преобразование строки в объект типа Date или null
    setCurrentDate(dateValue);
  };

  const handleDistanceChange = (fieldName: string, value: string) => {
    setCurrentDistance(value);
  };

  const handleClick = () => {
    const dateToTable = moment(currentDate).format("DD.MM.YYYY");
    let newKey;
    if (currentKey === "") {
      newKey = generateKey();
      setTrains([
        ...trains,
        { id: 0, date: dateToTable, distance: currentDistance, key: newKey },
      ]);
    } else {
      setTrains(
        trains.map((train) =>
          train.key === currentKey
            ? { ...train, date: dateToTable, distance: currentDistance }
            : train
        )
      );
    }
    setCurrentDate(null);
    setCurrentDistance("");
    setCurrentKey("");
  };

  const handleEditClick = (trainKey: string) => {
    const foundTrain = trains.find((train) => train.key === trainKey);
    if (foundTrain) {
      const dateValue = foundTrain.date
        ? moment(foundTrain.date, "DD.MM.YYYY").toDate()
        : null;
      setCurrentDate(dateValue);
      setCurrentDistance(foundTrain.distance);
      setCurrentKey(foundTrain.key);
    }
  };

  const handleDeleteClick = (trainKey: string) => {
    const updatedTrains = trains.filter((train) => train.key !== trainKey);
    setTrains(updatedTrains);
  };

  return (
    <div className='App'>
      <li className='head'>
        <span className='date'>{"Дата (дд.мм.гггг)"}</span>
        <span className='distance'>{"Пройдено км"}</span>
      </li>
      <InputFields
        dateValue={currentDate}
        distanceValue={currentDistance}
        onDateChange={handleDateChange}
        onDistanceChange={handleDistanceChange}
        onClick={handleClick}
      />
      <li className='head'>
        <span className='date'>Дата</span>
        <span className='distance'>Пройдено км</span>
      </li>
      <div className='body'>
        <TrainList
          trains={trains}
          onEditClick={(trainKey) => handleEditClick(trainKey)}
          onDeleteClick={(trainKey) => handleDeleteClick(trainKey)}
        />
      </div>
    </div>
  );
}

export default App;
