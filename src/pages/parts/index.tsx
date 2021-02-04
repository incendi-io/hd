import classNames from 'classnames'
import { graphql, useStaticQuery } from 'gatsby'
import React, { FC, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

import Layout from '~components/Layout'
import PartsCategoriesList from '~components/PartsCategoriesList'
import PartsList from '~components/PartsList'
import { FamilyProduct } from '~components/ProductFamilyCard'
import ProductSearch from '~components/ProductSearch'
import PromoImage from '~components/PromoImage'
import { Part } from '~types/Part'
import { categoriesMock, recentListMock } from '~utils/mocks/categories'

import styles from './Parts.module.scss'

const bestSellersListMock: Part[] = recentListMock

const PartsCategoryPage: FC<unknown> = (): React.ReactElement => {
  const [searchValue, setSearchValue] = useState('')

  const data = useStaticQuery(query)
  //const catList = familyProductsMapper(data.categories)
  const catList = categoriesMock
  //const bestSellersList = familyProductsMapper(data.bestSellers)
  const bestSellersList = bestSellersListMock
  //const recentList = familyProductsMapper(data.recent)
  const recentList = recentListMock

  //TODO: add search to graphql query instead
  const filteredCatList = catList.filter((cat) => cat.title.match(new RegExp(searchValue, 'i')))
  //TODO: add search to graphql query instead
  const filteredBestSellersList = bestSellersList.filter((part) =>
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
      <div className={classNames(styles.content, 'row-splitter')}>
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
        <PartsCategoriesList title="Shop by Category" categories={filteredCatList} />
        <PartsList title="Best sellers" parts={filteredBestSellersList} />
        <PartsList title="Recently viewed products" parts={filteredRecentList} />
      </div>
    </Layout>
  )
}

export default PartsCategoryPage

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
