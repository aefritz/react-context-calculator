import React from 'react';
import {GlobalStateConsumer} from './GlobalState';

export default function Keyboard (props) {
  return (
    <GlobalStateConsumer>
    {(value, addOne)=>{
      console.log(value.value)
      return(
    <div>
      <div className="btn-group" role="group" aria-label="...">
        <button type="button" className="btn btn-secondary" onClick={value.add}>+</button>
        <button type="button" className="btn btn-secondary" onClick={value.subtract}>-</button>
        <button type="button" className="btn btn-secondary" onClick={value.multiply}>x</button>
        <button type="button" className="btn btn-secondary" onClick={value.divide}>/</button>
        <button type="button" className="btn btn-secondary" onClick={value.clear}>C</button>
      </div>
      <div className="btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>1</button>
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>2</button>
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>3</button>
      </div>
      <div className="btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>4</button>
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>5</button>
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>6</button>
      </div>
      <div className="btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>7</button>
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>8</button>
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>9</button>
      </div>
    </div>
    )}}
    </GlobalStateConsumer>
  )
}
