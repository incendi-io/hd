import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { FC, useState } from 'react'
import { Button } from 'react-bootstrap'

import styles from './FacetSearch.module.scss'

type Props = {
  list: {
    title: string
    count: number
  }[]
}

const FacetSearch: FC<Props> = ({ list }) => {
  const [activeFacet, setActiveFacet] = useState('')

  return (
    <div className="component-content">
      <div className={styles.facetHeading}>
        <h4 className="facet-title">Narrow Results</h4>
        <Button variant={'link'} className="clear-filter has-active-facet">
          <FontAwesomeIcon icon={faTimesCircle} />
        </Button>
      </div>
      <div className="contentContainer">
        <div className="facet-search-filter">
          {list.map((item, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
            <p
              key={index}
              className={classNames(styles.facetValue, {
                [styles.activeFacet]: item.title === activeFacet,
              })}
              onClick={() => setActiveFacet(item.title)}>
              <span>
                {item.title}
                <span className="facet-count">({item.count})</span>
              </span>
            </p>
          ))}
        </div>
      </div>
      <div className="bottom-remove-filter">
        <Button>Clear Filter</Button>
      </div>
    </div>
  )
}

export default FacetSearch
