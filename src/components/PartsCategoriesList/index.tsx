//TODO: css modules not working again, wtf, how even debug it?
import './PartsCategoriesList.modules.scss'

import React, { FC } from 'react'
import { Col } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

import PartCategoryCard from '~components/PartCategoryCard'
import { PartCategory } from '~types/PartCategory'

type Props = {
  title: string
  categories: PartCategory[]
}

const PartsCategoriesList: FC<Props> = ({ title, categories }): React.ReactElement => {
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
            {!categories.length && <div className="no-results">No results found</div>}
            <ul className="search-result-list">
              {categories.map((category) => (
                <li key={category.id}>
                  <PartCategoryCard item={category} />
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default PartsCategoriesList
