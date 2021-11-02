import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Equivalent to componentDidUpdate
  useEffect(() => {
    console.log("The use effect ran in the Counter component");
    return () => {
      console.log(`we are in the cleanup ${count}`);
    };
  }, [count]);

  return (
    <div>
      <p>The count is: {count} </p>
      <p>This is our counter component </p>
      <button onClick={() => setCount(count + 1)}> increment the count </button>
    </div>
  );
};

export default Counter;
