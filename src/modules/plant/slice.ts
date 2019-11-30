import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Plant } from './types'

export const plantState = createSlice({
  name: 'plant',
  initialState: { plants: [] as Plant[] },
  reducers: {
    receivePlants: (state, action: PayloadAction<Plant[]>) => {
      state.plants = action.payload
    },
  },
})

const fetchPlants = createAction('plant/fetch_plants')
const receivePlants = plantState.actions.receivePlants
export { fetchPlants, receivePlants }
