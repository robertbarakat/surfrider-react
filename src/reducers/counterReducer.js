export const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'MODIFY': return state + action.num;
        case 'RESET': return state = 0;
        case 'INCREASE': return state + 1;
        default: return state
    }
}

export const permanentCounter = (state = 0, action) => {
    switch(action.type){
        case 'MODIFY_PERMANENT': return state + action.num;
        default: return state
    }
}