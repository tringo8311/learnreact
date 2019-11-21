import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./component/todolist";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
} from "react-router-dom";

function Home(){
    return ( <p>{React.version}</p> )
}
function About() {
    return (<p>In this example we have 3 “pages” handled by the router: a home page, an about page, and a users page. As you click around on the different</p>)
}

function App() {
    // let location = useLocation();
    // console.log(location);
    return (
        <div> tri ngo </div>
    );
    
}

export default App;
