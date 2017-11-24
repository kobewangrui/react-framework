import { combineReducers } from 'redux'
import counter from './counter'
import number from './number'
import list_data from './async_list_data'

export default combineReducers({
  counter,
  number,
  list_data
})
//combineReducers方法介绍:用于Reducer的拆分，你只要定义各个子Reducer函数，然后用这个方法，将他们合并成一个大的Reducer