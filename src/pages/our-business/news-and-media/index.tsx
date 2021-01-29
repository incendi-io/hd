import { faChevronRight, faHome, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { useState } from 'react'
import { Breadcrumb, Button } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Layout from '~components/Layout'
import NewsList from '~components/NewsList'
import PromoImage from '~components/PromoImage'
import { News } from '~types/News'

import styles from './NewsAndMedia.module.scss'

const mockCategories = [
  { title: 'Civil', count: 2 },
  { title: 'Construction', count: 12 },
  { title: 'Corporate', count: 22 },
  { title: 'Mining', count: 5 },
  { title: 'Partnerships', count: 13 },
  { title: 'People', count: 52 },
]

export const mockNews: News[] = [
  {
    id: '1',
    link: 'news/2020/12/14/5/38/qantas-airstairs-come-a-full-circle',
    title: 'October/November 2020 Events',
    createAt: '01 October 2020',
    image: {
      id: '1',
      alt: '',
      url: '/images/mock/news-1-big.jpg',
    },
  },
  {
    id: '1',
    link: 'news/2020/12/14/5/38/qantas-airstairs-come-a-full-circle',
    title: 'October/November 2020 Events',
    createAt: '01 October 2020',
    image: {
      id: '1',
      alt: '',
      url: '/images/mock/news-1-big.jpg',
    },
  },
  {
    id: '1',
    link: 'news/2020/12/14/5/38/qantas-airstairs-come-a-full-circle',
    title: 'October/November 2020 Events',
    createAt: '01 October 2020',
    image: {
      id: '1',
      alt: '',
      url: '/images/mock/news-1-big.jpg',
    },
  },
  {
    id: '1',
    link: 'news/2020/12/14/5/38/qantas-airstairs-come-a-full-circle',
    title: 'October/November 2020 Events',
    createAt: '01 October 2020',
    image: {
      id: '1',
      alt: '',
      url: '/images/mock/news-1-big.jpg',
    },
  },
  {
    id: '1',
    link: 'news/2020/12/14/5/38/qantas-airstairs-come-a-full-circle',
    title: 'October/November 2020 Events',
    createAt: '01 October 2020',
    image: {
      id: '1',
      alt: '',
      url: '/images/mock/news-1-big.jpg',
    },
  },
  {
    id: '1',
    link: 'news/2020/12/14/5/38/qantas-airstairs-come-a-full-circle',
    title: 'October/November 2020 Events',
    createAt: '01 October 2020',
    image: {
      id: '1',
      alt: '',
      url: '/images/mock/news-1-big.jpg',
    },
  },
]

const NewsAndMediaPage = (): React.ReactElement => {
  const [activeFacet, setActiveFacet] = useState('')

  return (
    <Layout>
      <PromoImage
        url="/images/longwall-shearer--el3000.jpg"
        useOverlay={true}
        title="News. Events. Media."
        subTitle="OUR BUSINESS"
      />
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            {/*TODO: in order to make Breadcrumb component we need to be able to fetch routes info, so either need to create some routes list file, or just use some routes plugin like https://www.gatsbyjs.com/plugins/gatsby-plugin-dynamic-routes/ which have configuration in separate file already*/}
            <Col xs={12} className="component navigation-title initialized">
              <div className="component-content">
                <Breadcrumb className={styles.breadcrump}>
                  <Breadcrumb.Item href="/">
                    <FontAwesomeIcon icon={faHome} title={'Home'} className={styles.homeIcon} />
                  </Breadcrumb.Item>
                  <FontAwesomeIcon icon={faChevronRight} className={styles.separator} />
                  <Breadcrumb.Item href="/our-business">Our Business</Breadcrumb.Item>
                  <FontAwesomeIcon icon={faChevronRight} className={styles.separator} />
                  <Breadcrumb.Item href="/our-business/news-and-media">
                    News & Media
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col
              xs={3}
              lg={3}
              className="component facet-single-selection-list facet-sxatags facet-component">
              <div className="component-content">
                <div className={styles.facetHeading}>
                  <h4 className="facet-title">Narrow Results</h4>
                  <Button variant={'link'} className="clear-filter has-active-facet">
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </Button>
                </div>
                <div className="contentContainer">
                  <div className="facet-search-filter">
                    {mockCategories.map((item, index) => (
                      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                      <p
                        key={index}
                        className={classNames(styles.facetValue, {
                          [styles.activeFacet]: item.title === activeFacet,
                        })}
                        onClick={() => setActiveFacet(item.title)}>
                        <span>
                          {item.title}
                          <span className="facet-count">({item.count})</span>
                        </span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="bottom-remove-filter">
                  <Button>Clear Filter</Button>
                </div>
              </div>
            </Col>
            <Col xs={9} lg={9} className="component search-results search-result-related-news">
              <NewsList news={mockNews} />
            </Col>
            <Col xs={12} lg={{ span: 4, offset: 4 }} className="component load-more">
              <div className="component-content hd-btn icon-right icon-chevron-right p-0">
                <Button
                  variant={'primary'}
                  className="btn-block hd-btn d-flex align-items-center justify-content-center">
                  <span>Load More</span>
                  <FontAwesomeIcon icon={faChevronRight} width={28} className={styles.iconRight} />
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default NewsAndMediaPage

// export const query = graphql`
//   query News() {
//     news: allContentfulNews {
//         nodes {
//           id
//           slug
//           createdAt
//         }
//       }
//   }
// `
