import React, { FC, ReactElement } from 'react'
import Col from 'react-bootstrap/cjs/Col'
import FormGroup from 'react-bootstrap/cjs/FormGroup'
import Nav from 'react-bootstrap/cjs/Nav'
import Row from 'react-bootstrap/cjs/Row'
import Tab from 'react-bootstrap/cjs/Tab'

import Layout from '~components/Layout'
import PromoImage from '~components/PromoImage'

import HydraulicHoseTick from '../../../static/images/hydraulic-hose-tick.png'
import styles from './Products.module.scss'

const RentalProducts: FC<unknown> = (): ReactElement => (
  <Layout>
    <PromoImage
      url="/images/cat-rental-store-1920x1080.jpg"
      title="Cat Rental Equipment"
      subTitle="PRODUCTS"
      useOverlay
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
    <div className="component row-splitter ">
      <div className="container">
        <Row>
          <Col xs={12} className="component rich-text">
            <Tab.Container defaultActiveKey="articulated-trucks" className="component-content">
              <Row>
                <Col xs={4} lg={3} className="mr-0 px-0 py-0">
                  <Nav variant="pills" className="flex-column list-group list-group-flush">
                    {Object.entries({
                      'articulated-trucks': 'Articulated Trucks',
                      'backhoe-loaders': 'Backhoe Loaders',
                      compactors: 'Compactors',
                      dozers: 'Dozers',
                      excavators: 'Excavators',
                      'motor-graders': 'Motor Graders',
                      'skid-steer-compact-track-loaders': 'Skid Steer & Compact Track Loaders',
                      'wheel-loaders': 'Wheel Loaders',
                    }).map(([k, v]) => (
                      <Nav.Item key={k}>
                        <Nav.Link
                          className={`${styles.listGroupItem} list-group-item-action`}
                          eventKey={k}>
                          {v}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Col>
                <Col xs={8} lg={9} className="bg-muted border p-0 text-center">
                  <Tab.Content className="h-100">
                    {[
                      {
                        key: 'articulated-trucks',
                        title: 'ARTICULATED TRUCKS',
                        description:
                          'We offer a range of flexible articulated truck hire options and are always happy to tailor a solution to meet your needs. We rent the Cat 730, 740 and 745.',
                        imageUrl: '/images/articulated-trucks-788x391.jpg',
                      },
                      {
                        key: 'backhoe-loaders',
                        title: 'BACKHOE LOADERS',
                        description:
                          'We offer a range of flexible backhoe loader hire options and are always happy to tailor a solution to meet your needs. We rent the Cat 432.',
                        imageUrl: '/images/backhoe-loader-788x391.jpg',
                      },
                      {
                        key: 'compactors',
                        title: 'COMPACTORS',
                        description:
                          'We offer a range of flexible compactor hire options and are always happy to tailor a solution to meet your needs. We rent the Cat CS-56B, CS-78B, CW14, CW34, 815, 825.',
                        imageUrl: '/images/compactor-788x391.jpg',
                      },
                      {
                        key: 'dozers',
                        title: 'DOZERS',
                        description:
                          'We offer a range of flexible dozer hire options and are always happy to tailor a solution to meet your needs. We rent the Cat D6T, D7R, D8T and Cat D9T.',
                        imageUrl: '/images/dozers-788x391.jpg',
                      },
                      {
                        key: 'excavators',
                        title: 'EXCAVATORS',
                        description:
                          'We offer a range of flexible excavator hire options and are always happy to tailor a solution to meet your needs. We rent the Cat 304, 305 ,308, 311, 312, 315F, 320F, 325F, 330F, 335F, 349F.',
                        imageUrl: '/images/excavators-788x391.jpg',
                      },
                      {
                        key: 'motor-graders',
                        title: 'MOTOR GRADERS',
                        description:
                          'We offer a range of flexible motor grader truck hire options and are always happy to tailor a solution to meet your needs. We rent the Cat 12M, 14M, 16M, 140M and 160M.',
                        imageUrl: '/images/motor-graders-788x391.jpg',
                      },
                      {
                        key: 'skid-steer-compact-track-loaders',
                        title: 'SKID STEER & COMPACT TRACK LOADERS',
                        description:
                          'We offer a range of flexible skid steer and compact track loader hire options and are always happy to tailor a solution to meet your needs. We rent the Cat 226, 239, 279 and 299.',
                        imageUrl: '/images/skid-steers-788x391.jpg',
                      },
                      {
                        key: 'wheel-loaders',
                        title: 'WHEEL LOADERS',
                        description:
                          'We offer a range of flexible wheel loader hire options and are always happy to tailor a solution to meet your needs. We rent the Cat 938, 950, 962, 966, 972, 980 and 982.',
                        imageUrl: '/images/wheel-loader-788x391.jpg',
                      },
                    ].map((item) => (
                      <TabContent
                        key={item.key}
                        eventKey={item.key}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.imageUrl}
                      />
                    ))}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </div>
    </div>
    <div className="component row-splitter  container-dark-background">
      <div className=" container-dark-background container">
        <Row>
          <Col xs={12} className="component plain-html">
            <div className="component-content">
              <div className="my-4 text-center">
                <p className="h4 text-primary text-uppercase pb-0 mb-0">
                  Can&apos;t find the equipment you need?
                </p>
                <p className="text-primary pb-0 mb-0">
                  We can help you find what you are looking for.
                </p>
                <p className="h2 text-white text-uppercase display-4">
                  CALL&nbsp;
                  <a
                    href="tel:1300852962"
                    data-xa-trigger-goal="Click To Call"
                    className={`text-white ${styles.phoneNumber}`}>
                    1300-852-962
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <div className="component row-splitter">
      <Col className="container">
        <Row>
          <Col xs={12} md={{ span: 10, offset: 1 }} className="component rich-text position-center">
            <div className="component-content">
              <h2>Top 10 Benefits of Cat® Rental</h2>
            </div>
          </Col>
        </Row>
      </Col>
      <Col className="container">
        <Row>
          <Col xs={12} md={4} className="component rich-text">
            <div className="component-content">
              <div className="d-flex flex-row justify-content-start align-items-start mb-2">
                <img height="57" alt="Tested" width="57" src={HydraulicHoseTick} />
                <div>
                  <h4 className="mb-1 mt-3">No repair costs</h4>
                  <div className="small text-muted">
                    With Cat® Rental Equipment there is no need for your own workshops, helping you
                    reduce your operating and maintenance costs.
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-start mb-2">
                <img height="57" alt="Tested" width="57" src={HydraulicHoseTick} />
                <div>
                  <h4 className="mb-1 mt-3">Reduce your disposal</h4>
                  <div className="small text-muted">
                    With Cat® Rental Equipment there is no need for your own workshops, helping you
                    reduce your operating and maintenance costs.
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-start mb-2">
                <img height="57" alt="Tested" width="57" src={HydraulicHoseTick} />
                <div>
                  <h4 className="mb-1 mt-3">Flexibility to support your demand</h4>
                  <div className="small text-muted">
                    Access to quality Cat® Equipment when you need it most, to support you in those
                    unplanned and emergency situations.
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-start mb-2">
                <img height="57" alt="Tested" width="57" src={HydraulicHoseTick} />
                <div>
                  <h4 className="mb-1 mt-3">Minimise your equipment fleet</h4>
                  <div className="small text-muted">
                    Cat® Rental gives you access to the latest equipment when you need it, so you
                    don’t waste time and investment on underutilised equipment.
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <div className="component rich-text col-12 col-md-4">
            <div className="component-content">
              <div className="d-flex flex-row justify-content-start align-items-start mb-2">
                <img height="57" alt="Tested" width="57" src={HydraulicHoseTick} />
                <div>
                  <h4 className="mb-1 mt-3">The right equipment for the job</h4>
                  <div className="small text-muted">
                    Our team work with you to select the right Cat® Rental Equipment to suit your
                    project, helping you be more productive and keeping you safe.
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-start mb-2">
                <img height="57" alt="Tested" width="57" src={HydraulicHoseTick} />
                <div>
                  <h4 className="mb-1 mt-3">No need for storage</h4>
                  <div className="small text-muted">
                    With Cat® Equipment Rental you remove the need for space, releasing capital and
                    reducing your maintenance and security costs.
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-start mb-2">
                <img height="57" alt="Tested" width="57" src={HydraulicHoseTick} />
                <div>
                  <h4 className="mb-1 mt-3">Control project costs</h4>
                  <div className="small text-muted">
                    Cost your project in detail, paying for equipment when you need it and helping
                    you budget effectively, resulting in improved profitability.
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-start mb-2">
                <img height="57" alt="Tested" width="57" src={HydraulicHoseTick} />
                <div>
                  <h4 className="mb-1 mt-3">Gain access to the latest technology</h4>
                  <div className="small text-muted">
                    At Hastings Deering, we’re constantly upgrading our Cat® Rental fleet to provide
                    you access to the latest technology and newer, more efficient models.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="component rich-text col-12 col-md-4">
            <div className="component-content">
              <div className="d-flex flex-row justify-content-start align-items-start mb-2">
                <img height="57" alt="Tested" width="57" src={HydraulicHoseTick} />
                <div>
                  <h4 className="mb-1 mt-3">Improve cash flow</h4>
                  <div className="small text-muted">
                    Renting helps release capital and removed associated charges, allowing you to
                    invest in other areas of your business.
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-start align-items-start mb-2">
                <img height="57" alt="Tested" width="57" src={HydraulicHoseTick} />
                <div>
                  <h4 className="mb-1 mt-3">Try before you buy</h4>
                  <div className="small text-muted">
                    With Cat® Rental you can make sure the equipment is right for you and your
                    business. We also provide purchase options to suit you.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Col>
    </div>
  </Layout>
)

export default RentalProducts

interface TabContentProps {
  eventKey: string
  title: string
  description: string
  imageUrl: string
}
function TabContent({ eventKey, title, description, imageUrl }: TabContentProps) {
  return (
    <Tab.Pane
      eventKey={eventKey}
      className={`${styles.tabPane} h-100 p-5 fade`}
      style={{ backgroundImage: `url("${imageUrl}")` }}>
      <h3 className="text-white">{title}</h3>
      <p className="text-white">{description}</p>
    </Tab.Pane>
  )
}
