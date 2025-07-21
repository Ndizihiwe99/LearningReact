import React from "react";

interface NavbarProps {
  itemsCount: number;
}

function Navbar({ itemsCount }: NavbarProps) {
  return <div>Navbar:{itemsCount}</div>;
}

export default Navbar;
