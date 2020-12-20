import React, { FC, ReactElement } from 'react'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import EqualizedItem from '../EqualizedItem'

const EqualizedContent: FC<unknown> = (): ReactElement => (
  <Row>
    <Col md={4}>
      <EqualizedItem
        title="Servicing And Repair"
        backgroundImage="/images/966wl-aftermarket_opt_800x533.jpg"
        button={{ title: 'VIEW OPTIONS', link: '/owning/repair-options' }}
      />
    </Col>
    <Col md={4}>
      <EqualizedItem
        title="Technology Solutions"
        backgroundImage="/images/hastings-deering--technology-solution.jpg"
        button={{ title: 'LEARN MORE', link: '/owning/technology-solutions' }}
      />
    </Col>
    <Col md={4}>
      <EqualizedItem
        title="Technology Solutions"
        backgroundImage="/images/careers-hastings-deering.jpg"
        button={{ title: 'LEARN MORE', link: '/owning/technology-solutions' }}
      />
    </Col>
  </Row>
)

export default EqualizedContent
