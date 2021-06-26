import Parent from "./Parent";
import { useState } from "react";

export default function Child() {
  const [count, setCount] = useState(0);
  const Consumption = () => {
    setCount(+1);
  };

  return (
    <>
      <h1>Child</h1>
      <Parent onClick={Consumption} count={count} />
    </>
  );
}
