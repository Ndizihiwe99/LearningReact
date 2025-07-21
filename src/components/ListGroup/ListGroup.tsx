import { useState } from "react";
//import "./ListGroup.css";
import styled from "styled-components";
import { FaEarthAfrica } from "react-icons/fa6";

const List = styled.ul`
  list-style: none;
  padding: 0%;
  background-color: green;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  background-color: ${(props) => (props.active ? "blue" : "none")};
`;

interface ListGroupProps {
  itemes: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ itemes, heading, onSelectedItem }: ListGroupProps) {
  //Hook: is a function that helps us to tap in builtin features in react (eState)
  const [selectedIndex, setSelectdIndex] = useState(0);

  return (
    <>
      <h1>
        {heading} <FaEarthAfrica color="blue" size="20" />
      </h1>

      {itemes.length === 0 && <p>no elements found</p>}
      <List>
        {itemes.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectdIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
