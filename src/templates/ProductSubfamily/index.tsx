import {
  faCalculator,
  faChevronRight,
  faHome,
  faMapMarkerAlt,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql } from 'gatsby'
import React, { FC } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import Button from 'react-bootstrap/cjs/Button'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import HDSlider from '~components/HDSlider'
import Layout from '~components/Layout'
import { Product, RawProduct } from '~types/Product'
import { RawSubfamilyProduct, SubfamilyProduct } from '~types/SubfamilyProduct'

//TODO: organize styles
import styles from '../../pages/products/Products.module.scss'
import Products from './components/Products'
import productsStyles from './components/Products/Products.module.scss'

type RawData = {
  subFamily: RawSubfamilyProduct
  products: {
    nodes: RawProduct[]
  }
}

type Props = {
  data: RawData
}

const ProductSubfamilyTemplate: FC<Props> = ({ data }) => {
  const subFamily = subfamilyDataMapper(data.subFamily)
  const products = productsDataMapper(data.products.nodes)

  return (
    <Layout>
      {/*this div is to make even-odd coloring work*/} <div />
      <div className="component row-splitter">
        <div className="container">
          <Row>
            <Breadcrumb className={styles.breadcrump}>
              <Breadcrumb.Item href="/">
                <FontAwesomeIcon icon={faHome} title={'Home'} className={styles.homeIcon} />
              </Breadcrumb.Item>
              <FontAwesomeIcon icon={faChevronRight} className={styles.separator} />
              <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
              <FontAwesomeIcon icon={faChevronRight} className={styles.separator} />
              <Breadcrumb.Item href="/products/new">New Equipment</Breadcrumb.Item>
              <FontAwesomeIcon icon={faChevronRight} className={styles.separator} />
              <Breadcrumb.Item href={data.subFamily.slug}>{data.subFamily.name}</Breadcrumb.Item>
            </Breadcrumb>
          </Row>
        </div>
        <div className="container">
          <Row>
            <Col xs={12} lg={3} className="component content indent-top">
              <h3 className="normal field-category">{subFamily.familyName}</h3>
              <h1 className="mt-3 field-title">{subFamily.name}</h1>
              <Row className="mt-3">
                <Col xs={12} md={6} lg={12}>
                  <Button
                    size="lg"
                    className={`${styles.buttonWithIcon} hd-btn btn-primary btn-block mb-2`}
                    href="/overlays/request-quote-overlay?Product=Cat 725 - Quote&Type=New&Goal=Quote&Model=725">
                    <span className={styles.ellipsis}>REQUEST A QUOTE</span>
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </Button>
                </Col>
                <Col xs={12} md={6} lg={12}>
                  <Button
                    size="lg"
                    className={`${styles.buttonWithIcon} hd-btn btn-dark btn-block mb-2`}
                    href="/our-business/locations">
                    <span className={styles.ellipsis}>FIND YOUR LOCAL BRANCH</span>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </Button>
                </Col>
                <Col xs={12} md={6} lg={12}>
                  <Button
                    size="lg"
                    className={`${styles.buttonWithIcon} hd-btn bd-grey-1 btn-white btn-block mb-2`}
                    href={`https://triggerfish.outgrow.us/hastings-test-finance?width=85vw&height=98vh&Product=${subFamily.name}`}>
                    <span className={styles.ellipsis}>FINANCE CALCULATOR</span>
                    <FontAwesomeIcon icon={faCalculator} />
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={8} className="component content offset-lg-1 m-md-3">
              <HDSlider images={subFamily.images} />
            </Col>
          </Row>
        </div>
      </div>
      <div className="component row-splitter">
        <div className="container">
          <Row>
            <Col
              xs={12}
              lg={7}
              className="pl-md-3 mb-3 hd-p rich-text"
              dangerouslySetInnerHTML={{ __html: subFamily.description as string }}
            />
            <Col
              xs={12}
              lg={{ span: 4, offset: 1 }}
              className={productsStyles.productSpecification}>
              <Products products={products} />
              <Button size="lg" className="hd-btn btn-primary btn-block mt-2" href={`/contact-us`}>
                CONTACT US
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default ProductSubfamilyTemplate

export const query = graphql`
  query Subfamily($id: String!) {
    subFamily: contentfulProductSubfamily(id: { eq: $id }) {
      id
      name
      description {
        raw
      }
      family {
        name
      }
      images {
        id
        alt: title
        file {
          url
        }
      }
    }
    products: allContentfulProductModel(filter: { productSubfamily: { id: { eq: $id } } }) {
      nodes {
        id
        name
        specFieldName1
        specFieldName2
        specFieldName3
        specFieldName4
        specFieldName5
        specFieldValue1
        specFieldValue2
        specFieldValue3
        specFieldValue4
        specFieldValue5
        brochure {
          file {
            url
          }
        }
      }
    }
  }
`

function productsDataMapper(data: RawProduct[]): Product[] {
  return data.map(({ brochure, ...product }) => ({
    ...product,
    brochureUrl: brochure.file.url,
  }))
}

function subfamilyDataMapper(rawData: RawSubfamilyProduct): SubfamilyProduct {
  return {
    id: rawData.id,
    name: rawData.name,
    familyName: rawData?.family?.name,
    description: parseDescriptions(rawData?.description?.raw),
    images: rawData.images.map((image) => ({
      id: image.id,
      alt: image.alt,
      url: image.file.url,
    })),
  }
}

function parseDescriptions(description: string | undefined): string {
  if (!description) {
    return ''
  }
  const json = JSON.parse(description)

  return `<p>${json.content[0].content[0].value}</p>`
}
