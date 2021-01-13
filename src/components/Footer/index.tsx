import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { FC, ReactElement, useState } from 'react'
import Col from 'react-bootstrap/cjs/Col'
import Container from 'react-bootstrap/cjs/Container'
import Nav from 'react-bootstrap/cjs/Nav'
import Row from 'react-bootstrap/cjs/Row'
import Navbar from 'react-bootstrap/Navbar'

import { Logo } from '~components/Logo'

import styles from './Footer.module.scss'

type Link = {
  key: string
  title: string
  link: string
}

type FooterLink = {
  key: string
  title: string
  links: Link[]
}

const footerLinks: FooterLink[] = [
  {
    key: 'products',
    title: 'PRODUCTS',
    links: [
      { key: 'new-equipment', title: 'New Equipment', link: '/products/new' },
      { key: 'used-equipment', title: 'Used Equipment', link: '/products/catused' },
      {
        key: 'cat-rental.tsx-equipment',
        title: 'Cat Rental Equipment',
        link: '/products/rental.tsx',
      },
    ],
  },
  {
    key: 'construction',
    title: 'CONSTRUCTION',
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
    title: 'MINING',
    links: [
      { key: 'surface-mining', title: 'Surface Mining', link: '/mining/surface-mining' },
      {
        key: 'underground-mining',
        title: 'Underground Mining',
        link: '/mining/underground-mining',
      },
    ],
  },
  {
    key: 'buying',
    title: 'BUYING',
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
    title: 'OWNING',
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
    key: 'our-business',
    title: 'OUR BUSINESS',
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

const Footer: FC<unknown> = (): ReactElement => {
  const [expanded, setExpanded] = useState('')

  const expand = (key: string) => {
    if (expanded === key) setExpanded('')
    else setExpanded(key)
  }
  return (
    <footer className="rich-text">
      <hr className={styles.divider} />
      <Container fluid className={styles.container}>
        <Row className={styles.row}>
          {footerLinks.map((item, index) => (
            <Nav
              as="ul"
              key={item.key}
              className={classNames(styles.parentNavItem, 'col d-flex flex-column')}>
              <div
                role="button"
                tabIndex={index}
                className="position-relative outline-none"
                onKeyPress={() => expand(item.key)}
                onClick={() => expand(item.key)}>
                <div className={styles.navigationTitle}>{item.title}</div>
                <FontAwesomeIcon
                  icon={expanded === item.key ? faChevronDown : faChevronRight}
                  title={'Read'}
                  className={styles.icon}
                />
              </div>
              <Navbar
                collapseOnSelect
                expand="sm"
                expanded={expanded === item.key}
                className={classNames({ 'p-0': expanded !== item.key })}>
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav a="ul" className={styles.linksSubmenu}>
                    {item.links.map((node) => (
                      <Nav.Item key={node.key} className={styles.navItem}>
                        <Nav.Link href={node.link}>{node.title}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Nav>
          ))}
        </Row>
      </Container>
      <hr className={styles.divider} />
      <Container className={classNames(styles.container, styles.componentContent)}>
        <Row className="align-items-center justify-content-between">
          <Col
            className={classNames(
              'd-flex justify-content-center visible-sm',
              styles.navItem,
              styles.smallNav,
              styles.privacyBlock
            )}>
            <p className="text-center">
              {`Hastings Deering © ${new Date().getFullYear()}.`}
              <br />
              All Rights Reserved.
            </p>
          </Col>
          <Col sm={12} md={6} className={styles.privacyBlock}>
            <Nav className="justify-content-center flex-nowrap">
              <Nav.Item className={classNames('d-flex hidden-sm', styles.navItem, styles.smallNav)}>
                <p>{`Hastings Deering © ${new Date().getFullYear()}. All Rights Reserved.`}</p>
              </Nav.Item>
              <Nav.Item className={classNames('d-flex', styles.navItem, styles.smallNav)}>
                <Nav.Link href="/legal/terms">Terms & Conditions</Nav.Link>
              </Nav.Item>
              <Nav.Item className={classNames('d-flex', styles.navItem, styles.smallNav)}>
                <Nav.Link href="/legal/privacy">Privacy Policy</Nav.Link>
              </Nav.Item>
              <Nav.Item className={classNames('d-flex', styles.navItem, styles.smallNav)}>
                <Nav.Link href="/legal/credit-reporting-privacy-notification">
                  Credit Reporting Privacy Notification
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={classNames('d-flex', styles.navItem, styles.smallNav)}>
                <Nav.Link href="/legal/disclaimer">Disclaimer Statement</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12} md={4}>
            <Nav className={classNames('justify-content-center', styles.externalLinks)}>
              <Nav.Item>
                <Nav.Link href="https://www.facebook.com/HastingsDeering/">
                  <FontAwesomeIcon icon={faFacebookF} title={'Facebook'} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://twitter.com/hastingsdeering?lang=en">
                  <FontAwesomeIcon icon={faTwitter} title={'Twitter'} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.linkedin.com/company/hastings-deering/">
                  <FontAwesomeIcon icon={faLinkedinIn} title={'LinkedIn'} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.instagram.com/hastingsdeering/?hl=en">
                  <FontAwesomeIcon icon={faInstagram} title={'Instagram'} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://www.youtube.com/channel/UCcRcI_2Nx53JuyzynfDTxfw">
                  <FontAwesomeIcon icon={faYoutube} title={'Youtube'} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={12} md={2}>
            <Nav className="justify-content-center">
              <Navbar.Brand href="/">
                <Logo className={styles.logo} src="/images/sime-darby-logo.png" />
              </Navbar.Brand>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
