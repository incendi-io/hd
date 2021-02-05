import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Accordion, Button, Card, Form, useAccordionToggle } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import styles from '~components/PromoCard/PromoCard.module.scss'
import PromoImage from '~components/PromoImage'

const contactList = [
  {
    title: 'Queensland Business Centres',
    list: [
      `ACACIA RIDGE - Hastings Deering Cat Equipment Sales Acacia Ridge, 1123 Beaudesert Road, QLD,`,
      `ARCHERFIELD - Hastings Deering Cat Head Office, 98 Kerry Road, QLD,`,
      `BRISBANE - The Cat Rental Store and Used Equipment, 454 Boundary Rd, Richlands, QLD,`,
      `BRISBANE - Hastings Deering Institute of Technology, 60 Bellrick Street, QLD,`,
      `BRISBANE - Hastings Deering Cat Technology, Gate A, 1141 Beaudesert Road, Acacia Ridge, QLD,`,
      `BRISBANE - Hastings Deering Cat Truck Parts Store, Gate B, 1123 Beaudesert Road, Acacia Ridge, QLD,`,
      `CABOOLTURE - Hastings Deering and The Cat Rental Store, 22 Lear Jet Drive, QLD,`,
      `CAIRNS -  Hastings Deering Cairns, 101 Kenny St, QLD,`,
      `CAIRNS -  The Cat Rental Store, 101 Kenny St, QLD,`,
      `EMERALD - Hastings Deering Emerald, Macaulay Road,  QLD,`,
      `GLADSTONE - Hastings Deering and The Cat Rental Store, 6 Blain Dr, QLD,`,
      `GOLD COAST - 25 Township Dr, Burleigh Heads, QLD,`,
      `MACKAY - Hastings Deering Component Rebuild Centre, 111 Connors Rd, QLD,`,
      `MACKAY - Hastings Deering Expanded Mining Products (EMP), 14 Commercial Ave, QLD,`,
      `MACKAY - Hastings Deering Cat Truck Centre, 1 Caterpillar Dr, QLD,`,
      `MOUNT ISA -  Hastings Deering and The Cat Rental Store, Kalkadoon Industrial Estate, QLD,`,
      `PAGET -  Hastings Deering Paget, 40-42 Caterpillar Drive, QLD,`,
      `PAGET -  The Cat Rental Store, 40/42 Caterpillar Drive, QLD,`,
      `ROCKHAMPTON - Hastings Deering Cat Training Centre, 197 Richardson Rd, QLD,`,
      `ROCKHAMPTON - Hastings Deering and The Cat Rental Store, 152 Port Curtis Rd, QLD,`,
      `TOOWOOMBA - Hastings Deering and The Cat Rental Store, 15-17 Carrington Rd, QLD,`,
      `TOWNSVILLE - Hastings Deering and The Cat Rental Store, 467 - 481 Woolcock St, QLD,`,
      `WEST BURLEIGH - Hastings Deering and The Cat Rental Store, 25 Township Drive, QLD,`,
    ],
  },
  {
    title: 'Northern Territory Business Centres',
    list: [
      `GOVE - Hastings Deering Gove  3 Traeger Close, Nhulunbuy NT`,
      `ALICE SPRINGS - Hastings Deering and The Cat Rental Store  13 - 15 Brown St, Alice Springs NT`,
      `DARWIN - Hastings Deering and The Cat Rental Store 25 Wishart Rd, Tivendale NT`,
    ],
  },
  {
    title: 'New Caledonia Business Centres',
    list: [`PAITA - ZICO 11 - Paita. Phone (0011) 687 43 81 81`],
  },
  {
    title: 'Papua New Guinea Business Centres',
    list: [
      `TABUBIL - Hastings Deering, Kissan Road Tabubil, Western Provence. Phone +675 649 9045`,
      `LAE - Milford Haven Rd, Morobe Province. Phone + 675 472 2355`,
      `PORT MORESBY - Spring Garden Road, Hohola. Phone +675 300 8300`,
      `KIMBE - Robos Street, Kimbe. Phone +675 983 5144`,
      `KOKOPO - Litua Street. Phone +675 7998 6910`,
      `BOROKO - P.O Box 6308 Boroko. Phone +675 986 4105`,
    ],
  },
  {
    title: 'Solomon Islands Business Centres',
    list: [`HONIARA - Kukum Estate, Industrial Avenue, Ranadi. Phone (0011) 677 30 274`],
  },
]

type CustomToggleProps = {
  children: any
  eventKey: string
  expanded: boolean
  onClick: any
}

function CustomToggle({ children, eventKey, expanded, onClick }: CustomToggleProps) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => onClick(eventKey))

  return (
    <Button
      as={Card.Header}
      type="button"
      variant={'outline-dark'}
      className="w-100 text-left"
      onClick={decoratedOnClick}>
      {!expanded && <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />}
      {expanded && <FontAwesomeIcon icon={faMinusSquare} className="mr-2" />}
      {children}
    </Button>
  )
}

const ContactUsPage = (): React.ReactElement => {
  const [expanded, setExpanded] = useState(
    contactList.reduce((acc, item, i) => ({ ...acc, [i]: false }), {})
  )
  //console.log(expanded)
  return (
    <Layout>
      <PromoImage
        url="/images/hd-service-vehicle_1920x1080.jpg"
        useOverlay={true}
        title="Contact Us"
      />
      <div />
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} className="component navigation-title initialized">
              <Breadcrumbs
                list={[
                  {
                    title: 'Our Business',
                    url: '/our-business',
                  },
                  {
                    title: 'Contact Us',
                    url: '/our-business/contact-us',
                  },
                ]}
              />
            </Col>
            <Col xs={12} md={6} className="component">
              <div className="component-content">
                <h3>Find Us</h3>
              </div>
            </Col>
            <Col xs={12} md={6} className="component mb-5">
              <div className="component-content">
                <h3 className="d-none d-md-block mb-4">Contact Us</h3>
                <h4 className="d-none d-md-block">&nbsp;Required details *</h4>
              </div>
            </Col>
            <Col xs={12} md={6} className="component">
              <div className="component-content">
                <img src="/images/mock/map.png" alt="map" style={{ width: 467, height: 600 }} />
              </div>
            </Col>
            <Col xs={12} md={6} className="component">
              <div className="component-content sitecore-form">
                <Form>
                  <Form.Group controlId="formGroupEmail">
                    <Row>
                      <Col>
                        <Form.Control className="mb-4" placeholder="Full name *" />
                      </Col>
                      <Col>
                        <Form.Control className="mb-4" placeholder="Email *" />
                      </Col>
                      <Col>
                        <Form.Control className="mb-4" placeholder="Phone *" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control className="mb-4" placeholder="Postcode *" />
                      </Col>
                      <Col>
                        <Form.Control className="mb-4" placeholder="City" />
                      </Col>
                      <Col>
                        <Form.Control className="mb-4" placeholder="Company Name *" />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-4">
                        <p>This enquiry is for:*</p>
                        {['New', 'Used', 'Rental', 'Careers', 'Account'].map((type, index) => (
                          <Form.Check
                            key={index}
                            inline
                            label={type}
                            type="radio"
                            id={`radio-${index}`}
                          />
                        ))}
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-4">
                        <Form.Control placeholder="In a few words, what is your enquiry about?" />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-4">
                        <Form.Control placeholder="You can provide any further details for your enquiry here" />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-4">
                        <Form.Check
                          type={'checkbox'}
                          label={'Yes, send me future communications'}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-4">
                        <Button
                          as={'a'}
                          size={'lg'}
                          variant={'primary'}
                          className={`${styles.promoButton} mt-3`}
                          href={'/'}>
                          CONTACT US
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mb-4">
              <Button
                as={'a'}
                size={'lg'}
                variant={'primary'}
                className={`${styles.promoButton} mt-3 text-uppercase`}
                href={'/'}>
                Updated Business Centre Hours over Christmas and New Year
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-4">
              {contactList.map((item, index) => (
                <Accordion key={index} activeKey={expanded[index] ? index.toString() : '999'}>
                  <Card>
                    <Card.Header>
                      <CustomToggle
                        eventKey={index.toString()}
                        expanded={!!expanded[index]}
                        onClick={(updated: number) =>
                          setExpanded({
                            ...expanded,
                            [index]: !expanded[index],
                          })
                        }>
                        {item.title}
                      </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={index.toString()}>
                      <Card.Body>
                        {item.list.map((addr, addrIndex) => (
                          <p key={addrIndex}>{addr}</p>
                        ))}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              ))}
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default ContactUsPage
