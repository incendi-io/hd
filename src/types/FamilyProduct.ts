import { RawImage } from '~types/Image'

export interface RawFamilyProduct {
  id: string
  name: string
  slug: string
  family: {
    name: string
    slug: string
  }
  images: RawImage[]
}
