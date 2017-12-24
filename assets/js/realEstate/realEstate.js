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
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'long',
      search: ''
    };
    this.change = this.change.bind(this);
    this.filteredData = this.filteredData.bind(this);
    this.populateForms = this.populateForms.bind(this);
    this.changeView = this.changeView.bind(this);
  }
  componentWillMount() {
    var listingsData = this.state.listingsData.sort((a, b) => {
      // sort from lowest price to highest price
      return a.price - b.price;
    });

    this.setState({
      listingsData
    });
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

  changeView(viewName) {
    this.setState({
      view: viewName
    });
  }

  filteredData() {
    var newData = this.state.listingsData.filter(item => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.floorspace >= this.state.min_floor_space &&
        item.floorspace <= this.state.max_floor_space &&
        item.rooms >= this.state.rooms
      );
    });

    if (this.state.city != 'All') {
      newData = newData.filter(item => {
        return item.city == this.state.city;
      });
    }
    if (this.state.homeType != 'All') {
      newData = newData.filter(item => {
        return item.homeType == this.state.homeType;
      });
    }
    // sort by lowest price
    if (this.state.sortby == 'price-dsc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price;
      });
    }
    // sort by highest price
    if (this.state.sortby == 'price-asc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price;
      });
    }
    // search by cities
    if (this.state.search != '') {
      newData = newData.filter(item => {
        var city = item.city.toLowerCase();
        var searchText = this.state.search.toLowerCase();
        var n = city.match(searchText);

        if (n != null) {
          return true;
        }
      });
    }

    this.setState({
      filteredData: newData
    });
  }

  populateForms() {
    // city
    var cities = this.state.listingsData.map(item => {
      return item.city;
    });
    cities = new Set(cities);
    cities = [...cities];
    // sort cities from A - Z
    cities = cities.sort();

    // homeType
    var homeTypes = this.state.listingsData.map(item => {
      return item.homeType;
    });
    homeTypes = new Set(homeTypes);
    homeTypes = [...homeTypes];

    homeTypes = homeTypes.sort();

    // bedrooms
    var bedrooms = this.state.listingsData.map(item => {
      return item.rooms;
    });
    bedrooms = new Set(bedrooms);
    bedrooms = [...bedrooms];

    bedrooms = bedrooms.sort();

    this.setState(
      {
        populateFormsData: {
          cities,
          homeTypes,
          bedrooms
        }
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    // console.log(this.state.listingsData);
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter
            change={this.change}
            globalState={this.state}
            populateAction={this.populateForms}
          />
          <Listings
            listingsData={this.state.filteredData}
            change={this.change}
            globalState={this.state}
            changeView={this.changeView}
          />
        </section>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
