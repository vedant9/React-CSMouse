import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      count: 0
    }
    this.handle= this.handle.bind(this)
    this.reset= this.reset.bind(this)
    this.starting=this.starting.bind(this)
  }
  handle(){
    this.setState(prevState => {
      return{
        count: prevState.count+1
      }
    })
  }

  starting(){
    this.setState({count: 0})
    document.getElementById("Shoot").disabled = false;
    setTimeout(() => {
      document.getElementById("Shoot").disabled = true;
    },2000)
    setTimeout(() => {
      document.getElementById("Start").disabled = true;
    },2000)
  }    
  reset(){
    document.getElementById("Start").disabled = false;
    this.setState({
        count: 0
    })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button id="Shoot" ref="Shoot" onClick={this.handle}>SHOOT</button>
        <button id="Start" onClick={this.starting}>START</button>
        <button id="Reset" onClick={this.reset}>RESET</button>
      </div>
    );
  }
}

export default App;
