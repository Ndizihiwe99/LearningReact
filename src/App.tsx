import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import "./App.css";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Cart from "./components/cart";
import Game from "./components/Game";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseForm from "./ExpenseTracer/components/ExpenseForm";
//import { produce } from "immer";
import styled from "styled-components";
import ExpenseList from "./ExpenseTracer/components/ExpenseList";
import ExpenseFilter from "./ExpenseTracer/components/ExpenseFilter";

const FormSection = styled.div`
  background-color: yellow;
`;

function App() {
  const [alertVisibility, setAlertVisibility] = useState(Boolean);
  const [products, setProducts] = useState(["Inyange", "Amata"]);
  const [game, setGame] = useState({ id: 1, player: { name: "ugeen" } });

  const [Expenses, setExpenses] = useState([
    { id: 1, description: "sony", amount: 11, category: "phone" },
    { id: 2, description: "hp", amount: 12, category: "laptop" },
    { id: 3, description: "sumsung", amount: 13, category: "tablet" },
    { id: 4, description: "philips", amount: 14, category: "television" },
  ]);

  const [selectedCtegory, setSelectedCategory] = useState("");
  const items = [
    "Kigali",
    "Gasabo",
    "Kicukiro",
    "Nyarugenge",
    "North",
    "East",
    "West",
  ];

  const visibleCategory = selectedCtegory
    ? Expenses.filter((e) => e.category === selectedCtegory)
    : Expenses;

  const handleSelectedItem = (item: string) =>
    console.log(item + " is clicked");

  const handleClickedButton = () => {
    setGame({ ...game, player: { ...game.player, name: "ndzhwe" } });
  };
  return (
    <>
      <div>
        <Navbar itemsCount={products.length}></Navbar>
        <Cart itemsNames={products} onClear={() => setProducts([])}>
          yacu
        </Cart>
      </div>

      <div>
        -------------------------------------------------------------------------------------
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
        ------------------------------------------------------------------------------------
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

      <div>
        -------------------------------------------------------------------------------
      </div>

      <div>
        <Game gamer="ndzhwe" onclicked={handleClickedButton} />
      </div>

      <div>
        ------------------------------------------------------------------------------
      </div>

      <div>
        <ExpandableText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem fuga nostrum aspernatur aliquid reprehenderit sequi
          voluptatem sit, explicabo maxime dolorum inventore perspiciatis dolor
          culpa obcaecati optio accusamus! Qui facere in iure inventore porro
          veritatis natus corporis mollitia rem, tenetur earum recusandae
          voluptate expedita assumenda perspiciatis quasi itaque quo neque
          nesciunt repellendus minima aspernatur saepe. Consequuntur impedit
          placeat dolore officia, perferendis necessitatibus, natus odit dolores
          soluta libero eligendi sint est obcaecati, voluptatibus laboriosam
          quia. Voluptatem, harum sunt. Dicta dolore asperiores aut dignissimos
          impedit! Laboriosam aspernatur neque sed ab labore, iste voluptas
          nobis provident dolores aliquam doloribus ea voluptatum ducimus illum
          a?
        </ExpandableText>
      </div>

      <div>
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </div>
      <div>
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </div>

      <FormSection>
        <h1>
          {" "}
          <u>FORMS SECTION</u>
        </h1>

        <Form></Form>
      </FormSection>

      <div>
        <h1>
          -----------------------------------------------------------------------------
          --------------
        </h1>
      </div>

      <div>
        <h1>
          -----------------------------------------------------------------------------
          --------------
        </h1>
      </div>
      <div>
        <div className="mb-5">
          <ExpenseForm onsubmit={(data) => console.log(data)}></ExpenseForm>
        </div>

        <div className="mb-5">
          <ExpenseFilter
            onSelectCategory={(cat) => setSelectedCategory(cat)}
          ></ExpenseFilter>
        </div>

        <ExpenseList
          expenses={visibleCategory}
          deleteClick={(amt) =>
            setExpenses(Expenses.filter((e) => e.amount !== amt))
          }
        ></ExpenseList>
      </div>
    </>
  );
}

export default App;
