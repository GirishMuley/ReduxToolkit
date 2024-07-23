import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonusSlice";

function Bounus() {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.bonus.points);

  return (
    <>
      <h4>
        <b>Bonus Component</b>
      </h4>
      <h3>Total point : {points}</h3>
      <button onClick={() => dispatch(increment())}>Increment +</button>
    </>
  );
}
export default Bounus;
