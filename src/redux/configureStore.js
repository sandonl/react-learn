import { combineReducers, createStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterReducer from './ducks/counter';
import userReducer from "./ducks/userSlice";
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer
})

const sagaMiddleware = createSagaMiddleware(); 

const middleware = [sagaMiddleware];

// Add middleware (redux-saga) listens to any dispatchers that we make through redux
const store = createStore(reducer, {}, applyMiddleware(...middleware)); 

sagaMiddleware.run(watcherSaga);

export default store