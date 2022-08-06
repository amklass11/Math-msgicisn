/* eslint-disable react/prefer-stateless-function */
// import React, { Component } from 'react';
import React from 'react';
// import './quote.css';

class Quote extends React.Component {
  render() {
    const quoteStyle = {
      margin: '10%',
      fontSize: 'larger',
      fontWeight: 'bold',
    };

    return (
      <div style={quoteStyle} className="quote">
        <p>
          Mathematics is not about numbers, equations, computations,
          or algorithms:,, is about understanding. -William Paul Thurston.

        </p>
      </div>
    );
  }
}

export default Quote;
