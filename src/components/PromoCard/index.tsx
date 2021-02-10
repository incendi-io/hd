import React, { FC } from 'react'
import { Button, Col } from 'react-bootstrap'

import styles from './PromoCard.module.scss'

type Props = {
  url: string
  title?: string
  description?: string
  buttonText?: string
  link?: string
  size?: 'huge' | 'large' | 'big' | 'small' | 'medium'
  className?: string
}

const PromoCard: FC<Props> = ({
  url,
  title,
  description,
  buttonText = 'Learn more',
  link,
  size = 'small',
  className = '',
}) => (
  <Col
    xs={12}
    sm={12}
    md={size === 'huge' ? 12 : size === 'small' ? 6 : size === 'large' ? 6 : { span: 8, offset: 2 }}
    lg={size === 'huge' ? 8 : size === 'small' ? 4 : size === 'large' ? 6 : { span: 8, offset: 2 }}
    className={`${className} component promo ${
      size === 'medium' ? `promo-large-tile` : `promo-with-background`
    }`}>
    {size !== 'medium' && (
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
          <h3 className={`${styles.promoHeading} text-white field-promotitle`}>{title}</h3>
          <p className={`${styles.promoSubheading} hd-p1 field-promodescription text-white`}>
            {description}
          </p>
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
    )}
    {size === 'medium' && (
      <PromoCardMedium url={url} title={title} buttonText={buttonText} link={link} />
    )}
  </Col>
)

const PromoCardMedium: FC<Props> = ({
  url,
  title,
  buttonText = 'Learn more',
  link,
  className = '',
}) => (
  <div className={styles.promoLargeTile}>
    <div className={styles.fieldPromoimage}>
      <img
        src={url}
        alt={title}
        width="800"
        height="533"
        className="m-0 w-100 h-100"
        title={title}
      />
    </div>
    <div className={styles.promoTextWrap}>
      <div className={styles.promoTextLarge}>
        <h2 className={`${styles.promoHeading} field-promotitle`}>{title}</h2>
      </div>
      <div className={styles.promoCtaSectionLarge}>
        <div className={styles.fieldPromocta}>
          <Button
            as={'a'}
            size={'lg'}
            variant={'primary'}
            className={`${styles.promoButton} mt-3`}
            href={link}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  </div>
)

export default PromoCard
