import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "",
      items: this.props.items
    };
  }
  Handler = event => {
    event.preventDefault();
    this.props.action(this.state.current);
    this.setState({ current: "" });
  };

  Capture = event => {
    let current = event.target.value;
    this.setState({ current });
  };

  render() {
    return (
      <form onSubmit={this.Handler}>
        <input onChange={this.Capture} /> Add New Item
      </form>
    );
  }
}

export default Form;
