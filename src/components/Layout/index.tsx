import 'bootstrap/dist/css/bootstrap.css'

import React, { FC } from 'react'
import Container from 'react-bootstrap/Container'
import { Header } from "~components/Header";

type Props = Record<string, unknown>

export const Layout: FC<Props> = (props) => (
  <>
    <Header />
    <Container>{props.children}</Container>
  </>
)
