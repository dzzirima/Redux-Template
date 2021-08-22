// create all the files actions and reducers here and export an unnamed function which uses the switch


//1. initialise the state
let initialState = {
    count:10
}


//2.create your name reducers
const INCREASE = 'increase'

//3.create an action  which maps directly to the const above
export const increase = () =>({
    type:INCREASE
}
) 

//4.create the reducer
export default (state=initialState,action)=>{ // initialising the sate from state

    switch (action.type) {
        case INCREASE:
            // do the actual changing of the values heree
            return {...state , count:state.count+1}
        default:
            // remember to return state for the default 
            return state
    }

}
