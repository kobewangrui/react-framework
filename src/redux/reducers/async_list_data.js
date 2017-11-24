import { ASYNC_DATA } from '../constants/ActionAsync'

const initialState = {
    async_list_data : 123
}

export default function list(state = initialState, action) {
    switch(action.type) {
        case ASYNC_DATA:
            return { async_list_data : action.lists};
            break;
        default:
            return state;
    }
}




