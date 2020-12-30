import React, { FC, ReactElement } from 'react'
import Button from 'react-bootstrap/cjs/Button'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import styles from './TopInfo.module.css'

const TopInfo: FC<unknown> = (): ReactElement => (
  <Row>
    <Col className={styles.left}>
      <h1 className="h4 text-white">Cat Equipment</h1>
      <p className="text-white">
        Hastings Deering is the official Cat® equipment supplier in Queensland, Northern Territory,
        Papua New Guinea, the Solomon Islands and New Caledonia. We sell a full range of Cat
        equipment, including mining, construction, demolition, and earth moving equipment. We also
        offer Cat rental.tsx equipment, Cat spare parts and customer support.
      </p>
      <p className="text-white">
        Our skilled and diverse team works with customers across a range of industries, including
        mining, construction, power systems, government, primary industries and marine.
      </p>
      <div>
        <Button variant="outline-light" href="/products/new">
          NEW EQUIPMENT
        </Button>
        <Button variant="outline-light" href="/products/catused">
          USED MACHINERY
        </Button>
        <Button variant="outline-light" href="/products/rental.tsx">
          CAT RENTAL
        </Button>
      </div>
    </Col>
    <Col>
      <div>
        <img src="/images/236d-carousel-11.jpg" alt="" />
      </div>
      <div>
        <h4>Want max value across a range of solutions?</h4>
        <Button variant="outline-dark" href="/buying/current-promotions">
          VIEW CURRENT PROMOTIONS
        </Button>
      </div>
    </Col>
  </Row>
)

export default TopInfo
