import React, { FC } from 'react'

import HDSlider from '~components/HDSlider'
import { SubfamilyProduct } from '~types/SubfamilyProduct'

import ProductSubFamilyCard from '../ProductSubFamilyCard'
import styles from './ProductSubFamilyList.module.scss'

type Props = {
  items: SubfamilyProduct[]
}

const ProductSubFamilyList: FC<Props> = ({ items = [] }): React.ReactElement => {
  return (
    <div className="border-bottom border-light mt-3">
      <HDSlider
        useCustomButtons
        useCustomPaging={false}
        isResponsive
        customSettings={{
          dots: false,
          infinite: false,
          autoplay: true,
          slidesToShow: 5,
          slidesToScroll: 5,
        }}>
        {items.map((product, i) => (
          <div key={i} className={styles.productListItem}>
            <ProductSubFamilyCard key={product.id} item={product} />
          </div>
        ))}
      </HDSlider>
    </div>
  )
}

export default ProductSubFamilyList
