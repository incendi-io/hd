import { Image, RawImage } from '~types/Image'

export interface RawFamilyProduct {
  id: string
  name: string
  slug?: string
  description?: {
    description: string
  }
  images?: RawImage[]
}

export interface FamilyProduct {
  id: string
  name: string
  description?: string
  url?: string
  images?: Image[]
}
