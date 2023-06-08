import React, { useEffect } from "react";
import { useState } from "react";
import Clock from "./clock";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const onAdd = () => {
    setCount(count + 1);
  };
  const onMinus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("i am mounted");

    return () => {
      // cleanup function or unmount function

      console.log("I am Unmounting");
    };
  }, []);

  useEffect(() => {
    if (count !== 0) {
      console.log("Hey! my Dependency is changing", count);
      const randomNames = ["Raja", "Sneha", "Azeema", "Ramesh", "Jainendra"];
      const chosenName = randomNames[parseInt(Math.random() * 10) % 5];
      setName(chosenName);
    }
  }, [count]);
  return (
    <div>
      <h1>
        {count}
        {name}
      </h1>
      <button onClick={onAdd}>Increment++</button>
      <button onClick={onMinus}>Decrement--</button>
      {count > 3 && count <= 5 && <Clock />}
    </div>
  );
};

export default Counter;

// componentDidMount -> when dependency array is empty
// componentDidUpdate -> when any of the dependency change
// componentWillunmount ->
