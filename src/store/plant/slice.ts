import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Plant } from '../../modules/plant/types'

export const plantState = createSlice({
  name: 'plant',
  initialState: { plants: [] as Plant[] },
  reducers: {
    receivePlants: (state, action: PayloadAction<Plant[]>) => ({
      ...state,
      plants: action.payload,
    }),
    receivePlant: (state, action: PayloadAction<Plant>) => ({
      ...state,
      plants: [...state.plants, action.payload],
    }),
    pong: (state, action: PayloadAction<string>) => {
      console.log('pong', action.payload)
      return { ...state }
    },
  },
})

const ping = createAction('plant/ping')
const fetchPlants = createAction('plant/fetch_plants')
const addPlant = createAction<Plant>('plant/add_plant')
const { receivePlants } = plantState.actions
const { receivePlant } = plantState.actions
const { pong } = plantState.actions

export { fetchPlants, receivePlants, receivePlant, addPlant, ping, pong }
