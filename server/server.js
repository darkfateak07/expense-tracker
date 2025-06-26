require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const expenseSchema = new mongoose.Schema(
  { title: { type: String, required: true },
    amount: { type: Number, required: true } },
  { timestamps: true }
);
const Expense = mongoose.model('Expense', expenseSchema);


app.get('/api/expenses', async (_req, res) =>
  res.json(await Expense.find().sort({ createdAt: -1 })));


app.post('/api/expenses', async (req, res) =>
  res.json(await Expense.create(req.body)));


app.put('/api/expenses/:id', async (req, res) =>
  res.json(await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true })));


app.delete('/api/expenses/:id', async (req, res) =>
  res.json(await Expense.findByIdAndDelete(req.params.id)));


app.delete('/api/expenses', async (_req, res) =>
  res.json(await Expense.deleteMany({})));

const PORT = process.env.PORT || 5000;
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}` +
            `@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}` +
            '?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri)

  .then(() => {
    app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
  })
  .catch(err => console.error('Mongo connection error:', err));
