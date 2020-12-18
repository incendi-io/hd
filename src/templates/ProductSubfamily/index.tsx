import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Button from 'react-bootstrap/cjs/Button'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import HDSlider from '~components/HDSlider'
import Layout from '~components/Layout'
import { Product, RawProduct } from '~types/Product'
import { RawSubfamilyProduct, SubfamilyProduct } from '~types/SubfamilyProduct'

import Products from './components/Products'

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
      <Row>
        <Col md={4}>
          <h3>{subFamily.familyName}</h3>
          <h1>{subFamily.name}</h1>

          <Button
            size="lg"
            href="/overlays/request-quote-overlay?Product=Cat 725 - Quote&Type=New&Goal=Quote&Model=725">
            REQUEST A QUOTE
          </Button>
          <Button size="lg" href="/our-business/locations">
            FIND YOUR LOCAL BRANCH
          </Button>
          <Button
            size="lg"
            href={`https://triggerfish.outgrow.us/hastings-test-finance?width=85vw&height=98vh&Product=${subFamily.name}`}>
            FINANCE CALCULATOR
          </Button>
        </Col>
        <Col md={8}>
          <HDSlider images={subFamily.images} />
        </Col>
      </Row>
      <Row>
        <Col dangerouslySetInnerHTML={{ __html: subFamily.description }}></Col>
        <Col>
          <Products products={products} />
          <Button size="lg" href={`/contact-us`}>
            CONTACT US
          </Button>
        </Col>
      </Row>
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
