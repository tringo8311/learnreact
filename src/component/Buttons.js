import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillMount() {
        let d = this;
        //let tri = `Toi seo mount ${this.state.date}`;
        //alert(tri)
    }

    componentWillUnmount() {
        //clearInterval(this.timerID);
    }

    render() {
        //alert("render ko kip")
        return (
            <div className="buttons">

                <button></button>
                <button></button>
                <button id="percent" onClick={this.props.onClear}>%</button>
                <button id="clear" onClick={this.props.onClear}>AC</button>

                <button id="seven" onClick={this.props.onDigit}>7</button>
                <button id="eight" onClick={this.props.onDigit}>8</button>
                <button id="nine" onClick={this.props.onDigit}>9</button>
                <button id="divide" onClick={this.props.onOperator}>/</button>

                <button id="four" onClick={this.props.onDigit}>4</button>
                <button id="five" onClick={this.props.onDigit}>5</button>
                <button id="six" onClick={this.props.onDigit}>6</button>
                <button id="multiply" onClick={this.props.onOperator}>*</button>

                <button id="one" onClick={this.props.onDigit}>1</button>
                <button id="two" onClick={this.props.onDigit}>2</button>
                <button id="three" onClick={this.props.onDigit}>3</button>
                <button id="subtract" onClick={this.props.onOperator}>-</button>

                <button id="zero" onClick={this.props.onDigit}>0</button>
                <button id="decimal" onClick={this.props.onDecimal}>.</button>
                <button id="equals" onClick={this.props.onEqual}>=</button>
                <button id="add" onClick={this.props.onOperator}>+</button>
            </div>
        );
    }
}
export default Buttons