import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./component/todolist";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    browserHistory,
    useLocation
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
        <Router>
            <div className="App" style={{ "width": "800px", "margin": "10px auto", "padding": "20px", "background": "#c0c0c0" }}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/todos">Todos</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/todos">
                        <TodoList/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
    
}

export default App;
