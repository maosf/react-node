import React, { useState } from "react";
import "./TempCard.css";

const TempCard = ({ room = "0", temp = 0, h = 21, c = 24 }) => {
  //   const [room, setRoom] = useState("0");
  //   const [temp, setTemp] = useState(0);
  const [heat, setHeat] = useState(h);
  const [cool, setCool] = useState(c);
  const heatHandler = () => {
    console.log("heatset", heat);
  };
  const coolHandler = () => {
    console.log("coolset", cool);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="banner-image"></div>
        <h3>Room Temp</h3>
        <p className="room">Room Number:{room} </p>
        <p className="room">Temperature:{temp} </p>
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
          <button className="btn" type="button" onclick={heatHandler}>
            Edit
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
          <button className="btn" type="button" onclick={coolHandler}>
            Edit
          </button>
        </p>
      </div>
    </div>
  );
};

export default TempCard;
