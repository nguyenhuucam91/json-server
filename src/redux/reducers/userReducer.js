const users = []

const userReducer = (state = users, action) => {
  switch (action.type) {
    case "FETCH_USER_SUCCESSFUL": {
      return [
        ...state,
        ...action.payload.users
      ]
    }

    default:
      return state
  }
}

export default userReducer