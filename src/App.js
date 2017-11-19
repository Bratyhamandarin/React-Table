import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './mocks/data.json';
import { Table } from './components/table'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food:data
    }
    
    
  };

  render() {
    return (
     <Table food = {this.state.food}/>
    )
  }
}

export default App;
