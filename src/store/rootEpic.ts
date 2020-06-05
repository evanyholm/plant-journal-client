import { combineEpics } from 'redux-observable'
import { pingEpic } from './plant/epics'

const rootEpic = combineEpics(pingEpic)

export default rootEpic
