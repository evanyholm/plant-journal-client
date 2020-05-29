import { createReducer } from '@reduxjs/toolkit'
import { Plant } from '../../modules/plant/types'
import { ping, pong, receivePlant, receivePlants } from './actions'

const plantState = { plants: [] as Plant[] }

const plantReducer = createReducer(plantState, builder => {
  builder
    .addCase(receivePlants, (state, action) => ({
      ...state,
      plants: action.payload,
    }))
    .addCase(receivePlant, (state, action) => ({
      ...state,
      plants: [...state.plants, action.payload],
    }))
    .addCase(ping, () => {
      console.log('ping')
    })
    .addCase(pong, (state, action) => {
      console.log('pong', action.payload)
    })
})

export { plantReducer, plantState }
