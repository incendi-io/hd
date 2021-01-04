import React, { FC } from 'react'

import PromoImage from '~components/PromoImage'
import TheLatestNews from '~components/TheLatestNews'

import EqualizedContent from './components/EqualizedContent'
import FeaturedProducts from './components/FeaturedProducts'
import Parts from './components/Parts'
import SpareParts from './components/SpareParts'
import TopInfo from './components/TopInfo'
import YourAdvantage from './components/YourAdvantege'
import styles from './Home.module.css'

const HomeTemplate: FC<unknown> = (): React.ReactElement => (
  <div className={styles.container}>
    <PromoImage url="/images/home-page-background.jpg" useOverlay />
    <Parts />
    <TopInfo />
    <FeaturedProducts />
    <TheLatestNews />
    <YourAdvantage />
    <EqualizedContent />
    <SpareParts />
  </div>
)

export default HomeTemplate
