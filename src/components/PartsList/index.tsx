//TODO: css modules not working again, wtf, how even debug it?
import './PartsList.modules.scss'

import React, { FC } from 'react'
import { Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

import PartCard from '~components/PartCard'
import { Part } from '~types/Part'

type Props = {
  title: string
  parts: Part[]
}

const PartsList: FC<Props> = ({ title, parts }): React.ReactElement => {
  return (
    <>
      {/*this div to make row-splitter even*/}
      <div></div>
      <Col className="container row-splitter">
        <Row>
          <Col xs={12} className="component plain-html">
            <div className="component-content">
              <h2>{title}</h2>
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
      </Col>
    </>
  )
}

export default PartsList
