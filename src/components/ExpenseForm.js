import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useGlobalContext} from '../context/AppContext'

const ExpenseForm = () => {
    const {addExpense} = useGlobalContext()
     const [expense, setExpense] = useState({
        expenseType: '',
        expenseAmount: 0
    })

    // Expense form submission 

       const handleChangeExpense = e => {
            setExpense({...expense, [e.target.name]:e.target.value})
    }  
const {expenseType, expenseAmount} = expense

    const handleSubmitExpense= e => {
        e.preventDefault()

        if(expenseType && expenseAmount) {

             const newExpense= {
            id: uuidv4(),
            expenseType,
            expenseAmount:+(expenseAmount)

        }

        addExpense(newExpense);

        setExpense({
        expenseType: '',
        expenseAmount: 0
    })

        }else {
            alert('Please add expense')
        }

       
    }
    
    return (
           <form onSubmit={handleSubmitExpense} className='form expense'>
                   <input name="expenseType" value={expenseType} type="text" onChange={handleChangeExpense} autoComplete='off' placeholder='Add Expense'/>
                   <input name='expenseAmount' value={expenseAmount} type="number" onChange={handleChangeExpense}/>
                   <input type="submit" value="Submit"/>
           </form>
    )
}

export default ExpenseForm
