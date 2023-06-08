import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Clock = () => {
  const [sec, setCount] = useState(0);
  const currentTime = new Date();
  const h = currentTime.getHours();
  const m = currentTime.getMinutes();
  const s = currentTime.getSeconds();

  useEffect(() => {
    console.log("Clock Mounted");
    let intervalId = setInterval(()=>{
        //  setCount(sec+1)
         setCount((currState)=>currState+1)
    },1000)
    return () => {
      console.log("Clock UnMounted");
      clearInterval(intervalId)
    };
  }, []);
  return (
    <div>
      <h2>{`${h}:${m}:${s}`}</h2>
    </div>
  );
};
export default Clock;
