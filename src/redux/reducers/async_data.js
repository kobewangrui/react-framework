import { ASYNC_DATA } from '../constants/ActionAsync'
const initialState = {
    list_data : [1,23]
}

let fetchData = ()=>{
    let url = 'http://localhost:3000/api/product/getList';
    fetch(url)
        .then((json)=>{
            return json.json();
        })
        .then((res)=>{
            return res;
        })
        .catch((err)=>{
            console.log(err)
        })
}
export default function list (state = initialState, action) {
    switch(action.type) {
        case ASYNC_DATA:

            return { list_data : fetchData()};
        default:
            return state;
    }
}