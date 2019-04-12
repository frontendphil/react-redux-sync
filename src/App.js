import "./App.css";

import React, { Component } from "react";
import { Provider } from "react-redux";

import Parent from "./Parent";
import { NameProvider } from "./context";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NameProvider name="Example page">
          <div className="App">
            <Parent />
          </div>
        </NameProvider>
      </Provider>
    );
  }
}

export default App;
