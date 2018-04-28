import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Filter from './Filter';
import Listings from './Listings';
import listingsData from './data/listingsData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listingsData,
      view: 'gallery',
      buy: '',
      rent: '',
      agency: '',
      owner: '',
      city: 'All',
      homeType: 'All',
      bedrooms: '0',
      min_price: 0,
      max_price: 2000000,
      min_space: 0,
      max_space: 500,
      elevators: false,
      pool: false,
      gym: false,
      balcony: false,
      filteredData: listingsData,
      populateData: '',
      sortby: 'price-dsc',
      search: ''
    };
    this.changeView = this.changeView.bind(this);
    this.filterData = this.filterData.bind(this);
    this.change = this.change.bind(this);
    this.buyClick = this.buyClick.bind(this);
    this.ownerClick = this.ownerClick.bind(this);
    this.populateForms = this.populateForms.bind(this);
  }

  componentWillMount() {
    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price;
    });
  }

  // change view to list or gallery style
  changeView(nameView) {
    this.setState({
      view: nameView
    });
  }

  change(e) {
    var name = e.target.name;
    var value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({
        [name]: value
      },
      () => {
        //console.log(this.state);
        // call filter data method
        this.filterData();
      }
    );
  }

  buyClick(e) {
    var name = e.target.id;
    var value = e.target.id;

    if (this.state.buy == 'buy' || this.state.rent == 'rent') {
      this.setState({
          buy: '',
          rent: ''
        },
        () => {
          this.filterData();
        }
      );
    } else {
      this.setState({
          [name]: value
        },
        () => {
          //console.log([name], value);
          this.filterData();
        }
      );
    }
  }

  ownerClick(e) {
    var name = e.target.id;
    var value = e.target.id;

    if (this.state.agency == 'agency' || this.state.owner == 'owner') {
      this.setState({
          agency: '',
          owner: ''
        },
        () => {
          this.filterData();
        }
      );
    } else {
      this.setState({
          [name]: value
        },
        () => {
          //console.log([name], value);
          this.filterData();
        }
      );
    }
  }

  // filtered data
  filterData() {
    // price, space, bedrooms filter
    var newData = this.state.listingsData.filter(item => {
      return (
        item.price >= this.state.min_price &&
        item.price <= this.state.max_price &&
        item.space >= this.state.min_space &&
        item.space <= this.state.max_space &&
        item.bedrooms >= this.state.bedrooms
      );
    });

    // buy filter
    if (this.state.buy == 'buy') {
      newData = newData.filter(item => {
        return item.buyrent == 'buy';
      });
    }

    // rent filter
    if (this.state.rent == 'rent') {
      newData = newData.filter(item => {
        return item.buyrent == 'rent';
      });
    }

    // agency filter
    if (this.state.agency == 'agency') {
      newData = newData.filter(item => {
        return item.agencyowner == 'agency';
      });
    }

    // owner filter
    if (this.state.owner == 'owner') {
      newData = newData.filter(item => {
        return item.agencyowner == 'owner';
      });
    }

    // city filter
    if (this.state.city != 'All') {
      newData = newData.filter(item => {
        return item.city == this.state.city;
      });
    }

    // home type filter
    if (this.state.homeType != 'All') {
      newData = newData.filter(item => {
        return item.homeType == this.state.homeType;
      });
    }

    // filter elevators
    if (this.state.elevators == true) {
      newData = newData.filter(item => {
        return item.elevators == true;
      });
    }

    // filter pool
    if (this.state.pool == true) {
      newData = newData.filter(item => {
        return item.pool == true;
      });
    }

    // filter gym
    if (this.state.gym == true) {
      newData = newData.filter(item => {
        return item.gym == true;
      });
    }

    // filter balcony
    if (this.state.balcony == true) {
      newData = newData.filter(item => {
        return item.balcony == true;
      });
    }

    // sort by highest price
    if (this.state.sortby == 'price-asc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price;
      });
    }

    // sort by lowest price
    if (this.state.sortby == 'price-dsc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price;
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
      },
      () => {
        console.log(this.state);
      }
    );
  }

  // populate select filter dropdowns
  populateForms() {
    // cities
    var cities = this.state.listingsData.map(item => {
      //console.log(item.city);
      return item.city;
    });

    cities = new Set(cities);
    cities = [...cities];
    cities = cities.sort();

    // home types
    var homeTypes = this.state.listingsData.map(item => {
      return item.homeType;
    });

    homeTypes = new Set(homeTypes);
    homeTypes = [...homeTypes];
    homeTypes = homeTypes.sort();

    // bedrooms
    var bedrooms = this.state.listingsData.map(item => {
      return item.bedrooms;
    });

    bedrooms = new Set(bedrooms);
    bedrooms = [...bedrooms];
    bedrooms = bedrooms.sort();

    this.setState({
        populateData: {
          cities,
          homeTypes,
          bedrooms
        }
      },
      () => {
        //console.log(this.state);
      }
    );
  }

  render() {
    return (
      <div className="wrapper">
        <div className="body-wrapper">
          <header className="header">
            <div className="nav-brand">
              <img src="https://image.ibb.co/kZLL6b/imageedit_1_9700106251.png" />
            </div>
            <nav>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#" className="btn-register">
                  Register
                </a>
              </li>
            </nav>
          </header>
          <section id="content-area">
            <Filter
              change={this.change}
              buyClick={this.buyClick}
              ownerClick={this.ownerClick}
              globalState={this.state}
              populateAction={this.populateForms}
            />
            <Listings
              listingsData={this.state.filteredData}
              globalState={this.state}
              change={this.change}
              changeView={this.changeView}
            />
          </section>
        </div>
        <footer>2018 Real Estate</footer>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);