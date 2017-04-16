import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import ShowRoute from './show'
import WorkRoute from './works'
import AboutRoute from './about'
import HiringRoute from './hiring'
import UerRoute from './user'

export default class Router extends Component {
  render() {
    return (
      <div className="react-root">
        <Header />
        <div className="fl-1">
          <Route exact path="/" component={ShowRoute} />
          <Route path="/works" component={WorkRoute} />
          <Route path="/about" component={AboutRoute} />
          <Route path="/hiring" component={HiringRoute} />
          <Route path="/user" component={UerRoute} />
        </div>
        <Footer />
      </div>
    )
  }
}
