import React from 'react'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Layout from '~components/Layout'
import PromoCard from '~components/PromoCard'
import PromoImage from '~components/PromoImage'

const OurBusinessPage = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage url="/images/your-advantage_1398.jpg" useOverlay={true} />
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col xs={12} md={{ span: 8, offset: 2 }} className="component rich-text">
              <div className="component-content">
                <h2>YOUR ADVANTAGE.</h2>
                <p>
                  At Hastings Deering, we not only provide the best equipment in the world, we also
                  provide expert solutions to keep our customers moving. You can rely on us to go
                  the extra mile to provide uncompromising service, wherever you are.
                </p>
                <h2>OUR TEAM</h2>
                <h4>People you know you can count on.</h4>
                <p>
                  They might be our people, but they really work for you. Hastings Deering
                  understands your industry, we know what keeps it moving and our expert teams know
                  everything about the equipment we sell.
                  <br />
                  <br />
                  Available anywhere, anytime for advice or support, our people are just one of the
                  advantages of partnering with Hastings Deering.
                </p>
                <h2>OUR KNOW-HOW</h2>
                <h4>Expert advice. Anywhere. Anytime.</h4>
                <p>
                  Our team of experts are out every day helping you get the most from your
                  investment. From basic training through to expert maintenance and maximising
                  productivity, our people know your machinery inside and out. You’ve got the best
                  gear — we’ve got the people that’ll get the best out of it.
                </p>
              </div>
            </Col>
            <Col xs={12} md={{ span: 8, offset: 2 }} className="component rich-text">
              <div className="component-content">
                <Col
                  lg={8}
                  className="plain-html order-first order-lg-last"
                  style={{ width: 900, height: 506 }}>
                  {/* TODO: add video using jwtplayer on in another way */}
                </Col>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="component row-splitter  container-gray-background">
        <div className=" container-gray-background container">
          <div className="row">
            <PromoCard
              url="/images/underground-vehicles-ad45b.jpg"
              title="Mining"
              buttonText="Learn More"
              link="/mining-solutions"
            />
            <PromoCard
              url="/images/compact-track-loaders---299d2__076.jpg"
              title="Construction"
              buttonText="Learn More"
              link="/construction/civil"
            />
            <PromoCard
              url="/images/buy-parts-hero-1920x1080.jpg"
              title="Buy Parts"
              buttonText="Learn More"
              link="/parts"
            />
            <PromoCard
              url="/images/book-a-service-hero-1920x1080.jpg"
              title="Book a Service"
              buttonText="BOOK NOW"
              link="/owning/book-a-service"
            />
            <PromoCard
              url="/images/technology-solutions-hero-1920x1080.jpg"
              title="Technology Solutions"
              buttonText="EXPLORE"
              link="/owning/technology-solutions"
            />
            <PromoCard
              url="/images/partnerships-hero-1980x1080.jpg"
              title="Our Commitment"
              buttonText="Learn More"
              link="/our-business/our-commitment"
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
