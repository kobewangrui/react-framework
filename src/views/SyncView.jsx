import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'//引入react-redux
import { bindActionCreators } from 'redux'//引入redux
import * as AsyncActions from '$redux/actions/asyncdata'


class SyncView extends Component {
  static propTypes = {
    actions: PropTypes.object,
    list_data: PropTypes.object
  }
  // state = {//没有constructor可以这么写，根据情况而定（暂时这么理解）
  //   name: 'Sync'
  // }
  // 两种写法而已constructor中必须有super()，而且必须用this.state{}
  constructor(){
      super()
      this.state = {
        name : 'aSync'
      }
    }
  componentWillMount(){
    this.props.actions.getTest();
  }
  render () {
    return (
      <p>
        ---{
          JSON.stringify(this.props.list_data)
        }---
        I'm {this.state.name} View.
      </p>
    )
  }
}

const mapStateToProps = state => ({
  list_data: state
});

const mapDispatchToProps = (dispatch)=>({
  actions: bindActionCreators(AsyncActions,dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SyncView)
