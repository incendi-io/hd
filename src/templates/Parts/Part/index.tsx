import { graphql } from 'gatsby'
import parse from 'html-react-parser'
import React, { FC, ReactElement } from 'react'
import { Nav, Tab } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'
import sanitizeHtml from 'sanitize-html'
import slugify from 'slugify'

import Breadcrumbs from '~components/Breadcrumbs'
import HDSlider from '~components/HDSlider'
import Layout from '~components/Layout'
import { Image } from '~types/Image'
import { RawPart } from '~types/Part'

import styles from './Parts.module.scss'

type Props = {
  data: RawPart
}

const PartTemplate: FC<Props> = ({ data }): ReactElement => {
  const { part } = data
  const longDescription = parse(sanitizeHtml(part?.longDescription).toString())
  return (
    <Layout>
      <div className="component row-splitter ">
        <div className="container">
          <Row className="column-splitter">
            <Col xs={12} className="component navigation-title initialized">
              <Breadcrumbs
                list={[
                  {
                    title: 'Parts',
                    url: '/parts',
                  },
                  {
                    title: part?.category,
                    url: `/cat/${slugify(part?.category, { lower: true })}`,
                  },
                  ...(part?.subCategory
                    ? [
                        {
                          title: part?.subCategory,
                          url: `/cat/${slugify(part?.category, {
                            lower: true,
                          })}/${slugify(part?.subCategory, { lower: true })}`,
                        },
                      ]
                    : [null]),
                ]}
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} className="component">
              <HDSlider
                images={part?.images.map(
                  (image, index): Image => ({ url: image, alt: '', id: index })
                )}
                useCustomButtons
              />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} className="component rich-text">
              <div className="component-content">
                <h2>
                  {part?.partNumber}: {part?.partName}
                </h2>
                <h5>Brand: {part.brand}</h5>
              </div>
            </Col>
            <Col xs={12} className="component">
              <Tab.Container id="product-tabs" defaultActiveKey="description">
                <Row>
                  <Col xs={12} className={`${styles.productTabs} mb-5`}>
                    <Nav variant="pills" className="flex-row py-2">
                      <Nav.Item>
                        <Nav.Link eventKey="description">Description</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="specifications">Specifications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="diagram">Diagram</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="compatible-models">Compatible Models</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col xs={12}>
                    <Tab.Content>
                      <Tab.Pane eventKey="description">
                        <Row>
                          <Col md={12}>
                            <h3 id="description-section">DESCRIPTION</h3>
                            <hr className={styles.divider} />
                            <p>{part?.shortDescription}</p>
                            <div dangerouslySetInnerHTML={{ __html: longDescription }} />
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="specifications" />
                      <Tab.Pane eventKey="diagram" />
                      <Tab.Pane eventKey="compatible-models" />
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default PartTemplate

export const query = graphql`
  query PartById($id: String!) {
    part: eCommerceTest(id: { eq: $id }) {
      id
      slug
      partName
      partNumber
      brand
      shortDescription
      longDescription
      category
      subCategory
      images
    }
  }
`
