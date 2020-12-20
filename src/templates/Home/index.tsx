import React, { FC } from 'react'

import PromoImage from '~components/PromoImage'
import TheLatestNews from '~components/TheLatestNews'

import FeaturedProducts from './components/FeaturedProducts'
import Parts from './components/Parts'
import TopInfo from './components/TopInfo'
import YourAdvantage from './components/YourAdvantege'
import EqualizedContent from './components/EqualizedContent'
import SpareParts from './components/SpareParts'

const HomeTemplate: FC<unknown> = (): React.ReactElement => (
  <>
    <PromoImage url="/images/home-page-background.jpg" />
    <Parts />
    <TopInfo />
    <FeaturedProducts />
    <TheLatestNews />
    <YourAdvantage />
    <EqualizedContent />
    <SpareParts />
  </>
)

export default HomeTemplate
