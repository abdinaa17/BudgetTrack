import React from 'react'
import {useGlobalContext} from '../context/AppContext'

const IncomeHist = () => {
    const {incomeTransactions, deleteItem} = useGlobalContext()
    return (
        <div>
            <h3>Income History</h3>
            <ul>

                {incomeTransactions.map((transaction) => {
             const {incomeType, id, incomeAmount} = transaction;

             return(
                  <li key={id} className="income__item">
                    <span>
                        {incomeType}
                    </span>
                    <span>
                        ${incomeAmount}
                    </span>
                    <button className="delete__btn" onClick={() => deleteItem(id)} >
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

export default IncomeHist
