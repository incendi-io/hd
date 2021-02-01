import React, { FC } from 'react'
import { Button, Col } from 'react-bootstrap'

import styles from './PromoCard.module.scss'

type Props = {
  url: string
  title?: string
  buttonText?: string
  link?: string
}

const PromoCard: FC<Props> = ({ url, title, buttonText, link }) => (
  <Col xs={12} sm={12} md={6} lg={4} className="component promo promo-with-background">
    <div className="component-content">
      <div className="promo-background">
        <div>
          <span
            className={styles.backgroundSection}
            style={{
              backgroundImage: `url(${url})`,
            }}
          />
          <span className={`${styles.backgroundSection} background-overlay`} />
        </div>
      </div>
      <div className={styles.promoText}>
        <h3 className="text-white field-promotitle">{title}</h3>
        <p className="promo-subheading hd-p1 field-promodescription" />
      </div>
      <div className={styles.promoCtaSection}>
        <div className={styles.fieldPromocta}>
          <Button
            as={'a'}
            size={'lg'}
            variant={'outline-light'}
            className={`${styles.promoButton} text-white mt-3`}
            href={link}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  </Col>
)

export default PromoCard
