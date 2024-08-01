import { useState } from "react";

function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'India'
    ]
    const [selectedIndex, setSelectedIndex] = useState(0);

    const forloop = items?.map((item,index)=>(<li key={index} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={ () => {setSelectedIndex(index)}} >{item}</li>))
    const message = items?.length === 0 && <p>No items found</p>
    return (
        <>
            <h1>List</h1>
            { message }
            <ul className="list-group">
            { forloop }
            </ul>
        </>
    );
}
export default ListGroup;
