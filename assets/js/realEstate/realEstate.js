import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import listingsData from './data/listingsData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listingsData,
      city: 'All',
      homeType: 'All',
      rooms: '0',
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false,
      filteredData: listingsData
    };
    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
  }
  change(event) {
    var name = event.target.name;
    var value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
        this.filteredData();
      }
    );
    //console.log(event.target.value);
  }

  filteredData() {
    var newData = this.state.listingsData.filter( (item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorspace >= this.state.min_floor_space && item.floorspace <= this.state.max_floor_space && item.rooms >= this.state.rooms
    })

    if (this.state.city != "All") {
      newData = newData.filter( (item) => {
        return item.city == this.state.city
      })
    }
    if (this.state.homeType != "All") {
      newData = newData.filter( (item) => {
        return item.homeType == this.state.homeType
      })
    }

    this.setState({
      filteredData: newData
    })

  }

  render() {
    // console.log(this.state.listingsData);
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} />
          <Listings listingsData={this.state.filteredData} />
        </section>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
