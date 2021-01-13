import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Moment from 'react-moment'

import { News, RawNews } from '~types/News'

import styles from './TheLatestNews.module.scss'

type Edge = {
  node: RawNews
}

type RawData = {
  allContentfulNews: {
    edges: Edge[]
  }
}

const TheLatestNews = (): React.ReactElement => {
  const data = useStaticQuery<RawData>(query)
  const news = dataMapper(data.allContentfulNews.edges)
  return (
    <Container className="pb-0 row-splitter">
      <Col className="rich-text col-12 position-center">
        <div className="h4 mb-0">The Latest</div>
      </Col>
      <Row className={styles.searchResultRelatedNews}>
        <ul className={styles.searchResultList}>
          {news.map((item) => (
            <li className={styles.li} key={item.id}>
              <Card as="a" className={styles.item} href={item.link}>
                <div className={styles.fieldMainImage}>
                  <Card.Img variant="top" src={item.image.url} alt={item.image.alt} />
                </div>
                <Card.Body className={styles.contentContainer}>
                  <Card.Title className={styles.titleContainer}>
                    <h5 className={styles.fieldTitle}>{item.title}</h5>
                    <FontAwesomeIcon icon={faChevronRight} title={'Read'} />
                  </Card.Title>
                  <Card.Text className={styles.caption}>
                    <Moment format="DD MMMM YYYY">{item.createAt}</Moment>
                  </Card.Text>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  )
}

export default TheLatestNews

function dataMapper(data: Edge[]): News[] {
  return data.map(({ node }) => ({
    id: node.id,
    title: node.title,
    link: crateNewsLink(node.slug, node.createdAt),
    image: {
      id: node.images.id,
      alt: node.images.alt,
      url: node.images.file.url,
    },
    createAt: node.createdAt,
  }))
}

function crateNewsLink(slug: string, createdAt: string): string {
  const date = new Date(createdAt)
  const datePath = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getHours()}/${date.getMinutes()}`

  return `/our-business/news-and-media/news/${datePath}/${slug}`.toString()
}

export const query = graphql`
  query GetLatestNews {
    allContentfulNews(limit: 3, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          slug
          title
          createdAt
          images {
            id
            alt: title
            file {
              url
            }
          }
        }
      }
    }
  }
`
