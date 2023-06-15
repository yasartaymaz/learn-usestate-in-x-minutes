import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("none");

  function decrementCount() {
    //setCount((previousCount) => previousCount - 1);
    /*setState((previousState) => {
      return { count: previousState.count - 1, theme: "blue" };
    });*/
    setCount((previousState) => previousState - 1);
    setTheme("blue");
  }

  function incrementCount() {
    //setCount((previousCount) => previousCount + 1);
    /*setState((previousState) => {
      return { count: previousState.count + 1, theme: "red" };
    });*/
    setCount((previousState) => previousState + 1);
    setTheme("red");
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span> - {theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
