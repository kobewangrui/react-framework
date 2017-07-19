import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom' /**路由跳转**/

export default class Two extends Component {
    render(){
        return (
            <div>
                这是two页面
                <Link to='/one'>去one页面</Link>
                <Link to='/'>去首页</Link>
                <input type="text"/>
            </div>
        )
    }
}