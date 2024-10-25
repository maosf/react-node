import React from "react";
import { useState, useEffect } from "react";
import "./PopupForm.css";
const PopupForm = ({ room, temp, onAdjust }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setformData] = useState({ room: room, temp: temp });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onAdjust({ instance: formData.room, value: formData.temp });
    setformData({ room: "", temp: "" });
    setShowForm(false);
  };
  return (
    <div>
      <button className="resetbtn" onClick={() => setShowForm(true)}>
        Temp reset
      </button>
      {showForm && (
        <div className="form-popup">
          <form className="form-container " onSubmit={handleSubmit}>
            <h3>Temp setting</h3>
            <label htmlFor="room">
              <b>Room Number</b>
            </label>
            <input
              type="text"
              placeholder="Room #"
              name="room"
              value={formData.room}
              onChange={handleChange}
            />

            <label htmlFor="temp">
              <b>Temp Setting</b>
            </label>
            <input
              type="text"
              placeholder="Temp Set"
              name="temp"
              value={formData.temp}
              onChange={handleChange}
            />
            <button type="submit" className="btn">
              Submit
            </button>
            <button
              type="button"
              className="btn cancel"
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PopupForm;
