import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Todo from './todo';

function Find(){
  return(
    <div>
<Todo/>
    </div>
  )
}



ReactDOM.render(<Find/>,document.getElementById("root"))
