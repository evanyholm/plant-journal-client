import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './rootReducer'
import { ReduxState } from './types'
import createSagaMiddleware from 'redux-saga'
import {plantSaga} from "../modules/plant/saga"

const sagaMiddleWare = createSagaMiddleware()

const preloadedState: ReduxState = {
  plantState: { plants: [] },
}
const store = configureStore({
  reducer,
  middleware: [sagaMiddleWare],
  preloadedState,
})

sagaMiddleWare.run(plantSaga) // todo use rootSaga
export default store
