import { combineReducers } from 'redux'
import { plantReducer } from './plant/reducer'

// exports from createSlices
const reducer = combineReducers({
  plantState: plantReducer,
})

export { reducer }
