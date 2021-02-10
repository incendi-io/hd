import React from 'react'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import PromoImage from '~components/PromoImage'

const TrainingSolutionsPage = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage
        url="/images/training_solutions_banner.jpg"
        useOverlay={true}
        title="Training Solutions"
        subTitle="OWNING"
        description="World-class training is right on your doorstep"
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
                    title: 'Training Solutions',
                    url: '/owning/training-solutions',
                  },
                ]}
              />
            </Col>
            <Col xs={12} lg={{ span: 8, offset: 2 }} className="component content rich-text">
              <div className="component-content">
                <p>
                  We have a large, dedicated and professional team in Australia and Papua New
                  Guinea; with a proven record to deliver local, national and international customer
                  training.
                </p>
                <p>
                  Our accredited and non-accredited training expertise will enhance operator,
                  technical, parts and service personnel capability, in support of the vast range of
                  Caterpillar solutions.
                </p>
                <p>
                  Our Registered Training Organisation (RTO: 31447) opened in 2007. We commenced
                  training Diesel Fitter apprentices in a state-of-the-art facility in Brisbane
                  (Acacia Ridge) in 2008. Around 600 apprentices have completed training in the last
                  five years.
                </p>
                <p>
                  Hastings Deering is an award-winning business, recognized by our peers. We have
                  won multiple training awards, in 2020 we won Large Employer of the Year Queensland
                  and were finalists at the Australian Training Awards.
                </p>
                <p>
                  Hastings Deering remains one of Australia&apos;s largest trainers of apprentice
                  Diesel Fitters, continuing our tradition of training the very best tradespeople to
                  the highest quality. Cat® specific trained technicians ensure our customers
                  receive the very best ownership experience.
                </p>
                <p>
                  For information on accredited training email: rtoquality@hastingsdeering.com.au
                </p>
              </div>
            </Col>
            <div className="component image file-type-icon-media-link col-md-8 offset-md-2">
              <div className="component-content">
                <a title="Skills Assure" href="/owning/training-solutions">
                  <img
                    src="/images/skills-assure_cmyk-with-tagline.png"
                    alt=""
                    width="300"
                    height="177"
                    className="m-0"
                  />
                </a>
                <span className="image-caption field-imagecaption"></span>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default TrainingSolutionsPage
