import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Breadcrumbs from '~components/Breadcrumbs'
import FacetSearch from '~components/FacetSearch'
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

const NewsAndMediaPage = (): React.ReactElement => {
  const data = useStaticQuery(query)
  const news = newsMapper(data.news)
  //if (!news.length) news = mockNews

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
            <Col xs={12} className="component navigation-title initialized">
              <Breadcrumbs
                list={[
                  {
                    title: 'Our Business',
                    url: '/our-business',
                  },
                  {
                    title: 'News & Media',
                    url: '/our-business/news-and-media',
                  },
                ]}
              />
            </Col>
            <Col
              xs={3}
              lg={3}
              className="component facet-single-selection-list facet-sxatags facet-component">
              <FacetSearch list={mockCategories} />
            </Col>
            <Col xs={9} lg={9} className="component search-results search-result-related-news">
              <NewsList news={news} />
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

export type RawSingleNews = {
  id: string
  slug: string
  createdAt: string
  title: string
  node_locale: string
  children: {
    id: string
  }[]
  parent?: {
    id: string
  } | null
  sys: {
    type: string
    revision: string
  }
  body: {
    raw: string
  }
  images: {
    id: string
    title: string
    file: {
      url: string
      fileName: string
      contentType: string
    }
  }
}

export interface RawNews {
  nodes: RawSingleNews[]
}

function newsMapper(rawData: RawNews): News[] {
  if (!rawData?.nodes?.length) {
    return []
  }
  return rawData.nodes.map((item) => ({
    id: item.id,
    link: item.slug,
    title: item.title,
    createAt: item.createdAt,
    image: {
      id: item.images.id,
      alt: item.images.title,
      url: item.images.file.url,
    },
  }))
}

export const query = graphql`
  query News {
    news: allContentfulNews {
      nodes {
        id
        slug
        createdAt
        title
        node_locale
        children {
          id
        }
        parent {
          id
        }
        sys {
          type
          revision
        }
        body {
          raw
        }
        images {
          id
          title
          file {
            url
            fileName
            contentType
          }
        }
      }
    }
  }
`
