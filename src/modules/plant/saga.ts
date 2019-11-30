import { takeLatest, put } from 'redux-saga/effects'
import { getType } from '@reduxjs/toolkit'
import * as action from './slice'
import { plants } from '../../mockdata'

function* fetchPlants() {
  console.log('fetch')
  yield put(action.receivePlants(plants))
}

export function* plantSaga() {
  yield takeLatest(getType(action.fetchPlants), fetchPlants)
}
