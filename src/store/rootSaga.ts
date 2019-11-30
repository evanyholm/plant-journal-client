import { fork } from 'redux-saga/effects'
import { plantSaga } from '../modules/plant/saga'

function startSagas(...sagas: any) {
  return function* rootSaga() {
    yield sagas.map((saga: any) => fork(saga))
  }
}

export default startSagas(plantSaga)
