import React, { FC } from 'react'
import { Col } from 'react-bootstrap'

import styles from './PromoImage.module.scss'

type Props = {
  url: string
  title?: string
  subTitle?: string
  titleImage?: string
  titleImageSize?: {
    w: string
    h: string
  }
  description?: string
  useOverlay?: boolean
}

const PromoImage: FC<Props> = ({
  url,
  title,
  subTitle,
  titleImage,
  titleImageSize,
  description,
  useOverlay,
}) => (
  <Col
    xs={12}
    className={`${styles.container} component promo promo-hero promo-hero-with-description`}>
    <div className="component-content position-relative">
      <div className={styles.promoBackground}>
        <span className={styles.backgroundSection} style={{ backgroundImage: `url(${url})` }} />
        {useOverlay && <span className={styles.overlay} />}
      </div>
      <div className={`${styles.containerSmall} container overflow-auto`}>
        <div className={`${styles.promoText} offset-md-1`}>
          {subTitle && <h3 className={styles.promoTextH3}>{subTitle}</h3>}
          {titleImage && (
            <div className={`${styles.promoTitleImage} field-promotitleimage mb-3`}>
              <img
                src={titleImage}
                alt={title}
                width={titleImageSize?.w}
                height={titleImageSize?.h}
              />
            </div>
          )}
          {title && <h1 className={styles.promoHeading}>{title}</h1>}
          {description && <p className={styles.promoTextP}>{description}</p>}
        </div>
      </div>
    </div>
  </Col>
)

export default PromoImage
