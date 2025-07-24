import React from "react";

interface expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface expenseProps {
  expenses: expense[];
  deleteClick: (amount: number) => void;
}

function ExpenseList({ expenses, deleteClick }: expenseProps) {
  if (expenses.length == 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id}>
            <td>{exp.description}</td>
            <td>{exp.amount}</td>
            <td>{exp.category}</td>
            <td>
              <button onClick={() => deleteClick(exp.amount)}>delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseList;
