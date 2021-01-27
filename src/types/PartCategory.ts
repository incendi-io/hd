import { Image } from '~types/Image'

export interface PartCategory {
  id: string
  slug: string
  title: string
  partsCount: number
  image?: Image
  shortDescription?: string
  longDescription?: string
  parent?: PartCategory
  children?: PartCategory[]
}
