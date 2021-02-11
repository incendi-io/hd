import React from 'react'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import PromoCard from '~components/PromoCard'
import PromoImage from '~components/PromoImage'

const CatMarinePowerSystemsPage = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage
        url="/images/hydraulic-mining-shovels-6030.jpg"
        useOverlay={true}
        title="Current Promotions"
        subTitle="BUYING"
        description="Want Max value across a range of machinery, Parts, Service and technology?"
      />
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col xs={12} className="component navigation-title initialized">
              <Breadcrumbs
                list={[
                  {
                    title: 'Buying',
                    url: '/buying',
                  },
                  {
                    title: 'Current Promotions',
                    url: '/buying/current-promotions',
                  },
                ]}
              />
            </Col>
          </Row>
        </div>
        <div className="container m-2">
          <Row>
            <PromoCard
              url="/images/3055-9.jpg"
              title="15% OFF PUMPS AND MOTORS*"
              description="Keep your machines working reliably longer, and for less than you think!"
              link="/parts/0572-pump-and-motors"
              size="large"
            />
            <PromoCard
              url="/images/0567-bcp-q1-finance-promo-tile-1000x600.jpg"
              title="0% FINANCE 100% VALUE"
              description="0% FINANCE ON SELECT COMPACT CONSTRUCTION EQUIPMENT*"
              link="https://www.hastingsdeering.com.au/c/0567-finance-offer-2021"
              size="large"
            />
            <PromoCard
              url="/images/966wl-aftermarket_opt_800x533.jpg"
              title="980 REBUILD BONUS PACKAGES"
              description="0.99% FINANCE PLUS $3,000 BONUS PACK INCLUSIONS*"
              buttonText="VIEW PACKAGES"
              link="https://www.hastingsdeering.com.au/c/0483-rebuild-980-wheel-loader"
              size="large"
            />
            <PromoCard
              url="/images/cat-d3-range-skid-steer-and-compact-track-loaders.jpg"
              title="CAT® D3 RANGE"
              description="SKID STEER AND COMPACT TRACK LOADERS"
              link="https://www.hastingsdeering.com.au/c/0526-d3-ssl-ctl"
              size="large"
            />
            <PromoCard
              url="/images/new-cat-d6-and-d6xe.jpg"
              title="NEXT GENERATION D6 & D6 XE DOZERS"
              description="POWER. AGILITY. INTELLIGENCE."
              link="/products/new/dozers/d6"
              size="large"
            />
            <PromoCard
              url="/images/header-1920x500_website_banner_d11_opt.jpg"
              title="MAKING THE BEST BETTER"
              description="The all new Cat® D11"
              link="https://www.hastingsdeering.com.au/c/d11-cat-dozer"
              size="large"
            />
            <PromoCard
              url="/images/7-10t-next-gen-800x533.jpg"
              title="Next Generation Excavators"
              description="Get the most work done at the lowest cost and put more in your pocket."
              buttonText="View Range"
              link="https://www.hastingsdeering.com.au/c/next-generation-excavators"
              size="large"
            />
            <PromoCard
              url="/images/gc-range-hero-banner-1920x1080.jpg"
              title="The New GC Range"
              description="Comes with a host of benefits. Reliable technology. Low owning and operating costs. High fuel efficiency."
              buttonText="View Range"
              link="https://www.hastingsdeering.com.au/c/gc-range"
              size="large"
            />
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default CatMarinePowerSystemsPage
