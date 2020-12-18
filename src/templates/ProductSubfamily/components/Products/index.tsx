import React, { FC, ReactElement } from 'react'

import { Product } from '~types/Product'
import Button from 'react-bootstrap/cjs/Button'

type Props = {
  products: Product[]
}

const Products: FC<Props> = ({ products }): ReactElement => (
  <div>
    <div>Specifications</div>
    {products.map((product) => (
      <div key={product.id}>
        <div>{product.name}</div>
        {product.specFieldName1 && (
          <div>
            <div>{product.specFieldName1}</div>
            <div>{product.specFieldValue1}</div>
          </div>
        )}
        {product.specFieldName2 && (
          <div>
            <div>{product.specFieldName2}</div>
            <div>{product.specFieldValue2}</div>
          </div>
        )}
        {product.specFieldName3 && (
          <div>
            <div>{product.specFieldName3}</div>
            <div>{product.specFieldValue3}</div>
          </div>
        )}
        {product.specFieldName4 && (
          <div>
            <div>{product.specFieldName4}</div>
            <div>{product.specFieldValue4}</div>
          </div>
        )}
        {product.specFieldName5 && (
          <div>
            <div>{product.specFieldName5}</div>
            <div>{product.specFieldValue5}</div>
          </div>
        )}
        <Button size="lg" href={product.brochureUrl} target="_blank">
          DOWNLOAD BROCHURE
        </Button>
      </div>
    ))}
  </div>
)

export default Products
