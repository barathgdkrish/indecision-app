import React from 'react'

const Action = (props)=> (
  <div className="action-block">
    <button 
      onClick={props.handlePick}
      disabled={props.hasOptions}
      className = "big-button"
    >
      What should I do?
    </button>
  </div>
);

export default Action