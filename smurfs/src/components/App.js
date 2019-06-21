import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { fetchSmurfs, addSmurf } from "../actions";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  render() {
    return (
      <div className="App">
        <ul>
          {this.props.smurfs.map(smurfHere => (
            <div>
              <h2>{smurfHere.name}</h2>
              <p>
                Age: {smurfHere.age}
                Height: {smurfHere.height}
              </p>
            </div>
          ))}
        </ul>
        <form>
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <input
            placeholder="Age"
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.changeHandler}
          />
          <input
            placeholder="Height"
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.changeHandler}
          />
          <button onClick={this.submitHandler}>Add</button>
        </form>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    this.props.addSmurf(this.state);
  };
}

const mapStateToProps = state => {
  return {
    addSmurf: state.addSmurf,
    fetchSmursf: state.fetchSmurfs,
    smurfs: state.smurfs,
    error: fetchSmurfs.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(App);
