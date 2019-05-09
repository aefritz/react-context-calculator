import React from 'react';
import {GlobalStateConsumer} from './GlobalState';

export default function Keyboard (props) {
  return (
    <GlobalStateConsumer>
    {(value)=>{
      return(
    <div className='keyboard'>
      <div className="btn-group" role="group" aria-label="...">
        <button type="button" className="btn btn-secondary" onClick={()=>value.selectAction(value.add)}>+</button>
        <button type="button" className="btn btn-secondary" onClick={()=>value.selectAction(value.subtract)}>-</button>
        <button type="button" className="btn btn-secondary" onClick={()=>value.selectAction(value.multiply)}>x</button>
        <button type="button" className="btn btn-secondary" onClick={()=>value.selectAction(value.divide)}>/</button>
        <button type="button" className="btn btn-secondary" onClick={value.clear}>C</button>
      </div><br/>
      <div className="btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>1</button>
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>2</button>
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>3</button>
      </div><br/>
      <div className="btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>4</button>
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>5</button>
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>6</button>
      </div><br/>
      <div className="btn-group" role="group" aria-label="First group">
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>7</button>
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>8</button>
        <button type="button" className="btn btn-secondary" onClick={value.addPayload}>9</button>
        <button type="button" className="btn btn-secondary" onClick={value.reduce}>=</button>
      </div>
    </div>
    )}}
    </GlobalStateConsumer>
  )
}
