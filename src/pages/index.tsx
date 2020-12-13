import * as React from 'react'

import { Layout } from '~components/Layout'
import ProductFamilyList from '~components/ProductFamilyList'
import ProductSubFamilyList from '~components/ProductSubFamilyList'

const RootPage = (): React.ReactNode => (
  <Layout>
    <ProductFamilyList />
    <ProductSubFamilyList />
  </Layout>
)

export default RootPage
