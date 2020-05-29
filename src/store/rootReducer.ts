import { combineReducers } from 'redux'
import { plantState } from './plant/slice'

// exports from createSlices
const reducer = combineReducers({
  plantState: plantState.reducer,
})

export { reducer }
