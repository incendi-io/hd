import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import PromoCard from '~components/PromoCard'
import PromoImage from '~components/PromoImage'

import styles from './AboutUs.module.scss'

const OurBusinessPage = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage
        url="/images/hastings-deering-service.jpg"
        useOverlay={true}
        title="Our Commitment"
        subTitle="OUR BUSINESS"
      />
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col md={{ span: 10, offset: 1 }} className="component navigation-title initialized">
              <Breadcrumbs
                list={[
                  {
                    title: 'Our Business',
                    url: '/our-business',
                  },
                  {
                    title: 'Our Commitment',
                    url: '/our-business/our-commitment',
                  },
                ]}
              />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={{ span: 10, offset: 1 }}
              lg={{ span: 10, offset: 1 }}
              className="component rich-text">
              <div className="component-content">
                <h1>Our Commitment</h1>
                <p>
                  Hastings Deering is committed to sustainability, flexibility and inclusion, health
                  and safety, community and our partnerships.
                </p>
                <p>Discover more below.</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="component row-splitter  container-gray-background">
        <div className=" container-gray-background container">
          <div className="row">
            <PromoCard
              url="/images/sustainability-hero-1920x1080.jpg"
              title="Sustainability"
              buttonText="Learn More"
              link="/our-business/our-commitment/sustainability"
            />
            <PromoCard
              url="/images/hastingsdeering--flexibiliy-inclusion.jpg"
              title="Flexibility & Inclusion"
              buttonText="Learn More"
              link="/our-business/our-commitment/flexibility-and-inclusion"
            />
            <PromoCard
              url="/images/heallth-and-safety-tile-800x533.jpg"
              title="Health & Safety"
              buttonText="Learn More"
              link="/our-business/our-commitment/health-and-safety"
            />
            <PromoCard
              url="/images/communities-tile-1000x600.jpg"
              title="Community"
              buttonText="Community"
              link="/our-business/our-commitment/community"
            />
            <PromoCard
              url="/images/partnerships-hero-1000x600.jpg"
              title="Partnerships"
              buttonText="Partnerships"
              link="/our-business/our-commitment/partnerships"
            />
            <PromoCard
              url="/images/hd-reconciliation.jpg"
              title="Reconciliation"
              buttonText="Learn More"
              link="/our-business/our-commitment/reconciliation"
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="component rich-text col-12 padding-all">
              <div className="component-content">
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default OurBusinessPage
