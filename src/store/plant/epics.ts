import { Epic } from 'redux-observable'
import { filter, mapTo } from 'rxjs/operators'
import { ping, pong } from './actions'
import { ReduxState } from '../store'
import { ActionTypes } from '../../types/actions'

const pingEpic: Epic<ActionTypes, ReturnType<typeof pong>, ReduxState> = (
  action$,
  store$
) => action$.pipe(filter(ping.match), mapTo(pong('asdfadjökl')))

export { pingEpic }
