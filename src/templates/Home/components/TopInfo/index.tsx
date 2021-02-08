import classNames from 'classnames'
import React, { FC, ReactElement } from 'react'
import Button from 'react-bootstrap/cjs/Button'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import styles from './TopInfo.module.scss'

const TopInfo: FC<unknown> = (): ReactElement => (
  <div className="row-splitter force-shadow">
    <Row className="container">
      <Col className="pt-2 px-2 pb-0" md={8}>
        <div className={classNames(styles.left, styles.textShadow, 'row-splitter is-bg-img h-100')}>
          <div className="container rich-text">
            <h1 className="h4 text-white p-0 p-1 pt-0">Cat Equipment</h1>
            <Col md={8} className="rich-text p-1 mb-5 p-0">
              <p className="h6 text-white">
                Hastings Deering is the official Cat® equipment supplier in Queensland, Northern
                Territory, Papua New Guinea, the Solomon Islands and New Caledonia. We sell a full
                range of Cat equipment, including mining, construction, demolition, and earth moving
                equipment. We also offer Cat rental.tsx equipment, Cat spare parts and customer
                support.
              </p>
              <p className="h6 text-white mt-2">
                Our skilled and diverse team works with customers across a range of industries,
                including mining, construction, power systems, government, primary industries and
                marine.
              </p>
            </Col>
            <div className="mt-5">
              <Button variant="outline-light" className="mt-2 mx-1 text-white" href="/products/new">
                NEW EQUIPMENT
              </Button>
              <Button
                variant="outline-light"
                className="mt-2 mx-1 text-white"
                href="/products/catused">
                USED MACHINERY
              </Button>
              <Button
                variant="outline-light"
                className="mt-2 mx-1 text-white"
                href="/products/rental.tsx">
                CAT RENTAL
              </Button>
            </div>
          </div>
        </div>
      </Col>
      <Col md={4} className="mt-2 p-0 bg-white">
        <div className="image">
          <a href="/">
            <img src="/images/236d-carousel-11.jpg" alt="" />
          </a>
        </div>
        <div className="rich-text col-12 p-4">
          <h4 className="mb-0">Want max value across a range of solutions?</h4>
          <Row className="mt-3 pt-2">
            <Button
              variant="outline-dark"
              block
              className="border-dark mt-2 mx-1"
              href="/buying/current-promotions">
              VIEW CURRENT PROMOTIONS
            </Button>
          </Row>
        </div>
      </Col>
    </Row>
  </div>
)

export default TopInfo
