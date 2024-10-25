import "./App.css";
import React, { useState, useEffect } from "react";
import RoomTemp from "./RoomTemp";
import TempAdjust from "./TempAdjust";
import PopupForm from "./PopupForm";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const loadData = async () => {
  //   try {
  //     const response = await fetch("http://192.168.68.65:3001/api");
  //     const data = await response.json();
  //     if (data) {
  //       setData(data);
  //       console.log(data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    fetch("http://192.168.68.65:3001/api")
      .then((response) => {
        if (!response.ok) {
          throw new Error("network response is not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
    // const interval = setInterval(() => {
    //   loadData();
    // }, 6000);
    // return () => clearInterval(interval);
  }, []);
  const adjustTemp = (tempSetting) => {
    console.log(tempSetting);
    fetch(
      `http://192.168.68.65:3001/set/${tempSetting.instance}/${tempSetting.value}`,
      {
        method: "POST",
      }
    )
      .then((respone) => {
        if (!respone.ok) {
          console.log("post not successful");
        }
        return respone.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      });
  };
  if (loading) return <div>loading ....</div>;
  if (error) return <div>Error: {error} </div>;
  return (
    <div className="App">
      {/* <h1>The room temperature</h1> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <TempAdjust onAdjust={adjustTemp} /> */}
      <RoomTemp data={data} onAdjust={adjustTemp} />
      {/* <PopupForm onAdjust={adjustTemp} /> */}
    </div>
  );
}
export default App;
