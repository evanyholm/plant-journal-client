import { RawDraftContentState } from 'draft-js'

export type Plant = {
  id?: string
  name: string
  content: RawDraftContentState
  dates?: Dates[]
}

type Dates = {
  date: string
  dateContent: string
}
