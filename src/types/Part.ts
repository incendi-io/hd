export interface RawPart {
  part: Part
}

export interface Part {
  id: string
  slug: string
  partName: string
  partNumber: string
  brand: string
  shortDescription: string
  longDescription: string
  category: string
  subCategory: string
  images: string[]
}
