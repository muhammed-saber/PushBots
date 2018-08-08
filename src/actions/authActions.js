import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}



export function login(data) {
  return dispatch => {
    return axios.post('https://testing.pushbots.com/api/auth/login', data).then(res => {
    /*  console.log(res)
      localStorage.setItem('jwtToken', res.data.access_token);*/
    if (!localStorage.getItem("jwtToken")) { 
    const token = res.data.access_token;
    console.log(token);
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(token));
       }
    });
  }
}
