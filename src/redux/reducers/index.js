import home from './home';
import {combineReducers} from 'redux';
import user from './user';

export default combineReducers({
    home,
    user
})