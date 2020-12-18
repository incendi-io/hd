import { Image, RawImage } from './Image'

export interface SubfamilyProduct {
  id: string
  name: string
  url?: string
  familyName: string
  description: string
  images: Image[]
}

export interface RawSubfamilyProduct {
  id: string
  name: string
  slug?: string
  description?: {
    raw: string
  }
  family: {
    name: string
    slug: string
  }
  images: RawImage[]
}
