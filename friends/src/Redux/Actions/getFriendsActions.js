import { axiosWithAuth } from "../../Utils/axiosWithAuth";

export const GET_FRIENDS_REQUEST = "GET_FRIENDS_REQUEST";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE";
// export const ADD_FRIEND_REQUEST = "ADD_FRIEND_REQUEST";
// export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
// export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";
export const EDIT_FRIEND = "EDIT_FRIEND";
export const DELETE_FRIEND = "DELETE_FRIEND";

export const getFriendsRequest = () => {
  return {
    type: GET_FRIENDS_REQUEST
  }
}

export const getFriendsSuccess = (friends) => {
  return {
    type: GET_FRIENDS_SUCCESS,
    payload: friends
  }
}

export const getFriendsFailure = (error) => {
  return {
    type: GET_FRIENDS_FAILURE,
    payload: error
  }
}

export const getFriends = () => {
  return function(dispatch) {
    dispatch(getFriendsRequest())
    axiosWithAuth()
    .get("/api/friends")
    .then(res => {
      const friends = res.data
      dispatch(getFriendsSuccess(friends))
    })
    .catch(err => {
      dispatch(getFriendsFailure(err.message))
    })
  }
}


// export const addFriendRequest = () => {
//   return {
//     type: ADD_FRIEND_REQUEST
//   }
// }

// export const addFriendSuccess = (friend) => {
//   return {
//     type: ADD_FRIEND_SUCCESS,
//     payload: friend
//   }
// }

// export const addFriendFailure = (error) => {
//   return {
//     type: ADD_FRIEND_FAILURE,
//     payload: error
//   }
// }

// export const addFriend = (friend) => {
//   return function(dispatch) {
//     dispatch(addFriendRequest())
//     axiosWithAuth()
//     .post('/api/friends', friend)
//     .then(res => {
//       const newFriend = res.data
//       console.log('addFriend data: ', newFriend)
//       dispatch(addFriendSuccess(newFriend))
//     })
//     .catch(err => {
//       dispatch(addFriendFailure(err.message))
//     })
//   }
// }