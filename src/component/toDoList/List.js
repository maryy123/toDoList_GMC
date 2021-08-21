import React from "react";
import "./List.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        {this.props.tab.map((el, i) => (
          <div className="task">
            <li>{el}</li>

            <button onClick={() => this.props.handleDelete(i)}>-</button>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
