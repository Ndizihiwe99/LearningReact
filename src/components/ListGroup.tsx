function ListGroup() {

  let items = ['Kigali', 'Gasabo', 'Kicukiro', 'Nyarugenge', 'North', 'East', 'West']
  items = []

  return (
    <>
    <h1>List</h1>

    {items.length === 0 && <p>no elements found</p>}
    <ul className= 'ListGroup'>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
    
    </>
    
  );
}

export default ListGroup;
