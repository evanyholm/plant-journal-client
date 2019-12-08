import * as action from './actions'
import { getType } from '@reduxjs/toolkit'
import { takeEvery, call, put } from 'redux-saga/effects'

const config: RequestInit = {
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrer: 'no-referrer',
}

function* apiCall(action: any) {
  const { url, method = 'GET', body, action: responseAction } = action.payload

  console.log('response')
  const init = {
    ...config,
    method,
    body: body && typeof body === 'object' ? JSON.stringify(body) : body,
  }

  const response = yield call(fetch, url, init) //todo switch to race with timeout

  if (response.ok) {
    if (response.status === 200) {
      let data = yield response.text()
      try {
        data = JSON.parse(data)
      } catch (err) {
        /* Not JSON, use text*/
      }
      console.log(data)
      if (responseAction) {
        yield put(responseAction(data))
      }
    } else {
      // do errorstuff
      console.log(response)
    }
  } else {
    // do errorstuff 404 not found
    console.log(response)
  }
}

export const apiSagas = [takeEvery(getType(action.call), apiCall)]
