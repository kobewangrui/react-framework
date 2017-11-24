import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
export default applyMiddleware(
  // you can apply you middleware here
  thunk
)
