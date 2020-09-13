const SET_ALERT = 'SET_ALERT';
const REMOVE_ALERT = 'REMOVE_ALERT';

export default (state,action) => {
    switch(action.type){
        case SET_ALERT:
            return [...state,action.payload]
        case REMOVE_ALERT:
            return []
        default:
            return state
    }
}