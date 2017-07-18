import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { NavLink as Link } from 'react-router-dom'
import './MainView.css'

export default class MainView extends Component {
  static propTypes = {
    route: PropTypes.object
  }
  render () {
    return (
      <div className='main-view'>
        <div className='btn-group'>
          <Link to='/sync' className='btn' activeClassName='active'>To Sync</Link>
          <Link to='/async' className='btn' activeClassName='active'>To Async</Link>
        </div>
        <div className='view'>
          {renderRoutes(this.props.route.childRoutes)}
        </div>
      </div>
    )
  }
}
