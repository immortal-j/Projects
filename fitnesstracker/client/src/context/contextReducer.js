const contextReducer = (state,action) =>{
    if(action.type==='DELETE_ACTION'){
        const actions = state.filter((a) => a.id !==action.payload)
        localStorage.setItem('actions',JSON.stringify(actions));
        return actions
    }
    else if(action.type==='ADD_ACTION'){
        const actions = [action.payload,...state]
        localStorage.setItem('actions',JSON.stringify(actions));
        return actions
    }
    else{
        return state
    }
}
export default contextReducer;