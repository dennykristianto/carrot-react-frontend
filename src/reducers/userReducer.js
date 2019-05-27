import {ACTION} from "./reducerAction";

const init={
    user : {}
};

export default function userReducer(state=init, action){
    switch (action.type) {
        case ACTION.SET:
            return{
                ...state,
                user:action.value
            }
        case ACTION.DELETE:
            return {
                ...state,
                user:action.value
            }
        default:
            return state;
    }
}
