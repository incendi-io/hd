import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

type Edge = {
  node: {
    id: string
    slug: string
    title: string
    createdAt: string
    images: {
      id: string
      alt: string
      file: {
        url: string
      }
    }
  }
}

type RawData = {
  allContentfulNews: {
    edges: Edge[]
  }
}

type News = {
  id: string
  link: string
  title: string
  createAt: string
  image: {
    id: string
    alt: string
    url: string
  }
}

const TheLatestNews = (): React.ReactElement => {
  const data = useStaticQuery<RawData>(query)
  console.log(data.allContentfulNews.edges)
  const news = dataMapper(data.allContentfulNews.edges)
  return (
    <Container>
      <div>The Latest</div>
      <Row>
        {news.map((item) => (
          <Card key={item.id} style={{ width: '22rem' }}>
            <Card.Img variant="top" src={item.image.url} alt={item.image.alt} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.createAt}</Card.Text>
              <Card.Link href={item.link}>Another Link</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  )
}

export default TheLatestNews

function dataMapper(data: Edge[]): News[] {
  return data.map((item) => ({
    id: item.node.id,
    title: item.node.title,
    link: crateNewsLink(item.node),
    image: {
      id: item.node.images.id,
      alt: item.node.images.alt,
      url: item.node.images.file.url,
    },
    createAt: item.node.createdAt,
  }))
}

type CreateNewsLinkProps = {
  slug: string
  createdAt: string
}

function crateNewsLink({ slug, createdAt }: CreateNewsLinkProps) {
  const date = new Date(createdAt)
  return `/our-business/news-and-media/news/${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getHours()}/${date.getMinutes()}/${slug}`
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
