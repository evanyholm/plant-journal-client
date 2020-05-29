import { takeLatest, put, call } from 'redux-saga/effects'
import { getType } from '@reduxjs/toolkit'
import * as plantActions from './slice'
import { receivePlants, receivePlant } from './slice'
import { apiAgent } from '../../services/api/apiService'
import { Plant } from '../../modules/plant/types'

function* fetchPlants() {
  try {
    const plants = yield call(() =>
      apiAgent.get('api/plants').then(response => response.data)
    )
    yield put(receivePlants(plants))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
}
function* addPlant(action: ReturnType<typeof plantActions.addPlant>) {
  try {
    const newPlant = yield call(() =>
      apiAgent
        .post<Plant>('api/plants', action.payload)
        .then(response => response.data)
    )
    yield put(receivePlant(newPlant))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
}
const plantSagas = [
  takeLatest(getType(plantActions.fetchPlants), fetchPlants),
  takeLatest(getType(plantActions.addPlant), addPlant),
]

export default plantSagas
