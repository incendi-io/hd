import React, { FC } from 'react'

import { CustomSlider } from '~components/CustomSlider'
import { SubfamilyProduct } from '~types/SubfamilyProduct'

import ProductSubFamilyCard from '../ProductSubFamilyCard'
import styles from './ProductSubFamilyList.module.scss'

type Props = {
  items: SubfamilyProduct[]
}

const ProductSubFamilyList: FC<Props> = ({ items = [] }): React.ReactElement => {
  return (
    <div className="border-bottom border-light mt-3">
      <CustomSlider>
        {items.map((product, i) => (
          <div key={i} className={styles.productListItem}>
            <ProductSubFamilyCard key={product.id} item={product} />
          </div>
        ))}
      </CustomSlider>
    </div>
  )
}

export default ProductSubFamilyList
