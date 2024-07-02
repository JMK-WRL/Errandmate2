import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errandReducer from './errandReducer';

export default combineReducers({
    user: userReducer,
    errands: errandReducer,
});
