import React from 'react'
import { useDispatch } from 'react-redux'
import { decrease, increase } from '../../redux/ducks/counter';

export const Counter = () => {
    const dispatch = useDispatch();

    const handleIncrease = () =>{
        // remember to actually call the function here otherwise boom
        dispatch(increase())
    }
    const handleDecrease = () =>{
        dispatch(decrease())
    }

    return (
        <div>
            <h2>This is my Counter</h2>

            <button onClick = {handleIncrease}> Add</button>
            <br/>
            <button onClick = {handleDecrease}>Decrease</button>
        </div>
    )
}
