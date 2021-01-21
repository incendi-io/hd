import './ProductSearch.scss'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useEffect, useState } from 'react'
import { Button, Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import { StringParam, useQueryParam } from 'use-query-params'

type Props = {
  searchValueChange?: (searchValue: string) => void
  className?: string
}

const ProductSearch: FC<Props> = ({ className, searchValueChange }) => {
  const [q, setQ] = useQueryParam('q', StringParam)
  const [searchValue, setSearchValue] = useState(q as string)

  useEffect(() => {
    if (searchValueChange && typeof q !== 'undefined' && q !== null) searchValueChange(q)
  }, [q])

  return (
    <Col className={className}>
      <Row>
        <Col xs={12} lg={6} className="component search-box horizontal product-search initialized">
          <div className="component-content">
            <span className="twitter-typeahead">
              <input
                value={searchValue}
                type="text"
                className="search-box-input form-control tt-hint h-100"
                autoComplete="off"
                spellCheck="false"
                placeholder="Search"
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && setQ(searchValue)}
              />
            </span>
            <Button
              className="search-box-button"
              type="submit"
              size={'lg'}
              onClick={() => setQ(searchValue)}>
              <FontAwesomeIcon icon={faSearch} title={'Find'} />
            </Button>
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default ProductSearch
