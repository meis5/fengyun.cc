import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <div className="ctn fl jc-b">
          <div className="fl">
            <Link to="/">风云</Link>
            <Link to="/works">作品</Link>
            <Link to="/about">关于</Link>
            <Link to="/hiring">招聘</Link>
          </div>
          <div className="fl">
            <Link to="/login">登录</Link>
            <Link to="/register">注册</Link>
            <Link to="/user">用户中心</Link>
          </div>
        </div>
      </div>
    )
  }
}
