import { FETCH_POSTS } from '../actions/types';



export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        apps: action.payload
};
default:
return state;
}
}