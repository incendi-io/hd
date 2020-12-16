import { graphql } from 'gatsby'
import React, { FC } from 'react'

import Layout from '~components/Layout'
import ProductSubFamilyList from '~components/ProductSubFamilyList'
import { RawFamilyProduct } from '~types/FamilyProduct'
import { SubfamilyProduct } from '~types/SubfamilyProduct'

type Edge = {
  node: RawFamilyProduct
}

type Props = {
  data: {
    products: {
      edges: Edge[]
    }
  }
}

const ProductFamily: FC<Props> = ({ data }): React.ReactElement => {
  const items = dataMapper(data.products.edges)
  return (
    <Layout>
      <ProductSubFamilyList items={items} />
    </Layout>
  )
}

export default ProductFamily

export const query = graphql`
  query ProductSubfamilyByFamilyId($id: String!) {
    products: allContentfulProductSubfamily(filter: { family: { id: { eq: $id } } }) {
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

function dataMapper(data: Edge[]): SubfamilyProduct[] {
  return data.map(({ node }) => ({
    id: node.id,
    name: node.name,
    familyName: node.family.name,
    slug: `/products/new/${node.family.slug}/${node.slug}`.toLowerCase(),
    images: node.images.map((image) => ({
      id: image.id,
      alt: image.alt,
      url: image.file.url,
    })),
  }))
}
