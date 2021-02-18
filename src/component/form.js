import React, {useState} from 'react';
import TodoList from './todolist';


const Form =() =>{
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () =>{
    setItems((oldItems) =>{
    return [...oldItems, inputList];
    });
    setInputList("");
};
     
        
    const deleteItems = (id) => {
        console.log('deleted');

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };
    
  
    return (
        <>
            <div className="main">
            <div className="container">
                <br/>
                <h1> TODO LIST</h1>
                <br/>
                <input onChange={itemEvent}
                type="text" placeholder="add activities"/>
                <button onClick={listOfItems}> ADD </button>
                <ol>
                {
                    Items.map((itemval, index) => {
                    return <TodoList key={index} id={index} text={itemval}
                    onSelect ={deleteItems} />


                })
            }
            </ol>
            </div>
            </div>

        </>
    );
};


export default Form;


