import './ProductSearch.scss'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useEffect, useState } from 'react'
import { Button, Col, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import { StringParam, useQueryParam } from 'use-query-params'

type Category = {
  title: string
  slug: string
}
type Props = {
  searchValueChange?: (searchValue: string) => void
  catValueChange?: (catValue: string) => void
  className?: string
  fullWidth?: boolean
  searchButtonPosition?: 'left' | 'right'
  categories?: Category[]
}

const ProductSearch: FC<Props> = ({
  className,
  searchValueChange,
  catValueChange,
  fullWidth,
  searchButtonPosition = 'right',
  categories = [],
}) => {
  const [q, setQ] = useQueryParam('q', StringParam)
  const [searchValue, setSearchValue] = useState(q as string)
  useEffect(() => {
    if (searchValueChange && typeof q !== 'undefined' && q !== null) searchValueChange(q)
  }, [q])

  const [cat, setCat] = useQueryParam('cat', StringParam)
  useEffect(() => {
    if (catValueChange && typeof cat !== 'undefined' && cat !== null) catValueChange(cat)
  }, [cat])

  return (
    <Col className={className}>
      <Row>
        <Col
          xs={12}
          lg={fullWidth ? 12 : 6}
          className="component search-box horizontal product-search initialized">
          <div className="component-content">
            {searchButtonPosition === 'left' && (
              <Button
                className="search-box-button"
                type="submit"
                size={'lg'}
                onClick={() => setQ(searchValue)}>
                <FontAwesomeIcon icon={faSearch} title={'Find'} />
              </Button>
            )}
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
            {categories.length > 0 && (
              <DropdownButton
                as={InputGroup.Append}
                variant="outline-dark"
                className="btn-white search-box-button-border"
                title="Category"
                onSelect={(slug) => {
                  setCat(slug)
                }}>
                <Dropdown.Item href="all" onClick={(e) => e.preventDefault()}>
                  All categories
                </Dropdown.Item>
                <Dropdown.Divider />
                {categories.map((cat, index) => (
                  <Dropdown.Item key={index} href={cat.slug} onClick={(e) => e.preventDefault()}>
                    {cat.title}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            )}
            {searchButtonPosition === 'right' && (
              <Button
                className="search-box-button"
                type="submit"
                size={'lg'}
                onClick={() => setQ(searchValue)}>
                <FontAwesomeIcon icon={faSearch} title={'Find'} />
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default ProductSearch
