import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from '$redux/store'
require('es6-promise').polyfill();
require('isomorphic-fetch');

import App from './App'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
      {/* 
        provider本身没有做很多事情，只是把store放在context里面罢了，事实上使用react-redux，链接视图和数据层最好的方法是使用connect函数，本质上Provider就是给connect提供sotre用的
      */}
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => render(App))
}