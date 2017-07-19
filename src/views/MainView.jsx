import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { NavLink as Link } from 'react-router-dom'

import Hello from 'components/Hello'
import Counter from 'components/Counter'
import logo from 'assets/image/logo.svg'
import 'assets/css/MainView.css'

export default class MainView extends Component {
  static propTypes = {
    route: PropTypes.object
  }
  render() {
    return (
      <div className='index'>
        <div className='App-header'>
          <img src={logo} className='App-logo shake-rotate' alt='logo' />
        </div>
        <div className='main-view'>
          <div className='btn-group'>
            <p>切换</p>
            <Link to='/sync' className='btn' activeClassName='active'>To Sync</Link>
            <Link to='/async' className='btn' activeClassName='active'>To Async</Link>
          </div>
          <div className='view'>
            {renderRoutes(this.props.route.childRoutes)}
          </div>
        </div>
        <Counter />
        <Hello msg='Hello World' />
      </div>
    )
  }
}
