import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga'
import categoryWatcher from "../sagas/categorySaga";

const sagaMiddleware = createSagaMiddleware()


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(categoryWatcher)

export default store