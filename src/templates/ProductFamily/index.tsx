import { graphql } from 'gatsby'
import React, { FC } from 'react'

import Layout from '~components/Layout'
import ProductSubFamilyList from '~components/ProductSubFamilyList'
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
  const items = dataMapper(data.subFamilies.edges)
  const family = familyDataMapper(data.family)

  return (
    <Layout>
      <div>
        <h1>{family.name}</h1>
        <p>{family.description}</p>
      </div>
      <ProductSubFamilyList items={items} />
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
