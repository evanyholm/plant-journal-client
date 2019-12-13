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
  return <div className={styles.container}>{plant && <p>{plant.name}</p>}</div>
}
const mapStateToProps = (state: ReduxState) => ({
  plants: state.plantState.plants,
})
export default connect(mapStateToProps)(PlantView)
