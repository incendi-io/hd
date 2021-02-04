import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

import { PartCategory } from '~types/PartCategory'

import styles from './PartCategoryCard.module.scss'

type Props = {
  item: PartCategory
}

const PartCategoryCard: FC<Props> = ({ item }) => (
  <Card as="a" href={`/cat/${item.slug}`} className={styles.card}>
    <div className="field-main-image mx-n3 mt-n3 h-auto">
      {item.image && (
        <Card.Img
          className={`${styles.image} p-2`}
          src={item.image.url}
          sizes="(max-width: 320px) 300px, (max-width: 480px) 350px, 400px"
        />
      )}
    </div>
    <div className="content-container pt-3">
      <Card.Title className={`${styles.title} title-container d-flex justify-content-between`}>
        <h5 className={styles.fieldTitle}>{item.title}</h5>
        <h5 className={`${styles.fieldCount} normal`}>{item.partsCount}</h5>
      </Card.Title>
      <div className={`${styles.caption} field-productspecs-3`}>
        <Row className={`${styles.children} product-spec-row`}>
          {item.children &&
            item.children.slice(0, 3).map((item, index) => (
              <Col xs={12} key={index} className="d-flex justify-content-between">
                <div>
                  <strong>{item.title}</strong>
                </div>
                <div>{item.partsCount}</div>
              </Col>
            ))}
        </Row>
        <Card.Footer className={`${styles.footer} pl-0`}>
          View more
          <FontAwesomeIcon
            className={`${styles.icon} icon ml-2`}
            icon={faChevronCircleRight}
            title={'Read'}
          />
        </Card.Footer>
      </div>
    </div>
  </Card>
)

export default PartCategoryCard
