import React from "react";
import { useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/reducers/slice";
import store from "../store/store";

const Bt1: React.FC = () => {
  const count = useSelector((state: any) => state.counter);

  return (
    <div>
      <h1>bt1</h1>
      <h1>{count}</h1>
      <button onClick={() => store.dispatch(increment())}>increase</button>
      <button onClick={() => store.dispatch(decrement())}>decrease</button>
      <button onClick={() => store.dispatch(reset())}>reset</button>
    </div>
  );
};

export default Bt1;
