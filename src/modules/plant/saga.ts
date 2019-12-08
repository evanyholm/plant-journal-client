import { takeLatest, put } from 'redux-saga/effects'
import { getType } from '@reduxjs/toolkit'
import * as action from './slice'
import * as api from '../../services/api/actions'
import {receivePlants} from "./slice"

function* fetchPlants() {
  console.log('fetch')
  yield put(api.call({
    url: 'api/plants',
    action: receivePlants
  }))
}

export const plantSagas = [
  takeLatest(getType(action.fetchPlants), fetchPlants)
]
