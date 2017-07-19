import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config' /**子路由**/
import { NavLink as Link } from 'react-router-dom' /**路由跳转**/

import 'assets/css/index.css'

export default class Index extends Component {
  render(){
    return (
      <div>
        <nav>
            <ul className='nav'>
                <li>导航1</li>
                <li>导航2</li>
                <li>导航3</li>
                <li>导航4</li>
                <li>导航5</li>
                <li>导航6</li>
            </ul>
        </nav>
          <div>
            <p>
                <Link to='/one'>去one页面</Link>
            </p>
            <p>
                <Link to={{pathname:'/two',query:{projectId:1234}}}>去two页面</Link>
            </p>
            <p>
                <Link to='/'>去首页</Link>
            </p>
            {renderRoutes(this.props.route.childRoutes)}
          </div>        
        <div>
          index footer
        </div>

      </div>
    )
  }
}