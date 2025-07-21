import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/alert";
import ListGroup from "./components/ListGroup";
import "./App.css";
import Like from "./components/like";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
//import { produce } from "immer";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(Boolean);
  const [products, setProducts] = useState(["Inyange", "Agashya"]);

  const items = [
    "Kigali",
    "Gasabo",
    "Kicukiro",
    "Nyarugenge",
    "North",
    "East",
    "West",
  ];

  const handleSelectedItem = (item: string) =>
    console.log(item + " is clicked");
  return (
    <>
      <div>
        <Navbar itemsCount={products.length}></Navbar>
        <Cart itemsNames={products} onClear={() => setProducts([])}></Cart>
      </div>
      <div>
        {alertVisibility && (
          <Alert onClose={() => setAlertVisibility(false)}>
            This is an alert message
          </Alert>
        )}
        <Button onclick={() => setAlertVisibility(true)}>CLICK ME</Button>
      </div>

      <div>
        <ListGroup
          itemes={items}
          heading="Rwanda"
          onSelectedItem={handleSelectedItem}
        />
      </div>
      <div>
        <Like onClicked={() => console.log("clicked")} />
      </div>
    </>
  );
}

export default App;
