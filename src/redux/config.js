// in this file  we will create a store that is going to be passed to the provider in the index.js

import { createStore,combineReducers } from "redux";
import counterReducer  from "./ducks/counter";


//2.import all the reducers fro the ducks
const reducers = combineReducers({
    counter:counterReducer,
    // add all the reducers here  even if you had a reducer which deals   with user
})

//3.pass the reducers to the store
//1.then 3 creating a store  and pass the reducer
const store = createStore(reducers)


export default store