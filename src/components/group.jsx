import React, { Component } from 'react'

export default class Group extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>这是个组件。。。。---{this.props.name}-----</div>
        )
    }
}