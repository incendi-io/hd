import React, { FC, ReactElement } from 'react'
import Button from 'react-bootstrap/cjs/Button'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

const YourAdvantage: FC<unknown> = (): ReactElement => {
  return (
    <Row className="row-splitter bg-dark pb-0 pt-0">
      <div className="bg-dark pb-0 pt-0 container">
        <Col lg={4} className="rich-text p-0 text-white">
          <Row className="px-3 px-md-2 px-lg-0">
            <Col md={6} lg={12} className="mt-5 pl-3 pr-sm-2 pr-lg-5 ">
              <h2 className="h4 mb-3 text-white">Construction Equipment</h2>
              <p className="text-white-50 h6">
                Looking for Cat construction equipment solutions? Whether you’re in agriculture,
                civil or residential construction, forestry, landscaping, roadworks or plumbing and
                drainage, Hastings Deering offers a full range of construction, demolition and earth
                moving equipment solutions to help your business work more productively while
                keeping your workers safe.
              </p>
            </Col>
            <Col md={6} lg={12} className="mt-4 mt-md-5 mt-lg-4 pl-3 pr-sm-2 pr-lg-5">
              <h2 className="h4 mb-3 text-white">Mining Equipment</h2>
              <p className="text-white-50 h6">
                Providing a complete range of Cat mining solutions, including surface mining and
                underground mining, Hastings Deering delivers unrivalled solutions and expertise to
                keep your mining operations moving, productive and safe. Hastings Deering Cat mining
                equipment includes Off-Highway Trucks, Hydraulic Mining Shovels, Dozers and Motor
                Graders.
              </p>
            </Col>
            <Col md={12} className="px-3 mt-4 mb-5 mb-sm-5 mb-md-3 mb-lg-3">
              <Button variant="light" className="mt-2 mr-1" href="/contact-us">
                CONTACT US
              </Button>
              <Button
                variant="outline-light"
                className="mt-2 text-white bg-transparent"
                href="/our-business/contact-us">
                FIND YOUR BUSINESS CENTRE
              </Button>
            </Col>
          </Row>
        </Col>
        <Col lg={8} className="plain-html order-first order-lg-last">
          {/* TODO: add video using jwtplayer on in another way */}
        </Col>
      </div>
    </Row>
  )
}

export default YourAdvantage
