import Currencyitem from './Currencyitem';
const BalanceContainer = (props) =>{
    const { expenses } = props;
    const incomeArr = expenses.filter((expense) => expense.amount > 0);
    const expenseArr = expenses.filter((expense) => expense.amount < 0);
    let income=0;
    let  expense = 0;
    incomeArr.forEach((item) =>{
        income += item.amount;
    });
    expenseArr.forEach((item) =>{
        expense += item.amount;
    });
    console.log(income,expense)
    return (
        <div className="balance-container">
       <Currencyitem title="Income" amount={income} />
       <Currencyitem title="Expense" amount={expense} />
       <Currencyitem title="Balance" amount={income + expense} />
        </div>

    );
}
export default BalanceContainer;