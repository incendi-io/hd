import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './HDSlider.scss'

import React, { ComponentProps, FC, ReactElement, useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/cjs/Button'
import Slider, { Settings } from 'react-slick'

import { Image } from '~types/Image'

function NextArrow(props: ComponentProps<any>) {
  const { onClick } = props
  return (
    <Button
      as="a"
      className="carousel-control-next product-list-carousel__arrow slick-arrow"
      onClick={onClick}>
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </Button>
  )
}

function PrevArrow(props: ComponentProps<any>) {
  const { onClick } = props
  return (
    <Button
      as="a"
      className="carousel-control-prev product-list-carousel__arrow slick-arrow"
      onClick={onClick}>
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </Button>
  )
}

type Props = {
  images?: Image[]
  useCustomButtons?: boolean
  useCustomPaging?: boolean
  isResponsive?: boolean
  customSettings?: Settings
}

const HDSlider: FC<Props> = ({
  images,
  useCustomButtons = false,
  useCustomPaging = true,
  isResponsive = false,
  customSettings = {},
  ...props
}): ReactElement => {
  const slider = useRef<Slider>(null)
  const next = () => {
    if (slider.current) {
      slider.current.slickNext()
    }
  }
  const previous = () => {
    if (slider.current) {
      slider?.current.slickPrev()
    }
  }

  const [children, setChildren] = useState<React.ReactNode>(props.children)
  const [customPaging, setCustomPaging] = useState<(index: number) => ReactElement>(
    () => (index: number) => {
      if (children && children?.length) {
        const image = children[index]
        return <a>{image}</a>
      } else {
        return <></>
      }
    }
  )

  // split settings update, see https://github.com/akiran/react-slick/issues/1634
  const [settings, setSettings] = useState<Settings>({
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    ...customSettings,
    ...(useCustomButtons && { nextArrow: <NextArrow onClick={next} /> }),
    ...(useCustomButtons && { prevArrow: <PrevArrow onClick={previous} /> }),
    ...(isResponsive && {
      responsive: [
        {
          breakpoint: 1120,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    ...(useCustomPaging && {
      className: 'custom-paging',
      customPaging: customPaging,
    }),
  })
  // split settings update, see https://github.com/akiran/react-slick/issues/1634
  useEffect(() => {
    if (!children && images) {
      setChildren(images.map((image) => <img key={image.id} src={image.url} alt={image.alt} />))
    }
  }, [images])
  // split settings update, see https://github.com/akiran/react-slick/issues/1634
  useEffect(() => {
    if (props.children) {
      setChildren(props.children)
    }
  }, [props.children])
  // split settings update, see https://github.com/akiran/react-slick/issues/1634
  useEffect(() => {
    setCustomPaging(() => (index: number) => {
      if (children && children?.length) {
        const image = children[index]
        return <a>{image}</a>
      } else {
        return <></>
      }
    })
  }, [children])
  // split settings update, see https://github.com/akiran/react-slick/issues/1634
  useEffect(() => {
    setSettings({
      ...settings,
      ...(useCustomPaging && {
        className: 'custom-paging',
        customPaging: customPaging,
      }),
    })
  }, [useCustomPaging, customPaging])

  return (
    <Slider {...settings} ref={slider}>
      {children}
    </Slider>
  )
}

export default HDSlider
