import React from "react";
import categories from "../NoneComponentsExport";

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
      <option value="All categories">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default ExpenseFilter;
