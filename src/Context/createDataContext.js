import React, {createContext, useReducer} from 'react';

export default (reducer, initialState, actions) => {
    const Context = createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        const boundActions = {};

        for(let key in actions){
            boundActions[key] = actions[key](dispatch)
        }

        return <Context.Provider value={{state, dispatch, boundActions}}>
            {children}
        </Context.Provider>
    }
    return {Context, Provider};
};