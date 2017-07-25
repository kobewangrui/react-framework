import React, { Component } from 'react'

export default class Group extends Component{
    constructor(){
        super()

    }
    render(){
        return(
            <div>
                <div>这是个组件。。。。-----{this.props.name}-----</div>
            </div>
        )
    }
}