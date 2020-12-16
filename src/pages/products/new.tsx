import React, { FC } from 'react'

import Layout from '~components/Layout'
import ProductFamilyList from '~components/ProductFamilyList'

const NewProducts: FC<unknown> = (): React.ReactElement => {
  return (
    <Layout>
      <ProductFamilyList />
    </Layout>
  )
}

export default NewProducts
