import { combineReducers } from 'redux'
import { getFriendsReducer } from './getFriendsReducer'
import { addFriendReducer } from './addFriendReducer'

export const rootReducer = combineReducers({
  get: getFriendsReducer,
  add: addFriendReducer
})

