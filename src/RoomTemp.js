import PopupForm from "./PopupForm";
import "./RoomTemp.css";

function RoomTemp({ data, onAdjust }) {
  const items = Object.entries(data);

  return (
    <div className="room-container">
      <ul>
        <h3>The room temperature</h3>
        {items.map(([key, value]) => (
          <li
            key={key}
            className="room-card"
            style={{
              color:
                value > 26
                  ? "red"
                  : value > 24
                  ? "yellow"
                  : value < 23
                  ? "lightblue"
                  : "lightgreen",
            }}
          >
            Room {key} --- Temp is : {value} C
            <PopupForm room={key} temp={value} onAdjust={onAdjust} />
            {/* <input type='number' value={value} onChange={(e)=>} */}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default RoomTemp;
