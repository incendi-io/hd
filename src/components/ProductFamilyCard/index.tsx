import Img from 'gatsby-image'
import React, { FC } from 'react'

import { Image } from '~types/Image'

type Props = {
  item: FamilyProduct
}

export interface FamilyProduct {
  id: string
  name: string
  images: Image
}

const ProductFamilyCard: FC<Props> = ({ item }) => (
  <div>
    <div>{item.name}</div>
    <Img fluid={item.images.fluid} alt={item.images.alt} />
  </div>
)

export default ProductFamilyCard
