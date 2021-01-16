import classNames from 'classnames'
import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'

import Layout from '~components/Layout'
import ProductFamilyList from '~components/ProductFamilyList'
import PromoImage from '~components/PromoImage'

import styles from './Products.module.scss'

const NewProducts: FC<unknown> = (): React.ReactElement => {
  return (
    <Layout>
      <PromoImage
        url="/images/motor-graders-blade.jpg"
        useOverlay={true}
        title="Equipment"
        subTitle="NEW"
        description="With the best range of new Cat® Machines and Equipment in QLD and NT, your local Hastings Deering branch is the ideal place to find new Cat® Equipment for sale. Check out our full range of new Caterpillar construction, earthmoving and mining machinery below and contact your local branch for expert advice on the Cat® machines and equipment that your business needs to get the job done right."
      />
      <div className={classNames(styles.content, 'row-splitter')}>
        <ProductFamilyList />
        <Col className="container">
          <Row>
            <div className={classNames(styles.component, 'row-splitter')}>
              <div className="container">
                <Row>
                  <Col sm={12} className="component plain-html">
                    <div className="component-content">
                      <h2>New Cat® Equipment for Sale</h2>
                      <p>
                        From Cat® Excavators, Dozers and Compactors through to a full range of Cat®
                        Mining Equipment and Machinery, we have the Cat® machines and equipment to
                        keep your business moving. When you purchase new Cat® machines from Hastings
                        Deering, you&apos;re not just buying a high-quality machine from a brand
                        Australian businesses know and trust — you&apos;re accessing our unmatched
                        service network with quality Caterpillar maintenance and repairs by
                        world-class technicians to keep you moving, wherever you are.
                      </p>
                      <p>
                        Hastings Deering team members are so much more Cat® Equipment and Machinery
                        experts — we’re also solutions providers for the construction and mining
                        industries in Queensland and the Northern Territory. At Hastings Deering,
                        we&apos;re dedicated to providing innovative solutions to meet the
                        challenges you face and help you build and maintain a successful
                        construction or mining business.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Row>
        </Col>
      </div>
    </Layout>
  )
}

export default NewProducts
