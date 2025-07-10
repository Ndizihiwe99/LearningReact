function ListGroup() {

  const items = ['Kigali', 'Gasabo', 'Kicukiro', 'Nyarugenge', 'North', 'East', 'West']

  return (
    <>
    <h1>List</h1>
    <ul className= 'ListGroup'>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
    
    </>
    
  );
}

export default ListGroup;
