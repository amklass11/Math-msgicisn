import React from 'react';
import './App.css';
import Calculator from './components/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      (<Calculator previous="" operand="" current="0" solved={false} />)
    );
  }
}

export default App;
