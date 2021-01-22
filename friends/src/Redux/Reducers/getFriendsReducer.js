import { GET_FRIENDS_REQUEST, GET_FRIENDS_SUCCESS, GET_FRIENDS_FAILURE, ADD_FRIEND_REQUEST, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAILURE } from '../Actions/getFriendsActions'

// const GET_FRIENDS = "GET_FRIENDS";
// const ADD_FRIEND = "ADD_FRIEND";
const EDIT_FRIEND = "EDIT_FRIEND";
const DELETE_FRIEND = "DELETE_FRIEND";



const initialState = {
  loading: false,
  friends: [],
  error: ''
};

export const getFriendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS_REQUEST:
      return {
        ...state,
        loading: true
      };
      case GET_FRIENDS_SUCCESS:
        return {
          ...state,
          loading:false,
          friends: action.payload,
        };
    case GET_FRIENDS_FAILURE:
      return {
        ...state,
        loading: false,
        friends: [],
        error: action.payload
      };
    // case ADD_FRIEND_REQUEST:
    //   return {
    //     ...state,
    //     loading: true
    //   };
    //   case ADD_FRIEND_SUCCESS:
    //     return {
    //       ...state,
    //       friends: [
    //         ...state.friends, action.payload
    //       ]
    //     };
    //     case ADD_FRIEND_FAILURE:
    //       return {
    //         ...state,
    //         loading: false,
    //         error: action.payload
    //       };
    case EDIT_FRIEND:
      return {
        ...state,
        friends: action.payload,
      };
    case DELETE_FRIEND:
      return {
        ...state,
        friends: action.payload,
      };
    default:
      return state;
  }
};

// export default getFriendsReducer;
