import React, { PureComponent } from 'react'

export default class Header extends PureComponent {
  render() {
    return (
      <div className="footer">
        <div className="ctn">
            <a href="/">风云论坛</a>
            <a href="/">天天大贰</a>
            <a href="/">商务洽谈</a>
            <a href="/">业务咨询</a>
          <div>
            <a href="/">
              增值电信业务经营许可证： 浙B2-20110446
            </a>
          </div>
          <div>
            <a href="">网络文化经营许可证：浙网文[2015]0295-065号 </a>
          </div>
          <div>
            <a href="/">浙公网安备 33010002000120号</a>
          </div>
          <div>
            <a className="footer-copyright" href="/">
              © 216-2017 FENGYUN.CC 版权所有
            </a>
          </div>
        </div>
      </div>
    )
  }
}
