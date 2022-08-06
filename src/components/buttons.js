import React from 'react';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent() {
    const { clickEvent, label } = this.props;
    clickEvent(label);
  }

  render() {
    const { id, label } = this.props;
    return (<button id={id} type="button" onClick={this.clickEvent}>{label}</button>);
  }
}

Buttons.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  clickEvent: PropTypes.func.isRequired,
};

Buttons.defaultProps = {
  id: '',
};

export default Buttons;
