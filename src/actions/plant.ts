import { runInAction } from 'mobx'
import { plants } from '../mockdata'
import { Store } from '../store'

export const initPlants = (store: Store) => {
  runInAction(() => {
    store.plants = plants
  })
}
