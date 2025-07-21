import React from "react";

interface CartProps {
  itemsNames: string[];
  onClear: () => void;
}

function Cart({ itemsNames, onClear }: CartProps) {
  return (
    <>
      <div>cart</div>
      <ul>
        {itemsNames.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>CLEAR</button>
    </>
  );
}

export default Cart;
