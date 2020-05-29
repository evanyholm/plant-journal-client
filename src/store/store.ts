import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { createEpicMiddleware } from 'redux-observable'
import { reducer } from './rootReducer'
import startSagas from './rootSaga'
import { rootEpic } from './rootEpic'
import { Plant } from '../modules/plant/types'
import { ping, pong } from './plant/slice'

export type ActionTypes = ReturnType<typeof ping> | ReturnType<typeof pong>

const epicMiddleware = createEpicMiddleware<
  ActionTypes,
  ActionTypes,
  ReturnType<typeof reducer>
>()
const sagaMiddleWare = createSagaMiddleware()

const preloadedState: ReduxState = {
  plantState: { plants: [] as Plant[] },
}
const store = configureStore({
  reducer,
  middleware: [sagaMiddleWare, epicMiddleware],
  preloadedState,
})
export type ReduxState = ReturnType<typeof reducer>

epicMiddleware.run(rootEpic)
sagaMiddleWare.run(startSagas)
export { store }
