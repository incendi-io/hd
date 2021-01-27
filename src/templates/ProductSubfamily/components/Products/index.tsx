import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, ReactElement } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/cjs/Button'

import { Product } from '~types/Product'

//TODO: organize styles
import productStyles from '../../../../pages/products/Products.module.scss'
import styles from './Products.module.scss'

type Props = {
  products: Product[]
}

const Products: FC<Props> = ({ products }): ReactElement => (
  <div>
    <h3 className={styles.productSpecificationTitle}>Specifications</h3>
    {products.map((product) => (
      <div key={product.id} className={styles.productSpecContainer}>
        <h4 className="field-variant-title">{product.name}</h4>
        <div className={styles.fieldProductspecs}>
          <Row className={styles.productSpecRow}>
            {['1', '2', '3', '4', '5'].map(
              (i) =>
                product[`specFieldName${i}`] && (
                  <Col key={i} xs={6} className={styles.productSpecColItem}>
                    <div>
                      <strong>{product[`specFieldName${i}`]}</strong>
                    </div>
                    <div>{product[`specFieldValue${i}`]}</div>
                  </Col>
                )
            )}
          </Row>
        </div>
        <Button
          size="lg"
          className={`${productStyles.buttonWithIcon} hd-btn hd-btn-1 btn-light btn-block mt-3 px-3 justify-content-center`}
          href={product.brochureUrl}
          target="_blank">
          <FontAwesomeIcon icon={faDownload} className="mr-3" width={18} />
          <span>DOWNLOAD BROCHURE</span>
        </Button>
      </div>
    ))}
  </div>
)

export default Products
