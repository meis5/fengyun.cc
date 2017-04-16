import React, { PureComponent } from 'react'
import Slider from 'react-slick'

export default class About extends PureComponent {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div>
        <Slider {...settings} className="banner-slider">
          <div className="slider-slide">
            <img src="https://img10.360buyimg.com/da/jfs/t4807/288/1277212017/173997/5a99e78/58eef878N21e3ab1f.jpg" alt="" />
          </div>
          <div className="slider-slide">
            <img src="https://img12.360buyimg.com/da/jfs/t4441/31/1327441322/119903/2770a302/58dc6726N8dab9875.jpg" alt="" />
          </div>
          <div className="slider-slide">
            <img src="https://img11.360buyimg.com/da/jfs/t4132/196/1340121366/224199/40dcb547/58c0b20eNc964116b.jpg" alt="" />
          </div>
        </Slider>
        <div className="ctn show-case-box">
          <div className="r r-g">
            <div className="c c-12 c-md-6 c-lg-3">
              <div className="bg-gray">1</div>
            </div>
            <div className="c c-12 c-md-6 c-lg-3">
              <div className="bg-gray">1</div>
            </div>
            <div className="c c-12 c-md-6 c-lg-3">
              <div className="bg-gray">1</div>
            </div>
            <div className="c c-12 c-md-6 c-lg-3">
              <div className="bg-gray">1</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
