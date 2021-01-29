import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import Card from 'react-bootstrap/Card'

import { News } from '~types/News'

import styles from './NewsCard.module.scss'

type Props = {
  item: News
}

const NewsCard: FC<Props> = ({ item }) => (
  <Card as="a" href={`/our-business/news-and-media/${item.link}`} className={styles.card}>
    <div className="field-main-image mx-n3 mt-n3">
      {item.image && (
        <Card.Img
          src={item.image.url}
          //alt={item.images[0].alt}
          sizes="(max-width: 320px) 300px, (max-width: 480px) 350px, 400px"
        />
      )}
    </div>
    <div className="content-container p-0 pt-3">
      <Card.Title className={`${styles.title} title-container `}>
        <h5 className={styles.fieldTitle}>{item.title}</h5>
        <FontAwesomeIcon
          className={`${styles.icon} icon`}
          icon={faChevronRight}
          title={'Read'}
          width={18}
        />
      </Card.Title>
      <div className={`${styles.caption} field-productspecs-3`}>{item.createAt}</div>
    </div>
  </Card>
)

export default NewsCard
