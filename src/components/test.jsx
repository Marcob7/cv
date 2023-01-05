import React from 'react'

const test = () => {
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }
  
    handleClick() {
      this.setState({
        items: [...this.state.items, <li>Item</li>]
      });
    }
  
    render() {
      return (
        <div>
          <button onClick={() => this.handleClick()}>Add item</button>
          <ul>{this.state.items}</ul>
        </div>
      );
    }
  }
  
}

export default test