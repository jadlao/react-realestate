import React, { Component } from 'react';

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {};
    this.cities = this.cities.bind(this);
    this.homeTypes = this.homeTypes.bind(this);
    this.bedrooms = this.bedrooms.bind(this);
  }
  componentWillMount() {
    this.props.populateAction();
  }

  cities() {
    if (this.props.globalState.populateData.cities != undefined) {
      var { cities } = this.props.globalState.populateData;
      //console.log(cities);

      return cities.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  homeTypes() {
    if (this.props.globalState.populateData.homeTypes != undefined) {
      var { homeTypes } = this.props.globalState.populateData;

      return homeTypes.map(item => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      });
    }
  }
  bedrooms() {
    if (this.props.globalState.populateData.bedrooms != undefined) {
      var { bedrooms } = this.props.globalState.populateData;

      return bedrooms.map(item => {
        return (
          <option key={item} value={item}>
            {item}+ BR
          </option>
        );
      });
    }
  }

  render() {
    return (
      <section className="filters col-xs-4">
        Filter Options
        <div className="agency-owner">
          <div
            className={`btn ${
              this.props.globalState.agency == 'agency' ? 'active' : ''
            }`}
            onClick={this.props.ownerClick}
            id="agency"
          >
            Agency
          </div>
          <div
            className={`btn ${
              this.props.globalState.owner == 'owner' ? 'active' : ''
            }`}
            onClick={this.props.ownerClick}
            id="owner"
          >
            Owner
          </div>
        </div>
        <div className="cities">
          <label htmlFor="city">City</label>
          <div className="select-wrapper">
            <select onChange={this.props.change} name="city">
              <option value="All">All cities</option>
              {this.cities()}
            </select>
          </div>
        </div>
        <div className="homeTypes">
          <label htmlFor="homeType">Home Type</label>
          <div className="select-wrapper">
            <select onChange={this.props.change} name="homeType">
              <option value="All">All Homes</option>
              {this.homeTypes()}
            </select>
          </div>
        </div>
        <div className="bedrooms">
          <label htmlFor="bedrooms">Bedrooms</label>
          <div className="select-wrapper">
            <select onChange={this.props.change} name="bedrooms">
              {this.bedrooms()}
            </select>
          </div>
        </div>
        <div className="price">
          <label htmlFor="price">Price</label>
          <div className="inputs">
            <input
              type="text"
              name="min_price"
              onChange={this.props.change}
              value={this.props.globalState.min_price}
            />
            <input
              type="text"
              name="max_price"
              onChange={this.props.change}
              value={this.props.globalState.max_price}
            />
          </div>
        </div>
        <div className="space">
          <label htmlFor="space">Space (m&#178;)</label>
          <div className="inputs">
            <input
              type="text"
              name="min_space"
              onChange={this.props.change}
              value={this.props.globalState.min_space}
            />
            <input
              type="text"
              name="max_space"
              onChange={this.props.change}
              value={this.props.globalState.max_space}
            />
          </div>
        </div>
        <div className="extras">
          <div className="row">
            <label htmlFor="elevators">Elevators</label>
            <input
              type="checkbox"
              name="elevators"
              onChange={this.props.change}
              value="elevators"
            />
          </div>
          <div className="row">
            <label htmlFor="pool">Pool</label>
            <input
              type="checkbox"
              name="pool"
              onChange={this.props.change}
              value="pool"
            />
          </div>
          <div className="row">
            <label htmlFor="gym">Gym</label>
            <input
              type="checkbox"
              name="gym"
              onChange={this.props.change}
              value="gym"
            />
          </div>
          <div className="row">
            <label htmlFor="balcony">Balcony</label>
            <input
              type="checkbox"
              name="balcony"
              onChange={this.props.change}
              value="balcony"
            />
          </div>
        </div>
      </section>
    );
  }
}
