import { takeLatest, put, call } from 'redux-saga/effects'
import { getType } from '@reduxjs/toolkit'
import * as action from './slice'
import { receivePlants } from './slice'
import { apiAgent } from '../../services/api/apiService'

function* fetchPlants() {
  try {
    const plants = yield call(() =>
      apiAgent.get('api/plants').then(response => response.data)
    )
    yield put(receivePlants(plants))
  } catch (e) {
    console.log(e)
  }
}

export const plantSagas = [takeLatest(getType(action.fetchPlants), fetchPlants)]
