import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useStaticQuery } from 'gatsby'
import React from 'react'
import { Button } from 'react-bootstrap'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import Breadcrumbs from '~components/Breadcrumbs'
import FacetSearch from '~components/FacetSearch'
import Layout from '~components/Layout'
import PromoImage from '~components/PromoImage'
import StudiesList from '~components/StudiesList'
import { News } from '~types/News'

import styles from './CaseStudies.module.scss'
import { query } from './news-and-media'

const mockCategories = [
  { title: 'Civil', count: 2 },
  { title: 'Plumbing and Drainage', count: 1 },
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

const CaseStudiesPage = (): React.ReactElement => {
  const data = useStaticQuery(query)
  let news = newsMapper(data.news)
  if (!news.length) news = mockNews

  return (
    <Layout>
      <PromoImage
        url="/images/leadership_800x533.jpg"
        useOverlay={true}
        title="Case Studies"
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
                    title: 'Case Studies',
                    url: '/our-business/case-studies',
                  },
                ]}
              />
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} className="component rich-text">
              <div className="component-content">
                <h1>Case Studies</h1>
              </div>
            </Col>
            <Col
              xs={3}
              lg={3}
              className="component facet-single-selection-list facet-sxatags facet-component">
              <FacetSearch list={mockCategories} />
            </Col>
            <Col xs={9} lg={9} className="component search-results search-result-related-news">
              <StudiesList news={news} />
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

export default CaseStudiesPage

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
