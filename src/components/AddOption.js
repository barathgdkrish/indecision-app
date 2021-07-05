import React from 'react'

export default class AddOption extends React.Component {

    state = {
          error: undefined
      }
    
    handleAddOption = (e) => {
      e.preventDefault();
      let option = e.target.elements.option.value.trim();
      e.target.elements.option.value = '';
      const error = this.props.handleAddOption(option);
      // console.log(error)
      this.setState(()=>({error}));
  
    }
    render() {
      return (
        <div>
          {this.state.error && <p className="add-option-error">{this.state.error}</p>}
          <form 
            className="add-option"
            onSubmit={this.handleAddOption}>
            <input 
            className="add-option__text"
            type='text' name='option' />
            <button className="button">Add Option</button>
          </form>
        </div>
      );
    }
  }