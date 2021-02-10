import React from 'react'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import PromoCard from '~components/PromoCard'
import PromoImage from '~components/PromoImage'

import styles from './CatMarinePowerSystems.module.scss'

const DescriptionCol = ({
  headerTitle,
  imageUrl,
  imageAlt,
  title,
  description,
  children,
}: {
  headerTitle: string
  imageUrl: string
  imageAlt: string
  title: string
  description: string
  children?: React.ReactNode
}) => (
  <Col xs={12} md={6} lg={3} className="component order-1 initialized">
    <div className="component-content">
      <div className="card-deck">
        <div className={`${styles.card} card mb-4`}>
          <div className={styles.cardHeader}>{headerTitle}</div>
          <div className="card-img-top text-center text-center">
            <img alt={imageAlt} src={imageUrl} className="w-100" />
          </div>
          <div className="card-body">
            <h5 className="text-left mb-4">{title}</h5>
            <p className="card-text hd-p2">{description}</p>
            {children}
          </div>
        </div>
      </div>
    </div>
  </Col>
)

const CatMarinePowerSystemsPage = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage
        url="/images/marine-power-systems-servicing.jpg"
        useOverlay={true}
        title="MARINE POWER SYSTEMS"
        subTitle="ENERGY AND TRANSPORT"
      />
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col
              xs={12}
              lg={{ span: 10, offset: 1 }}
              className="component navigation-title initialized">
              <Breadcrumbs
                list={[
                  {
                    title: 'Owning',
                    url: '/owning',
                  },
                  {
                    title: 'Marine Power Systems',
                    url: '/owning/cat-marine-power-systems',
                  },
                ]}
              />
            </Col>
            <Col xs={12} md={7} lg={{ span: 6, offset: 1 }} className="component rich-text">
              <div className="component-content">
                <h2>Flexible support for when it&apos;s needed most. You are not alone.</h2>
                <p>
                  You can count on Hastings Deering to keep your marine engines and power systems
                  performing at their peak. Our unmatched service network is your advantage,
                  whenever you need it.
                </p>
                <p>
                  Hastings Deering provides complete parts and service support for Cat marine
                  engines, generators, propulsion and auxiliary systems used in commercial
                  applications, luxury yachts and pleasure craft.
                </p>
              </div>
            </Col>
            <Col xs={12} md={5} lg={4} className="component rich-text">
              <div className="component-content">
                <blockquote className="design">
                  When it comes to marine power systems, you can count on Hastings Deering for
                  comprehensive parts and support, wherever and whenever you need it.
                </blockquote>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <PromoCard
              url="/images/marine-power-systems-servicing.jpg"
              title="COMMERCIAL MARINE"
              buttonText="COMMERCIAL MARINE"
              link="/owning/cat-marine-power-systems/commercial-marine"
              size="large"
            />
            <PromoCard
              url="/images/marine-pleasure-craft-servicing.jpg"
              title="PLEASURE CRAFT"
              buttonText="PLEASURE CRAFT"
              link="/owning/cat-marine-power-systems/pleasure-craft-marine"
              size="large"
            />
          </Row>
        </div>
      </div>
      <div className="component row-splitter container-gray-background">
        <div className="container container-gray-background">
          <Row>
            <DescriptionCol
              headerTitle="BROAD"
              imageUrl="/images/energy-and-power-systems-support.jpg"
              imageAlt="Broad options to support your marine engines"
              title="Range of Options"
              description="Broad options for service, maintenance and parts to keep your engines and generators powering."
            />
            <DescriptionCol
              headerTitle="EXPERT"
              imageUrl="/images/marine-expert-service-advice.jpg"
              imageAlt="Expert advice for your marine power systems"
              title="Advice & Repair"
              description="Expert advice and solutions to maximise value and optimise performance."
            />
            <DescriptionCol
              headerTitle="TIMELY"
              imageUrl="/images/energy-and-power-systems-3.jpg"
              imageAlt="Timely quote and repair of marine power systems"
              title="Quote & Repair"
              description="Timely quote and repair by specialist technicians using leading technology, procedures and tools."
            />
            <DescriptionCol
              headerTitle="CONFIDENCE"
              imageUrl="/images/energy-and-power-systems-support-12.jpg"
              imageAlt="Cat Power Systems Support"
              title="Peace Of Mind"
              description="Peace of mind that your engines and power systems are operating at their peak when it matters most."
            />
          </Row>
        </div>
      </div>
      <div className="component row-splitter  container-dark-background">
        <div className=" container-dark-background container">
          <div className="row">
            <div className="component plain-html col-12">
              <div className="component-content">
                <div className="my-4 text-center">
                  <p className="h4 text-primary text-uppercase pb-0 mb-0">Want more detail?</p>
                  <p className="h2 text-white text-uppercase display-4">
                    CALL&nbsp;
                    <a href="tel:131228" className={`${styles.link} text-white phone-dynamics`}>
                      131-228
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CatMarinePowerSystemsPage
