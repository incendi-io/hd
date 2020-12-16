export interface Image {
  id: string
  alt: string
  url: string
}

export interface RawImage {
  id: string
  alt: string
  file: {
    url: string
  }
}
