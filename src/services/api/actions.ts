import { ActionCreator, createAction } from '@reduxjs/toolkit'
type Params = Record<string | number, any> | undefined
type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

type CallPayload = {
  url: string
  params?: Params
  method?: Method
  body?: any
  action?: string | ActionCreator<any>
  actionData?: any
}
export const call = createAction<CallPayload>('API_REQUEST')
