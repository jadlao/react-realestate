import React, { Component } from 'react';

export default class Listings extends Component {
  constructor() {
    super();
    this.state = {};
    this.loopListings = this.loopListings.bind(this);
  }

  loopListings() {
    let { listingsData } = this.props;

    if (listingsData == undefined || listingsData.length == 0) {
      return '';
    }

    return listingsData.map((listing, index) => {
      if (this.props.globalState.view == 'gallery') {
        // gallery view
        return (
          <div className="col-xs-6 col-sm-4" key={index}>
            <div className="listings-item">
              <div className="listings-img">
                <img src={listingsData[index].image} />
                <div className="overlay">
                  <p>Agent Smith</p>
                  <p>
                    <i className="fa fa-home" aria-hidden="true">
                      &nbsp; {listingsData[index].space} m<sup>2</sup>
                    </i>
                  </p>
                  <p>
                    <i className="fa fa-bed" aria-hidden="true">
                      &nbsp; {listingsData[index].bedrooms}
                    </i>
                  </p>
                </div>
              </div>
              <div className="listings-caption">
                {listingsData[index].city}
                <span>${listingsData[index].price}/wk</span>
              </div>
            </div>
          </div>
        );
      } else {
        // list view
        return (
          <div className="col-xs-12" key={index}>
            <div className="listings-item">
              <div className="listings-img">
                <img src={listingsData[index].image} />
                <div className="overlay">
                  <p>Agent Smith</p>
                  <p>
                    <i className="fa fa-home" aria-hidden="true">
                      &nbsp; {listingsData[index].space} m<sup>2</sup>
                    </i>
                  </p>
                  <p>
                    <i className="fa fa-bed" aria-hidden="true">
                      &nbsp; {listingsData[index].bedrooms}
                    </i>
                  </p>
                </div>
              </div>
              <div className="listings-caption">
                {listingsData[index].city}
                <span>${listingsData[index].price}/wk</span>
              </div>
            </div>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <section className="listings">
        <div className="listings-options">
          <div className="search">
            <input
              type="text"
              name="search"
              placeholder="Where do you want to live?"
              onChange={this.props.change}
            />
            <p>{this.props.globalState.filteredData.length} results found</p>
          </div>
          <div className="sortby">
            <div className="select-wrapper">
              <select name="sortby" onChange={this.props.change}>
                <option value="price-dsc">Lowest Price</option>
                <option value="price-asc">Highest Price</option>
              </select>
            </div>
          </div>
          <div className="views">
            <span>Gallery</span>
            <i
              className="fa fa-th"
              aria-hidden="true"
              onClick={this.props.changeView.bind(null, 'gallery')}
            />
            <span>List</span>
            <i
              className="fa fa-list"
              aria-hidden="true"
              onClick={this.props.changeView.bind(null, 'list')}
            />
            <i
              className="fa fa-bars"
              aria-hidden="true"
              onClick={this.props.openMenu}
            />
          </div>
        </div>

        <div className="listings-area">{this.loopListings()}</div>
        <div className="paginate col-xs-12">
          <ul>
            <li>Prev</li>
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>Next</li>
          </ul>
        </div>
      </section>
    );
  }
}
