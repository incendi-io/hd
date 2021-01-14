import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useWindowSize from '@rooks/use-window-size'
import classNames from 'classnames'
import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { isMobile } from 'react-device-detect'
import Helmet from 'react-helmet'

import { HoverableDropdown } from '~components/HoverableDropdown'

import { gridBreakpointsMd } from '../exports.scss'
import styles from './HeaderMenu.module.scss'

type Link = {
  key: string
  title: string
  link: string
}

type HeaderLink = {
  key: string
  title: string
  link?: string
  links?: Link[]
}

const headerLinks: HeaderLink[] = [
  {
    key: 'products',
    title: 'Products',
    links: [
      { key: 'new-equipment', title: 'New Equipment', link: '/products/new' },
      { key: 'used-equipment', title: 'Used Equipment', link: '/products/catused' },
      { key: 'cat-rental-equipment', title: 'Cat Rental Equipment', link: '/products/rental' },
    ],
  },
  {
    key: 'construction',
    title: 'Construction',
    links: [
      { key: 'agriculture', title: 'Agriculture', link: '/construction/agriculture' },
      { key: 'civil', title: 'Civil', link: '/construction/civil' },
      { key: 'demolition', title: 'Demolition', link: '/construction/demolition' },
      { key: 'forestry', title: 'Forestry', link: '/construction/forestry' },
      { key: 'landscaping', title: 'Landscaping', link: '/construction/landscaping' },
      {
        key: 'plumbing-drainage',
        title: 'Plumbing & Drainage',
        link: '/construction/plumbing-drainage',
      },
      { key: 'quarry', title: 'Quarry', link: '/construction/quarry' },
      { key: 'residential', title: 'Residential', link: '/construction/residential' },
      { key: 'roads', title: 'Roads', link: '/construction/roads' },
    ],
  },
  {
    key: 'mining',
    title: 'Mining',
    link: '/mining-solutions',
  },
  {
    key: 'buying',
    title: 'Buying',
    links: [
      {
        key: 'current-promotions',
        title: 'Current Promotions',
        link: '/buying/current-promotions',
      },
      {
        key: 'hdadvantage-program',
        title: 'HDAdvantage™ Program',
        link: '/buying/hdadvantage-program',
      },
      { key: 'visionlink', title: 'Visionlink™', link: '/buying/visionlink-daily' },
      { key: 'customer-support', title: 'Customer Support', link: '/buying/customer-support' },
      {
        key: 'equipment-protection',
        title: 'Equipment Protection',
        link: '/buying/equipment-protection',
      },
      {
        key: 'finance-insurance',
        title: 'Finance and Insurance',
        link: '/buying/finance-and-insurance',
      },
      {
        key: 'credit-application',
        title: 'Credit Application',
        link: '/buying/credit-application',
      },
      { key: 'service-coverage', title: 'Service Coverage', link: '/buying/service-coverage' },
    ],
  },
  {
    key: 'owning',
    title: 'Owning',
    links: [
      { key: 'book-a-service', title: 'Book a Service', link: '/owning/book-a-service' },
      {
        key: 'your-hastings-deering',
        title: 'Your Hastings Deering',
        link: '/owning/your-hastings-deering',
      },
      { key: 'buy-parts', title: 'Buy Parts', link: '/owning/buy-parts' },
      { key: 'repair-options', title: 'Repair Options', link: '/owning/repair-options' },
      {
        key: 'technology-solutions',
        title: 'Technology Solutions',
        link: '/owning/technology-solutions',
      },
      {
        key: 'marine-power-systems',
        title: 'Marine Power Systems',
        link: '/owning/cat-marine-power-systems',
      },
      {
        key: 'energy-and-transport',
        title: 'Energy and Transport',
        link: '/owning/energy-and-transport',
      },
      {
        key: 'training-solutions',
        title: 'Training Solutions',
        link: '/owning/training-solutions',
      },
      {
        key: 'equipment-safety-bulletins',
        title: 'Equipment Safety Bulletins',
        link: '/owning/safety-bulletins',
      },
      {
        key: 'visionlink-unified-suite',
        title: 'Visionlink™ Unified Suite',
        link: '/owning/visionlink',
      },
      { key: 'document-review', title: 'Document Review', link: '/owning/document-review' },
      { key: 'Oil Commander', title: 'Oil Commander', link: '/owning/oil-commander' },
    ],
  },
  {
    key: 'parts',
    title: 'Parts',
    link: '/parts',
  },
  {
    key: 'our-business',
    title: 'Our Business',
    links: [
      { key: 'about-us', title: 'About Us', link: '/our-business/about-us' },
      { key: 'your-advantage', title: 'Your Advantage', link: '/our-business/your-advantage' },
      { key: 'news-media', title: 'News & Media', link: '/our-business/news-and-media' },
      { key: 'case-studies', title: 'Case Studies', link: '/our-business/case-studies' },
      { key: 'our-commitment', title: 'Our Commitment', link: '/our-business/our-commitment' },
      { key: 'working-with-us', title: 'Working With Us', link: '/our-business/working-with-us' },
      { key: 'contact-us', title: 'Contact Us', link: '/our-business/contact-us' },
    ],
  },
]

const HeaderMenu = (): React.ReactElement => {
  const { innerWidth } = useWindowSize()

  const [expanded, setExpanded] = useState('')

  const expand = (key: string) => {
    if (expanded === key) setExpanded('')
    else setExpanded(key)
  }
  return (
    <Navbar.Collapse id="basic-navbar-nav" className={styles.navbar}>
      <Helmet
        bodyAttributes={{
          class: expanded ? 'no-scroll' : '',
        }}
      />
      <Nav
        className={classNames({
          'mr-auto': true,
          'flex-row': true,
          'flex-wrap': isMobile || (innerWidth && innerWidth <= parseInt(gridBreakpointsMd)),
        })}>
        {headerLinks.map((el, index) => {
          if (el?.links) {
            return (
              <div
                className={classNames(styles.subItem, styles.link)}
                role="button"
                tabIndex={index}
                onKeyPress={() => expand(el.key)}
                onClick={() => expand(el.key)}>
                <FontAwesomeIcon
                  icon={expanded === el.key ? faMinus : faPlus}
                  title={'Read'}
                  className={styles.icon}
                />
                <HoverableDropdown
                  title={el.title}
                  key={el.key}
                  id={el.key}
                  show={expanded === el.key}
                  className={classNames(styles.link, 'transparent-sub-menu')}>
                  {el.links.map((item) => (
                    <NavDropdown.Item href={item.link} key={item.key}>
                      {item.title}
                    </NavDropdown.Item>
                  ))}
                </HoverableDropdown>
              </div>
            )
          }

          return (
            <Nav.Item key={el.key} className={classNames(styles.subItem, styles.link)}>
              <Nav.Link href={el.link}>
                {el.title}
                <FontAwesomeIcon icon={faChevronRight} title={'Read'} className={styles.icon} />
              </Nav.Link>
            </Nav.Item>
          )
        })}
      </Nav>
    </Navbar.Collapse>
  )
}

export default HeaderMenu
