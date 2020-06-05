import {
  ActionCreatorWithoutPayload,
  ActionCreatorWithPayload,
} from '@reduxjs/toolkit'
import * as plantActions from '../store/plant/actions'

const combineActions = { ...plantActions }

type AnyAction = (
  payload: any
) =>
  | ReturnType<ActionCreatorWithoutPayload>
  | ReturnType<ActionCreatorWithPayload<any>>
type ActionsUnion<A extends Record<string, AnyAction>> = ReturnType<A[keyof A]>

export type ActionTypes = ActionsUnion<typeof combineActions>
