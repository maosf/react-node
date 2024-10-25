import { useState } from "react";
import "./TempAdjust.css";

function TempAdjust({ onAdjust }) {
  const [instance, setInstance] = useState("");
  const [value, setValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!instance) {
      alert("can not be empty");
      return;
    }
    onAdjust({ instance, value });
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <div>
        <label className="form-control">Temp setting </label>
        <input
          type="text"
          placeholder="room #"
          value={instance}
          onChange={(e) => setInstance(e.target.value)}
        />
        <input
          type="text"
          placeholder="Temp set"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" value="Save" />
      </div>
    </form>
  );
}

export default TempAdjust;
