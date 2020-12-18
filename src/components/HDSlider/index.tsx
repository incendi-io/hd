import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './HDSlider.css'

import React, { FC, ReactElement, useEffect, useState } from 'react'
import Slider, { Settings } from 'react-slick'

import { Image } from '~types/Image'

type Props = {
  images: Image[]
}

const HDSlider: FC<Props> = ({ images }): ReactElement => {
  const [settings, setSettings] = useState<Settings>({})
  useEffect(() => {
    setSettings({
      customPaging: function customPaging(index: number): ReactElement {
        const image = images[index]
        return (
          <a>
            <img src={image.url} alt={image.alt} width={160} />
          </a>
        )
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    })
  }, [images])

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <img key={image.id} src={image.url} alt={image.alt} />
      ))}
    </Slider>
  )
}

export default HDSlider
