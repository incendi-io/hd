import React, { FC } from 'react'
import Card from 'react-bootstrap/Card'

import { Image } from '~types/Image'

type Props = {
  item: FamilyProduct
}

export interface FamilyProduct {
  id: string
  name: string
  slug: string
  image: Image
}

const ProductFamilyCard: FC<Props> = ({ item }) => (
  <Card as="a" href={item.slug} style={{ width: '18rem' }}>
    <Card.Title>{item.name}</Card.Title>
    <Card.Img src={item.image.url} />
  </Card>
)

export default ProductFamilyCard
