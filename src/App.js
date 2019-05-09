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
      payload: 0
    }
    this.add = this.add.bind(this);
    this.addOne = this.addOne.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
    this.addPayload = this.addPayload.bind(this);
  }

  add (value) {
    this.setState(prevState => ({
      value: prevState.value + prevState.payload,
      payload: 0
    }))
  }

  subtract () {
    this.setState(prevState => ({
      value: prevState.value - prevState.payload,
      payload: 0
    }))
  }

  multiply () {
    this.setState(prevState => ({
      value: prevState.value * prevState.payload,
      payload: 0
    }))
  }

  divide () {
    this.setState(prevState => ({
      value: prevState.value / prevState.payload,
      payload: 0
    }))
  }

  clear() {
    this.setState(prevState => ({
      value: 0,
      payload: 0
    }))
  }

  addPayload(ev) {
    const value = ev.target.innerText;
    console.log(value);
    this.setState(prevState => ({
      ...prevState,
      payload: parseInt(value)
    }))
  }

  addOne(value) {
    return value + 1;
  }

  render () {
    return (
      <div className="App">
        <GlobalStateProvider value={{value: this.state.value, payload: this.state.payload, add: this.add, multiply: this.multiply, addPayload: this.addPayload, clear: this.clear}}>
          <OutputIndicator/>
          <Keyboard/>
        </GlobalStateProvider>
        </div>
      );
  }
}

export default App;
