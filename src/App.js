import React, {Component} from 'react';
import {GlobalStateProvider} from './components/GlobalState';
import {GlobalStateConsumer} from './components/GlobalState';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }

  add (value) {
    this.setState(prevState => ({
      value: prevState.value + value
    }))
  }

  subtract (value) {
    this.setState(prevState => ({
      value: prevState.value - value
    }))
  }

  multipy (value) {
    this.setState(prevState => ({
      value: prevState.value * value
    }))
  }

  divide (value) {
    this.setState(prevState => ({
      value: prevState.value * value
    }))
  }

  render () {
    return (
      <div className="App">
        <GlobalStateProvider value={this.state}>
          <div>
            <GlobalStateConsumer>
              {value => (<div>{value.value}</div>)}
            </GlobalStateConsumer>
          </div>
        </GlobalStateProvider>
        </div>
      );
  }
}

export default App;
