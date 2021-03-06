import React from 'react';
import {GlobalStateConsumer} from './GlobalState';

export default function OutputIndicator (props) {
  return (
    <GlobalStateConsumer>
      {(value) => (<div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">{value.valueFocus ? value.value : value.payload}</h1>
          </div>
        </div>)}
    </GlobalStateConsumer>
  )
}
