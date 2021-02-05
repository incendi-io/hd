import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

import { Part } from '~types/Part'

import styles from './PartCard.module.scss'

type Props = {
  item: Part
}

const PartCard: FC<Props> = ({ item }) => (
  <Card as="a" href={`${item.slug}`} className={styles.card}>
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
        <h5 className={styles.fieldTitle}>{item.partName}</h5>
        {/*TODO: check if can be improved to be more semantic using Card.{Subtitle|Body|Footer}. Will it break layout?*/}
        <h5 className="normal">{item.shortDescription}</h5>
      </Card.Title>
      <div className={`${styles.caption} field-productspecs-3`}>
        {/*TODO: need product info from database*/}
        <Row className="product-spec-row justify-content-center align-items-center">
          <Col xs={6}>
            {/*TODO: no price in db?*/}
            <h4>$10.50</h4>
          </Col>
          <Col xs={6} className="text-right">
            <Button
              as={'button'}
              size={'lg'}
              variant={'primary'}
              className={`w-50 p-1 rounded`}
              href={'/'}>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  </Card>
)

export default PartCard
