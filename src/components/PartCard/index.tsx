import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

import { Part } from '~types/Part'

import styles from './PartCard.module.scss'

type Props = {
  item: Part
}

const PartCard: FC<Props> = ({ item }) => (
  <Card as="a" href={item.id} className={styles.card}>
    <div className="field-main-image mx-n3 mt-n3">
      {item.images[0] && (
        <Card.Img
          src={item.images[0]}
          //alt={item.images[0].alt}
          sizes="(max-width: 320px) 300px, (max-width: 480px) 350px, 400px"
        />
      )}
    </div>
    <div className="content-container pt-3">
      <Card.Title className={`${styles.title} title-container `}>
        <h5 className={styles.fieldTitle}>{item.name}</h5>
        {/*TODO: check if can be improved to be more semantic using Card.{Subtitle|Body|Footer}. Will it break layout?*/}
        <h5 className="normal">{item.familyName}</h5>
        <FontAwesomeIcon className={`${styles.icon} icon`} icon={faChevronRight} title={'Read'} />
      </Card.Title>
      <div className={`${styles.caption} field-productspecs-3`}>
        {/*TODO: need product info from database*/}
        <Row className="product-spec-row">
          {[
            {
              key: 'Operating Weight',
              value: '1,755kg',
            },
            {
              key: 'Power',
              value: '16.1kW (21.9hp)',
            },
            {
              key: 'Width',
              value: '990mm',
            },
          ].map((item, index) => (
            <Col key={index} className="product-spec-col-item">
              <div>
                <strong>{item.key}</strong>
              </div>
              <div>{item.value}</div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  </Card>
)

export default PartCard
