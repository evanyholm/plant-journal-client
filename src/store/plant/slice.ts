import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Plant } from '../../modules/plant/types'

export const plantState = createSlice({
  name: 'plant',
  initialState: { plants: [] as Plant[] },
  reducers: {
    receivePlants: (state, action: PayloadAction<Plant[]>) => {
      state.plants = action.payload
    },
    receivePlant: (state, action: PayloadAction<Plant>) => {
      state.plants = [ ...state.plants, action.payload ]
    },
  },
})

const fetchPlants = createAction('plant/fetch_plants')
const addPlant = createAction<Plant>('plant/add_plant')
const receivePlants = plantState.actions.receivePlants
const receivePlant = plantState.actions.receivePlant

export { fetchPlants, receivePlants, receivePlant, addPlant }
