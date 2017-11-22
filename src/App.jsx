import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'//引入react-redux
import { bindActionCreators } from 'redux'//引入redux
import * as NumberActions from '$redux/actions/number'

class App extends Component {
  static propTypes = {
    actions: PropTypes.object,
    counter: PropTypes.object
  }
    componentWillMount(){
      this.fetchData();
    }

  changeNumber = (msg)=>{
    this.props.actions.numberadd(msg);
  }
    fetchData = ()=>{
      let url = `/api/consumers/login`,
          req = JSON.stringify({
              userName : 'wrl',
              passWord : '123123',
          });
      fetch(url,{
              method:'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: req
          })
          .then((json)=>{
              return json.json();
          })
          .then((res)=>{
            this.changeNumber(res.msg);
          }) 
          .catch((err)=>{
              console.log(err)
          })
    }
  render () {
    return (
      <div>
        <Router>
          {renderRoutes(routes)}
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  number: state.number
});

const mapDispatchToProps = (dispatch)=>({
  actions: bindActionCreators(NumberActions,dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)