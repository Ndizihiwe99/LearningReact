//import { MouseEvent } from "react";

function ListGroup() {
 
  const items = ['Kigali', 'Gasabo', 'Kicukiro', 'Nyarugenge', 'North', 'East', 'West']
  //items = []

  //const eventClick = {(event: MouseEvent) => console.log(event)}

  return (
    <>
    <h1>List</h1>

    {/*items.length === 0 && <p>no elements found</p>*/}
    <ul className="list-group">
      {items.map((item, index) =>(<li className="list-group-item" key={item} onClick={()=> console.log(item, index)}>{[item ,index]}</li>) )}
    </ul>
    
    </>
    
  );
}

export default ListGroup;
