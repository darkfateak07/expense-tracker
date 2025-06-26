import Expenseitems from './Expenseitems';

const History = ({ expenses, deleteExpense, editExpense }) => {
  return (
    <div className="History">
      <h1>History</h1>
      {expenses.map((expense) => (
        <Expenseitems
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          deleteExpense={deleteExpense}
          editExpense={editExpense}
        />
      ))}
    </div>
  );
};

export default History;
