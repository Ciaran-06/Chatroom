import React, { Component } from "reac";
import './App.css';
import { connect, sendsMsg } from "../api"

class App extends Component {
  constructor(props) {
    super(props);
    connect();
  }

  send() {
    console.log("hello");
    sendsMsg("hello;")
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;
