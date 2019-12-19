import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Plant } from '../../modules/plant/types'

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
const addPlant = createAction<Plant>('plant/add_plant')
const receivePlants = plantState.actions.receivePlants

export { fetchPlants, receivePlants, addPlant }
