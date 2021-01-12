import classNames from 'classnames'
import React, { FC } from 'react'
import Card from 'react-bootstrap/cjs/Card'

import { SubfamilyProduct } from '~types/SubfamilyProduct'

import styles from './ProductSubFamilyCard.module.scss'

type Props = {
  item: SubfamilyProduct
}

const ProductSubFamilyCard: FC<Props> = ({ item }) => (
  <Card
    as="a"
    href={item.url}
    className={classNames(styles.productListCarousel__slidelink, 'w-100 d-inline-block')}>
    <div className="product-list-carousel__slide">
      <div className={styles.productListCarousel__wrapper}>
        <div className={styles.productListCarousel__slideImage}>
          <Card.Img src={item.images[0].url} />
        </div>
        <div className={styles.productListCarousel__slideTextCon}>
          <Card.Title as="h5" className="slide-title text-center">
            {item.name}
          </Card.Title>
          <Card.Subtitle as="h5" className="slide-description normal text-center">
            {item.familyName}
          </Card.Subtitle>
        </div>
      </div>
    </div>
  </Card>
)

export default ProductSubFamilyCard
