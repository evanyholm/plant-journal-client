type Image = {
  id?: number
  url: string
  meta: string
}

export type Plant = {
  id?: string
  name: string
  content: string
  images: Image[]
}

type Dates = {
  date: string
  dateContent: string
}
