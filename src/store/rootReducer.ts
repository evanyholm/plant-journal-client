import { plantState } from '../modules/plant/slice'
import {combineReducers} from "redux"

export const reducer = combineReducers({
  plantState: plantState.reducer,
})
