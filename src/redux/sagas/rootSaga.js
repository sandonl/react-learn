import { takeLatest } from 'redux-saga/effects'; 
import { handleGetUser } from './handlers/user';
import { GET_USER } from '../ducks/user';

export function* watcherSaga() { 
    // Where we look for any actions that have been dispatched by redux store 
    // and we map to handler functions that call the requests and make the API calls 
    yield takeLatest(GET_USER, handleGetUser);

    // takeLatest, when we dispatch a getUser call, if we dispatch 2, one after another
    // if the first request is not done, then we would simply cancel the first one and 
    // take the latest 


}