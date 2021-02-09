import React from 'react'
import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import PromoCard from '~components/PromoCard'
import PromoImage from '~components/PromoImage'

import styles from './TechnologySolutions.module.scss'

const BookAServicePage = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage
        url="/images/technology-solutions-hero-1920x1080.jpg"
        useOverlay={true}
        title="Technology Solutions"
        subTitle="OWNING"
        description="Keep your fleet moving."
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
                    title: 'Technology Solutions',
                    url: '/owning/technology-solutions',
                  },
                ]}
              />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={{ span: 4, offset: 2 }}
              lg={{ span: 4, offset: 2 }}
              className="component rich-text">
              <div className="component-content">
                <p>
                  Hastings Deering offers technology enabled solutions as an integrated part of our
                  end-to-end capability. We work with our customers to provide solutions that
                  leverage telematics for data capture, monitoring and analysis. Unplanned stoppages
                  are arguably the most significant contributor to increased risk, production loss
                  and unexpected costs. Technology allows customers to better plan for maintenance
                  using a predictive approach that is time and cost effective.
                </p>
                <p>
                  Every new Cat® machine purchased from Hastings Deering, comes with advanced
                  technology that monitors the machine’s health and can help control costs, improve
                  operations, manage people and reduce risk. This technology is also available on
                  older model machines, and even machines from other manufacturers, allowing the
                  dealer to provide a complete fleet wide solution for our customers.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={{ span: 3, offset: 1 }}
              lg={{ span: 3, offset: 1 }}
              className="component promo promo-construction-tile">
              <div className="component-content">
                <div className="field-promoimage">
                  <img
                    src="/images/hastings-deering-technology-support-desk_2.jpg"
                    alt=""
                    width="100%"
                    height="100%"
                    title="Hastings-Deering-Technology-Support-Desk_2"
                  />
                  <div className={styles.promoTextWrap}>
                    <div className={styles.promoText}>
                      <h4 className={`${styles.promoHeading} field-promotitle`}>
                        Technology Support Desk
                      </h4>
                      <p className="promo-subheading hd-p3 field-promodescription">
                        The Hastings Deering’s Technology Support Desk is your single point of
                        contact for your all Technology queries.
                      </p>
                    </div>
                    <div className="promo-cta-section">
                      <Button
                        size="lg"
                        className={`${styles.button} promo-cta-link mt-3 field-promocta`}>
                        <a href="tel:1800379858" className={styles.buttonLink}>
                          1800 379 858
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
              className="component rich-text">
              <div className="component-content">
                <h4>Mining Technology</h4>
                <p>
                  Combining safety, productivity and efficiency, is key to delivering a profitable
                  return on the people, equipment and technology investments mining operators need
                  to make. When it comes to boosting productivity, technology management combined
                  with our expert consultancy services can help reduce downtime, increase
                  reliability and profit-making potential .&nbsp; With expert support across all
                  mining operations, from drilling, blasting, loading, hauling and the management of
                  materials, we can provide a range of safety driven solutions that supports your
                  exceptional performance.
                  <br />
                  <br />
                  Cat® MineStar technology links machines in real-time to mine management staff,
                  delivering a comprehensive, integrated and scalable solution, that gives teams
                  like yours the information needed, to effectively manage industry operations of
                  any size, type or complexity. Real-time information allows you to do more than
                  just fleet management, with material tracking, equipment health monitoring and
                  even the management of autonomous equipment systems.&nbsp; With five distinctive
                  capabilities Cat® MineStar allows you to tailor technology solution best suited to
                  your operation.
                </p>
                <h4>Construction Technology</h4>
                <p>
                  In today&apos;s competitive market, we understand that you have to work more
                  efficiently than ever before. Machine technology, combined with ongoing machine
                  health advice, can help improve your productivity, minimise downtime and grow your
                  bottom line. Whether you own one machine or multiple, Hastings Deering&apos;s
                  technology takes the guesswork out of equipment management - leveraging the latest
                  generation telematics hardware and software solutions. Our expert team of machine
                  condition analysts will proactively monitor your Cat machine health to help you
                  maintain optimal machine performance, improve reliability and reduce service
                  costs.
                </p>
                <h4>Fluid Analysis</h4>
                <p>
                  <a href="https://sos.hastingsdeering.com.au/oil/">Hastings Deering laboratory</a>{' '}
                  offers a range of products and services for sampling and monitoring the condition
                  of vital fluids such as oil, coolant, fuel and filtergrams to provide visibility
                  of asset performance and health across your entire fleet. Our laboratory services
                  include:
                </p>
                <ul>
                  <li>Oil Analysis</li>
                  <li>Coolant Analysis</li>
                  <li>Diesel Fuel Analysis</li>
                  <li>Oil Sample Kits&nbsp;</li>
                </ul>
              </div>
            </Col>
            <PromoCard
              url="/images/laboratory-sample.jpg"
              title="Oil Commander"
              description="Assess and manage online your fluid analysis program results and sample interpretations provided by Hastings Deering Laboratory services."
              link="https://sos.hastingsdeering.com.au/oil/"
              className="offset-lg-2 offset-md-2"
            />
            <PromoCard
              url="/images/visionlink-unified-suite.jpg"
              title="Visionlink Unified Suite"
              description="Telematics data for better decision-making and increased profitability."
              link="https://www.myvisionlink.com/"
            />
            <PromoCard
              url="/images/industrial_bg.jpg"
              title="Document Review"
              link="https://hastingsdeering.cat.com/DSFUnbundled/login.do"
              size="big"
              buttonText="Open Application"
            />
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default BookAServicePage
