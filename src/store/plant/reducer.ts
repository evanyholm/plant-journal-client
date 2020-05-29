import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { Plant } from '../../modules/plant/types'
import { ping, pong, receivePlant, receivePlants } from './actions'

const initialState = { plants: [] as Plant[] }

const plantReducer = createReducer(initialState, builder => {
  builder
    .addCase(receivePlants, (state, action: PayloadAction<Plant[]>) => ({
      ...state,
      plants: action.payload,
    }))
    .addCase(receivePlant, (state, action) => ({
      ...state,
      plants: [...state.plants, action.payload],
    }))
    .addCase(ping, state => {
      console.log('ping')
    })
    .addCase(pong, (state, action) => {
      console.log('pong', action.payload)
    })
})

export { plantReducer }
