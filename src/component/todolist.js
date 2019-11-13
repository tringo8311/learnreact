import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
   Link
} from "react-router-dom";

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

const FilterEnum = Object.freeze({ 
    "all": "ALL",
    "active": "ACTIVE", 
    "completed": "COMPLETED"
});

const makeid = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

class TodoCreate extends Component {
    constructor(props) {
        super(props);
        //this.props = props
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.state = {
            newContent: ""
        }
    }

    handleKeyUp(event){
        if (event.key === 'Enter') {
            console.log('enter press here! ')
            let newContent = this.state.newContent;
            this.props.handleSubmit(newContent);
            this.setState({
                newContent: ""
            })
        }
    }

    handleChange(newValue){
        this.setState({newContent: newValue});
    }

    render(){
        return (<React.Fragment>
            <div className="form-group">
                <input type="text" value={this.state.newContent} className="form-control" placeholder="Please type here" onKeyUp={this.handleKeyUp} onChange={e => this.handleChange(e.target.value)}/>
            </div>
        </React.Fragment>)
    }
}

/***
 * Item Model: 
 * {
 *      id: random String
 *      content: user input
 *      status: enum(active, pending, )
 * }
 * 
 */

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item
        }
        this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleToggleCompleted(e, item){
        if(e.target){
            var isToggle = true;
            this.props.handleToggleCompleted(isToggle, item.id)
        }
    }

    handleRemove(e, item){
        if (e.target) {
            this.props.handleRemove(item.id)
        }
    }

    render() {
        return (<React.Fragment>
            <input type="checkbox" name="chekbox" value={this.state.item.id} defaultChecked={this.state.item.status == FilterEnum.completed} onChange={(e) => { this.handleToggleCompleted(e, this.state.item) }}/>
            <label> {this.state.item["content"]} </label>
            <a href="javascript:;" onClick={(e) => { this.handleRemove(e, this.state.item)}}>Remove</a>
        </React.Fragment>)
    }
}

class TodoFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFilter: this.props.currentFilter
        }
        //this.props = props
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
    }

    handleChangeFilter(e, newValue){
        if(e.target){
            this.setState({
                currentFilter: newValue
            })
            this.props.handleChangeFilter(newValue);
        }
    }

    handleClassName(myFilter){
        if (this.state.currentFilter == myFilter){
            return "btn active";
        }
        return "btn";
    }

    render() {
        return (<React.Fragment>
            <ul className="filter-list">
                <li className="item"><Link to="/todos/all" className={this.handleClassName(FilterEnum.all)} onClick={(e) => this.handleChangeFilter(e, FilterEnum.all)}>All</Link></li>
                <li className="item"><Link to="/todos/active" className={this.handleClassName(FilterEnum.active)} onClick={(e) => this.handleChangeFilter(e, FilterEnum.active)}>Active</Link></li>
                <li className="item"><Link to="/todos/completed" className={this.handleClassName(FilterEnum.completed)} onClick={(e) => this.handleChangeFilter(e, FilterEnum.completed)}>Completed</Link></li>
            </ul>
        </React.Fragment>)
    }
}

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            nowShowing: this.props.nowshowing ? this.props.nowshowing : FilterEnum.all
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
        this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    componentDidMount() {
        var setState = this.setState;
        this.setState({
            items: [...myData]
        });
        // var router =     ({
            //     '/': setState.bind(this, { nowShowing: FilterEnum.all }),
            //     '/active': setState.bind(this, { nowShowing: FilterEnum.active }),
            //     '/completed': setState.bind(this, { nowShowing: FilterEnum.completed })
            // });
            // router.init('/');
        
    }

    componentDidUpdate(prevProps) {
        // will be true

        //console.log(this.props.location);
    }

    handleChangeFilter(newValue){
        //var setState = this.setState;
        this.setState({
            "nowShowing": newValue
        })
    }

    handleRemove(todoId){
        let myItems = [...this.state.items];
        let foundIndex = myItems.findIndex(x => x.id == todoId);
        if (foundIndex > -1) {
            let foundItem = { ...myItems[foundIndex] };
            myItems.splice(foundIndex, 1);
            //console.log(myItems);
            this.setState({
                items: myItems
            })
        }
    }

    handleSubmit(newValue){
        //console.log(newValue)
        var newItems = [...this.state.items];
        newItems.push({
            id: makeid(16),
            content: newValue,
            status: FilterEnum.active
        })
        this.setState({
            items: newItems
        })
    }

    handleToggleCompleted(isToggle, todoId){
        //console.log(todoId);
        let myItems = [...this.state.items];
        let foundIndex = myItems.findIndex(x => x.id == todoId);
        if(foundIndex > -1){
            let foundItem = { ...myItems[foundIndex] };
            foundItem.status = isToggle ? FilterEnum.completed : FilterEnum.active;
            myItems[foundIndex] = foundItem;
            //console.log(myItems);
            this.setState({
                items: myItems
            })
        }
    }

    render(){
        var myItems = [...this.state.items];
        var shownTodos = myItems.filter(function (todo) {
            switch (this.state.nowShowing) {
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
                <li key={"todo" + todo.id}><TodoItem item={todo} handleToggleCompleted={this.handleToggleCompleted} handleRemove={this.handleRemove}/></li>
            );
        }, this);

        const mainSection = (
            <section className="main">
                <label
                    htmlFor="toggle-all"
                />
                <ul className="todo-list">
                    {todoItems}
                </ul>
            </section>
        )
        

        let todoFilter;
        if(this.state.items.length)
            todoFilter = (
                <TodoFilter handleChangeFilter={this.handleChangeFilter} currentFilter={this.state.nowShowing}/>
            )

        return (<React.Fragment>
            <h2>Todo List</h2>
            <TodoCreate handleSubmit={this.handleSubmit}/>
            {mainSection}
            {todoFilter}
        </React.Fragment>)
    }
}

export default TodoList