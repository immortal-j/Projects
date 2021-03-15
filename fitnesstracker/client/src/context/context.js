import React ,{useReducer,createContext} from 'react';
import contextReducer from './contextReducer';

 const initialstate = JSON.parse(localStorage.getItem('actions')) || [{"amount":2,"category":"Chapati","type":"Intake","date":"2021-01-01","id":"702499e4-6a45-4ad7-9051-5a2a7d93e5fe"}];
 
export const FitnessTrackerContext = createContext(initialstate)
export const Provider = ({children}) =>{
 
    const [actions, dispatch] = useReducer(contextReducer, initialstate)
 
    const deleteAction = (id) =>{
        dispatch({type:'DELETE_ACTION', payload:id})
    }
 
    const addAction = (action) =>{
        dispatch({type:'ADD_ACTION', payload:action})
    }
 
    return(
        <FitnessTrackerContext.Provider value ={{
           deleteAction,
           addAction,
           actions,
        }}>
            {children}
        </FitnessTrackerContext.Provider>
    )
}
