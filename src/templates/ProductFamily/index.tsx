import { graphql } from 'gatsby'
import React, { FC } from 'react'

import { SubFamilyProduct } from '~components/ProductSubFamilyCard'
import ProductSubFamilyList from '~components/ProductSubFamilyList'

type Edge = {
  node: SubFamilyProduct
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
  return <ProductSubFamilyList items={items} />
}

export default ProductFamily

export const query = graphql`
  query ProductSubfamilyByFamilyId($id: String!) {
    products: allContentfulProductSubfamily(filter: { family: { id: { eq: $id } } }) {
      edges {
        node {
          id
          name
          images {
            id
            alt: title
            fluid {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`

function dataMapper(data: Edge[]): SubFamilyProduct[] {
  return data.map(({ node }) => ({
    id: node.id,
    name: node.name,
    images: node.images,
  }))
}
