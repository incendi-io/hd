import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Layout from '~components/Layout'
import { RawNews } from '~types/News'

type RawData = {
  news: RawNews
}

type Props = {
  data: RawData
}

const NewsTemplate: FC<Props> = ({ data }): React.ReactElement => {
  console.log(data)
  return (
    <Layout>
      <div>News</div>
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
