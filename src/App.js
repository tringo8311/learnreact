// import 'todomvc-app-css/index.css';
import React from 'react';
//import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import TodoApp from './containers/TodoApp';
import rootReducer from './reducers';

// initialState
const initialState = {}

// Create store
const store = createStore(rootReducer, initialState);

const appRoot = () => (
    <Provider store={store}>
        <div style={{width: "500px", margin: "10px auto"}}>
            <TodoApp />
        </div>
    </Provider>
)

export default appRoot
//ReactDOM.render(appRoot, document.getElementById('root'))