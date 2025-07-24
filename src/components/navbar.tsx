import React from "react";

interface NavbarProps {
  itemsCount: number;
}

function Navbar({ itemsCount }: NavbarProps) {
  return <div>Navbar: we only have {itemsCount} items</div>;
}

export default Navbar;
