import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

import HomeRoute from './home'

export default class Router extends Component {
  render() {
    return (
      <div className="react-root">
        <Header />
        <div className="fl-1">
          <Route exact path="/" component={HomeRoute} />
        </div>
        <Footer />
      </div>
    )
  }
}
