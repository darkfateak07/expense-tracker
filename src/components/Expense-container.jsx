// Expensecontainer.js
// npm i axios
import { useState, useEffect } from 'react';
import axios from 'axios';

import History from './History';
import Expenseform from './Expenseform';
import BalanceContainer from './Balancecontainer';

const API = 'http://localhost:5000/api/expenses';   // ⇦ your Express + Mongo URL

const Expensecontainer = () => {
  const [expenses, setExpenses] = useState([]);

  /* ── 1. fetch everything once ───────────────────────── */
  useEffect(() => {
    axios.get(API).then(res =>
      setExpenses(res.data.map(e => ({ id: e._id, title: e.title, amount: e.amount })))
    );
  }, []);

  /* ── 2. add ─────────────────────────────────────────── */
  const addExpense = (title, amount) => {
    axios.post(API, { title, amount: parseFloat(amount) }).then(res =>
      setExpenses(prev => [
        ...prev,
        { id: res.data._id, title: res.data.title, amount: res.data.amount }
      ])
    );
  };

  /* ── 3. delete one ─────────────────────────────────── */
  const deleteExpense = id => {
    axios.delete(`${API}/${id}`).then(() =>
      setExpenses(prev => prev.filter(exp => exp.id !== id))
    );
  };

  /* ── 4. edit ───────────────────────────────────────── */
  const editExpense = (id, newTitle, newAmount) => {
    axios.put(`${API}/${id}`, { title: newTitle, amount: parseFloat(newAmount) }).then(res =>
      setExpenses(prev =>
        prev.map(exp =>
          exp.id === id
            ? { id: res.data._id, title: res.data.title, amount: res.data.amount }
            : exp
        )
      )
    );
  };

  /* ── 5. clear all ──────────────────────────────────── */
  const clearAllExpenses = () => {
    axios.delete(API).then(() => setExpenses([]));
  };

  /* ── UI ────────────────────────────────────────────── */
  return (
    <div className="expense-container">
      <h1>Expense Tracker</h1>

      <BalanceContainer expenses={expenses} />

      <History
        expenses={expenses}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
      />

      <Expenseform addExpense={addExpense} />

      {expenses.length > 0 && (
        <button className="clear-btn" onClick={clearAllExpenses}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default Expensecontainer;
