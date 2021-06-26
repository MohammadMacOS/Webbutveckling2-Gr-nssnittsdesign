//import React, { useState } from "react";
//import Child from "./Child";

//export default function Parent() {
  //const [count, setCount] = useState(0);

  const Consumption = () => {
    setCount(+1);
  };

  return (
    <>
      <h1>Parent</h1>

      <Child onClick={Consumption} count={count} />
    </>
  );

