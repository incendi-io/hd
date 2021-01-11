import React, { FC, ReactElement } from 'react'
import Button from 'react-bootstrap/cjs/Button'

import Layout from '~components/Layout'

const NotFoundPage: FC<unknown> = (): ReactElement => (
  <Layout>
    <h2>Oops</h2>
    <h1>We didn&apos;t find anything</h1>
    <Button href={'/'}>Back to Home</Button>
  </Layout>
)

export default NotFoundPage
