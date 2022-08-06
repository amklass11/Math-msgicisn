import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './buttons';
import Display from './display';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    const {
      previous,
      operand,
      current,
    } = props;
    this.state = {
      total: previous,
      operation: operand,
      next: current,
    };
    this.update = this.update.bind(this);
  }

  update(btnClick) {
    const obj = calculate(this.state, btnClick);
    this.setState(() => ({
      total: obj.total,
      operation: obj.operation,
      next: obj.next,
    }));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="container">
        <Display class1="display" previous={total} operand={operation} current={next} />
        <div className="operators-container">
          <div className="grey-btn">
            <Buttons label="AC" clickEvent={(string) => this.update(string)} />
            <Buttons label="+/-" clickEvent={(string) => this.update(string)} />
            <Buttons label="%" clickEvent={(string) => this.update(string)} />
            <Buttons label="7" clickEvent={(string) => this.update(string)} />
            <Buttons label="8" clickEvent={(string) => this.update(string)} />
            <Buttons label="9" clickEvent={(string) => this.update(string)} />
            <Buttons label="4" clickEvent={(string) => this.update(string)} />
            <Buttons label="5" clickEvent={(string) => this.update(string)} />
            <Buttons label="6" clickEvent={(string) => this.update(string)} />
            <Buttons label="1" clickEvent={(string) => this.update(string)} />
            <Buttons label="2" clickEvent={(string) => this.update(string)} />
            <Buttons label="3" clickEvent={(string) => this.update(string)} />
            <Buttons id="cero" label="0" clickEvent={(string) => this.update(string)} />
            <Buttons label="." clickEvent={(string) => this.update(string)} />
          </div>
          <div className="orange-btn">
            <Buttons label="÷" clickEvent={(string) => this.update(string)} />
            <Buttons label="x" clickEvent={(string) => this.update(string)} />
            <Buttons label="-" clickEvent={(string) => this.update(string)} />
            <Buttons label="+" clickEvent={(string) => this.update(string)} />
            <Buttons label="=" clickEvent={(string) => this.update(string)} />
          </div>
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  previous: PropTypes.string,
  operand: PropTypes.string,
  current: PropTypes.string,
};

Calculator.defaultProps = {
  previous: '',
  operand: '',
  current: '0',
};

export default Calculator;
