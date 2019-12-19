import React from 'react'
import styles from './PlantView.module.scss'
import { ReduxState } from '../../store/store'
import { connect } from 'react-redux'

type OwnProps = {
  plantId: string
}
type Props = OwnProps & ReturnType<typeof mapStateToProps>

const PlantView = ({ plantId, plants }: Props) => {
  const plant = plants.find(plant => plant.id === plantId)
  return (
    plant ? (
      <div className={styles.container}>
        <h1>{plant.name}</h1>
        <p>{plant.content}</p>
      </div>
    ) : <div>No plant?</div>
  )
}
const mapStateToProps = (state: ReduxState) => ({
  plants: state.plantState.plants,
})
export default connect(mapStateToProps)(PlantView)
