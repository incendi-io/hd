import { Image, RawImage } from './Image'

export interface SubfamilyProduct {
  id: string
  name: string
  url?: string
  familyName: string
  images: Image[]
}

export interface RawSubfamilyProduct {
  id: string
  name: string
  slug?: string
  family: {
    name: string
    slug: string
  }
  images: RawImage[]
}
