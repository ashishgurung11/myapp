import React from 'react';

const TodoList = (props) => {



    return(
        <div className="todo">
        <button onClick={() =>{
             props.onSelect(props.id);

         }}>Remove</button>
            <li>{props.text}</li>
        </div>

    );

};
export default TodoList;
