import { graphql } from 'gatsby'
import React, { FC } from 'react'
import { FluidObject } from 'gatsby-image'

type RawProduct = {
  id: string
  name: string
  productSubfamily: {
    images: {
      id: string
      alt: string
      fluid: FluidObject
    }
  }
  specFieldName1: string
  specFieldName2: string
  specFieldName3: string
  specFieldName5: string
  specFieldName4: string
  specFieldValue1: string
  specFieldValue2: string
  specFieldValue3: string
  specFieldValue4: string
  specFieldValue5: string
}

type Product = {
  id: string
  name: string
  images: {
    id: string
    alt: string
    fluid: FluidObject
  }
  specFieldName1: string
  specFieldName2: string
  specFieldName3: string
  specFieldName5: string
  specFieldName4: string
  specFieldValue1: string
  specFieldValue2: string
  specFieldValue3: string
  specFieldValue4: string
  specFieldValue5: string
}

type RawData = {
  product: RawProduct
}

type Props = {
  data: RawData
}

const ProductTemplate: FC<Props> = ({ data }) => {
  const product = dataMapper(data.product)
  return <div>Product</div>
}

export default ProductTemplate

export const query = graphql`
  query Product($id: String!) {
    product: contentfulProductModel(id: { eq: $id }) {
      id
      name
      specFieldName1
      specFieldName2
      specFieldName3
      specFieldName4
      specFieldName5
      specFieldValue1
      specFieldValue2
      specFieldValue3
      specFieldValue4
      specFieldValue5
      productSubfamily {
        images {
          id
          alt: title
          fluid {
            src
            aspectRatio
            srcSet
            sizes
          }
        }
      }
    }
  }
`

function dataMapper(rawData: RawProduct): Product {
  return {
    id: rawData.id,
    name: rawData.name,
    images: rawData.productSubfamily.images,
    specFieldName1: rawData.specFieldName1,
    specFieldName2: rawData.specFieldName2,
    specFieldName3: rawData.specFieldName3,
    specFieldName4: rawData.specFieldName4,
    specFieldName5: rawData.specFieldName5,
    specFieldValue1: rawData.specFieldValue1,
    specFieldValue2: rawData.specFieldValue2,
    specFieldValue3: rawData.specFieldValue3,
    specFieldValue4: rawData.specFieldValue4,
    specFieldValue5: rawData.specFieldValue5,
  }
}
