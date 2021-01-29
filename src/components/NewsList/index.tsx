//TODO: css modules not working again, wtf, how even debug it?
import './NewsList.modules.scss'

import React, { FC } from 'react'

import NewsCard from '~components/NewsCard'
import { News } from '~types/News'

type Props = {
  news: News[]
}

const NewsList: FC<Props> = ({ news }): React.ReactElement => {
  return (
    <>
      {!news.length && <div className="no-results">No results found</div>}
      <ul className="search-result-list">
        {news.map((item) => (
          <li key={item.id}>
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default NewsList
