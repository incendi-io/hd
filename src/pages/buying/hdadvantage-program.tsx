import { faChevronRight, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'
import YouTube from 'react-youtube'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import PromoImage from '~components/PromoImage'

import styles from './HDAdvantageProgram.module.scss'

export const RoleCols = () => (
  <>
    <RoleCol
      videoId="RRj1_hphdes"
      title="Executive Role"
      description="Gives you access to all data. This role is a combination of Fleet,
                Operations and Financial roles, and also includes a dashboard of the most important and
                requested graphs and indicators."
    />
    <RoleCol
      videoId="_yLkj1BUaJ8"
      title="Fleet Role"
      description="Gives you access to all your assets health and machine information, including:">
      <ul>
        <li className="text-left">Assets &amp; Fluid Analysis Reports</li>
        <li className="text-left">Total Assets</li>
        <li className="text-left">Connected Assets</li>
        <li className="text-left">Warranty Information</li>
        <li className="text-left">S.O.S Alerts℠</li>
        <li className="text-left">S.O.S Analysis Results℠</li>
      </ul>
    </RoleCol>
    <RoleCol
      videoId="RRj1_hphdes"
      title="Operations Role"
      description="Gives you access to data related to parts ordering, including:">
      <ul>
        <li>Parts Reports</li>
        <li>Open Parts Orders</li>
        <li>Parts Order History</li>
      </ul>
    </RoleCol>
    <RoleCol
      videoId="u0d4qCw3KbE"
      title="Financials Role"
      description="Gives you access to financial data, including:">
      <ul>
        <li>Financial Reports</li>
        <li>Credit Limits</li>
        <li>Open Transactions</li>
        <li>Invoice History</li>
        <li>Unpaid Invoices</li>
      </ul>
    </RoleCol>
  </>
)

const RoleCol = ({
  videoId,
  title,
  description,
  children,
}: {
  videoId: string
  title: string
  description: string
  children?: React.ReactNode
}) => (
  <Col xs={12} md={6} lg={3} className="component video order-1 initialized hide-controls">
    <div className="component-content">
      <YouTube
        videoId={videoId}
        opts={{
          height: '150vw',
          width: '100%',
        }}
      />
      <div className="video-description">
        <div className="card-deck">
          <div className="card mb-4">
            <div className="card-body">
              <h4 className="text-left mb-4">{title}</h4>
              <p className="text-left">{description}</p>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Col>
)

const HDAdvantageProgramPage = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage
        url="/images/portal-background_1920x1080.jpg"
        useOverlay={true}
        titleImage="/images/hdadvantage_logo_wht.png"
        titleImageSize={{ w: '966', h: '161' }}
        description="COMPLIMENTARY ON NEW + USED CAT CONSTRUCTION EQUIPMENT"
      />
      <div />
      <div className="component row-splitter  pt-0 container-gray-background">
        <div className=" pt-0 container-gray-background container">
          <Row>
            <Row className="component column-splitter">
              <Col
                xs={12}
                sm={12}
                md={{ span: 6, offset: 1 }}
                lg={{ span: 6, offset: 1 }}
                className="component navigation-title initialized">
                <Col>
                  <Breadcrumbs
                    list={[
                      {
                        title: 'Buying',
                        url: '/buying',
                      },
                      {
                        title: 'HDAdvantage™ Program',
                        url: '/buying/hdadvantage-program',
                      },
                    ]}
                  />
                </Col>
                <Col className="component rich-text">
                  <div className="component-content">
                    <h2>TURN YOUR DATA INTO PROFIT</h2>
                    <p>
                      HD<em>Advantage</em>™ is our new after sales service program that comes
                      standard on all new and used Cat® construction equipment. At Hastings Deering
                      we are committed to providing you with first-class service for your Cat
                      equipment with uncompromising reliability.
                    </p>
                    <p>
                      Our HD<em>Advantage</em>™ program has been designed to increase the
                      reliability and profit-making potential of your Cat equipment thanks to
                      proactive monitoring of machine maintenance and health issues throughout your
                      warranty period.
                    </p>
                    <blockquote className="highlight-all-sides">
                      <h5 className="mb-2">
                        <strong>
                          HD<em>Advantage</em>™ applies for the duration of your warranty;
                        </strong>
                      </h5>
                      <h6 className="mb-1">Used Earthmoving Machinery - 1 year</h6>
                      <h6 className="mb-1">
                        General Construction / Earthmoving Machinery - 3 years
                      </h6>
                      <h6>Building / Compact Construction Machinery - 5 years</h6>
                    </blockquote>
                  </div>
                </Col>
                <Col className="component rich-text">
                  <div className="component-content">
                    <h3 className="mt-5 mb-3">Ready to earn more from your assets?</h3>
                    <p>
                      We have the experience and expertise to help. Fill-out the form to get
                      started.
                    </p>
                  </div>
                </Col>
                <Col className="component">
                  <div className="component-content sitecore-form">
                    <Form>
                      <Form.Group controlId="formGroupEmail">
                        <Row>
                          <Col xs={6}>
                            <Form.Control className="mb-4" placeholder="Full name *" />
                          </Col>
                          <Col xs={6}>
                            <Form.Control className="mb-4" placeholder="Email *" />
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={6}>
                            <Form.Control className="mb-4" placeholder="Phone *" />
                          </Col>
                          <Col xs={6}>
                            <Form.Control className="mb-4" placeholder="Company *" />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Control
                              as="textarea"
                              className="mb-4"
                              placeholder="Have any specific questions?"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Check
                              type="checkbox"
                              label="Yes, send me future communications"
                            />
                          </Col>
                        </Row>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} className="indent-top">
                <Col
                  xs={12}
                  md={{ span: 10, offset: 1 }}
                  className="component rich-text position-center">
                  <div className="component-content">
                    <hr />
                    <h3 className="h3 text-secondary mt-4 mb-4 pt-1">
                      CONNECT ALL
                      <br />
                      YOUR ASSETS.
                    </h3>
                    <hr />
                  </div>
                </Col>
                <Col
                  xs={{ span: 12, offset: 0 }}
                  md={{ span: 10, offset: 1 }}
                  className="component rich-text indent-bottom indent-top">
                  <div className="component-content">
                    <Row className="solution-compare-snippet my-5 mx-1 w-100 mw-100 text-center">
                      <Col className="mx-0 p-0 border featured">
                        <h3 className="d-inline-block position-relative mx-auto py-2 px-3 container-dark-background text-primary plan-title">
                          HD
                          <span className="text-white">
                            <em>Advantage</em>™
                          </span>
                        </h3>
                        <div className="px-1 pb-3 pt-1">
                          <span className="display-4 font-weight-bold text-white">$295</span>
                          <span className="h5">
                            / Year<sup>*</sup>
                          </span>
                        </div>
                        <ul className="plan-features m-0 p-0 border-top text-white">
                          <li>
                            <em className="fa fa-check-circle fa-lg mr-2" />
                            Portal Access
                            <br />
                            <a className="text-white" href="/owning/your-hastings-deering">
                              your.hastingsdeering.com.au
                            </a>
                          </li>
                          <li>
                            <em className="fa fa-check-circle fa-lg mr-2" />
                            Hours
                          </li>
                          <li>
                            <em className="fa fa-check-circle fa-lg mr-2" />
                            Location
                          </li>
                          <li>
                            <em className="fa fa-check-circle fa-lg mr-2" />
                            Idle Time<sup>^</sup>
                          </li>
                          <li>
                            <em className="fa fa-check-circle fa-lg mr-2" />
                            Fuel Burn<sup>^</sup>
                          </li>
                          <li>
                            <em className="fa fa-check-circle fa-lg mr-2" />
                            Fault Codes<sup>^</sup>
                          </li>
                          <li>
                            <em className="fa fa-check-circle fa-lg mr-2" />
                            Oil Condition Monitoring
                          </li>
                          <li>
                            <em className="fa fa-check-circle fa-lg mr-2" />
                            Fault Codes<sup>^</sup> Monitoring
                          </li>
                          <li>
                            <em className="fa fa-check-circle fa-lg mr-2" />
                            PM Alerts Monitoring
                          </li>
                          <li>
                            <em className="fa fa-check-circle fa-lg mr-2" />
                            Daily Update Frequency
                          </li>
                          <li>
                            <em className="fa fa-exclamation-circle fa-lg mr-2" />
                            Optional Rapid Updates (1hr / 10min) Available<sup>^</sup>
                          </li>
                          <li>
                            <em className="fa fa-check-circle fa-lg mr-2" />
                            Complimentary Productlink hardware on new, plus certified used machinery
                            <sup>†</sup>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <div className="small mb-2 text-center h6">
                      <em>
                        <sup>^</sup>Cost and availability dependent on machine and Productlink
                        device capability. Contact us for details.
                      </em>
                    </div>
                    <div className="small mb-2 text-center h6">
                      <em>
                        <sup>†</sup>Complimentary over warranty period - terms and conditions apply.
                      </em>
                    </div>
                    <div className="small text-center h6">
                      <em>*Per asset connected excluding GST.</em>
                    </div>
                  </div>
                </Col>
              </Col>
            </Row>
          </Row>
        </div>
      </div>
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col xs={12} md={{ span: 10, offset: 1 }} className="component rich-text">
              <div className="component-content">
                <Row>
                  <Col xs={12} md={6} lg={6}>
                    <div className="card mb-4">
                      <div className="card-header bg-dark">
                        <img
                          className="mt-2 float-right"
                          alt="HDAdvantage - Connectivity"
                          src="/images/connectivity-ico.png"
                          width={48}
                          height={48}
                        />
                        <h4 className="card-title text-primary mt-2 mb-1">MACHINE CONNECTIVITY</h4>
                        <p className="h6 text-white mb-2">
                          COMPLIMENTARY ON CAT CONSTRUCTION EQUIPMENT*
                        </p>
                      </div>
                      <div className="text-hide" />
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Latest next generation{' '}
                          <strong>
                            Cat<sup>®</sup>&nbsp;Product&nbsp;Link™
                          </strong>{' '}
                          telematic hardware
                        </li>
                        <li className="list-group-item">
                          Complimentary subscription to{' '}
                          <strong>
                            <a className="font-weight-bold" href="/buying/visionlink-daily">
                              VisionLink
                            </a>
                            <sup>®#</sup> Daily
                          </strong>{' '}
                          or <strong>my.cat.com</strong>
                          <sup>^</sup> asset management systems that provide online access to your
                          machine data
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <div className="col-12 col-md-6 col-lg-6">
                    <div className="card mb-4">
                      <div className="card-header bg-dark">
                        <img
                          className="mt-2 float-right"
                          alt="HDAdvantage - Condition Monitoring"
                          src="/images/monitoring-ico.png"
                          width={48}
                          height={48}
                        />
                        <h4 className="card-title text-primary mt-2 mb-1">CONDITION MONITORING</h4>
                        <p className="h6 text-white mb-2">
                          COMPLIMENTARY ON CAT CONSTRUCTION EQUIPMENT*
                        </p>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Access to <strong>Hastings Deering team</strong> of Industry Experts who
                          will provide proactive data-driven machine insights to help you accurately
                          assess the health and maintenance requirements of your Cat connected fleet
                        </li>
                        <li className="list-group-item">
                          <strong>S•O•S Fluid Analysis</strong> gives you detailed information about
                          oil and coolant conditions, component wear and much more
                        </li>
                        <li className="list-group-item">
                          <strong>Cat® Inspect</strong> – Monitor your equipment in the palm of your
                          hand with our easy and effective inspection app that allows you to spot
                          equipment health issues on your smartphone
                        </li>
                      </ul>
                    </div>
                  </div>
                </Row>
              </div>
            </Col>
            <Col
              xs={{ span: 10, offset: 1 }}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 6, offset: 3 }}
              className="component rich-text">
              <div className="component-content">
                <hr />
                <Button
                  as="a"
                  variant="light"
                  className="hd-btn btn-block icon-left icon-download"
                  href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/buying/hdadvantage/hd-advantage-fleet-solutions.pdf?rev=7f938aa056594b0a85e53968148a8286"
                  title="HDAdvantage Program Brochure">
                  <FontAwesomeIcon icon={faDownload} width={28} className={styles.iconLeft} />
                  <span>Download Brochure</span>
                </Button>
              </div>
            </Col>
            <Col
              xs={{ span: 8, offset: 2 }}
              sm={{ span: 6, offset: 3 }}
              md={{ span: 4, offset: 4 }}
              className="component rich-text">
              <div className="component-content">
                <p className="mb-0 text-center">
                  <img
                    alt="HDAdvantage Logo"
                    className="w-100"
                    src="/images/hdadvantage_logo_blk.png"
                  />
                </p>
                <p className="h3 text-secondary mb-4 text-center">WHAT&apos;S INCLUDED &gt;&gt;</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="component row-splitter container-gray-background">
        <div className="container container-gray-background">
          <Row>
            <Col
              xs={{ span: 10, offset: 1 }}
              md={{ span: 8, offset: 2 }}
              className="component rich-text justify-content-center d-flex">
              <div className="component-content text-center">
                <h2 className="mb-0 h1">
                  <strong>YOUR HASTINGS DEERING</strong>
                </h2>
                <p className="h3 mt-0 mb-4 pt-1">ANY DEVICE, ANYWHERE, ANYTIME</p>
                <p>
                  Your online portal for fleet, operations and financial management. Access the
                  portal on any device, anywhere, anytime, to manage your assets, financial and
                  parts transaction data. With direct single sign-in access to Cat digital solutions
                  such as Parts.Cat.Com and SIS Web. Plus multiple roles are available to unlock
                  separate areas of information and give you the customised views you need.
                </p>
              </div>
            </Col>
            <RoleCols />
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default HDAdvantageProgramPage
