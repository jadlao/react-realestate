import React, {Component} from 'react'

export default class Filter extends Component {

  render() {
    return (<section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <select name="neighbourhood" className="filters neighbourhood">
          <option>Sydney</option>
          <option>Parramatta</option>
          <option>Western Sydney</option>
        </select>
        <select name="housetype" className="filters housetype">
          <option>House</option>
          <option>Apartment</option>
          <option>Studio</option>
        </select>
        <select name="bedrooms" className="filters bedrooms">
          <option>Studio</option>
          <option>1 Bedroom</option>
          <option>2 Bedroom</option>
          <option>3 Bedroom</option>
          <option>4 Bedroom</option>
        </select>

        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min-price" className="min-price"/>
          <input type="text" name="max-price" className="max-price"/>
        </div>
        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min-floor-space" className="min-floor-space"/>
          <input type="text" name="max-floor-space" className="max-floor-space"/>
        </div>
        <div className="filters extras">
          <span className="title">Extras</span>
          <label for="extras">
            <span>Elevators</span>
            <input name="extras" value="elevators" type="checkbox"/>
          </label>
          <label for="extras">
            <span>Swimming Pool</span>
            <input name="extras" value="swimming-pool" type="checkbox"/>
          </label>
          <label for="extras">
            <span>Finished Basement</span>
            <input name="extras" value="finished-basement" type="checkbox"/>
          </label>
          <label for="extras">
            <span>Gym</span>
            <input name="extras" value="gym" type="checkbox"/>
          </label>
        </div>
      </div>
    </section>)
  }
}
