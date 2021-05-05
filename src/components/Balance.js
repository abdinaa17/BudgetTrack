import React from 'react'
import {useGlobalContext} from '../context/AppContext'

const Balance = () => {
  const {incomeTransactions, expenseTransactions}= useGlobalContext()

  const totalIncome= incomeTransactions
  .map(income => income.incomeAmount)
  .reduce((acc, item) => (acc += item),0)
  .toFixed(2)


  const totalExpense= expenseTransactions
  .map(expense=> expense.expenseAmount)
  .reduce((acc, item) => (acc += item),0)
  .toFixed(2)


  const balance = (totalIncome - totalExpense).toFixed(2)



    return (
       <div className="balance">
           <h2>Your Balance</h2>
           <h3 className='total__balance'>{balance}</h3>
           <div className='balance__container'>
            <div className="balance__plus">
              <h3>Income</h3>
            <p>+${totalIncome}</p>
            </div>
            <div className="balance__minus">
              <h3>Expense</h3>
            <p>-${totalExpense}</p>
            </div>
          </div>
       </div>

       
    )
}

export default Balance
