import React, { FC, ReactElement } from 'react'
import Button from 'react-bootstrap/cjs/Button'
import Col from 'react-bootstrap/cjs/Col'
import Row from 'react-bootstrap/cjs/Row'

import styles from './SpareParts.module.scss'

const SpareParts: FC<unknown> = (): ReactElement => (
  <div className="row-splitter">
    <Row className="container">
      <Col md={{ span: 2, offset: 2 }}>
        <img
          className={styles.img}
          src="/images/cat-parts-warranty-seal.png"
          alt="cat part warranty seal"
        />
      </Col>
      <Col md={6}>
        <h2 className="h4 p-0">Cat Spare Parts</h2>
        <div>
          <p>
            Find the spare parts you need fast and search easily online with serial # or part name.
            Hastings Deering offers over 1.4 million genuine Cat spare parts online, with instant
            pricing and availability 24/7, 365.
          </p>
          <p>Cat Electronic Parts Books (SIS) are also available.</p>
        </div>
        <div>
          <Button
            className="border-secondary mt-2 mx-1"
            variant="outline-dark"
            href="https://parts.cat.com/en/hastingsdeering?utm_source=hastingsdeering.com.au&utm_content=home+page+buy+parts+btn">
            BUY PARTS NOW
          </Button>
          <Button
            className="border-secondary mt-2 mx-1"
            variant="outline-dark"
            href="/owning/repair-options">
            VIEW REPAIR OPTIONS
          </Button>
        </div>
      </Col>
    </Row>
  </div>
)

export default SpareParts
