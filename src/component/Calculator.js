import React from 'react';
import './Buttons.css';
import Buttons from "./Buttons";
import DisplayToolbar from "./DisplayToolbar";
//import { math } from 'math';
import * as CalculatorCore from '../calculator-core';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            formula: [],
            history: [],
            input: '0',
            isShowHistory: false,
            afterCalculation: false
        };
        this.onDigit = this.onDigit.bind(this);
        this.onOperator = this.onOperator.bind(this);
        this.onClear = this.onClear.bind(this);
        this.onEqual = this.onEqual.bind(this);
        this.onDecimal = this.onDecimal.bind(this);
        //*this.onParenthesis = this.onParenthesis.bind(this);
        this.onBackspace = this.onBackspace.bind(this);
        this.onHistory = this.onHistory.bind(this);
        this.onHistoryItemClicked = this.onHistoryItemClicked.bind(this);
        this.onClearHistory = this.onClearHistory.bind(this);

        //console.log(sqrt);
    }

    onDigit({ target }) {
        const digit = target.innerText;
        const input = this.state.input;

        if (this.state.afterCalculation) {
            this.setState({
                input: digit,
                afterCalculation: false
            });
        } else if (input === '0') {
            this.setState({
                input: digit
            });
        } else if (CalculatorCore.isNotNumber(input)) {
            this.setState({
                input: digit,
                formula: this.state.formula.concat(input)
            });
        } else {
            this.setState({
                input: input.concat(digit)
            });
        }
        console.log(input);
    }

    onDecimal({ target }) {
        const decimal = target.innerText;
        const input = this.state.input;

        if (this.state.afterCalculation) {
            this.setState({
                input: `0${decimal}`,
                afterCalculation: false
            });
        } else if (CalculatorCore.isNotNumber(input)) {
            this.setState({
                input: `0${decimal}`,
                formula: this.state.formula.concat(input)
            });
        } else if (!input.includes(decimal)) {
            this.setState({
                input: input.concat(decimal),
            });
        }
    }

    onOperator({ target }) {
        const operator = target.innerText;
        const input = this.state.input;

        if (CalculatorCore.isOperator(input)) {
            this.setState({
                input: operator,
                afterCalculation: false
            });
        } else if (input !== '(') {
            this.setState({
                formula: this.state.formula.concat(this.state.input),
                input: operator,
                afterCalculation: false
            });
        }
    }

    onClear() {
        this.setState({
            formula: [],
            input: '0',
            afterCalculation: false
        });
    }

    onBackspace() {
        const input = this.state.input;
        const formula = this.state.formula;
        const currentInputLength = input.length;

        if (input === 'Infinity' || input === '-Infinity' || input === 'NaN') {
            this.setState({
                input: '0',
                afterCalculation: false
            });
        } else if (currentInputLength > 1) {
            this.setState({
                input: input.slice(0, currentInputLength - 1),
                afterCalculation: false
            });
        } else if (input !== '0') {
            this.setState({
                input: '0',
                afterCalculation: false
            });
        } else if (formula.length > 0) {
            this.setState({
                input: formula[formula.length - 1],
                formula: formula.slice(0, formula.length - 1),
                afterCalculation: false
            });
        }
    }

    onEqual() {
        const finalFormula = this.state.formula.concat(this.state.input);
        const result = window.math.eval(finalFormula.join(""));
        // CalculatorCore.evaluate(finalFormula);

        if (!Number.isNaN(result)) {
            const newHistoryItem = {
                formula: finalFormula,
                result: result
            }

            this.setState({
                input: result + "",
                formula: [],
                history: [].concat(newHistoryItem, this.state.history),
                afterCalculation: true
            });
        }
    }

    onHistory(){

    }

    onClearHistory(){

    }

    onHistoryItemClicked(){

    }

    componentDidMount() {
        
    }

    componentWillMount() {
        let d = this;
        let tri = `Toi seo mount ${this.state.date}`;
        //alert(tri)
    }

    componentWillUnmount() {
        //clearInterval(this.timerID);
    }

    render() {
        //alert("render ko kip")
        return (
            <div className="calculator">
                <DisplayToolbar
                    formula={this.state.formula}
                    input={this.state.input}
                    onBackspace={this.onBackspace}
                    
                    onHistory={this.onHistory}
                    isShowHistory={this.state.isShowHistory}
                />
                <Buttons
                    onClear={this.onClear}
                    onEqual={this.onEqual}
                    onDecimal={this.onDecimal}
                    onDigit={this.onDigit}
                    onOperator={this.onOperator}
                    onParenthesis={this.onParenthesis}
                />
            </div>
        );
    }
}
export default Calculator