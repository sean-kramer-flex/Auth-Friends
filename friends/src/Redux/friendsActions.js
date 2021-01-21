import { axiosWithAuth } from "../Utils/axiosWithAuth";

export const GET_FRIENDS_REQUEST = "GET_FRIENDS_REQUEST";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE";
export const ADD_FRIEND = "ADD_FRIEND";
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
      console.log('action err: ', err);
    })
  }
}