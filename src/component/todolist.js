import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from "react-router-dom";

const FilterEnum = Object.freeze({
    "all": "ALL",
    "active": "ACTIVE",
    "completed": "COMPLETED"
});

const myData = [
    {
        id: "12367819031",
        content: "Chang can 1 ai nua",
        status: "ACTIVE"
    },
    {
        id: "12367819032",
        content: "Chang can 1 ai nua 2",
        status: "ACTIVE"
    },
    {
        id: "12367819033",
        content: "Chang can 1 ai nua 3",
        status: "ACTIVE"
    },
    {
        id: "12367819034",
        content: "Chang can 1 ai nua 4",
        status: "ACTIVE"
    },
    {
        id: "12367819035",
        content: "Chang can 1 ai nua 5",
        status: "ACTIVE"
    },
    {
        id: "12367819036",
        content: "Chang can 1 ai nua 6",
        status: "ACTIVE"
    },
    {
        id: "12367819037",
        content: "Chang can 1 ai nua 7",
        status: "ACTIVE"
    },
    {
        id: "12367819038",
        content: "Chang can 1 ai nua 8",
        status: "COMPLETED"
    }
]

function TodoItem(props){
    const [item, setItem] = useState(props.item);

    let handleRemove = (e, myItem) => {

    }

    let handleToggleCompleted = (e, myItem) => {
        
    }
    //
    return (
        <React.Fragment>            
            <input type="checkbox" name="chekbox" value={item.id} defaultChecked={item.status == FilterEnum.completed} onChange={(e) => { this.handleToggleCompleted(e, item) }} />      
            <label> {item["content"]} </label>
            <a href="javascript:;" onClick={(e) => { this.handleRemove(e, item) }}>Remove</a>
        </React.Fragment>
    )
}

function TodoList() {
    const [items, setItems] = useState(myData);
    const [nowShowing, setNowShowing] = useState(0);

    var myItems = [...items];
    var shownTodos = myItems.filter(function (todo) {
        switch (nowShowing) {
            case FilterEnum.active:
                return todo.status == FilterEnum.active;
            case FilterEnum.completed:
                return todo.status == FilterEnum.completed;
            default:
                return true;
        }
    }, this);
    var todoItems = shownTodos.map(function (todo) {
        return (
            /*<li key={"todo" + todo.id}><TodoItem item={todo} handleToggleCompleted={this.handleToggleCompleted} handleRemove={this.handleRemove} /></li>*/
            <li key={"todo" + todo.id}><TodoItem item={todo} /></li>
        );
    }, this);

    return (
        <div>
            <ul>{todoItems}</ul>
        </div>
    );
}

function ExampleWithFruit() {

    // Declare a new state variable, which we'll call "count"
    const [count, setBount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    const [fruit, setFruit] = useState("Banana")

    let handleChange = (e) => {
        setFruit(e.target.value);
        return true;
    }

    useEffect(() => {
        console.log(`You meo meo ${firstName}`);
        return () => {
            console.log(`Unmounted`)
        }
    }, [count]);

    const [firstName, setFirstName] = useState('');

    return (
        <div>
            <button onClick={() => setBount(count + 1)}>
                Click me
            </button>
            <p>You clicked {count} times</p>
            <p>{firstName}</p>
            <input name="firstName" onChange={e => setFirstName(e.target.value)} />
        </div>
    );
}

export default TodoList;