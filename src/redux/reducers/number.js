import { NUMBERADD } from '../constants/ActionNumber'
const initialState = {
    number : 'wangruilong number'
}

export default function number (state = initialState, action) {
    switch(action.type) {
        case NUMBERADD:
            let str;
            if(state.number === '王睿龙大傻逼'){
                str = '王睿龙';           
            }else{
                str = '王睿龙大傻逼';
            }
            return { number : str};
        default:
            return state;
    }
}