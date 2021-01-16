import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import Card from 'react-bootstrap/Card'

import { Image } from '~types/Image'

import styles from './ProductFamilyCard.module.scss'

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
  <Card as="a" href={item.slug} className={styles.none}>
    <Card.Title className={`${styles.title} title-container `}>
      <h5 className="field-title">{item.name}</h5>
      <FontAwesomeIcon className="icon" icon={faChevronRight} title={'Read'} />
    </Card.Title>
    <div className="field-main-image">
      <Card.Img
        src={item.image.url}
        alt={item.image.alt}
        sizes="(max-width: 320px) 300px, (max-width: 480px) 350px, 400px"
      />
    </div>
  </Card>
)

export default ProductFamilyCard
