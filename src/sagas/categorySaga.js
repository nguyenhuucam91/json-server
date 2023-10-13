import {takeLatest, call, put} from 'redux-saga/effects'
import axios from "axios";

async function fetchUsers() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data
  } catch (e) {
    return e.message
  }
}

function* categoryWatcher() {
  yield takeLatest("FETCH_USER_REQUESTED", categoryWorker)
}

function* categoryWorker(action){
  console.log("Action", action.payload)
  try {
    const users = yield call(fetchUsers)
    yield put({type: "FETCH_USER_SUCCESSFUL", payload: {users}});
  } catch (e) {
    yield put({type: "FETCH_USER_FAILED", e});
  }
}

export default categoryWatcher