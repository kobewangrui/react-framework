import React, { Component } from 'react'

export default class SyncView extends Component {
  state = {//没有constructor可以这么写，根据情况而定（暂时这么理解）
    name: 'Sync'
  }
  // 两种写法而已constructor中必须有super()，而且必须用this.state{}
  // constructor(){
  //     super()
  //     this.state = {
  //       name : 'aSync'
  //     }
  //   }
  componentWillMount(){
    console.log(this.state);
  }
  render () {
    return (
      <p>
        I'm {this.state.name} View.
      </p>
    )
  }
}
