import React, { Component } from 'react'

export default class Group extends Component{
    constructor(){
        super()

    }
    render(){
        return(
            <div>
                <div>这是个复用组件：{this.props.name}</div>
            </div>
        )
    }
}