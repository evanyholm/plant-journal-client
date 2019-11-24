import React from 'react'
import { observer } from 'mobx-react'
import styles from './PlantView.module.scss'
import { Plant } from '../../types/plant'
import { useParams } from 'react-router'
import { plants } from '../../mockdata'

type OwnProps = {
  plant: Plant
}
const PlantView = observer(() => {
  const { id } = useParams()
  console.log(id)
  const plant = plants.find(plant => plant.id === id)
  return <div className={styles.container}>{plant && <p>{plant.name}</p>}</div>
})

export default PlantView
