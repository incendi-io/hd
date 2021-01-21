//TODO: css modules not working again, wtf, how even debug it?
import './ProductFamilyList.modules.scss'

import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

import ProductFamilyCard, { FamilyProduct } from '~components/ProductFamilyCard'
import ProductSearch from '~components/ProductSearch'

const ProductFamilyList = (): React.ReactElement => {
  const [searchValue, setSearchValue] = useState('')

  const data = useStaticQuery(query)
  const list = familyProductsMapper(data.familyProducts)
  //TODO: add search to graphql query instead
  const filteredList = list.filter((product) => product.name.match(new RegExp(searchValue, 'i')))

  return (
    <Col className="container">
      <Row>
        <ProductSearch searchValueChange={(q) => setSearchValue(q)} className="mx-n2" />
        <Col xs={12} className="component search-results search-result-product-category mx-n2">
          {!filteredList.length && <div className="no-results">No results found</div>}
          <ul className="search-result-list">
            {filteredList.map((product) => (
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
