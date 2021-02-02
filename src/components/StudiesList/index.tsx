//TODO: css modules not working again, wtf, how even debug it?
import './StudiesList.modules.scss'

import React, { FC } from 'react'

import StudiesCard from '~components/StudiesCard'
import { News } from '~types/News'

type Props = {
  news: News[]
}

const StudiesList: FC<Props> = ({ news }): React.ReactElement => {
  return (
    <>
      {!news.length && <div className="no-results">No results found</div>}
      <ul className="search-result-list">
        {news.map((item) => (
          <li key={item.id}>
            <StudiesCard item={item} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default StudiesList
