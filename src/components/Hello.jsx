import React from 'react'
import PropTypes from 'prop-types'
import 'assets/css/Hello.css'

const Hello = ({ msg }) => (
  <div id='Hello'>
    <p>红色边框包围的是一个全局组件</p>
    <h2>{msg}</h2>
    <p className='doc'>
      <i className='redux'>Redux's</i> <a href='http://redux.js.org/' target='_blank'>doc</a>
      ( or <a href='http://cn.redux.js.org/' target='_blank'>zh-doc</a> )
    </p>
    <p className='doc'>
      <i className='router'>react-router's</i> <a href='https://reacttraining.com/react-router/web/example/basic' target='_blank'>doc</a>
      ( or <a href='https://reacttraining.cn/web/guides/quick-start' target='_blank'>zh-doc</a> )
    </p>
  </div>
)

Hello.prototype.propTypes = {
  msg: PropTypes.string
}

export default Hello
