//TODO: css modules not working again, wtf, how even debug it?
import './ProductFamilyList.modules.scss'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import { StringParam, useQueryParam } from 'use-query-params'

import ProductFamilyCard, { FamilyProduct } from '~components/ProductFamilyCard'

const ProductFamilyList = (): React.ReactElement => {
  const [q, setQ] = useQueryParam('q', StringParam)
  const [searchValue, setSearchValue] = useState(q as string)

  const data = useStaticQuery(query)
  const list = familyProductsMapper(data.familyProducts)
  //TODO: add search to graphql query instead
  const filteredList = list.filter((product) => product.name.match(new RegExp(q as string, 'i')))

  return (
    <Col className="container">
      <Row>
        <Col xs={12} lg={6} className="component search-box horizontal product-search initialized">
          <div className="component-content">
            <span className="twitter-typeahead">
              <input
                value={searchValue}
                type="text"
                className="search-box-input form-control tt-hint"
                autoComplete="off"
                spellCheck="false"
                placeholder="Search"
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && setQ(searchValue)}
              />
            </span>
            <Button
              className="search-box-button"
              type="submit"
              size={'lg'}
              onClick={() => setQ(searchValue)}>
              <FontAwesomeIcon icon={faSearch} title={'Find'} />
            </Button>
          </div>
        </Col>
        <Col xs={12} className="component search-results search-result-product-category">
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
