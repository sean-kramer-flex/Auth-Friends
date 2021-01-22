import { ADD_FRIEND_REQUEST, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAILURE } from '../Actions/addFriendsActions'

const initialState = {
  loading: false,
  friends: [],
  error: ''
}

export const addFriendReducer = (state=initialState, action) => {
switch(action.type) {
  case ADD_FRIEND_REQUEST:
    return {
      ...state,
      loading: true
    };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friends: [
          ...state.friends, action.payload
        ]
      };
      case ADD_FRIEND_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
        default:
          return state
}
}