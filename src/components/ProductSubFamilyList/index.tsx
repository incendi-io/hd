import React, { FC } from 'react'

import ProductSubFamilyCard from '../ProductSubFamilyCard'
import { SubFamilyProduct } from '~templates/ProductFamily'

type Props = {
  items: SubFamilyProduct[]
}

const ProductSubFamilyList: FC<Props> = ({ items = [] }): React.ReactElement => {
  return (
    <div>
      {items.map((product) => (
        <ProductSubFamilyCard key={product.id} item={product} />
      ))}
    </div>
  )
}

export default ProductSubFamilyList
