import React from "react"
import { Carousel } from "react-bootstrap"
import * as bannerStyles from "./Banner.module.css"

const Banner = () => {
  return (
    <div className={bannerStyles.banner}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://demo.accesspressthemes.com/zigcy/wp-content/themes/store-mart-landing/inc/img/landing-page-banner.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>یا الله</h3>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://demo.accesspressthemes.com/zigcy/wp-content/themes/store-mart-landing/inc/img/landing-page-banner.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>بنر اولیه</h3>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Banner
