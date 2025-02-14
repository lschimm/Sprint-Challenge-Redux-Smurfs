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
        {this.props.smurfs.map(smurfHere => (
          <div className="smurf-layout">
            <h2>{smurfHere.name}</h2>
            <p>
              Age: {smurfHere.age} Height: {smurfHere.height}
            </p>
          </div>
        ))}
        <div className="forms">
          <form>
            <input
              name="name"
              onChange={this.changeHandler}
              placeholder="Name"
              type="text"
              value={this.state.name}
            />
            <input
              name="age"
              onChange={this.changeHandler}
              placeholder="Age"
              type="text"
              value={this.state.age}
            />
            <input
              name="height"
              onChange={this.changeHandler}
              placeholder="Height"
              type="text"
              value={this.state.height}
            />
            <button onClick={this.submitHandler}>Add</button>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = () => {
    this.props.addSmurf(this.state);
  };
}

const mapStateToProps = state => {
  return {
    addSmurf: state.addSmurf,
    fetchSmurfs: state.fetchSmurfs,
    smurfs: state.smurfs,
    error: fetchSmurfs.error
    // ???
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(App);
