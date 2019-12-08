import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './rootReducer'
import { ReduxState } from './types'
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

sagaMiddleWare.run(startSagas)
export default store
