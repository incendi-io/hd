import React, { FC } from 'react'
import Image from 'react-bootstrap/cjs/Image'

import styles from './PromoImage.module.css'

type Props = {
  url: string
}

const PromoImage: FC<Props> = ({ url }) => (
  <div className={styles.root}>
    <Image src={url} fluid />
  </div>
)

export default PromoImage
