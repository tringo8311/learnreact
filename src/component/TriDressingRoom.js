import React, { Component } from "react";
import './TriDressingRoom.css';
import data from "./TriDressingRoomData";

export const MContext = React.createContext();

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.category.type,
            showName: this.props.category.showName
        };
        this.handleClickCategory = this.handleClickCategory.bind(this);
        //this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    handleClickCategory(target){
        this.props.handleClickCategory(this.state.type);
    }
    render() {
        return (
            <div className="item">
                <button type="button" className={this.selectedClassName(this.state.type)} onClick={this.handleClickCategory} data-title="do heo">{this.state.showName}</button>
            </div>
        );
    }

    selectedClassName(categoryType){
        return this.props.isSelectedCategory(categoryType) ? "btn btn-default btn-block active" : "btn btn-default btn-block";
    }
}

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: this.props.item
        };
        this.handleClickItem = this.handleClickItem.bind(this);        
    }
    
    handleClickItem(target){
        this.props.handleClickItem(this.state.item);
    }
    
    render() {
        return (
            <div className="item">
                <img src={this.state.item.imgSrc_jpg}/>
                <button className="btn btn-default btn-block" onClick={this.handleClickItem}>{this.state.item.name}</button>
            </div>
        );
    }
}
class Staging extends Component {
    constructor(props) {
        super(props);
        let d = this;
        let modelPart = this.props.modelPart;
        this.stylePart = {};
        this.defaultPart = [];

        Object.keys(modelPart).forEach(function (item) {
            if (modelPart[item] && typeof modelPart[item]["background"] != "undefined"){
                d.defaultPart.push(modelPart[item]);
            }else{
                d.stylePart[item] = modelPart[item];
            }
        });

        this.state = {
            selectedItems: this.props.selectedItems
        }
        //this.renderStyle = this.renderStyle.bind(this);
    }

    renderStyle(myItem){
        var d = this;
        let myDefaultStyle = [];
        Object.keys(this.stylePart).forEach(function (item) {
            if (item == myItem.type){
                myDefaultStyle = d.stylePart[item];
                return;
            }
        });
        let myData = {
            "backgroundImage": "url(" + myItem.imgSrc_png + ")",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "cover"
        }
        return Object.assign({}, myDefaultStyle, myData);
    }

    componentWillReceiveProps(nextProps) {
        //console.trace(nextProps);
        this.setState({
            selectedItems: nextProps.selectedItems
        })
    }

    render() {
        var d = this;
        return (
            <div>
                <div className="item">
                    {this.defaultPart.map(function (item, indx) {
                        return (
                            <div key={"defaultPart" + indx} style={item}></div>
                        )
                    })}
                </div>
                <div className="item">
                    {this.state.selectedItems.map(function (item, indx) {
                        return (
                            <div key={"selectedItems" + item["type"]} style={d.renderStyle(item)}></div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

class DressingRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategoryType: this.props.categories[0]["type"],
            categories: this.props.categories,
            items: this.props.items,
            modelPart: this.props.modelPart,
            filterItems: [],
            selectedItems: []
        };
        
        this.handleClickCategory = this.handleClickCategory.bind(this);
        this.isSelectedCategory = this.isSelectedCategory.bind(this);
        this.handleClickItem = this.handleClickItem.bind(this);
    }

    filterItemByCategory(myCategoryType) {
        // console.log(myCategory)
        this.setState({
            filterItems: this.state.items.filter(function (item) {
                // console.log(item["type"])
                return item["type"] == myCategoryType;
            })
        });
    }

    handleClickItem(myItem) {
        let myItems = this.state.selectedItems;
        let orgLength = myItems.length;
        let oneItemTwiceClick = false;

        var newMyItems = myItems.filter(function (item) {
            // console.log(item["type"])
            if (item["id"] == myItem["id"]){
                oneItemTwiceClick = true;
            }
            return item["id"] != myItem["id"] && item["type"] != myItem["type"];
        });
        let newLength = newMyItems.length;
        //console.log(newLength);
        if (orgLength === 0 || orgLength == newLength){
            myItems.push(myItem);
        }else if (orgLength > newLength){
            if (oneItemTwiceClick){
                myItems = newMyItems;
            }else{
                myItems = [...newMyItems, myItem];
            }
        }else{
            //myItems.push(myItem);
        }
        //myItems = myItems.map(l => Object.assign({}, l));

        this.setState((prevState) => {
            return { selectedItems: myItems }
        });
    }

    handleClickCategory(myCategoryType) {
        this.setState({
            selectedCategoryType: myCategoryType
        })
        this.filterItemByCategory(myCategoryType);
    }

    isSelectedCategory(myCategoryType){
        return this.state.selectedCategoryType === myCategoryType
    }

    componentDidMount(){
        this.filterItemByCategory(this.state.selectedCategoryType);
    }

    render() {
        let d = this;
        return (
            <div className="dressing-room">
                <div className="box categories-box">
                    {this.state.categories.map(function (category, i) {
                        return (
                            <Category key={"category" + i} category={category} handleClickCategory={d.handleClickCategory} isSelectedCategory={d.isSelectedCategory}/>
                        );
                    })}
                </div>
                <div className="box items-box">
                    {this.state.filterItems.map(function (item, i) {
                        return (
                            <Item key={item.type + i} item={item} handleClickItem={d.handleClickItem}/>
                        );
                    })}
                </div>
                <div className="box staging-box">
                    <Staging modelPart={this.state.modelPart} selectedItems={this.state.selectedItems}/>
                </div>
            </div>
        );
    }

    
}

function TriDressingRoom(props) {
    return <DressingRoom modelPart={data.modelPart} categories={data.categories} items={data.items}/>;
}
export { TriDressingRoom };