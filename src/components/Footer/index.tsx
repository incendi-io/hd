import React, { FC } from 'react'
import Container from 'react-bootstrap/cjs/Container'
import Row from 'react-bootstrap/cjs/Row'
import Col from 'react-bootstrap/cjs/Col'
import Nav from 'react-bootstrap/cjs/Nav'

const Footer: FC<unknown> = (): React.ReactElement => (
  <Container>
    <Row>
      <Col>{`Hastings Deering © ${new Date().getFullYear()}. All Rights Reserved.`}</Col>
      <Col>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/legal/terms">Terms & Conditions</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/legal/privacy">Privacy Policy</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/legal/disclaimer">Disclaimer</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
    </Row>
  </Container>
)

export default Footer
