import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {

  state = {
      options : [],
      selectedOption: undefined
    }
  
  componentDidMount = () => {
    try {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    if(options)  
      this.setState(()=> ({options}));  
    } catch (error) { 
  }  
  }

  componentDidUpdate= (prevProps,prevState) => {
    // console.log(prevState.options.length);
    if(prevState.options.length !== this.state.options.length){
      // console.log("Component did update")
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  }

  componentWillUnmount = () => { 
    console.log("Component will unmount")
  }
  handlePick = () => {
    let index = Math.floor(Math.random() * (this.state.options.length));
    const selectedOption = this.state.options[index];
    // console.log(index);
    // alert(this.state.options[index]);
    this.setState(()=>({selectedOption}))
    
  }

  handleRemoveAll = () => {
    this.setState(() => ({options : []}));
  }
  handleRemoveOption = (optionToRemove) => { this.setState((prevState) => 
    ({options : prevState.options.filter( option => option !== optionToRemove)}))
  }
  handleAddOption = (option) => {
    // console.log('testing')
    if(!option){
      return "Enter a valid option"
    }else if (this.state.options.indexOf(option)>-1){
      return "Option already exists"
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  }
  handleModalclose = () => {
      this.setState(()=>({selectedOption: undefined}))
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action handlePick = {this.handlePick} hasOptions={this.state.options.length === 0}/>
          <div className="widget">
            <Options key={this.state.options} handleRemoveAll={this.handleRemoveAll} handleRemoveOption={this.handleRemoveOption} options={this.state.options} />
            <AddOption handleAddOption = {this.handleAddOption} />
          </div>
        </div>
        <OptionModal selectedOption= {this.state.selectedOption} close={this.handleModalclose}/>
      </div>
    );
  }
}