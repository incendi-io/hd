import React from 'react'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import PromoCard from '~components/PromoCard'
import PromoImage from '~components/PromoImage'

const EnergyAndTransportPage = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage
        url="/images/engine-servicing.jpg"
        useOverlay={true}
        title="ENERGY AND TRANSPORT"
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
                    title: 'Energy and Transport',
                    url: '/owning/energy-and-transport',
                  },
                ]}
              />
            </Col>
            <Col xs={12} md={7} lg={{ span: 6, offset: 1 }} className="component rich-text">
              <div className="component-content">
                <h2>Powerful support when you need it</h2>
                <p>
                  Cat engines and power systems provide the essential energy needed to get the job
                  done. Hastings Deering will keep your power systems performing at their peak.
                </p>
                <p>
                  Offering a broad range of options for service, maintenance and parts. Our
                  unmatched service network is your advantage, whenever, wherever you need it.
                </p>
                <p>
                  With expert advice and timely quote and repair work. Specialist technicians use
                  leading technology, procedures and tools to maximise value and performance.
                </p>
                <p>Have confidence in your power keeping up with demand when it matters most.</p>
              </div>
            </Col>
            <Col xs={12} md={5} lg={4} className="component rich-text">
              <div className="component-content">
                <blockquote className="design">
                  When it comes to Cat Power Systems, you can count on our comprehensive parts and
                  support, wherever and whenever you need it.
                </blockquote>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col xs={12} lg={{ span: 10, offset: 1 }} className="component content rich-text">
              <div className="component-content">
                <h2 className="text-center">Offering a broad range of solutions</h2>
                <p className="text-center">
                  Hastings Deering offers complete support for your power systems - wherever and
                  whenever you need it.
                </p>
              </div>
            </Col>
            <PromoCard
              url="/images/power-systems-servicing.jpg"
              title="ELECTRIC POWER"
              link="/owning/energy-and-transport/power-generation"
            />
            <PromoCard
              url="/images/electric-power-support.jpg"
              title="INDUSTRIAL POWER"
              link="/owning/energy-and-transport/industrial"
            />
            <PromoCard
              url="/images/oil-and-gas-industry-support.jpg"
              title="OIL AND GAS"
              link="/owning/energy-and-transport/oil-and-gas"
            />
            <PromoCard
              url="/images/marine-power-systems-servicing.jpg"
              title="MARINE POWER SYSTEMS"
              link="/owning/cat-marine-power-systems"
              size="huge"
            />
            <PromoCard
              url="/images/cat-trucks-ct630sc_orange_1920x1000.jpg"
              title="ON HIGHWAY TRUCKS"
              link="/owning/energy-and-transport/trucks"
            />
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default EnergyAndTransportPage
