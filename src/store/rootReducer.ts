import { combineReducers } from '@reduxjs/toolkit'
import { plantReducer } from './plant/reducer'

const reducer = combineReducers({
  plantState: plantReducer,
})

export { reducer }
