import React from "react";

interface CategoryProps {
  onSelectCategory: (category: string) => void;
}

function ExpenseFilter({ onSelectCategory }: CategoryProps) {
  return (
    <select
      onChange={(event) => onSelectCategory(event.target.value)}
      className="form-select"
      aria-label="Default select example"
    >
      <option selected>filter by category</option>
      <option value="phone">phone</option>
      <option value="laptop">laptop</option>
      <option value="tablet">tablet</option>
      <option value="television">television</option>
    </select>
  );
}

export default ExpenseFilter;
