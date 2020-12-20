import React, { FC, ReactElement } from 'react'
import Button from 'react-bootstrap/cjs/Button'

type Props = {
  title: string
  backgroundImage: string
  button: {
    link: string
    title: string
  }
}

const EqualizedItem: FC<Props> = ({ title, backgroundImage, button }): ReactElement => (
  <div style={{ backgroundImage: `url("${backgroundImage}")`, height: 380 }}>
    <h3 className="text-white">{title}</h3>
    <Button variant="outline-light" href={button.link}>
      {button.title}
    </Button>
  </div>
)

export default EqualizedItem
