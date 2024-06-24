import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { generateRandomNumber } from "../store/reducers/slice";
import store from "../store/store";

const Bt2: React.FC = () => {
  const num = useSelector((state: any) => state.randomNumber);
  const [arr, setArr] = useState<number[]>([]);

  useEffect(() => {
    if (num !== 0) {
      setArr((prevArr) => [...prevArr, num]);
    }
  }, [num]);

  const handleClick = () => {
    store.dispatch(generateRandomNumber());
  };

  return (
    <div>
      <h1>bt2</h1>
      <button onClick={handleClick}>Random</button>
      <p>{arr.join(", ")}</p>
    </div>
  );
};

export default Bt2;
