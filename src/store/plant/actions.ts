import { createAction } from '@reduxjs/toolkit'
import { Plant } from '../../modules/plant/types'

export const fetchPlants = createAction('plant/fetch_plants')
const addPlant = createAction<Plant>('plant/add_plant')
const receivePlants = createAction<Plant[]>('plant/receive_plants')
const receivePlant = createAction<Plant>('plant/receive_plant')
const ping = createAction('plant/ping')
const pong = createAction<string>('plant/pong')

export { addPlant, receivePlants, receivePlant, ping, pong }
