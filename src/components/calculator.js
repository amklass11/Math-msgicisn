import { React, useState } from 'react';
import PropTypes from 'prop-types';
import Buttons from './buttons';
import Display from './display';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = (props) => {
  const {
    previous,
    operand,
    current,
  } = props;
  const [total, setTotal] = useState(previous);
  const [operation, setOperation] = useState(operand);
  const [next, setNext] = useState(current);

  const update = (btnClick) => {
    const obj = calculate({
      total,
      operation,
      next,
    }, btnClick);
    setTotal(obj.total);
    setOperation(obj.operation);
    setNext(obj.next);
  };

  return (
    <div className="calculator-page">
      <div>
        <h2>Lets do some math!</h2>
      </div>
      <div className="container">
        <Display class1="display" previous={total} operand={operation} current={next} />
        <div className="operators-container">
          <div className="grey-btn">
            <Buttons label="AC" clickEvent={(string) => update(string)} />
            <Buttons label="+/-" clickEvent={(string) => update(string)} />
            <Buttons label="%" clickEvent={(string) => update(string)} />
            <Buttons label="7" clickEvent={(string) => update(string)} />
            <Buttons label="8" clickEvent={(string) => update(string)} />
            <Buttons label="9" clickEvent={(string) => update(string)} />
            <Buttons label="4" clickEvent={(string) => update(string)} />
            <Buttons label="5" clickEvent={(string) => update(string)} />
            <Buttons label="6" clickEvent={(string) => update(string)} />
            <Buttons label="1" clickEvent={(string) => update(string)} />
            <Buttons label="2" clickEvent={(string) => update(string)} />
            <Buttons label="3" clickEvent={(string) => update(string)} />
            <Buttons id="cero" label="0" clickEvent={(string) => update(string)} />
            <Buttons label="." clickEvent={(string) => update(string)} />
          </div>
          <div className="orange-btn">
            <Buttons label="÷" clickEvent={(string) => update(string)} />
            <Buttons label="x" clickEvent={(string) => update(string)} />
            <Buttons label="-" clickEvent={(string) => update(string)} />
            <Buttons label="+" clickEvent={(string) => update(string)} />
            <Buttons label="=" clickEvent={(string) => update(string)} />
          </div>
        </div>
      </div>

    </div>
  );
};

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
