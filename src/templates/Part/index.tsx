import React, { FC, ReactElement } from 'react'
import Col from 'react-bootstrap/cjs/Col'
import Container from 'react-bootstrap/cjs/Container'
import Row from 'react-bootstrap/cjs/Row'

import Layout from '~components/Layout'
import { graphql } from 'gatsby'
import { RawPart } from '~types/Part'

type Props = {
  data: RawPart
}

const PartTemplate: FC<Props> = ({ data }): ReactElement => {
  const { part } = data
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            {part.images.map((url) => (
              <img src={url} alt={url} key={url} />
            ))}
          </Col>
          <Col>
            <div>{part.partNumber}: {part.partName}</div>
            <div>Brand: {part.brand}</div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div id="description-section">DESCRIPTION</div>
            <div>{part.longDescription}</div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default PartTemplate

export const query = graphql`
  query PartById($id: String!) {
    part: eCommerce(id: { eq: $id }) {
      id
      brand
      longDescription
      images
      partName
      partNumber
      shortDescription
    }
  }
`
