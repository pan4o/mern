import { ADD_POST } from '../actions/types';
const initailState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initailState, action) {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.post]
      }
    default:
      return state;
  }
}
