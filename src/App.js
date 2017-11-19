import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './mocks/data.json';
import { Table } from './components/table';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {uniq} from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: data,
      selected: ''
    }
  };


  logChange = (val) => {
    this.setState({
      selected: val.value
    })
  };

  handlerReset = () => {
    this.setState({
      selected: ''
    })
  }
  

  render() {
    const allBrandNames = this.state.food.map(item => item.brand),
          uniqBrandName = uniq(allBrandNames),
          options = uniqBrandName.map(brand => ({value: brand, label: brand}))
    let  displayData = this.state.selected? this.state.food.filter(obj => obj.brand == this.state.selected) : this.state.food
    return (
      <div className='wrapper'> 
        <header>
          <div className='filter'>
            ФИЛЬТРЫ
          </div>
          <Select
            name="form-field-name"
            searchable={false}
            clearable= {false}
            value={this.state.selected}
            options={options}
            onChange={this.logChange}
          />
          <div className='Reset' onClick={this.handlerReset}>Сбросить фильтры</div>
        </header>
        <main>
          <p><output>{displayData.length}</output> Товара</p>
          <Table food = {displayData}/>
        </main>
        

      </div>
    )
  }
}

export default App;
