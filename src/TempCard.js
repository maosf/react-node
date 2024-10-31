import React, { useState } from "react";
import "./TempCard.css";

const TempCard = ({ r, t = 0, onHeat, onCool }) => {
  // const [room, setRoom] = useState(r);
  // const [temp, setTemp] = useState(t);
  const [heat, setHeat] = useState(21);
  const [cool, setCool] = useState(24);
  // const colorPicker = {
  //   backgroundColor:
  //     t > 26
  //       ? "rgba(255, 150, 0, 0.3)"
  //       : t > 24
  //       ? "rgba(255,255,0 , 0.3)"
  //       : t < 22
  //       ? "rgba(0,0,255,  0.3)"
  //       : "rgba(0,255, 0, 0.5)",
  // };
  const handlerHeat = () => {
    onHeat(r, heat);
  };
  const handlerCool = () => {
    onCool(r, cool);
  };
  return (
    <div className="container">
      <div className="banner-image"></div>

      <p className="room">
        ROOM#: <span className="temp">{r} </span>
      </p>
      <p
        style={{
          color:
            t > 26
              ? "red"
              : t > 24
              ? "yellow"
              : t < 21
              ? "lightblue"
              : "lightgreen",
        }}
      >
        Temperature:
        <span className="temp">
          {t > 50 ? ((t - 32) / 1.8).toFixed(1) : t} C
        </span>
      </p>
      <p className="set">
        <label htmlFor="heat">Heat Set: </label>
        <input
          type="number"
          name="heat"
          value={heat}
          onChange={(e) => {
            setHeat(e.target.value);
          }}
        />
        <button className="btn" type="button" onClick={handlerHeat}>
          Save
        </button>
      </p>
      <p className="set">
        <label htmlFor="cool">Cool Set: </label>
        <input
          type="number"
          name="cool"
          value={cool}
          onChange={(e) => {
            setCool(e.target.value);
          }}
        />
        <button className="btn" type="button" onClick={handlerCool}>
          Save
        </button>
      </p>
    </div>
  );
};

export default TempCard;
