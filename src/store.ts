import { Plant } from './types/plant'

const createStore = () => {
  return {
    plants: [] as Plant[],
    error: {
      message: '',
      code: 0,
    },
  }
}

export type Store = ReturnType<typeof createStore>
export default createStore
