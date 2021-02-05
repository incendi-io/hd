//TODO: css modules not working again, wtf, how even debug it?
import './PartsList.modules.scss'

import React, { FC } from 'react'
import { Col, Dropdown, Pagination } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

import PartCard from '~components/PartCard'
import { Part } from '~types/Part'

type Props = {
  title: string
  parts: Part[]
  pageSize?: number
  totalCount?: number
  skip?: number
  hasFilter?: boolean
  hasPageSizeInfo?: boolean
}

const PartsList: FC<Props> = ({
  title,
  parts,
  pageSize = 0,
  totalCount,
  skip = 0,
  hasFilter,
  hasPageSizeInfo,
}): React.ReactElement => {
  return (
    <>
      {/*this div to make row-splitter even*/}
      <div></div>
      <Col className="container row-splitter">
        <Row>
          <Col xs={12} className="component plain-html">
            <div className="component-content d-flex align-items-center">
              <h2 className="d-inline-block">{title}</h2>
              {hasPageSizeInfo && (
                <h5 className="d-inline-block text-light ml-3">
                  {skip + 1}-{pageSize + 1} of {totalCount}
                </h5>
              )}
              {hasFilter && (
                <div className="ml-auto">
                  <h5 className="text-dark d-inline-block">Sort by:</h5>
                  <Dropdown className="d-inline-block ml-2">
                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                      Featured
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Featured</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Featured</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Featured</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="component search-results search-result-product-category mx-n2">
            {!parts.length && <div className="no-results">No results found</div>}
            <ul className="search-result-list">
              {parts.map((part) => (
                <li key={part.id}>
                  <PartCard item={part} />
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row className="d-flex justify-content-end">
          <Pagination>
            {[...Array(6)].map((i, index) => (
              <Pagination.Item key={index} active={index === 1}>
                {index}
              </Pagination.Item>
            ))}
          </Pagination>
        </Row>
      </Col>
    </>
  )
}

export default PartsList
