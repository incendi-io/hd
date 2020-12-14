import * as React from 'react'

import { Layout } from '~components/Layout'
import ProductFamilyList from '~components/ProductFamilyList'
import TheLatestNews from '~components/TheLatestNews'

const RootPage = (): React.ReactNode => (
  <Layout>
    <ProductFamilyList />

    <TheLatestNews />
  </Layout>
)

export default RootPage
