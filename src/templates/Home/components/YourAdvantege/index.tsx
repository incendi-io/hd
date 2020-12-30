import React, { FC, ReactElement } from 'react'
import Button from 'react-bootstrap/cjs/Button'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

const YourAdvantage: FC<unknown> = (): ReactElement => (
  <Row style={{ background: 'black' }}>
    <Col>
      <Row>
        <Col md={12}>
          <h2 className="h4 text-white">Construction Equipment</h2>
          <p className="text-white">
            Looking for Cat construction equipment solutions? Whether you’re in agriculture, civil
            or residential construction, forestry, landscaping, roadworks or plumbing and drainage,
            Hastings Deering offers a full range of construction, demolition and earth moving
            equipment solutions to help your business work more productively while keeping your
            workers safe.
          </p>
        </Col>
        <Col md={12}>
          <h2 className="h4 text-white">Mining Equipment</h2>
          <p className="text-white">
            Providing a complete range of Cat mining solutions, including surface mining and
            underground mining, Hastings Deering delivers unrivalled solutions and expertise to keep
            your mining operations moving, productive and safe. Hastings Deering Cat mining
            equipment includes Off-Highway Trucks, Hydraulic Mining Shovels, Dozers and Motor
            Graders.
          </p>
        </Col>
        <Col md={12}>
          <Button variant="light" href="/contact-us">
            CONTACT US
          </Button>
          <Button variant="outline-light" href="/our-business/contact-us">
            FIND YOUR BUSINESS CENTRE
          </Button>
        </Col>
      </Row>
    </Col>
    <Col></Col>
  </Row>
)

export default YourAdvantage
