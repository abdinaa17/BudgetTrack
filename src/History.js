import ExpenseHist from "./components/ExpenseHist"
import IncomeHist from "./components/IncomeHist"

const History = () => {
    return (
        <div className="history__container">
            <IncomeHist />
            <ExpenseHist />
        </div>
    )
}

export default History
