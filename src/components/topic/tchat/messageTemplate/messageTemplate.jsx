import React from 'react';
import PropTypes from 'prop-types';

class MessageTemplate extends React.Component {
  static propTypes = {
    msgInfo: PropTypes.shape({
      _id: String,
      text: String,
      date: Date,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    console.log('bonjour');
  }

  render() {
    const { msgInfo } = this.props;
    return <p>{msgInfo.text}</p>;
  }
}

export default MessageTemplate;
