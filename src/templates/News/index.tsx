import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'
import Moment from 'react-moment'

import Breadcrumbs from '~components/Breadcrumbs'
import Layout from '~components/Layout'
import NewsList from '~components/NewsList'
import PromoImage from '~components/PromoImage'
import { RawNews } from '~types/News'
import { mockNews } from '~utils/mocks/news'

type RawData = {
  news: RawNews
}

type ContentEntity = {
  value: string
  marks: unknown[]
  data: unknown
  nodeType: string
}

type ContentPart = {
  content: ContentEntity[]
  data: unknown
  nodeType: string
}

type NewsContent = {
  content: ContentPart[]
  data: unknown
  nodeType: string
}

type Props = {
  data: RawData
}

const NewsTemplate: FC<Props> = ({ data }): React.ReactElement => {
  //console.log(data, JSON.parse(data.news.body.raw))
  const newsContent: NewsContent = JSON.parse(data.news.body.raw)
  return (
    <Layout>
      <PromoImage url={data.news.images.file.url} useOverlay={true} title={data.news.title} />
      <div className="component rich-text col-12">
        <div className="component-content" />
      </div>
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col
              xs={12}
              lg={{ span: 8, offset: 2 }}
              className="component navigation-title initialized">
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
                  {
                    title: data.news.title,
                    url: `/our-business/news-and-media/${data.news.slug}`,
                  },
                ]}
              />
            </Col>
            <Col xs={12} lg={{ span: 8, offset: 2 }} className="component content rich-text">
              <div className="component-content">
                <p className="hd-p4 field-news-display-date">
                  <Moment format="DD MMMM YYYY">{data.news.createdAt}</Moment>
                </p>
                <div className="field-content">
                  {newsContent.content.map((part, index) => {
                    let tag = 'p'
                    switch (part.nodeType) {
                      case 'heading-2': {
                        tag = 'h2'
                        break
                      }
                      case 'embedded-asset-block': {
                        break
                      }
                    }
                    return React.createElement(
                      tag,
                      { key: index },
                      part.content.reduce((acc, entity) => `${acc}\n${entity.value}`, '')
                    )
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="component row-splitter ">
        <div className="container">
          <Row>
            <Col xs={12} className="component rich-text">
              <div className="component-content">
                <h3 className="mt-3">Industry News</h3>
              </div>
            </Col>
            <Col xs={12} className="component search-results search-result-related-news">
              <NewsList news={mockNews.splice(0, 3)} />
            </Col>
          </Row>
        </div>
      </div>
    </Layout>
  )
}

export default NewsTemplate

export const query = graphql`
  query GetNewsById($id: String!) {
    news: contentfulNews(id: { eq: $id }) {
      id
      createdAt
      title
      body {
        references {
          file {
            url
          }
          title
          description
          createdAt
        }
        raw
      }
      images {
        file {
          url
        }
      }
    }
  }
`
