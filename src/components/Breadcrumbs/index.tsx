import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { Breadcrumb } from 'react-bootstrap'

import styles from './Breadcrumbs.module.scss'

type Props = {
  list: {
    title: string
    url: string
  }[]
}

const Breadcrumbs: FC<Props> = ({ list }) => {
  /*TODO: in order to make Breadcrumb component we need to be able to fetch routes info, so either need to create some routes list file, or just use some routes plugin like https://www.gatsbyjs.com/plugins/gatsby-plugin-dynamic-routes/ which have configuration in separate file already*/
  return (
    <div className="component-content">
      <Breadcrumb className={styles.breadcrump}>
        <Breadcrumb.Item href="/">
          <FontAwesomeIcon icon={faHome} title={'Home'} className={styles.homeIcon} />
        </Breadcrumb.Item>
        {list.map((link, index) => (
          <React.Fragment key={index}>
            <FontAwesomeIcon icon={faChevronRight} className={styles.separator} />
            <Breadcrumb.Item href={link.url}>{link.title}</Breadcrumb.Item>
          </React.Fragment>
        ))}
      </Breadcrumb>
    </div>
  )
}

export default Breadcrumbs
