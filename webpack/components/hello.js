import React from 'react'

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>Hi {this.props.name}!</div>
    );
  }
}

export default Hello;
