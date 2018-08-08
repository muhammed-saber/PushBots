import { FETCH_POSTS } from './types';
import axios from 'axios'


export const fetchPosts = () => dispatch => {
  axios.get('https://testing.pushbots.com/api/?filter=complete')
    .then(data =>
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    
    );
};