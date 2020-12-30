import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

import { News, RawNews } from '~types/News'

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
    <Container className="mr-0 p-0">
      <div>The Latest</div>
      <Row>
        {news.map((item) => (
          <Card as="a" href={item.link} key={item.id} style={{ width: '22rem' }}>
            <Card.Img variant="top" src={item.image.url} alt={item.image.alt} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.createAt}</Card.Text>
            </Card.Body>
          </Card>
        ))}
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
