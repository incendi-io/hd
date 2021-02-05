import { graphql, useStaticQuery } from 'gatsby'
import React, { FC, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

import Layout from '~components/Layout'
import PartsList from '~components/PartsList'
import { FamilyProduct } from '~components/ProductFamilyCard'
import ProductSearch from '~components/ProductSearch'
import PromoImage from '~components/PromoImage'
import { partsListMock, recentListMock } from '~utils/mocks/categories'

import styles from './Parts.module.scss'

const PartCategory: FC<unknown> = ({ pageContext }): React.ReactElement => {
  const [searchValue, setSearchValue] = useState('')

  const data = useStaticQuery(query)
  console.log(data, query, pageContext)

  const totalCount = data.items.totalCount
  const pageSize = 10
  const skip = 0
  //const partsList = familyProductsMapper(data.categories)
  //const partsList = partsListMock
  const partsList = data.items.edges.map((item) => item.node)
  //const recentList = familyProductsMapper(data.recent)
  const recentList = recentListMock

  //TODO: add search to graphql query instead
  const filteredPartsList = partsList.filter((part) =>
    part.partName.match(new RegExp(searchValue, 'i'))
  )
  //TODO: add search to graphql query instead
  const filteredRecentList = recentList.filter((part) =>
    part.partName.match(new RegExp(searchValue, 'i'))
  )

  return (
    <Layout>
      <PromoImage
        url="/images/parts.png"
        useOverlay={true}
        title="35% OFF"
        subTitle="Motor Grader Cutting Edges*"
        description="Choose the Right Ground Engaging Tools for Graders"
      />
      <div className={`${styles.content} row-splitter`}>
        <Col className="container">
          <Row>
            <ProductSearch
              fullWidth
              searchButtonPosition="left"
              categories={[{ slug: 'best', title: 'Best Sellers' }]}
              searchValueChange={(q) => setSearchValue(q)}
              className="mx-n2"
            />
          </Row>
        </Col>
        <PartsList
          title={pageContext.cat}
          parts={filteredPartsList}
          totalCount={totalCount}
          pageSize={pageSize}
          skip={skip}
          hasFilter
        />
      </div>
      <PartsList title="Recently viewed products" parts={filteredRecentList} />
    </Layout>
  )
}

export default PartCategory

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
  query GetParts($cat: String) {
    items: allECommerce(limit: 10, filter: { category: { eq: $cat } }) {
      totalCount
      edges {
        node {
          id
          slug
          partName
          partNumber
          brand
          shortDescription
          category
          subCategory
          images
        }
      }
    }
  }
`
