import React, { Component } from 'react';
import 'react-select/dist/react-select.css';
import './App.css';
import data from './mocks/data.json';
import { Table } from './components/table';
import Select from 'react-select';
import { uniq } from 'lodash';
import { Pagination } from './components/pagination'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: data,
      selected: '',
      pageOfItems: [],
      buffer: data
    }
  };


  logChange = (val) => {
    this.setState({
      selected: val.value,
      buffer: this.state.food.filter(obj => obj.brand === val.value)
    })
  };

  handlerReset = () => {
    this.setState({
      selected: '',
      buffer: data
    })
  }


  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems });
  }


  render() {

    const allBrandNames = this.state.food.map(item => item.brand),
      uniqBrandName = uniq(allBrandNames),
      options = uniqBrandName.map(brand => ({ value: brand, label: brand }))

    return (
      <div className='wrapper'>
        <header>
          <div className='filter__search'>фильтры</div>
          <div className='filter__select'>
            <label>Бренды:</label>
            <Select
              placeholder='показать все'
              className='select'
              name='form-field-name'
              searchable={false}
              clearable={false}
              value={this.state.selected}
              options={options}
              onChange={this.logChange}
            />
          </div>
          <div className='filter__reset' onClick={this.handlerReset}>Сбросить фильтры</div>
        </header>
        <main>
          <h2>
            <p><output>{this.state.buffer.length}</output> Товара</p>
          </h2>
          <Table food={this.state.pageOfItems} />
        </main>
        <footer>
          <Pagination items={this.state.buffer} onChangePage={this.onChangePage} />
        </footer>

      </div>
    )
  }
}

export default App;
