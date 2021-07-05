import React from 'react'
import Option from './Option'

const Options =(props) => (
  <div>
    <div className="widget-header">
      <h3>
        Your Options
      </h3>
      <button 
        className="button button--link"
        onClick={props.handleRemoveAll}
        >
          RemoveAll
      </button>
    </div>
    {
      props.options.length !==0 ?
      (props.options.map((option,index) => 
      <div>
        <br/>
        <Option index={index} optionText={option} handleRemoveOption = {props.handleRemoveOption} />
        <br/>
      </div>)
      ) : (<p className="widget__message">Please add an option to get started !</p>)
    }
  </div>
);

export default Options