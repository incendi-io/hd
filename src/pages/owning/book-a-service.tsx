import React from 'react'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'
import YouTube from 'react-youtube'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import PromoCard from '~components/PromoCard'
import PromoImage from '~components/PromoImage'

import styles from './BookAService.module.scss'

const BookAServicePage = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage
        url="/images/about-us-1920x1080.jpg"
        useOverlay={true}
        title="Book A Service"
        subTitle="OWNING"
      />
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col
              xs={12}
              lg={{ span: 8, offset: 2 }}
              className="component navigation-title initialized">
              <Breadcrumbs
                list={[
                  {
                    title: 'Owning',
                    url: '/owning',
                  },
                  {
                    title: 'Book a Service',
                    url: '/owning/book-a-service',
                  },
                ]}
              />
            </Col>
            <Col xs={12} lg={{ span: 8, offset: 2 }} className="component content rich-text">
              <div className="component-content">
                <p>
                  Unexpected downtime impacts business and Hastings Deering understand this, that is
                  why we offer a broad range of flexible support options to suit individual needs.
                  When it comes to your equipment service, maintenance and repair options you can
                  rest assured your equipment will receive the highest level of care and expertise
                  by Cat trained technicians using Genuine Cat Parts.
                  <br />
                  <br />
                  Utilising the latest factory tools Hastings Deering has a wealth of knowledge and
                  direct access to the latest software and technical product information to keep
                  every Cat in perfect condition.
                </p>
              </div>
            </Col>
            <PromoCard
              url="/images/field-service-800x533.jpg"
              title="Field Service"
              link="/owning/book-a-service/field-service"
              className="offset-lg-2 offset-md-2"
            />
            <PromoCard
              url="/images/workshop-service-800x533.jpg"
              title="Workshop Service"
              link="/owning/book-a-service/workshop-service"
            />
            <PromoCard
              url="/images/undercarriage-800x533.jpg"
              title="Undercarriage Inspection Service"
              description="On-Site real time advice and recommendations including a quote to suit your underfoot conditions."
              link="/owning/book-a-service/undercarriage-inspection-service"
              className="offset-lg-2 offset-md-2"
            />
            <PromoCard
              url="/images/hydraulic-hose-van-service-800x533.jpg"
              title="Hydraulic Hose Van Service"
              link="/owning/book-a-service/hydraulic-hose-van-service"
            />
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default BookAServicePage
