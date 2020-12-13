import Img from 'gatsby-image'
import React, { FC } from 'react'

import { Image } from '~types/Image'

type Props = {
  item: SubFamilyProduct
}

export interface SubFamilyProduct {
  id: string
  name: string
  images: Image[]
}

const ProductSubFamilyCard: FC<Props> = ({ item }) => (
  <div>
    <div>{item.name}</div>
    {item.images.map((image) => (
      <Img key={image.id} fluid={image.fluid} alt={image.alt} />
    ))}
  </div>
)

export default ProductSubFamilyCard
