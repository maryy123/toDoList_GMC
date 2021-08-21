import React from "react";

class ShowName extends React.Component {
  state = {
    fullName: "Mary Ch",
    show: true,
    counter: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);
  }

  handleClick = () => this.setState({ show: !this.state.show });
  showInput = (e) => this.setState({ fullName: e.target.value });
  render() {
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.show ? "Hide" : " Show"}
        </button>
        {this.state.show ? (
          <>
            <h3>Hi it's {this.state.fullName}</h3>
            <p>{this.state.counter}</p>
            <input onChange={(e) => this.showInput(e)} />
          </>
        ) : null}
      </>
    );
  }
}
export default ShowName;
