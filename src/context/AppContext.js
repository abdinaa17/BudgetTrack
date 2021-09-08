import React, {createContext, useEffect, useContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    incomeTransactions: JSON.parse(localStorage.getItem('incomeTransactions')) || [],
     expenseTransactions: JSON.parse(localStorage.getItem('expenseTransactions')) || []
}



const AppContext = createContext(initialState)


export const AppProvider = ({children})=> {

    const [state, dispatch] = useReducer(AppReducer, initialState )


useEffect(() => {
   localStorage.setItem("incomeTransactions", JSON.stringify(state.incomeTransactions))
   localStorage.setItem("expenseTransactions", JSON.stringify(state.expenseTransactions))
})

    const addIncome = (incomeTransaction)=> {
        dispatch({
            type: "ADD_INCOME",
            payload: incomeTransaction,
        })
    };
    const addExpense = (expenseTransaction)=> {
        dispatch({
            type: "ADD_EXPENSE",
            payload: expenseTransaction,
        })
    };

    const deleteItem = (id) => {
        dispatch({
            type:'DELETE_ITEM',
            payload: id
        })
    }


    return <AppContext.Provider value={{
        incomeTransactions:state.incomeTransactions,
        expenseTransactions:state.expenseTransactions,
        addIncome,
        addExpense,
        deleteItem
    } }>
        {children}
    </AppContext.Provider>

}

// A custom hook to import my context easier.
export const useGlobalContext = () => {
    return useContext(AppContext)
} 
