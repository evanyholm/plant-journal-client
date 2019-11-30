import { runInAction } from 'mobx'
import { Store } from '../store'
import { api } from '../utlis/api'

const fetchPlants = () => {
  return api.get('/api/plants')
}

export const initPlants = (store: Store) => {
  fetchPlants().then(result => {
    if (result.ok) {
      result.json().then(data => {
        runInAction(() => {
          store.plants = data
        })
      })
    } else {
      runInAction(() => {
        store.error = {
          message: result.statusText,
          code: result.status,
        }
      })
    }
  })
}
