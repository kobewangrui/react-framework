import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'

export default class App extends Component {
  render () {
    return (
      <div>
        <Router>
          {renderRoutes(routes)}
        </Router>
      </div>
    )
  }
}
