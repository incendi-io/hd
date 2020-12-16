import React, { FC } from 'react'
import Card from 'react-bootstrap/cjs/Card'

import { SubfamilyProduct } from '~types/SubfamilyProduct'

type Props = {
  item: SubfamilyProduct
}

const ProductSubFamilyCard: FC<Props> = ({ item }) => (
  <Card as="a" href={item.url} style={{ width: '18rem' }}>
    <Card.Img src={item.images[0].url} />
    <Card.Title>{item.name}</Card.Title>
    <Card.Subtitle>{item.familyName}</Card.Subtitle>
  </Card>
)

export default ProductSubFamilyCard
