import { all } from 'redux-saga/effects'
import { plantSagas } from '../modules/plant/saga'
import { apiSagas } from '../services/api/saga'

function* startSagas() {
  yield all([...apiSagas, ...plantSagas])
}

export default startSagas
