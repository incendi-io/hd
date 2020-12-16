import React, { FC } from 'react'
import Row from 'react-bootstrap/cjs/Row'

import { SubfamilyProduct } from '~types/SubfamilyProduct'

import ProductSubFamilyCard from '../ProductSubFamilyCard'

type Props = {
  items: SubfamilyProduct[]
}

const ProductSubFamilyList: FC<Props> = ({ items = [] }): React.ReactElement => {
  return (
    <Row>
      {items.map((product) => (
        <ProductSubFamilyCard key={product.id} item={product} />
      ))}
    </Row>
  )
}

export default ProductSubFamilyList
