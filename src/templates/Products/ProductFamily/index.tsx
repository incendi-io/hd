import { graphql } from 'gatsby'
import React, { FC, useState } from 'react'
import { Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import ProductCard from '~components/ProductCard'
import ProductSearch from '~components/ProductSearch'
import { FamilyProduct, RawFamilyProduct } from '~types/FamilyProduct'
import { RawSubfamilyProduct, SubfamilyProduct } from '~types/SubfamilyProduct'

type Edge = {
  node: RawSubfamilyProduct
}

type Props = {
  data: {
    family: RawFamilyProduct
    subFamilies: {
      edges: Edge[]
    }
  }
}

const ProductFamily: FC<Props> = ({ data }): React.ReactElement => {
  const [searchValue, setSearchValue] = useState('')

  const items = dataMapper(data.subFamilies.edges)
  const family = familyDataMapper(data.family)

  //TODO: add search to graphql query instead
  const filteredList = items.filter((product) => product.name.match(new RegExp(searchValue, 'i')))

  return (
    <Layout>
      <Col className="component row-splitter">
        <div className="container">
          <Row>
            <Breadcrumbs
              list={[
                {
                  title: 'Products',
                  url: '/products',
                },
                {
                  title: 'New Equipment',
                  url: '/products/new',
                },
                {
                  title: family.name,
                  url: family.url as string,
                },
              ]}
            />
          </Row>
        </div>
        <div className="container">
          <Row>
            <Col xs={12} className="component content indent-top">
              <div className="component-content">
                <h1 className="field-title">{family.name}</h1>
                <p className="mt-3 field-content">{family.description}</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container">
          <Row className="px-2">
            <ProductSearch searchValueChange={(q) => setSearchValue(q)} />
          </Row>
        </div>
      </Col>
      <Col xs={12} className="component row-splitter">
        <div className="container">
          <div className="search-results search-result-product-category mx-n2">
            {!filteredList.length && <div className="no-results">No results found</div>}
            <ul className="search-result-list">
              {filteredList.map((product, index) => (
                /*TODO: remove index after removing testing duplicates*/
                <li key={index /*product.id*/}>
                  <ProductCard item={product} />
                </li>
              ))}
            </ul>
            {/*TODO: add load more button*/}
          </div>
        </div>
      </Col>
    </Layout>
  )
}

export default ProductFamily

export const query = graphql`
  query getFamilyData($id: String!) {
    family: contentfulProductFamily(id: { eq: $id }) {
      id
      name
      description {
        description
      }
    }
    subFamilies: allContentfulProductSubfamily(filter: { family: { id: { eq: $id } } }) {
      edges {
        node {
          id
          name
          slug
          family {
            name
            slug
          }
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

function familyDataMapper(data: RawFamilyProduct): FamilyProduct {
  return {
    id: data.id,
    name: data.name,
    description: data?.description?.description ?? '',
  }
}

function dataMapper(data: Edge[]): SubfamilyProduct[] {
  return data.map(({ node }) => ({
    id: node.id,
    name: node.name,
    familyName: node.family.name,
    url: `/products/new/${node.family.slug}/${node.slug}`.toLowerCase(),
    images: node.images.map((image) => ({
      id: image.id,
      alt: image.alt,
      url: image.file.url,
    })),
  }))
}
