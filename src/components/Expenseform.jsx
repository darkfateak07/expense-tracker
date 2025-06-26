import React, { useState } from 'react';
const Expenseform = (props) =>{
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title) {
            setError('Enter title');
            return;
        }
        if(!amount) {
            setError('Enter amount');
            return; 
        }  
        if(!title || !amount) {
            return;
        }
              props.addExpense(title,amount);
        console.log('Expense added:', { title, amount });
        setTitle('');
        setAmount('');
    };
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };
    return (
        <div className="expense-form">
        <h2>Add New Expense</h2>
        <form action={handleSubmit} onSubmit={handleSubmit}>
        
            <div className="form-group">
            <label htmlFor="expense-name">Expense Name</label>
            {error && <p className="error">{error}</p>}
            <input type="text" id="expense-name" placeholder="Enter expense name" value={title} onChange={handleTitleChange}/>
            </div>
            <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" placeholder="Enter amount"value={amount} onChange={handleAmountChange} />
            </div>

            
            <button type="submit">Add Expense</button>
        </form>
        </div>
    );
}
export default Expenseform;