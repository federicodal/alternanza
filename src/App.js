import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
	state={
  	counter:0
  }
  

  renderButtonComponent=(text,callback)=>{
   return (
   <button class="bottone"onClick={() =>callback()}>
	{text}
   </button>
   )
  }

	render(){
  //this.props ci da le var passate da classi estese
		return (
		<div class="contitolo">
			
				<h1 class="titolo"> 
					Counter:{this.state.counter}
				</h1>

				<div id="sidebar">
				{this.renderButtonComponent("Incrementa",() => this.setState({counter: this.state.counter +1}))}
				{this.renderButtonComponent("Decrementa",() => this.setState({counter: this.state.counter -1}))}    	
    	  
			</div>
		</div>
      
      
    )
	}
}

export default App;

