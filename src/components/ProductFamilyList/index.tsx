import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import ProductFamilyCard, { FamilyProduct } from '~components/ProductFamilyCard'

const ProductFamilyList = (): React.ReactElement => {
  const data = useStaticQuery(query)
  const list = familyProductsMapper(data.familyProducts)
  return (
    <div>
      {list.map((product) => (
        <ProductFamilyCard key={product.id} item={product} />
      ))}
    </div>
  )
}

export default ProductFamilyList

export interface RawFamilyProducts {
  edges: {
    node: FamilyProduct
  }[]
}

function familyProductsMapper(rawData: RawFamilyProducts): FamilyProduct[] {
  if (!rawData?.edges?.length) {
    return []
  }
  return rawData.edges.map((item) => item.node)
}

const query = graphql`
  query {
    familyProducts: allContentfulProductFamily {
      edges {
        node {
          id
          name
          images {
            alt: title
            fluid {
              aspectRatio
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
