import React from 'react';
import { useReducer } from 'react';

type stateType={
    count:number
}

type incrementType={
    type:'INCREMENT' | 'DECREMENT',
    payload:number
}
type resetType={
    type:'RESET'
}

type actionType = incrementType | resetType

const initialState ={
    count:0
}

function reducer(state: stateType, action:actionType) {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + action.payload}
        case "DECREMENT":
            return {count:state.count - action.payload}
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

const Reducer1 = () => {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h6>{state.count}</h6>
        <p><button onClick={()=>dispatch({type:"INCREMENT",payload:10})}>Increment by 10</button>
        <button onClick={()=>dispatch({type:"DECREMENT",payload:10})}>Decrement by 10</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button></p>
    </div>
  )
}

export default Reducer1
