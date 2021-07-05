import React from 'react'

const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.index}. {props.optionText && <span>{props.optionText}&nbsp;&nbsp;</span>}
    </p>
    <button
      className="button button--link"
      onClick={()=>props.handleRemoveOption(props.optionText)}
    >
      Remove
    </button>
  </div>
);

export default Option