import { plantState } from './plant/slice'
import {combineReducers} from "redux"

export const reducer = combineReducers({
  plantState: plantState.reducer,
})
