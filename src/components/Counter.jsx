import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from '$redux/actions/index'

import 'assets/css/Counter.css'

class Counter extends Component {
  static propTypes = {
    actions: PropTypes.object,//传入参数的类型
    counter: PropTypes.object//传入参数的类型
  }
  handleClick = () => {
    this.props.actions.increment()
  }
  render () {
    return (
      <div className='countOuter'>
      {JSON.stringify(this.props.counter)}
        <p>这是一个统计的全局组件</p>
        <a className='counter'
          href='javascript: void(0)'
          onClick={this.handleClick}>
          {this.props.counter.count}
        </a>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(CounterActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)//在复用组件里面抛出接口
