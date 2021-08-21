import React from "react";
import "./AddInput.css";
class AddInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }
  handletask = (e) => {
    this.setState({ task: e.target.value });
  };

  render() {
    return (
      <form className="add">
        <input onChange={(e) => this.handletask(e)} value={this.state.task} />
        <button
          onClick={(e) => (
            e.preventDefault(),
            this.props.handleAddItem(this.state.task),
            (this.state.task = "")
          )}
        >
          +
        </button>
      </form>
    );
  }
}

export default AddInput;
