import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import Home from './components/home';
import Quote from './components/quote';
import Calculator from './components/calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="header-container">
          <h1>Math Magician</h1>
          <nav>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/calculator">Calculator</Link>
            <span> | </span>
            <Link to="/quote">Quote</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator previous="" operand="" current="0" solved={false} />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
