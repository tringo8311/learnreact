import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleWithFruit from "./component/todolist";

function App() {
    // let location = useLocation();
    // console.log(location);
    return (
        <div style={{ "width": "1000px", "margin": "20px auto" }}>
            <ExampleWithFruit />
        </div>
    )
}

export default App;
