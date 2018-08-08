import { combineReducers } from 'redux';
import auth from './auth';
import postReducer from './postReducer';


export default combineReducers({
  auth: auth,
  posts: postReducer
});