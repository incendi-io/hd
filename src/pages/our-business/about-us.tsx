import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Breadcrumb, Button } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'
import YouTube from 'react-youtube'

import Layout from '~components/Layout'
import PromoImage from '~components/PromoImage'

import styles from './AboutUs.module.scss'

const OurBusinessPage = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage
        url="/images/about-us-1920x1080.jpg"
        useOverlay={true}
        title="About Us"
        subTitle="OUR BUSINESS"
      />
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            {/*TODO: in order to make Breadcrumb component we need to be able to fetch routes info, so either need to create some routes list file, or just use some routes plugin like https://www.gatsbyjs.com/plugins/gatsby-plugin-dynamic-routes/ which have configuration in separate file already*/}
            <Col
              xs={12}
              lg={{ span: 8, offset: 2 }}
              className="component navigation-title initialized">
              <div className="component-content">
                <Breadcrumb className={styles.breadcrump}>
                  <Breadcrumb.Item href="/">
                    <FontAwesomeIcon icon={faHome} title={'Home'} className={styles.homeIcon} />
                  </Breadcrumb.Item>
                  <FontAwesomeIcon icon={faChevronRight} className={styles.separator} />
                  <Breadcrumb.Item href="/our-business">Our Business</Breadcrumb.Item>
                  <FontAwesomeIcon icon={faChevronRight} className={styles.separator} />
                  <Breadcrumb.Item href="/our-business/about-us">About Us</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col xs={12} lg={{ span: 8, offset: 2 }} className="component content rich-text">
              <div className="component-content">
                <h1>About Hastings Deering</h1>
                <h1 className="embed-responsive embed-responsive-16by9 mx-0 mt-0 mb-3">
                  <YouTube
                    videoId="knS9fjSY6aY"
                    opts={{
                      height: '440',
                      width: '630',
                    }}
                  />
                </h1>
                <p>
                  Hastings Deering sell, rent, and offer outstanding support and parts distribution
                  services for customers across a range of industries, including mining, general
                  construction, civil transport and commercial construction, power systems,
                  government, primary industries and marine.
                  <br />
                  <br />
                  We have over 3,000 employees, across 23 business service centres throughout
                  Queensland, Northern Territory, Papua New Guinea, the Solomon Islands and New
                  Caledonia, with our headquarters based in Brisbane, Australia.
                </p>
                <p>
                  <img
                    alt=""
                    className={styles.img}
                    src="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/about-hastings-deering.jpg?w=100%25&amp;rev=959b0bee476e4dda8c7094d777773df2&amp;hash=A21B1561C435ACEDFFE73D8AAF462AD1"
                  />
                  <br />
                  <br />
                  Our corporate purpose is to partner to deliver a better future and we do this
                  through partnerships with our customers, suppliers, communities, our people and
                  our shareholders. A better future is when we achieve no harm, when our customers
                  are delighted and more productive, when our shareholders achieve superior returns,
                  when our suppliers are successful and when our people are rewarded through
                  achieving their best.
                  <br />
                  <br />
                  We believe our people are our advantage. Our workforce is diverse and powerful and
                  reflects the communities in which we operate. It&apos;s our differences that make
                  us stronger and enable us to truly understand our customers.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={{ span: 4, offset: 2 }}
              lg={{ span: 4, offset: 2 }}
              className="component promo promo-with-background">
              <div className="component-content">
                <div className="promo-background">
                  <div>
                    <span
                      className={styles.backgroundSection}
                      style={{
                        backgroundImage: `url(/images/our-history_800x533.jpg)`,
                      }}
                    />
                    <span className={`${styles.backgroundSection} background-overlay`} />
                  </div>
                </div>
                <div className={styles.promoText}>
                  <h3 className="text-white field-promotitle">Our History</h3>
                  <p className="promo-subheading hd-p1 field-promodescription" />
                </div>
                <div className={styles.promoCtaSection}>
                  <div className={styles.fieldPromocta}>
                    <Button
                      as={'a'}
                      size={'lg'}
                      variant={'outline-light'}
                      className={`${styles.promoButton} text-white mt-3`}
                      href="/our-business/about-us/our-history">
                      Learn more
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} className="component promo promo-with-background">
              <div className="component-content">
                <div className="promo-background">
                  <div>
                    <span
                      className={styles.backgroundSection}
                      style={{
                        backgroundImage: `url(/images/leadership_800x533.jpg)`,
                      }}
                    />
                    <span className={`${styles.backgroundSection} background-overlay`} />
                  </div>
                </div>
                <div className={styles.promoText}>
                  <h3 className="text-white field-promotitle">Leadership</h3>
                  <p className="promo-subheading hd-p1 field-promodescription" />
                </div>
                <div className={styles.promoCtaSection}>
                  <div className={styles.fieldPromocta}>
                    <Button
                      as={'a'}
                      size={'lg'}
                      variant={'outline-light'}
                      className={`${styles.promoButton} text-white mt-3`}
                      href="/our-business/about-us/leadership">
                      Learn more
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
              className="component promo promo-with-background">
              <div className="component-content">
                <div className="promo-background">
                  <div>
                    <span
                      className={styles.backgroundSection}
                      style={{
                        backgroundImage: `url(/images/our-values-tile-1000x600.jpg)`,
                      }}
                    />
                    <span className={`${styles.backgroundSection} background-overlay`} />
                  </div>
                </div>
                <div className={styles.promoText}>
                  <h3 className="text-white field-promotitle">Our Values</h3>
                  <p className="promo-subheading hd-p1 field-promodescription" />
                </div>
                <div className={styles.promoCtaSection}>
                  <div className={styles.fieldPromocta}>
                    <Button
                      as={'a'}
                      size={'lg'}
                      variant={'outline-light'}
                      className={`${styles.promoButton} text-white mt-3`}
                      href="/our-business/about-us/our-values">
                      Learn more
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default OurBusinessPage
