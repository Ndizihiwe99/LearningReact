import React, { type ReactNode } from "react";

interface CartProps {
  itemsNames: string[];
  onClear: () => void;
  children: ReactNode;
}

function Cart({ itemsNames, children, onClear }: CartProps) {
  return (
    <>
      <div>cart</div>
      <ul>
        {itemsNames.map((item) => (
          <li key={item}>
            {item} {children}
          </li>
        ))}
      </ul>
      <button onClick={onClear}>CLEAR</button>
    </>
  );
}

export default Cart;
