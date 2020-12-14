import { graphql } from 'gatsby'
import React, { FC } from 'react'

type RawData = {
  news: {
    id: string
    createdAt: string
    title: string
    body: {
      references: {
        file: {
          url: string
        }
        title: string
        description: string
        createdAt: string
      }
      raw: string
    }
    images: {
      file: {
        url: string
      }
    }
  }
}

type Props = {
  data: RawData
}

const NewsTemplate: FC<Props> = ({ data }): React.ReactElement => {
  console.log(data)
  return <div>News</div>
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
