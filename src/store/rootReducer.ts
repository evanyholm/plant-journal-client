import { plantState } from './plant/slice'
import { combineReducers } from 'redux'

// exports from createSlices
export const reducer = combineReducers({
  plantState: plantState.reducer,
})
