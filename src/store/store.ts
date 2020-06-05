import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { createEpicMiddleware } from 'redux-observable'
import { reducer } from './rootReducer'
import startSagas from './rootSaga'
import { plantState } from './plant/reducer'
import rootEpic from './rootEpic'
import { ActionTypes } from '../types/actions'

const epicMiddleware = createEpicMiddleware<
  ActionTypes,
  ActionTypes,
  ReturnType<typeof reducer>
>()
const sagaMiddleWare = createSagaMiddleware()

export type ReduxState = ReturnType<typeof reducer>

const preloadedState: ReduxState = {
  plantState,
}

const store = configureStore({
  reducer,
  middleware: [sagaMiddleWare, epicMiddleware],
  preloadedState,
})

epicMiddleware.run(rootEpic)
sagaMiddleWare.run(startSagas)
export { store }
