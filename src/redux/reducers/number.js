import { NUMBERADD } from '../constants/ActionNumber'
const initialState = {
    number : 'wangruilong number'
}

export default function number (state = initialState, action) {
    switch(action.type) {
        case NUMBERADD:
        console.log(action.changeVal);
            let str;
            if(action.changeVal === undefined || action.changeVal === 1){
                str = '用户可能登陆失败了 或者是个点击事件';
            }else{
                str = `用户登陆状态：${action.changeVal}`;
            }
            return { number : str};
        default:
            return state;
    }
}