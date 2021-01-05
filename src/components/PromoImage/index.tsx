import React, { FC } from 'react'

import styles from './PromoImage.module.css'

type Props = {
  url: string
  title?: string
  subTitle?: string
  description?: string
  useOverlay?: boolean
}

const PromoImage: FC<Props> = ({ url, title, subTitle, description, useOverlay }) => (
  <div className={styles.container}>
    <div className={styles.root} style={{ backgroundImage: `url(${url})` }}>
      {subTitle && <h3>{subTitle}</h3>}
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
    </div>
    {useOverlay && <span className={styles.overlay} />}
  </div>
)

export default PromoImage
