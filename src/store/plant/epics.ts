import { ActionsObservable, Epic, ofType } from 'redux-observable'
import { filter, mapTo } from 'rxjs/operators'
import { getType } from '@reduxjs/toolkit'
import { Action } from 'redux'
import { ping, pong } from './slice'
import { ActionTypes, ReduxState } from '../store'

const pingEpic: Epic<ActionTypes, ReturnType<typeof pong>, ReduxState> = (
  action$,
  store$
) => action$.pipe(filter(ping.match), mapTo(pong('asdfadjökl')))

export { pingEpic }
