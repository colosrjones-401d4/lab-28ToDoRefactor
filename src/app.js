import React from "react";
import Form from "./components/form.js";
import Title from "./components/title.js";
import List from "./components/todo/todo.js";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      items: ["First Item"]
    };
  }

  addIt = string => {
    this.setState({ items: [...this.state.items, string] });
  };

  deleteIt = idx => {
    this.state.items.splice(idx, 1);
    this.setState({ items: this.state.items });
  };

  render() {
    return (
      <>
        <Title title="The To Do App" />
        <Form action={this.addIt} items={this.state.items} />
        <List action={this.deleteIt} items={this.state.items} />
      </>
    );
  }
}
export default App