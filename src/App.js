import "./App.css";
import React, { useState, useEffect } from "react";
import RoomTemp from "./RoomTemp";
import TempCard from "./TempCard";
//import PopupForm from "./PopupForm";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const roomList = [];
  // let roomData = { id: 0, temp: 0, heat: 21, cool: 24 };
  const loadData = async () => {
    try {
      const response = await fetch("http://192.168.68.65:3001/api");
      const data = await response.json();
      if (data) {
        setData(data);
        Object.entries(data).forEach(([k, v]) => {
          let roomData = { id: k, temp: v, heat: 21, cool: 24 };
          // roomData.id = k;
          // console.log("id", roomData.id);
          // roomData.temp = v;
          // console.log("temp", roomData.temp);
          roomList.push(roomData);
        });

        setLoading(false);
        console.log(data);
        console.log(roomList);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    // fetch("http://192.168.68.65:3001/api")
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("network response is not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setData(data);
    //     setLoading(false);
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //     setLoading(false);
    //   });
    // loadData();
    //update temp every 6 seconds
    const interval = setInterval(() => {
      loadData();
    }, 10000);
    return () => clearInterval(interval);
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
  // const eachRoomData = Object.entries(data);
  // console.log(eachRoomData);
  let roomObj = {};
  const handlerHeat = (r, heat) => {
    roomObj.id = r;
    roomObj.heat = heat;
    console.log(roomObj);
  };
  const handlerCool = (r, cool) => {
    roomObj.id = r;
    roomObj.cool = cool;
    console.log("cool", roomObj);
  };

  return (
    <div>
      <h1 className="level">On the first level</h1>
      <div className="main-container">
        {Object.entries(data)?.map(([k, v]) => {
          // console.log(k, v);

          return (
            <TempCard r={k} t={v} onHeat={handlerHeat} onCool={handlerCool} />
          );
        })}
        {/* <TempCard />
      <TempCard />
      <TempCard />
      <TempCard /> */}
        {/* <RoomTemp data={data} onAdjust={adjustTemp} /> */}
      </div>
    </div>
  );
}
export default App;
