import classNames from 'classnames'
import React, { FC, ReactElement } from 'react'
import Button from 'react-bootstrap/cjs/Button'

import styles from './EqualizedItem.module.scss'

type Props = {
  title: string
  backgroundImage: string
  button: {
    link: string
    title: string
  }
}

const EqualizedItem: FC<Props> = ({ title, backgroundImage, button }): ReactElement => (
  <div className={styles.promoWithBackground}>
    <div className={styles.promoBackground}>
      <span
        className={classNames(styles.backgroundSection, styles.backgroundOverlayGrid)}
        style={{ backgroundImage: `url("${backgroundImage}")`, height: 380 }}
      />
      <span
        className={classNames(styles.backgroundOverlayGradient, styles.backgroundOverlayGrid)}
      />
    </div>
    <div className={styles.promoText}>
      <h3 className={classNames(styles.promoHeading, 'text-white')}>{title}</h3>
      <p className="promo-subheading hd-p1 field-promodescription">
        <br />
      </p>
    </div>
    <div className={styles.promoCtaSection}>
      <div className={styles.fieldPromocta}>
        <Button
          as="a"
          className={classNames(styles.fieldPromoctaA, 'text-white btn-lg mt-3')}
          variant="outline-light"
          href={button.link}>
          {button.title}
        </Button>
      </div>
    </div>
  </div>
)

export default EqualizedItem
