import React from 'react'

import { Layout } from '~components/Layout'
import ProductFamilyList from '~components/ProductFamilyList'

const NewProducts = (): React.ReactElement => {
  return (
    <Layout>
      <ProductFamilyList />
    </Layout>
  )
}

export default NewProducts
