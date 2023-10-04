import {useDispatch, useSelector} from "react-redux";
import actionTypes from "./redux/actionTypes";

const Counter = () => {
  const dispatch = useDispatch()

  const counterReducer = useSelector(state => state.counterReducer)

  return (
    <div>
      {/* Bắt đầu = 0*/}
      <p>Counter: {counterReducer.initialCounter}</p>
      <button onClick={() => dispatch({type: actionTypes.INCREMENT, payload: 1})}>Increment + 1</button>
      <button onClick={() => dispatch({type: actionTypes.DECREMENT, payload: 1})}>Decrement - 1</button>
    </div>
  )
}

export default Counter