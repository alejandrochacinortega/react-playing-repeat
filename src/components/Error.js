import React from 'react';

class Error extends React.Component {
  render() {
    return (
        <p style={{color: 'red'}}>{this.props.profileNotFound}</p>
    )
  }
}

export default Error;