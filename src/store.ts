import { Plant } from './types/plant'

const createStore = () => {
  return {
    plants: [] as Plant[],
  }
}

export type Store = ReturnType<typeof createStore>
export default createStore
