import React, { FC, ReactElement } from 'react'

export const Logo: FC<
  { src?: string } & React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
> = ({ src = '/images/hdal-logo.png', ...props }): ReactElement => (
  <img src={src} alt="logo" {...props} />
)
