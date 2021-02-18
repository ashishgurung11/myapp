import React from 'react';
import ReactDom from 'react-dom';
import Form from './component/form.js';
import './index.css';


function App(){
    return(
    
       <Form/>

    )
};


ReactDom.render(<App/>, document.getElementById('root'));