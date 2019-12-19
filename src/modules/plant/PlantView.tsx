import React, { useState } from 'react'
import styles from './PlantView.module.scss'
import { ReduxState } from '../../store/store'
import {connect, useDispatch, useSelector, useStore} from 'react-redux'
import { addPlant } from '../../store/plant/slice'

type OwnProps = {
  plantId: string
}
type Props = OwnProps &
  ReturnType<typeof mapStateToProps> &
  typeof dispatchToProps

const PlantView = ({ plantId, plants, addPlant }: Props) => {
  const plant = plants.find(plant => plant.id === plantId)

  const plantToAdd = {
    name: 'lolplant',
    id: 'lol',
    content: 'lolcontent',
    dates: [],
  }
  // Dispatch
  const submitPlant = () => {
    addPlant(plantToAdd)
  }

  // Get store with hooks
  const store: ReduxState = useStore().getState()
  const plants2 = store.plantState.plants

  // Yet another way
  const plants3 = useSelector((state: ReduxState) => state.plantState.plants)

  // Use dispatch with hooks
  const dispatch = useDispatch()
  dispatch(addPlant(plantToAdd))

  return plant ? (
    <div className={styles.container}>
      <h1>{plant.name}</h1>
      <p>{plant.content}</p>
    </div>
  ) : (
    <div>No plant?</div>
  )
}
const mapStateToProps = (state: ReduxState) => ({
  plants: state.plantState.plants,
})

const dispatchToProps = {
  addPlant: addPlant,
}
export default connect(mapStateToProps)(PlantView)
