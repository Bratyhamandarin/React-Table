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
      pageOfItems: []
    }
  };


  handleChangeFilter = (val) => {
    this.setState({
      selected: val.value,
      food: data.filter(obj => obj.brand === val.value)
    })
  };

  handleResetFilter = () => {
    this.setState({
      selected: '',
      food: data
    })
  }


  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems });
  }


  render() {

    const allBrandNames = data.map(item => item.brand),
      uniqBrandName = uniq(allBrandNames),
      options = uniqBrandName.map(brand => ({ value: brand, label: brand }))

    return (
      <div className='wrapper'>
        <header className='filter'>
          <div className='filter__search filter_pointer'>фильтры</div>
          <div className='filter__select select'>
            <label className='select__label filter_pointer'>Бренды:</label>
            <Select
              placeholder='показать все'
              className='filter_pointer'
              name='form-field-name'
              searchable={false}
              clearable={false}
              value={this.state.selected}
              options={options}
              onChange={this.handleChangeFilter}
            />
          </div>
          <div className='filter__reset filter_pointer' onClick={this.handleResetFilter}>Сбросить фильтры</div>
        </header>
        <main className='items'>
          <h2 className='items__total'>
            <p><output>{this.state.food.length}</output> Товара</p>
          </h2>
          <Table food={this.state.pageOfItems} />
        </main>
        <footer>
          <Pagination items={this.state.food} onChangePage={this.onChangePage} />
        </footer>

      </div>
    )
  }
}

export default App;
