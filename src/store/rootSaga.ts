import { all } from 'redux-saga/effects'
import { plantSagas } from '../modules/plant/saga'

function* startSagas() {
  yield all([...plantSagas])
}

export default startSagas
