import actions from "../actions";

const initialState = {
  initialCounter: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.counter.INCREMENT: {
      return {
        ...state,
        initialCounter: state.initialCounter + action.payload
      }
    }

    case actions.counter.DECREMENT: {
      return {
        ...state,
        initialCounter: state.initialCounter - action.payload
      }
    }

    default:
      return state
  }
}
export default counterReducer