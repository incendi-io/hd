import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'

import ProductSubFamilyList from '~components/ProductSubFamilyList'
import PromoImage from '~components/PromoImage'
import TheLatestNews from '~components/TheLatestNews'
import { RawSubfamilyProduct, SubfamilyProduct } from '~types/SubfamilyProduct'

type RawData = {
  subFamilies: {
    nodes: RawSubfamilyProduct[]
  }
}

const HomeTemplate: FC<unknown> = (): React.ReactElement => {
  const data = useStaticQuery<RawData>(query)
  const items = mapData(data.subFamilies.nodes)
  return (
    <>
      <PromoImage url="/images/home-page-background.jpg" />
      <ProductSubFamilyList items={items} />

      <TheLatestNews />
    </>
  )
}

export default HomeTemplate

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

const query = graphql`
  query GetAllProductSubfamilies {
    subFamilies: allContentfulProductSubfamily {
      nodes {
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
`
