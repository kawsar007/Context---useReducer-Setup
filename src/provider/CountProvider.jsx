import React, { createContext, useReducer } from 'react';
import reducer, { actionsCeators } from '../reducer/CountReducer';

const CountContext = createContext();

const CountProvider = (props) => {
   const [state, dispatch] = useReducer(reducer, 10)
   const actions = actionsCeators(dispatch);
    return (
        <CountContext.Provider value={{count: state, ...actions}}>
            {props.children}
        </CountContext.Provider>
    )
}

export {CountProvider, CountContext};