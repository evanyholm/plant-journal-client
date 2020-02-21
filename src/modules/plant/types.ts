import { RawDraftContentBlock } from 'draft-js'

export type Plant = {
  id?: string
  name: string
  content: string | RawDraftContentBlock[]
  dates?: Dates[]
}

type Dates = {
  date: string
  dateContent: string
}
