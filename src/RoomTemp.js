import PopupForm from "./PopupForm";
import "./RoomTemp.css";

function RoomTemp({ data, onAdjust }) {
  const items = Object.entries(data);

  return (
    <div className="container">
      <ul>
        <h3>The room temperature</h3>
        {items.map(([key, value]) => (
          <li
            className="card"
            key={key}
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
            <p className="room">
              Room {key} --- Temp is : {value} C
            </p>

            <PopupForm room={key} temp={value} onAdjust={onAdjust} />
            {/* <input type='number' value={value} onChange={(e)=>} */}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default RoomTemp;
