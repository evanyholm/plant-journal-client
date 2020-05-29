import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { reducer } from './rootReducer'
import startSagas from './rootSaga'
import { Plant } from '../modules/plant/types'

const sagaMiddleWare = createSagaMiddleware()

const preloadedState: ReduxState = {
  plantState: { plants: [] as Plant[] },
}
const store = configureStore({
  reducer,
  middleware: [sagaMiddleWare],
  preloadedState,
})
export type ReduxState = ReturnType<typeof reducer>

sagaMiddleWare.run(startSagas)
export { store }
