import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./component/todolist";



function App() {
  return (
    <div className="App" style={{"width": "800px", "margin": "10px auto",  "padding": "20px", "background" : "#c0c0c0"}}>
      <TodoList/>
    </div>
  );
}

export default App;
