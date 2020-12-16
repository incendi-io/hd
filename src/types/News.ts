import { Image, RawImage } from '~types/Image'

export interface RawNews {
  id: string
  slug: string
  createdAt: string
  title: string
  body: {
    references: {
      file: {
        url: string
      }
      title: string
      description: string
      createdAt: string
    }
    raw: string
  }
  images: RawImage
}

export interface News {
  id: string
  link: string
  title: string
  createAt: string
  image: Image
}
