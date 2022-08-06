import React from 'react';
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      class1,
      previous,
      current,
      operand,
    } = this.props;

    return (
      <div className={class1}>
        <span className="previous">{previous}</span>
        <span className="operand">{operand}</span>
        <span className="current">{current}</span>
      </div>
    );
  }
}

Display.propTypes = {
  class1: PropTypes.string.isRequired,
  previous: PropTypes.string,
  current: PropTypes.string,
  operand: PropTypes.string,
};

Display.defaultProps = {
  previous: '',
  operand: '',
  current: '0',
};

export default Display;
