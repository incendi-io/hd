import React, { FC } from 'react'

import styles from './PromoImage.module.css'

type Props = {
  url: string
  title?: string
  subTitle?: string
  description?: string
}

const PromoImage: FC<Props> = ({ url, title, subTitle, description }) => (
  <div className={styles.root} style={{ backgroundImage: `url(${url})` }}>
    {subTitle && <div>{subTitle}</div>}
    {title && <div>{title}</div>}
    {description && <div>{description}</div>}
  </div>
)

export default PromoImage
