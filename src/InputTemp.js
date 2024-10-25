import React from "react";
import "./InputTemp.css";
function InputTemp() {
  return (
    <form className="modal-content animate">
      <div class="imgcontainer">
        <span
          onclick="document.getElementById('id01').style.display='none'"
          class="close"
          title="Close Modal"
        >
          &times;
        </span>
      </div>
      <div className="container">
        <label for="room">
          <b>Room Number</b>
        </label>
        <input type="text" placeholder="Room Number" name="room" required />
        <label for="temp">
          <b>Temp setting</b>
        </label>
        <input type="number" placeholder="Temp Setting" name="temp" required />
        <input type="submit" value="save" />
      </div>
    </form>
  );
}

export default InputTemp;
