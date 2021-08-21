import React from "react";
import "./App.css";
import AddInput from "./component/toDoList/AddInput";
import List from "./component/toDoList/List";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Task 1", "Task 2"],
    };
  }
  handleAddItem = (item) => {
    this.setState({ items: [...this.state.items, item] });
  };
  handleDelete = (index) => {
    this.setState({ items: this.state.items.filter((el, i) => i != index) });
  };
  userName = prompt("Hii! What's your name?");

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{ color: "rgb(179, 0, 59)" }}>
            {this.userName}'s ToDo List
          </h1>
          <p>You have {this.state.items.length} task(s)</p>
          <AddInput handleAddItem={this.handleAddItem} />
          <List tab={this.state.items} handleDelete={this.handleDelete} />
        </header>
      </div>
    );
  }
}

export default App;
