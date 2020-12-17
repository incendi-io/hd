import React, { FC } from 'react'

import PromoImage from '~components/PromoImage'
import TheLatestNews from '~components/TheLatestNews'

import FeaturedProducts from './components/FeaturedProducts'
import Parts from './components/Parts'

const HomeTemplate: FC<unknown> = (): React.ReactElement => (
  <>
    <PromoImage url="/images/home-page-background.jpg" />
    <Parts />
    <FeaturedProducts />
    <TheLatestNews />
  </>
)

export default HomeTemplate
