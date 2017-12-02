import React, {Component} from 'react'

export default class Listings extends Component {

  render() {
    return (<section className="listings">
      <section className="search-area">
        <input type="text" name="search"/>
      </section>

      <section className="sortby-area">
        <div>390 results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby">
            <option value="price-asc">Highest Price</option>
            <option value="price-dsc">Lowest Price</option>
          </select>
          <div className="view">
            <i className="fa fa-th-list" aria-hidden="true"></i>
            <i className="fa fa-th" aria-hidden="true"></i>
          </div>
        </div>
      </section>

      <section className="listings-results">
        <div className="listing"></div>
      </section>

      <section className="pagination"></section>
    </section>)
  }
}
