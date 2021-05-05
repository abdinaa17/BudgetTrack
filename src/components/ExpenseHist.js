import React from 'react'
import {useGlobalContext} from '../context/AppContext'

const ExpenseHist = () => {
    const {expenseTransactions, deleteItem} = useGlobalContext()
    return (
        <div>
            <h3>Expense History</h3>
            <ul>
                 {expenseTransactions.map((transaction) => {
             const {expenseType, id, expenseAmount} = transaction;

             return(
                  <li key={id} className="expense__item">
                    <span>
                        {expenseType}
                    </span>
                    <span>
                        ${expenseAmount}
                    </span>
                    <button className="delete__btn" onClick={()=> deleteItem(id)} >
                        X
                    </button>
                </li>
             )
            
            
             
            
            })


        }
            </ul>
        </div>
    )
}

export default ExpenseHist
