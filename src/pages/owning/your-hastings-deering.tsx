import React from 'react'
import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'
import YouTube from 'react-youtube'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import PromoImage from '~components/PromoImage'

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

const YourHastingsDeeringPage = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage
        url="/images/portal-background_1920x1080.jpg"
        useOverlay={true}
        title="Your Hastings Deering"
        subTitle="Customer Portal"
        description="your.hastingsdeering.com.au"
      />
      <div />
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} className="component navigation-title initialized">
              <Breadcrumbs
                list={[
                  {
                    title: 'Owning',
                    url: '/owning',
                  },
                  {
                    title: 'Your Hastings Deering',
                    url: '/owning/your-hastings-deering',
                  },
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8} lg={8} className="component rich-text">
              <div className="component-content">
                <h2>ACCESS YOUR PORTAL</h2>
                <p>
                  <em>your.hastingsdeering.com.au</em> is your online portal for fleet, operations
                  and financial management. Access the portal on any device, anywhere, anytime, to
                  manage your assets, financial and parts transaction data. You will also experience
                  direct access to Cat digital solutions such as Parts.Cat.Com and SIS Web with a
                  single sign-in.
                </p>
                <Button variant="primary" className="hd-btn">
                  <a
                    rel="noopener noreferrer"
                    href="https://your.hastingsdeering.com.au"
                    target="_blank">
                    ENTER PORTAL
                  </a>
                </Button>
              </div>
            </Col>
            <Col md={4} lg={4} className="component rich-text">
              <div className="component-content">
                <p className="text-center">
                  <img
                    alt="Your hastings Deering Customer Portal"
                    src="/images/customerportal.png"
                    height={200}
                  />
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="component row-splitter container-dark-background">
        <div className="container container-dark-background">
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="component navigation-title initialized justify-content-center d-flex">
              <YouTube
                videoId="zV3wX4j82Nk"
                opts={{
                  height: '356',
                  width: '635',
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="component row-splitter container-gray-background">
        <div className="container container-gray-background">
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className="component rich-text justify-content-center d-flex">
              <div className="component-content">
                <h2 className="text-center">YOUR PORTAL ROLES</h2>
                <p>
                  The portal has 4 different roles which unlock separate areas of information.
                  <br />
                  Multiple roles can be requested to give you the customised views you need.
                </p>
              </div>
            </Col>
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
          </Row>
        </div>
      </div>
      <div />
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col
              xs={12}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
              className="component rich-text position-center">
              <div className="component-content">
                <h3>CONNECTING YOUR ASSETS</h3>
                <p>
                  Put yourself in position to hear the story your machines are trying to tell you -
                  their health, utilisation, location and hours. We have the experience and
                  expertise to get you connected.
                </p>
                <Button
                  as="a"
                  variant="primary"
                  className="hd-btn d-inline-flex align-items-center"
                  href="/buying/visionlink-daily">
                  LEARN HOW
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col xs={12} className="component rich-text">
              <div className="component-content">
                <div className="my-4 text-center">
                  <p className="h4 text-secondary pb-0 mb-0">
                    Have a question about Your Hastings Deering?
                  </p>
                  <p className="h4 text-secondary text-uppercase mt-3">
                    View Our{' '}
                    <a
                      rel="noopener noreferrer"
                      href="https://support.digital-dealers.com/hc/en-us"
                      target="_blank">
                      Support Page
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default YourHastingsDeeringPage
