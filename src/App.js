import React, {Component} from 'react';
import {GlobalStateProvider} from './components/GlobalState';
import {GlobalStateConsumer} from './components/GlobalState';
import OutputIndicator from './components/OutputIndicator';
import Keyboard from './components/Keyboard'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      payload: null,
      action: null,
      valueFocus: true,
      freshStart: true
    }
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
    this.reduce = this.reduce.bind(this);
    this.addPayload = this.addPayload.bind(this);
    this.selectAction = this.selectAction.bind(this);
  }

  selectAction (action) {
    this.setState(prevState => ({
      ...prevState,
      action: action,
      payload: 0,
      valueFocus: false,
      freshStart: false
    }))
  }

  add (value1, value2) {
    return value1 + value2;
  }

  subtract (value1, value2) {
    return value1 - value2;
  }

  multiply (value1, value2) {
    return value1 * value2;
  }

  divide (value1, value2) {
    return value1 / value2;
  }

  clear() {
    this.setState(prevState => ({
      value: 0,
      payload: 0,
      action: null,
      freshStart: true,
      valueFocus: true
    }))
  }

  reduce() {
    this.setState(prevState => ({
      value: prevState.action(prevState.value, prevState.payload),
      payload: 0,
      action: null,
      valueFocus: true
    }))
  }

  addPayload(ev) {
    const value = ev.target.innerText;
    if (this.state.freshStart) {
      this.setState(prevState => ({
        ...prevState,
        payload: parseInt((prevState.payload !== null ? prevState.payload : 0) + value),
        value: parseInt((prevState.payload !== null ? prevState.payload : 0) + value)
      }))
    } else {
      this.setState(prevState => ({
        ...prevState,
        payload: parseInt(prevState.payload + value),
        valueFocus: false
      }))
    }
  }

  render () {
    return (
      <div className="App">
        <GlobalStateProvider value={{
          value: this.state.value,
          payload: this.state.payload,
          add: this.add,
          multiply: this.multiply,
          subtract: this.subtract,
          addPayload: this.addPayload,
          clear: this.clear,
          selectAction: this.selectAction,
          reduce: this.reduce,
          valueFocus: this.state.valueFocus}}>
          <OutputIndicator/>
          <Keyboard/>
        </GlobalStateProvider>
        </div>
      );
  }
}

export default App;
