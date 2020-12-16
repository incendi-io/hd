import { graphql } from 'gatsby'
import React, { FC } from 'react'

import Layout from '~components/Layout'
import { RawSubfamilyProduct, SubfamilyProduct } from '~types/SubfamilyProduct'

type RawData = {
  subFamily: RawSubfamilyProduct
}

type Props = {
  data: RawData
}

const ProductSubfamilyTemplate: FC<Props> = ({ data }) => {
  const subFamily = dataMapper(data.subFamily)
  return (
    <Layout>
      <div>Subfamily</div>
    </Layout>
  )
}

export default ProductSubfamilyTemplate

export const query = graphql`
  query Subfamily($id: String!) {
    subFamily: contentfulProductSubfamily(id: { eq: $id }) {
      id
      name
      family {
        name
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
`

function dataMapper(rawData: RawSubfamilyProduct): SubfamilyProduct {
  return {
    id: rawData.id,
    name: rawData.name,
    familyName: rawData?.family?.name,
    images: rawData.images.map((image) => ({
      id: image.id,
      alt: image.alt,
      url: image.file.url,
    })),
  }
}
