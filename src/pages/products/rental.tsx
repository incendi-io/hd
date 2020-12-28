import React, { FC, ReactElement } from 'react'
import Col from 'react-bootstrap/cjs/Col'
import FormGroup from 'react-bootstrap/cjs/FormGroup'
import Nav from 'react-bootstrap/cjs/Nav'
import Row from 'react-bootstrap/cjs/Row'
import Tab from 'react-bootstrap/cjs/Tab'

import Layout from '~components/Layout'
import PromoImage from '~components/PromoImage'

const RentalProducts: FC<unknown> = (): ReactElement => (
  <Layout>
    <PromoImage
      url="/images/cat-rental-store-1920x1080.jpg"
      title="Cat Rental Equipment"
      subTitle="PRODUCTS"
    />
    <Row>
      <Col>
        <h2>Big or Small, Rent it All</h2>
        <p>
          We have a broad range of Cat® Rental Equipment available for hire wherever and whenever
          you need it. With daily, weekly and long-term Cat® Machinery Rental options, on-site
          delivery, competitive rates and high-quality Cat® Equipment at the best Cat® Rental prices
          in QLD and NT — we&apos;ve got you covered! An extensive range of Cat® Rental Store
          machinery and equipment is available from Hastings Deering branches throughout Queensland
          and the Northern Territory.
        </p>

        <h2>Tailored Solutions</h2>
        <p>
          The Hastings Deering Cat® Rental team is committed to sourcing the best equipment and
          matching it to your application to achieve the highest level of productivity. Working
          together, we can tailor a rental solution to meet your unique requirements. Please view
          our standard conditions of hire here:&nbsp;
          <a
            href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/legals/hdal-standard-conditions-of-hire-august-2012.pdf?rev=12b9c184e72e44149e8ce5014f78ea72"
            title="Cat Hire Conditions">
            Hire Conditions
          </a>
        </p>
      </Col>
      <Col>
        <div>
          <h4>Want more detail?</h4>
          <p>Fill out the form to get started.</p>
        </div>
        <div>
          <form action="">
            <FormGroup>
              <input name="" placeholder="Full Name*" />
            </FormGroup>
          </form>
        </div>
      </Col>
    </Row>
    <Row>
      <Tab.Container defaultActiveKey="articulated-trucks">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="articulated-trucks">Articulated Trucks</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="backhoe-loaders">Backhoe Loaders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="compactors">Compactors</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="dozers">Dozers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="excavators">Excavators</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="motor-graders">Motor Graders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="skid-steer-compact-track-loaders">
                  Skid Steer & Compact Track Loaders
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="wheel-loaders">Wheel Loaders</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="articulated-trucks">
                <TabContent
                  title="ARTICULATED TRUCKS"
                  description="We offer a range of flexible articulated truck hire options and are always happy to tailor a solution to meet your needs. We rent the Cat 730, 740 and 745."
                  imageUrl="/images/articulated-trucks-788x391.jpg"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="backhoe-loaders">
                <TabContent
                  title="BACKHOE LOADERS"
                  description="We offer a range of flexible backhoe loader hire options and are always happy to tailor a solution to meet your needs. We rent the Cat 432."
                  imageUrl="/images/backhoe-loader-788x391.jpg"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="compactors">
                <TabContent
                  title="COMPACTORS"
                  description="We offer a range of flexible compactor hire options and are always happy to tailor a solution to meet your needs. We rent the Cat CS-56B, CS-78B, CW14, CW34, 815, 825."
                  imageUrl="/images/compactor-788x391.jpg"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="dozers">
                <TabContent
                  title="DOZERS"
                  description="We offer a range of flexible dozer hire options and are always happy to tailor a solution to meet your needs. We rent the Cat D6T, D7R, D8T and Cat D9T."
                  imageUrl="/images/dozers-788x391.jpg"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="excavators">
                <TabContent
                  title="EXCAVATORS"
                  description="We offer a range of flexible excavator hire options and are always happy to tailor a solution to meet your needs. We rent the Cat 304, 305 ,308, 311, 312, 315F, 320F, 325F, 330F, 335F, 349F."
                  imageUrl="/images/excavators-788x391.jpg"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="motor-graders">
                <TabContent
                  title="MOTOR GRADERS"
                  description="We offer a range of flexible motor grader truck hire options and are always happy to tailor a solution to meet your needs. We rent the Cat 12M, 14M, 16M, 140M and 160M."
                  imageUrl="/images/motor-graders-788x391.jpg"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="skid-steer-compact-track-loaders">
                <TabContent
                  title="SKID STEER & COMPACT TRACK LOADERS"
                  description="We offer a range of flexible skid steer and compact track loader hire options and are always happy to tailor a solution to meet your needs. We rent the Cat 226, 239, 279 and 299."
                  imageUrl="/images/skid-steers-788x391.jpg"
                />
              </Tab.Pane>
              <Tab.Pane eventKey="wheel-loaders">
                <TabContent
                  title="WHEEL LOADERS"
                  description="We offer a range of flexible wheel loader hire options and are always happy to tailor a solution to meet your needs. We rent the Cat 938, 950, 962, 966, 972, 980 and 982."
                  imageUrl="/images/wheel-loader-788x391.jpg"
                />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Row>
  </Layout>
)

export default RentalProducts

function TabContent({ title, description, imageUrl }) {
  return (
    <div style={{ backgroundImage: `url("${imageUrl}")` }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
