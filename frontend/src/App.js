// App.js
import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  send() {
    console.log("hello");
    sendMsg("hello");
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.send}>Hit</button>
      </div>
    );
  }
}

export default App;