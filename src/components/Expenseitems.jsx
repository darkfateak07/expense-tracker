import { useState } from 'react';


const Expenseitems = ({ id, title, amount, deleteExpense, editExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedAmount, setEditedAmount] = useState(amount);
  const type = amount > 0 ? 'income' : 'expense';

  const handleUpdate = () => {
    editExpense(id, editedTitle, editedAmount);
    setIsEditing(false);
  };

  return (
    <div className={`expense-item ${type}`}>
      {isEditing ? (
        <>
          <input value={editedTitle} onChange={e => setEditedTitle(e.target.value)} />
          <input type="number" value={editedAmount} onChange={e => setEditedAmount(e.target.value)} />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <div>{title} (${amount})</div>
          <button  className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button className="dlt-btn" onClick={() => deleteExpense(id)}>Delete</button>
    </div>
  );
};

export default Expenseitems;
