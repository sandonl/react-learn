import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/ducks/counter";

const Counter = (props) => {
  const { name } = props;
  const dispatch = useDispatch();
  const [votes, setVotes] = useState(0);

  const handleIncrement = () => {
    dispatch(increment());
    setVotes(votes + 1);
  };

  const handleDecrement = () => {
    dispatch(decrement());
    setVotes(votes - 1);
  };

  // Equivalent to componentDidUpdate
  useEffect(() => {
    console.log("The use effect ran in the Counter component");
    return () => {
      // console.log(`we are in the cleanup ${count}`);
    };
  }, []);

  return (
    <div>
      {/* <p>The count is: {count} </p> */}
      <h2> {name} </h2>
      <h4> {`Votes: ${votes} `}</h4>
      <p>This is our counter component </p>
      <button onClick={handleIncrement}> increment </button>
      <button onClick={handleDecrement}> Decrement </button>
    </div>
  );
};

export default Counter;
