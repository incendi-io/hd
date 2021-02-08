import React from 'react'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'
import YouTube from 'react-youtube'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import PromoCard from '~components/PromoCard'
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
                    title: 'About Us',
                    url: '/our-business/about-us',
                  },
                ]}
              />
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
            <PromoCard
              url="/images/our-history_800x533.jpg"
              title="Our History"
              link="/our-business/about-us/our-history"
              className="offset-lg-2 offset-md-2"
            />
            <PromoCard
              url="/images/leadership_800x533.jpg"
              title="Leadership"
              link="/our-business/about-us/leadership"
            />
            <PromoCard
              url="/images/our-values-tile-1000x600.jpg"
              title="Our Values"
              link="/our-business/about-us/our-values"
              size="big"
            />
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default OurBusinessPage
