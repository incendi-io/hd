import { graphql, useStaticQuery } from 'gatsby'
import React, { FC, ReactElement } from 'react'
import Col from 'react-bootstrap/Col'

import ProductSubFamilyList from '~components/ProductSubFamilyList'
import { RawSubfamilyProduct, SubfamilyProduct } from '~types/SubfamilyProduct'

type RawData = {
  subfamilies: {
    nodes: RawSubfamilyProduct[]
  }
}

const FeaturedProducts: FC<unknown> = (): ReactElement => {
  const res = useStaticQuery<RawData>(query)
  //const items = mapData(res.subfamilies.nodes)
  const items = mapData(res.subfamilies.nodes)

  return (
    <Col className="border-bottom border-light mt-3">
      <div className="component rich-text col-12 position-center mt-4">
        <div className="component-content">
          <h4 className="h4 mb-0">Featured Products</h4>
        </div>
      </div>
      <ProductSubFamilyList items={items} />
    </Col>
  )
}

export default FeaturedProducts

function mapData(data: RawSubfamilyProduct[]): SubfamilyProduct[] {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    familyName: item.family.name,
    url: `/products/new/${item.family.slug}/${item.slug}`.toLowerCase(),
    images: item.images.map((image) => ({
      id: image.id,
      alt: image.alt,
      url: image.file.url,
    })),
  }))
}

export const query = graphql`
  query GetFeaturedProducts {
    subfamilies: allContentfulProductSubfamily(filter: { featured: { eq: true } }) {
      nodes {
        id
        images {
          file {
            url
          }
          title
        }
        name
        slug
        family {
          name
          slug
        }
      }
    }
  }
`
