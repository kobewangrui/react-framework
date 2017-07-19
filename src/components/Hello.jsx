import React from 'react'
import PropTypes from 'prop-types'
import 'assets/css/Hello.css'

const Hello = ({ msg }) => (
  <div id='Hello'>
    <p>红色边框包围的是一个全局组件</p>
    <h2>{msg}</h2>
  </div>
)

Hello.prototype.propTypes = {
  msg: PropTypes.string
}

export default Hello
