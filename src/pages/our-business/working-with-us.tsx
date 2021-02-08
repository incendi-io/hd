import React from 'react'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import PromoCard from '~components/PromoCard'
import PromoImage from '~components/PromoImage'

const WorkingWithUsPage = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage
        url="/images/working_with_us_banner_4.jpg"
        useOverlay={true}
        title="Working With Us"
        subTitle="OUR BUSINESS"
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
                    title: 'Our Business',
                    url: '/our-business',
                  },
                  {
                    title: 'Working With Us',
                    url: '/our-business/working-with-us',
                  },
                ]}
              />
            </Col>
            <Col xs={12} lg={{ span: 8, offset: 2 }} className="component content rich-text">
              <div className="component-content">
                <p>
                  Hastings Deering is one of the largest Caterpillar dealer networks in the world,
                  with a strong presence in the mining, construction, forestry, agricultural,
                  materials handling and government sectors. Just like the Caterpillar products we
                  sell and service, Hastings Deering is a name you can trust.
                </p>
                <p>
                  When you join our team, you join over 200,000 global Caterpillar employees, dealer
                  employees and suppliers. We believe our people are our advantage and our workforce
                  is diverse and powerful. It is our differences that make us stronger and for our
                  customers, this is <i>Your Advantage.</i>
                  <br />
                  <br />
                  We are a company that can take your career to the next level, offering diverse
                  opportunities for talented individuals to join our team.
                </p>
              </div>
            </Col>
            <PromoCard
              url="/images/job_centre_tile.jpg"
              title="Career Centre
"
              link="/our-business/working-with-us/career-centre"
              className="offset-lg-2 offset-md-2"
              buttonText="APPLY NOW"
              size="medium"
            />
            <PromoCard
              url="/images/graduate_opportunities.jpg"
              title="Graduate Opportunities"
              link="/our-business/working-with-us/graduate-opportunities"
              className="offset-lg-2 offset-md-2"
            />
            <PromoCard
              url="/images/apprentice-tile-800x533.jpg"
              title="Apprenticeship Opportunities"
              link="/our-business/working-with-us/apprenticeships"
            />
            <PromoCard
              url="/images/job_centre_tile_2.jpg"
              title="Why Hastings Deering?"
              link="/our-business/working-with-us/why-hastings-deering"
              size="big"
            />
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default WorkingWithUsPage
