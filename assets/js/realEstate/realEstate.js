import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Filter from './Filter'
import Listings from './Listings'

class App extends Component {

  render () {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter />
          <Listings />
        </section>
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
