import {useDispatch, useSelector} from "react-redux";
import actions from "./redux/actions";

const Counter = () => {
  const dispatch = useDispatch()

  const counterSelector = useSelector(state => state.counterReducer)

  const userSelector = useSelector(state => state.userReducer)

  return (
    <div>
      <div>
      {/* Bắt đầu = 0 */}
        <p>Counter: {counterSelector.initialCounter}</p>
        <button onClick={() => dispatch({type: actions.counter.INCREMENT, payload: 1})}>Increment + 1</button>
        <button onClick={() => dispatch({type: actions.counter.DECREMENT, payload: 1})}>Decrement - 1</button>
      </div>

      {/*  Saga div */}
      <div>
        <h1>User list</h1>
        {userSelector.map(user => {
          return <li key={user.id}>{user.id}</li>
        })}
        <button onClick={() => dispatch({type: "FETCH_USER_REQUESTED", payload: 1})}>Fetch user</button>
      </div>
    </div>
  )
}

export default Counter