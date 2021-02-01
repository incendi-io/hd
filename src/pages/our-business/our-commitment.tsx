import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

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
            {/*TODO: in order to make Breadcrumb component we need to be able to fetch routes info, so either need to create some routes list file, or just use some routes plugin like https://www.gatsbyjs.com/plugins/gatsby-plugin-dynamic-routes/ which have configuration in separate file already*/}
            <Col md={{ span: 10, offset: 1 }} className="component navigation-title initialized">
              <div className="component-content">
                <Breadcrumb className={`${styles.breadcrump} ml-n2`}>
                  <Breadcrumb.Item href="/">
                    <FontAwesomeIcon icon={faHome} title={'Home'} className={styles.homeIcon} />
                  </Breadcrumb.Item>
                  <FontAwesomeIcon icon={faChevronRight} className={styles.separator} />
                  <Breadcrumb.Item href="/our-business">Our Business</Breadcrumb.Item>
                  <FontAwesomeIcon icon={faChevronRight} className={styles.separator} />
                  <Breadcrumb.Item href="/our-business/our-commitment">
                    Our Commitment
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
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
