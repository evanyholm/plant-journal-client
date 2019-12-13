import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import startSagas from './rootSaga'

const sagaMiddleWare = createSagaMiddleware()

const preloadedState: ReduxState = {
  plantState: { plants: [] },
}
const store = configureStore({
  reducer,
  middleware: [sagaMiddleWare],
  preloadedState,
})

export type ReduxState = ReturnType<typeof reducer>

sagaMiddleWare.run(startSagas)
export default store
