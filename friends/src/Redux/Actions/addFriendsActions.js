import { axiosWithAuth } from '../../Utils/axiosWithAuth'

export const ADD_FRIEND_REQUEST = "ADD_FRIEND_REQUEST";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";


export const addFriendRequest = () => {
  return {
    type: ADD_FRIEND_REQUEST
  }
}

export const addFriendSuccess = (friend) => {
  return {
    type: ADD_FRIEND_SUCCESS,
    payload: friend
  }
}

export const addFriendFailure = (error) => {
  return {
    type: ADD_FRIEND_FAILURE,
    payload: error
  }
}

export const addFriend = (friend) => {
  return function(dispatch) {
    dispatch(addFriendRequest())
    axiosWithAuth()
    .post('/api/friends', friend)
    .then(res => {
      const newFriend = res.data
      console.log('addFriend data: ', newFriend)
      dispatch(addFriendSuccess(newFriend))
    })
    .catch(err => {
      dispatch(addFriendFailure(err.message))
    })
  }
}