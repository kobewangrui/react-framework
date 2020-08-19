import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config' /**子路由**/
import { NavLink as Link } from 'react-router-dom' /**路由跳转**/
import PropTypes from 'prop-types'
import GGEditor, { Flow, EditableLabel } from 'gg-editor';
import { connect } from 'react-redux'//引入react-redux
import { bindActionCreators } from 'redux'//引入redux
import * as NumberActions from '$redux/actions/number'
import 'assets/css/index.css'

class Index extends Component {
  static propTypes = {
    actions: PropTypes.object,//传入参数的类型
    counter: PropTypes.object//传入参数的类型
  }
  componentDidMount(){
        // console.log(renderRoutes(this.props.route.childRoutes));
        // console.log(connect);
        // console.log(bindActionCreators);
  }
  changeNumber = (arg)=>{
    this.props.actions.numberadd(arg);
  }
  render(){
    const data = {
      nodes: [
        {
          id: '0',
          label: 'Node',
          x: 55,
          y: 55,
        },
        {
          id: '1',
          label: 'Node',
          x: 55,
          y: 255,
        },
      ],
      edges: [
        {
          label: 'Label',
          source: '0',
          target: '1',
        },
      ],
    }
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
          <GGEditor>
            <Flow style={{ width: 1000, height: 1000 }} data={data} />
            <EditableLabel/>
          </GGEditor>
          <div>
            <p>
                <Link to='/one' exact>去one页面</Link>
            </p>
            <p>
                <Link to={{pathname:`/two/123`}} activeClassName='textColor' exact>去two页面</Link>
            </p>
            <p>
                <Link to={{pathname:'/three',query:{projectId:1234}}} activeClassName='textColor' exact>去three页面</Link>
            </p>
            <p>
                <Link to={{pathname:'/four',query:{projectId:1234}}} activeClassName='textColor' exact>去four页面</Link>
            </p>
            <p>
                <Link to='/'>去首页</Link>
            </p>
            {/* {JSON.stringify(this.props.route.childRoutes)} */}
            {renderRoutes(this.props.route.childRoutes)}
          </div>        
        <div>
          index footer
          {JSON.stringify(this.props.number)}
          <button onClick={this.changeNumber.bind(this,1)}>改变changechangechangechange</button>
          ---Number:{this.props.number.number}---
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({//从redux中取出number，把state.number绑定到props的number
  number: state.number
});

const mapDispatchToProps = (dispatch)=>({//将actions中的方法作为props绑定到组件
  actions: bindActionCreators(NumberActions,dispatch)
  //bindActionCreators：通过dispatch将action包裹起来，这样可以通过bindActionCreators创建的方法，直接调用dispatch(action) (隐式调用)
  //bindActionCreators(oldActionCreator,dispatch)
  // 参数解析 
  // 形参：oldActionCreator这个参数就是创建的action的集合
  // 形参：dispatch这里的dispatch,等同于store中的store.dispatch，用于组合action
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)//这里的Index就是当前组件

// connect方法介绍 作用是连接组件与redux store
// connect([mapStateToProps],[MapDispatchToProps],[mergeProps],[options])

// mapStateToProps(state,ownProps)     :stateProps
// const mapStateTopProps = (state) =>({count:state.count});
// 这个函数的第一个参数就是redux的store我们从中摘取count属性。不必传入state的所有属性，取出需要的就行（如：state.count）；
// 第二个参数ownProps,是组件自己的props


// connect的第二个参数是mapDispatchToProps,功能是将action为props绑定到组件上，也会成为MyComp的props

// [mergeProps]
// 不管是stateProps还是dispatchProps,都需要和wonProps merge之后才会被赋给组件。connect的第三个参数就是用来做这件事。通常情况下，你可以不传参数，connect就会使用Object.assign替代该方法


// [options](Object)如果指定这个参数，可以定制connector的行为。一般不用。

