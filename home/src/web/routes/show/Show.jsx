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
              <div className="fl-r show-case-box-card">
                <div>
                  天天大贰是一款非常好玩的游戏,真的农村人不说话.我们泸州人都爱玩,
                  自从我玩了天天大贰,整个人精神了,每次考试都考100分,女朋友也是一打打的
                  来找我.哎我都 选不过来了 哇哈哈.
                </div>
                <a href="/">
                  <img src="https://img.alicdn.com/tfs/TB1Jt4UQFXXXXcRaXXXXXXXXXXX-476-538.jpg_1080x1800q75s0.jpg_.webp" alt="" />
                </a>
              </div>
            </div>
            <div className="c c-12 c-md-6 c-lg-3">
              <div className="fl-r show-case-box-card">
                <div>
                  天天大贰是一款非常好玩的游戏,真的农村人不说话.我们泸州人都爱玩,
                  自从我玩了天天大贰,整个人精神了,每次考试都考100分,女朋友也是一打打的
                  来找我.哎我都 选不过来了 哇哈哈.
                </div>
                <a href="/">
                  <img src="https://img.alicdn.com/tfs/TB1dz1jQFXXXXchXpXXXXXXXXXX-476-538.jpg_1080x1800q75s0.jpg_.webp" alt="" />
                </a>
              </div>
            </div>
            <div className="c c-12 c-md-6 c-lg-3">
              <div className="fl-r show-case-box-card">
                <div>
                  天天大贰是一款非常好玩的游戏,真的农村人不说话.我们泸州人都爱玩,
                  自从我玩了天天大贰,整个人精神了,每次考试都考100分,女朋友也是一打打的
                  来找我.哎我都 选不过来了 哇哈哈.
                </div>
                <a href="/">
                  <img src="https://img.alicdn.com/tfs/TB15_p.QFXXXXapXVXXXXXXXXXX-476-538.jpg_1080x1800q75s0.jpg_.webp" alt="" />
                </a>
              </div>
            </div>
            <div className="c c-12 c-md-6 c-lg-3">
              <div className="fl-r show-case-box-card">
                <div>
                  天天大贰是一款非常好玩的游戏,真的农村人不说话.我们泸州人都爱玩,
                  自从我玩了天天大贰,整个人精神了,每次考试都考100分,女朋友也是一打打的
                  来找我.哎我都 选不过来了 哇哈哈.
                </div>
                <a href="/">
                  <img src="https://img.alicdn.com/tfs/TB1RhB3QFXXXXbpaXXXXXXXXXXX-476-538.jpg_1080x1800q75s0.jpg_.webp" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
