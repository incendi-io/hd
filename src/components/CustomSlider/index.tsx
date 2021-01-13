//TODO: when done as css modules returning empty object?
import './CustomSlider.scss'

import React, { ComponentProps, useRef } from 'react'
import { Button } from 'react-bootstrap'
import Slider from 'react-slick'

function SampleNextArrow(props: ComponentProps<any>) {
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

function SamplePrevArrow(props: ComponentProps<any>) {
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

export const CustomSlider = ({ ...props }) => {
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
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <SampleNextArrow onClick={next} />,
    prevArrow: <SamplePrevArrow onClick={previous} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  }

  return (
    <div>
      <Slider {...settings} ref={slider}>
        {props.children}
      </Slider>
    </div>
  )
}
