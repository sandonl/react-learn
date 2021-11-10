import { takeLatest } from 'redux-saga/effects'; 
import { handleGetUser } from './handlers/user';
import { getUser } from '../ducks/userSlice';

export function* watcherSaga() { 
    // Where we look for any actions that have been dispatched by redux store 
    // and we map to handler functions that call the requests and make the API calls 
    yield takeLatest(getUser.type, handleGetUser);

    // takeLatest, when we dispatch a getUser call, if we dispatch 2, one after another
    // if the first request is not done, then we would simply cancel the first one and 
    // take the latest 


}