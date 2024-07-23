import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
  getUserAccount,
} from "../slices/accountSlice";

function Account() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.account.amount);

  return (
    <>
      <h4>
        <b>Account Component</b>
      </h4>
      <h3>Amount: ${amount}</h3>
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
      <input type="text" onChange={(e) => setValue(+e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(value))}>
        Increment By {value} +
      </button>
      <button onClick={() => dispatch(getUserAccount(1))}>get User</button>
    </>
  );
}
export default Account;
