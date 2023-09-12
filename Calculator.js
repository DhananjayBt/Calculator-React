import React, { Component } from 'react';
import './Calculator.css'; 

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0',
      previousValue: null,
      operator: null,
    };
  }

  handleDigitClick = (digit) => {
    const { displayValue } = this.state;

    if (displayValue === '0') {
      this.setState({ displayValue: digit });
    } else {
      this.setState({ displayValue: displayValue + digit });
    }
  };

  handleOperatorClick = (operator) => {
    const { displayValue, previousValue } = this.state;

    if (previousValue === null) {
      this.setState({
        previousValue: displayValue,
        displayValue: '0',
        operator,
      });
    } else {
      this.calculateResult();
      this.setState({
        operator,
        displayValue: '0',
      });
    }
  };

  calculateResult = () => {
    const { displayValue, previousValue, operator } = this.state;
    let result;

    switch (operator) {
      case '+':
        result = parseFloat(previousValue) + parseFloat(displayValue);
        break;
      case '-':
        result = parseFloat(previousValue) - parseFloat(displayValue);
        break;
      case '*':
        result = parseFloat(previousValue) * parseFloat(displayValue);
        break;
      case '/':
        result = parseFloat(previousValue) / parseFloat(displayValue);
        break;
      default:
        return;
    }

    this.setState({
      displayValue: result.toString(),
      previousValue: null,
      operator: null,
    });
  };

  handleEqualClick = () => {
    this.calculateResult();
  };

  handleClearClick = () => {
    this.setState({
      displayValue: '0',
      previousValue: null,
      operator: null,
    });
  };

  render() {
    const { displayValue } = this.state;

    return (
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="buttons">
          <button onClick={() => this.handleDigitClick('1')}>1</button>
          <button onClick={() => this.handleDigitClick('2')}>2</button>
          <button onClick={() => this.handleDigitClick('3')}>3</button>
          <button onClick={() => this.handleOperatorClick('+')}>+</button>
          <button onClick={() => this.handleDigitClick('4')}>4</button>
          <button onClick={() => this.handleDigitClick('5')}>5</button>
          <button onClick={() => this.handleDigitClick('6')}>6</button>
          <button onClick={() => this.handleOperatorClick('-')}>-</button>
          <button onClick={() => this.handleDigitClick('7')}>7</button>
          <button onClick={() => this.handleDigitClick('8')}>8</button>
          <button onClick={() => this.handleDigitClick('9')}>9</button>
          <button onClick={() => this.handleOperatorClick('*')}>*</button>
          <button onClick={() => this.handleDigitClick('0')}>0</button>
          <button onClick={() => this.handleClearClick()}>C</button>
          <button onClick={() => this.handleEqualClick()}>=</button>
          <button onClick={() => this.handleOperatorClick('/')}>/</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
