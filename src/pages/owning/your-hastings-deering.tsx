import React from 'react'
import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'
import YouTube from 'react-youtube'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import PromoImage from '~components/PromoImage'

import { RoleCols } from '../buying/hdadvantage-program'

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
            <RoleCols />
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
