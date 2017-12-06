import { ASYNC_DATA } from '../constants/ActionAsync'

const async_data = (list) => ({ type: ASYNC_DATA, lists: list})



export const getTest = () => {
    return async (dispatch, getState)=>{
        try {
            let response = await fetchData();
            await dispatch(async_data(response));
        } catch (error) {
            console.log('error: ', error)
        }
    }
}



// fetch获取数据
let fetchData = ()=>{
    return new Promise((resolve,reject)=>{
        fetch('/api/product/getList')
        .then((json)=>{
            return json.json();
        })
        .then((res)=>{
            resolve(res);
        })
        .catch((err)=>{
            reject(err);
        })
    })
}