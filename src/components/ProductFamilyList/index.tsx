//TODO: css modules not working again, wtf, how even debug it?
import './ProductFamilyList.modules.scss'

import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

import ProductFamilyCard, { FamilyProduct } from '~components/ProductFamilyCard'

const ProductFamilyList = (): React.ReactElement => {
  const data = useStaticQuery(query)
  const list = familyProductsMapper(data.familyProducts)

  return (
    <Col className="container">
      <Row>
        <Col xs={12} className="component search-results search-result-product-category">
          <ul className="search-result-list">
            {list.map((product) => (
              <li key={product.id}>
                <ProductFamilyCard item={product} />
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Col>
  )
}

export default ProductFamilyList

export type RawFamilyProduct = {
  node: {
    id: string
    name: string
    slug: string
    images: {
      id: string
      alt: string
      file: {
        url: string
      }
    }
  }
}

export interface RawFamilyProducts {
  edges: RawFamilyProduct[]
}

function familyProductsMapper(rawData: RawFamilyProducts): FamilyProduct[] {
  if (!rawData?.edges?.length) {
    return []
  }
  return rawData.edges.map((item) => ({
    id: item.node.id,
    name: item.node.name,
    slug: `/products/new/${item.node.slug}`.toLowerCase(),
    image: {
      id: item.node.images.id,
      alt: item.node.images.alt,
      url: item.node.images.file.url,
    },
  }))
}

const query = graphql`
  query {
    familyProducts: allContentfulProductFamily {
      edges {
        node {
          id
          name
          slug
          images {
            id
            alt: title
            file {
              url
            }
          }
        }
      }
    }
  }
`
