import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {useGlobalContext} from '../context/AppContext'

const IncomeForm = () => {

    const {addIncome} = useGlobalContext()
    const [income, setIncome] = useState({
        incomeType: '',
        incomeAmount: 0
    })

    // Income form submission 
    const handleChangeIncome = e => {
            setIncome({...income, [e.target.name]:e.target.value})
    }  


const {incomeType, incomeAmount} = income

    const handleSubmitIncome = e => {
        e.preventDefault()

        if(incomeType && incomeAmount)  {


        const newIncome = {
            id: uuidv4(),
            incomeType,
            incomeAmount:+(incomeAmount)

        }
        addIncome(newIncome);

        setIncome({
        incomeType: '',
        incomeAmount: 0
    })

        }else {
            alert('Please add income')
        }

    }
    
    return (
       
           <form  onSubmit={handleSubmitIncome}  className='form income'>
  
                   <input name="incomeType" value={incomeType} type="text" onChange={handleChangeIncome} autoComplete='off' placeholder='Add Income' />
                   <input name='incomeAmount' value={incomeAmount} type="number" onChange={handleChangeIncome}/>
                   <input type="submit" value="Submit"/>
           
            


           </form>
    )
}

export default IncomeForm
