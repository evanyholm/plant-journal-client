import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { reducer } from './rootReducer'
import startSagas from './rootSaga'
import { plantState } from './plant/reducer'

const sagaMiddleWare = createSagaMiddleware()

export type ReduxState = ReturnType<typeof reducer>

const preloadedState: ReduxState = {
  plantState,
}

const store = configureStore({
  reducer,
  middleware: [sagaMiddleWare],
  preloadedState,
})


sagaMiddleWare.run(startSagas)
export { store }
