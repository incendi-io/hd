import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import PromoImage from '~components/PromoImage'

import styles from './TrainingSolutions.module.scss'

const TrainingSolutionsPage = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage
        url="/images/safety-bulletins-banner.jpg"
        useOverlay={true}
        title="Safety Bulletins"
        subTitle="EQUIPMENT"
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
                    title: 'Equipment Safety Bulletins',
                    url: '/owning/safety-bulletins',
                  },
                ]}
              />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
              className="component content rich-text">
              <div className="component-content">
                <h1>Safety Bulletins</h1>
                <p>
                  Hastings Deering is a safety focused company dedicated to continuous improvement
                  and committed to the safety of our staff and the customers we support. Equipment
                  Safety Bulletins contain important technical information about product safety and
                  enhancements.
                </p>
                <p>
                  Download the bulletins below or alternatively subscribe to have alerts sent to
                  your inbox whenever an Equipment Safety Bulletin is released.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="component">
        <div className="container container-gray-background">
          <Row>
            <Col
              xs={12}
              sm={12}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
              className="component sitecore-form">
              <Form>
                <Form.Group controlId="formGroupEmail">
                  <Row>
                    <Col xs={12}>
                      <Form.Label>Full name</Form.Label>
                      <Form.Control className="mb-4" placeholder="" />
                    </Col>
                    <Col xs={12}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control className="mb-4" placeholder="" />
                    </Col>
                    <Col xs={12}>
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control className="mb-4" placeholder="" />
                    </Col>
                    <Col xs={12}>
                      <Form.Check
                        type="checkbox"
                        label="Yes, I would like to receive future communications from Hastings Deering.
"
                      />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                      <Button
                        as={'button'}
                        size={'lg'}
                        variant={'primary'}
                        className={`${styles.button} w-100 p-1 py-2 my-4`}
                        href={'/'}>
                        Subscribe
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
              className="component search-results media-list indent-top">
              <ul className={`${styles.searchResultList} p-0 mb-5`}>
                <li>
                  <a
                    title="ESB 2020 02 24M Replacement of 4607645 Fuel Hose"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/esb-2020-02-24m-replacement-of-4607645-fuel-hose.pdf?rev=d6835631b04a4b709697484344cf89bb">
                    ESB 2020-02 - 24M Replacement of 4607645 Fuel Hose
                  </a>
                </li>
                <li>
                  <a
                    title="ESB 2020 01 - 9U7763 Puller Stud"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/esb-2020-01---9u7763-puller-stud.pdf?rev=ebb9e8a1763d4cc9a0a8077851ae7222">
                    ESB 2020 01 - 9U7763 Puller Studs
                  </a>
                </li>
                <li>
                  <a
                    title="ESB 2019 05 - Secondary Exit mechanism"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/esb-2019-05---secondary-exit-mechanism.pdf?rev=31a72839b53d426abc785c945d7de19a">
                    ESB 2019 05 – Secondary Exit Mechanism on CTL/MTL/SSL Machines
                  </a>
                </li>
                <li>
                  <a
                    title="ESB 2019 04 - 216-8022 Lifting Tool"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/esb-2019-04---216-8022-lifting-tool.pdf?rev=bc330b5ba5cf461fa1c90455ac40112d">
                    ESB 2019 04 - 216-8022 lift Tool
                  </a>
                </li>
                <li>
                  <a
                    title="ESB 2019 03 - Use current Service Procedures"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/esb-2019-03---use-current-service-procedures.pdf?rev=c3bc09d6061845e089a6d40522b70c0c">
                    ESB 2019 03 - Use current service procedures
                  </a>
                </li>
                <li>
                  <a
                    title="ESB 2019 02 Fluid Injection Risk"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/esb-2019-02-fluid-injection-risk.pdf?rev=2cfc4475408f44098d4020fe15870f94">
                    ESB 2019 02 - Fluid Injection Risk
                  </a>
                </li>
                <li>
                  <a
                    title="ESB 2019 01 - Potential failure of Large Motor Grader front wheel spindles"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/esb-2019-01---potential-failure-of-large-motor-grader-front-wheel-spindles.pdf?rev=2a70d63abe314ac9a4ba8d5c4f386a97">
                    ESB 2019 01 - Potential failure of Large Motor Grader front wheel spindles
                  </a>
                </li>
                <li>
                  <a
                    title="ESB 2018 02 - MT3700_ MT4400 Front Wheel Clamping"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/esb-2018-02---mt3700_-mt4400-front-wheel-clamping.pdf?rev=88f6a0c77f644423b16f16e2b464207c">
                    ESB 2018 02 - MT3700_ MT4400 Front Wheel Clamping
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2018 01 - OHT Wheel Retention"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2018-01---oht-wheel-retention.pdf?rev=7c1671bcad5d43b287925a09e8a80392">
                    ESB 2018 01 - OHT Wheel Retention
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2017 01 Maintenance strategies quality aftermarket systems"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2017-01-maintenance-strategies-quality-aftermarket-systems.pdf?rev=ebcd954e565e46ebbd1d545e5f9dc2e1">
                    ESB 2017 01 - Maintenance strategies quality aftermarket systems
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2016_01 - D11T Hose Chafing"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2016_01---d11t-hose-chafing.pdf?rev=9767e5c1efc3443199c233696b314ba4">
                    ESB 2016_ 01 - D11T Hose Chafing
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2016 03 - Caterpillar Adjustable Lifting Brackets"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2016-03---caterpillar-adjustable-lifting-brackets.pdf?rev=cad68ac30d4a4d00b856f8da4632cfbb">
                    ESB 2016 03 - Caterpillar Adjustable Lifting Brackets
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2016 02 - Defective 177-7860 Hose Assembly"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2016-02---defective-177-7860-hose-assembly.pdf?rev=a33ca3b6ac1541828db205b60c5b5ccf">
                    ESB 2016 02 - Defective 177-7860 Hose Assembly
                  </a>
                </li>
                <li>
                  <a
                    title="ESB 2015 06 Fast fill fuel systems"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/esb-2015-06-fast-fill-fuel-systems.pdf?rev=df6f3dd1afcc4488b8f3f960c424df47">
                    ESB 2015 06 - Fast fill fuel systems
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2015 04 Battery and charging system hazards"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2015-04-battery-and-charging-system-hazards.pdf?rev=cfbca7a845bb4a63bd1bbb0b64e04b46">
                    ESB 2015 04 - Battery and charging system hazards
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2015 03 - OHT Front Suspension Cylinders"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2015-03---oht-front-suspension-cylinders.pdf?rev=c0afac4c1d8848149927161a659aa0ca">
                    ESB 2015 03 - OHT Front Suspension Cylinders
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2015 02 - AD55B_AD60 Fuel Lines Chafing"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2015-02---ad55b_ad60-fuel-lines-chafing.pdf?rev=23db4d6e501c43a6adc29cca08615731">
                    ESB 2015 02 - AD55B_AD60 Fuel Lines Chafing
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2015 01 - D10T_D11T Engine Flexible Fuel Line Updates"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2015-01---d10t_d11t-engine-flexible-fuel-line-updates.pdf?rev=49b0f3f208934ecc8a7fcf0ca5434e11">
                    ESB 2015 01 - D10T_D11T Engine Flexible Fuel Line Updates
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2013 17 - Longwall Double Solenoid Valve Corrosion"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2013-17---longwall-double-solenoid-valve-corrosion.pdf?rev=e44911bfb9eb4cd397086f8fe025d069">
                    ESB 2013 17 - Longwall Double Solenoid Valve Corrosion
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2013 16 - MICS Fire Suppression System Engine Shutdown Delay Rev02"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2013-16---mics-fire-suppression-system-engine-shutdown-delay-rev02.pdf?rev=7976ab433b4e4638925f0e99f1e0c84c">
                    ESB 2013 16 - MICS Fire Suppression System Engine Shutdown Delay Rev02
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2013 15 - Off-Highway Truck and Motor Grader and Excavator Access Systems i"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2013-15---off-highway-truck-and-motor-grader-and-excavator-access-systems-i.pdf?rev=d359576c830642478fffa7a9044d33fb">
                    ESB 2013 15 - Off-Highway Truck and Motor Grader and Excavator Access Systems
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2013 14 - Wheel Loader or Wheel Dozer Access Systems installed by Hastings"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2013-14---wheel-loader-or-wheel-dozer-access-systems-installed-by-hastings.pdf?rev=adf73a308c9a42eba9709f4c2d83e49f">
                    ESB 2013 14 - Wheel Loader or Wheel Dozer Access Systems installed by Hastings
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2013 13 - Large Motor Grader Front Wheel Spindle Failures Rev 01"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2013-13---large-motor-grader-front-wheel-spindle-failures-rev-01.pdf?rev=28877bc206d74b068c773d551896270a">
                    ESB 2013 13 - Large Motor Grader Front Wheel Spindle Failures Rev 01
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2013 12 - 797F Engine Prelube Pump Fire Risk"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2013-12---797f-engine-prelube-pump-fire-risk.pdf?rev=9e018cf11f144e998bb64647f698f38d">
                    ESB 2013 12 - 797F Engine Prelube Pump Fire Risk
                  </a>
                </li>
                <li>
                  <a
                    title="ESB 2013 10 - Failure of Hoist Rope Roller Bracket on 8750 Dragline_Lake Lindsa"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/esb-2013-10---failure-of-hoist-rope-roller-bracket-on-8750-dragline_lake-lindsa.pdf?rev=ed80530a1b1e4fb09dba73d0bd50ccc6">
                    ESB 2013 10 - Failure of Hoist Rope Roller Bracket on 8750 Dragline_Lake Lindsa
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2013 09 - Failure of Hoist Rope Roller Bracket on 8750 Dragline"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2013-09---failure-of-hoist-rope-roller-bracket-on-8750-dragline.pdf?rev=7439b7e5830342939e07ca3d8198dd20">
                    ESB 2013 09 - Failure of Hoist Rope Roller Bracket on 8750 Dragline
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2013 08 - Failure of Hoist Rope Roller Bracket on 8750 Dragline"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2013-08---failure-of-hoist-rope-roller-bracket-on-8750-dragline.pdf?rev=bf5315331a814596be07eb3917109be8">
                    ESB 2013 08 - Failure of Hoist Rope Roller Bracket on 8750 Dragline
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2013 06 - Failure of Articulation Locking Pin on R1700G_R2900G Load Haul Du"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2013-06---failure-of-articulation-locking-pin-on-r1700g_r2900g-load-haul-du.pdf?rev=dbb745469a0b4ce49e4c48351706c9d1">
                    ESB 2013 06 - Failure of Articulation Locking Pin on R1700G_R2900G Load Haul
                    Dump machines
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2013 05 - Incorrectly Manufactured Hydraulic Hoses 80bar for certain Hydrau"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2013-05---incorrectly-manufactured-hydraulic-hoses-80bar-for-certain-hydrau.pdf?rev=fd094e4b9a654834bf014fae1d387ea1">
                    ESB 2013 05 - Incorrectly Manufactured Hydraulic Hoses (80bar)
                  </a>
                </li>
                <li>
                  <a
                    title="GESB 2013 01 - Caterpillar MD6420 Drill Mast Pivot Connection Bolts"
                    href="https://sdi-sc-prod-cd-cdn.azureedge.net/-/media/project/hdweb/public/bulletins/gesb-2013-01---caterpillar-md6420-drill-mast-pivot-connection-bolts.pdf?rev=b67f002326934ac7b0e80291ded47023">
                    ESB 2013 01 - Caterpillar MD6420 Drill Mast Pivot Connection Bolts
                  </a>
                </li>
              </ul>
              <div className="search-result-overlay"></div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default TrainingSolutionsPage
