webpackJsonp([0],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(98);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(99);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      listingsData: _listingsData2.default,
      view: 'gallery',
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
      filteredData: _listingsData2.default,
      populateData: '',
      sortby: 'price-dsc',
      search: '',
      menu: 'inactive'
    };
    _this.changeView = _this.changeView.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.change = _this.change.bind(_this);
    _this.ownerClick = _this.ownerClick.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.openMenu = _this.openMenu.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });
    }

    // change view to list or gallery style

  }, {
    key: 'changeView',
    value: function changeView(nameView) {
      this.setState({
        view: nameView
      });
    }
  }, {
    key: 'change',
    value: function change(e) {
      var _this2 = this;

      var name = e.target.name;
      var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        //console.log(this.state);
        // call filter data method
        _this2.filterData();
      });
    }
  }, {
    key: 'ownerClick',
    value: function ownerClick(e) {
      var _this3 = this;

      var name = e.target.id;
      var value = e.target.id;

      if (this.state.agency == 'agency' || this.state.owner == 'owner') {
        this.setState({
          agency: '',
          owner: ''
        }, function () {
          _this3.filterData();
        });
      } else {
        this.setState(_defineProperty({}, name, value), function () {
          //console.log([name], value);
          _this3.filterData();
        });
      }
    }

    // filtered data

  }, {
    key: 'filterData',
    value: function filterData() {
      var _this4 = this;

      // price, space, bedrooms filter
      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this4.state.min_price && item.price <= _this4.state.max_price && item.space >= _this4.state.min_space && item.space <= _this4.state.max_space && item.bedrooms >= _this4.state.bedrooms;
      });

      // buy filter
      if (this.state.buy == 'buy') {
        newData = newData.filter(function (item) {
          return item.buyrent == 'buy';
        });
      }

      // rent filter
      if (this.state.rent == 'rent') {
        newData = newData.filter(function (item) {
          return item.buyrent == 'rent';
        });
      }

      // agency filter
      if (this.state.agency == 'agency') {
        newData = newData.filter(function (item) {
          return item.agencyowner == 'agency';
        });
      }

      // owner filter
      if (this.state.owner == 'owner') {
        newData = newData.filter(function (item) {
          return item.agencyowner == 'owner';
        });
      }

      // city filter
      if (this.state.city != 'All') {
        newData = newData.filter(function (item) {
          return item.city == _this4.state.city;
        });
      }

      // home type filter
      if (this.state.homeType != 'All') {
        newData = newData.filter(function (item) {
          return item.homeType == _this4.state.homeType;
        });
      }

      // filter elevators
      if (this.state.elevators == true) {
        newData = newData.filter(function (item) {
          return item.elevators == true;
        });
      }

      // filter pool
      if (this.state.pool == true) {
        newData = newData.filter(function (item) {
          return item.pool == true;
        });
      }

      // filter gym
      if (this.state.gym == true) {
        newData = newData.filter(function (item) {
          return item.gym == true;
        });
      }

      // filter balcony
      if (this.state.balcony == true) {
        newData = newData.filter(function (item) {
          return item.balcony == true;
        });
      }

      // sort by highest price
      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      // sort by lowest price
      if (this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      // search by cities
      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this4.state.search.toLowerCase();
          var n = city.match(searchText);

          if (n != null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      }, function () {
        console.log(_this4.state);
      });
    }

    // populate select filter dropdowns

  }, {
    key: 'populateForms',
    value: function populateForms() {
      // cities
      var cities = this.state.listingsData.map(function (item) {
        //console.log(item.city);
        return item.city;
      });

      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));
      cities = cities.sort();

      // home types
      var homeTypes = this.state.listingsData.map(function (item) {
        return item.homeType;
      });

      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));
      homeTypes = homeTypes.sort();

      // bedrooms
      var bedrooms = this.state.listingsData.map(function (item) {
        return item.bedrooms;
      });

      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));
      bedrooms = bedrooms.sort();

      this.setState({
        populateData: {
          cities: cities,
          homeTypes: homeTypes,
          bedrooms: bedrooms
        }
      }, function () {
        //console.log(this.state);
      });
    }
  }, {
    key: 'openMenu',
    value: function openMenu() {
      var _this5 = this;

      if (this.state.menu != 'active') {
        this.setState({
          menu: 'active'
        }, function () {
          console.log(_this5.state.menu);
        });
      } else {
        this.setState({
          menu: 'inactive'
        }, function () {
          console.log(_this5.state.menu);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'body-wrapper' },
          _react2.default.createElement(
            'header',
            { className: 'header' },
            _react2.default.createElement(
              'div',
              { className: 'nav-brand' },
              _react2.default.createElement('img', { src: 'https://image.ibb.co/kZLL6b/imageedit_1_9700106251.png' })
            ),
            _react2.default.createElement(
              'nav',
              null,
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'About Us'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Login'
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'btn-register' },
                  'Register'
                )
              )
            )
          ),
          _react2.default.createElement(
            'section',
            { id: 'content-area' },
            _react2.default.createElement(_Filter2.default, {
              change: this.change,
              ownerClick: this.ownerClick,
              globalState: this.state,
              populateAction: this.populateForms
            }),
            _react2.default.createElement(_Listings2.default, {
              listingsData: this.state.filteredData,
              globalState: this.state,
              change: this.change,
              changeView: this.changeView,
              openMenu: this.openMenu
            })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {};
    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: "cities",
    value: function cities() {
      if (this.props.globalState.populateData.cities != undefined) {
        var cities = this.props.globalState.populateData.cities;
        //console.log(cities);

        return cities.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "homeTypes",
    value: function homeTypes() {
      if (this.props.globalState.populateData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateData.homeTypes;


        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: "bedrooms",
    value: function bedrooms() {
      if (this.props.globalState.populateData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateData.bedrooms;


        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            "option",
            { key: item, value: item },
            item,
            "+ BR"
          );
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "filters col-xs-4" },
        _react2.default.createElement(
          "h5",
          null,
          "Options"
        ),
        _react2.default.createElement(
          "div",
          { className: "agency-owner" },
          _react2.default.createElement(
            "div",
            {
              className: "btn " + (this.props.globalState.agency == 'agency' ? 'active' : ''),
              onClick: this.props.ownerClick,
              id: "agency"
            },
            "Agency"
          ),
          _react2.default.createElement(
            "div",
            {
              className: "btn " + (this.props.globalState.owner == 'owner' ? 'active' : ''),
              onClick: this.props.ownerClick,
              id: "owner"
            },
            "Owner"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "cities" },
          _react2.default.createElement(
            "label",
            { htmlFor: "city" },
            "City"
          ),
          _react2.default.createElement(
            "div",
            { className: "select-wrapper" },
            _react2.default.createElement(
              "select",
              { onChange: this.props.change, name: "city" },
              _react2.default.createElement(
                "option",
                { value: "All" },
                "All cities"
              ),
              this.cities()
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "homeTypes" },
          _react2.default.createElement(
            "label",
            { htmlFor: "homeType" },
            "Home Type"
          ),
          _react2.default.createElement(
            "div",
            { className: "select-wrapper" },
            _react2.default.createElement(
              "select",
              { onChange: this.props.change, name: "homeType" },
              _react2.default.createElement(
                "option",
                { value: "All" },
                "All Homes"
              ),
              this.homeTypes()
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "bedrooms" },
          _react2.default.createElement(
            "label",
            { htmlFor: "bedrooms" },
            "Bedrooms"
          ),
          _react2.default.createElement(
            "div",
            { className: "select-wrapper" },
            _react2.default.createElement(
              "select",
              { onChange: this.props.change, name: "bedrooms" },
              this.bedrooms()
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "price" },
          _react2.default.createElement(
            "label",
            { htmlFor: "price" },
            "Price"
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement("input", {
              type: "text",
              name: "min_price",
              onChange: this.props.change,
              value: this.props.globalState.min_price
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_price",
              onChange: this.props.change,
              value: this.props.globalState.max_price
            })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "space" },
          _react2.default.createElement(
            "label",
            { htmlFor: "space" },
            "Space (m\xB2)"
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement("input", {
              type: "text",
              name: "min_space",
              onChange: this.props.change,
              value: this.props.globalState.min_space
            }),
            _react2.default.createElement("input", {
              type: "text",
              name: "max_space",
              onChange: this.props.change,
              value: this.props.globalState.max_space
            })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "extras" },
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "label",
              { htmlFor: "elevators" },
              "Elevators"
            ),
            _react2.default.createElement("input", {
              type: "checkbox",
              name: "elevators",
              onChange: this.props.change,
              value: "elevators"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "label",
              { htmlFor: "pool" },
              "Pool"
            ),
            _react2.default.createElement("input", {
              type: "checkbox",
              name: "pool",
              onChange: this.props.change,
              value: "pool"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "label",
              { htmlFor: "gym" },
              "Gym"
            ),
            _react2.default.createElement("input", {
              type: "checkbox",
              name: "gym",
              onChange: this.props.change,
              value: "gym"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
              "label",
              { htmlFor: "balcony" },
              "Balcony"
            ),
            _react2.default.createElement("input", {
              type: "checkbox",
              name: "balcony",
              onChange: this.props.change,
              value: "balcony"
            })
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {};
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return '';
      }

      return listingsData.map(function (listing, index) {
        if (_this2.props.globalState.view == 'gallery') {
          // gallery view
          return _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-sm-4', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listings-item' },
              _react2.default.createElement(
                'div',
                { className: 'listings-img' },
                _react2.default.createElement('img', { src: listingsData[index].image })
              ),
              _react2.default.createElement(
                'div',
                { className: 'listings-caption' },
                listingsData[index].city,
                _react2.default.createElement(
                  'span',
                  null,
                  '$',
                  listingsData[index].price,
                  '/wk'
                )
              )
            )
          );
        } else {
          // list view
          return _react2.default.createElement(
            'div',
            { className: 'col-xs-12', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listings-item' },
              _react2.default.createElement(
                'div',
                { className: 'listings-img' },
                _react2.default.createElement('img', { src: listingsData[index].image })
              ),
              _react2.default.createElement(
                'div',
                { className: 'listings-caption' },
                listingsData[index].city,
                _react2.default.createElement(
                  'span',
                  null,
                  '$',
                  listingsData[index].price,
                  '/wk'
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'listings' },
        _react2.default.createElement(
          'div',
          { className: 'listings-options' },
          _react2.default.createElement(
            'div',
            { className: 'search' },
            _react2.default.createElement('input', {
              type: 'text',
              name: 'search',
              placeholder: 'Where do you want to live?',
              onChange: this.props.change
            }),
            _react2.default.createElement(
              'p',
              null,
              this.props.globalState.filteredData.length,
              ' results found'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'sortby' },
            _react2.default.createElement('i', {
              className: 'fa fa-bars',
              'aria-hidden': 'true',
              onClick: this.props.openMenu
            }),
            _react2.default.createElement(
              'select',
              { name: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'views' },
            _react2.default.createElement(
              'span',
              null,
              'Gallery'
            ),
            _react2.default.createElement('i', {
              className: 'fa fa-th',
              'aria-hidden': 'true',
              onClick: this.props.changeView.bind(null, 'gallery')
            }),
            _react2.default.createElement(
              'span',
              null,
              'List'
            ),
            _react2.default.createElement('i', {
              className: 'fa fa-list',
              'aria-hidden': 'true',
              onClick: this.props.changeView.bind(null, 'list')
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'listings-area' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'div',
          { className: 'paginate col-xs-12' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  agencyowner: 'agency',
  city: 'Sydney CBD',
  homeType: 'House',
  bedrooms: 3,
  price: 850,
  space: 200,
  elevators: false,
  pool: true,
  gym: false,
  balcony: false,
  image: 'https://image.ibb.co/dTVGR7/rs_thumb01.png'
}, {
  agencyowner: 'agency',
  city: 'Sydney CBD',
  homeType: 'Apartment',
  bedrooms: 2,
  price: 750,
  space: 100,
  elevators: true,
  pool: true,
  gym: true,
  balcony: true,
  image: 'https://image.ibb.co/i5jMtn/rs_thumb02.png'
}, {
  agencyowner: 'agency',
  city: 'Neutral Bay',
  homeType: 'House',
  bedrooms: 2,
  price: 950,
  space: 210,
  elevators: false,
  pool: true,
  gym: false,
  balcony: false,
  image: 'https://image.ibb.co/myai67/rs_thumb03.png'
}, {
  agencyowner: 'agency',
  city: 'Parramatta',
  homeType: 'Apartment',
  bedrooms: 1,
  price: 500,
  space: 100,
  elevators: true,
  pool: true,
  gym: false,
  balcony: true,
  image: 'https://image.ibb.co/mEnwR7/rs_thumb04.png'
}, {
  agencyowner: 'agency',
  city: 'Penrith',
  homeType: 'House',
  bedrooms: 1,
  price: 450,
  space: 100,
  elevators: false,
  pool: true,
  gym: false,
  balcony: false,
  image: 'https://image.ibb.co/bxGCzS/rs_thumb05.png'
}, {
  agencyowner: 'agency',
  city: 'Chatswood',
  homeType: 'Apartment',
  bedrooms: 2,
  price: 760,
  space: 100,
  elevators: true,
  pool: false,
  gym: true,
  balcony: true,
  image: 'https://image.ibb.co/dunwR7/rs_thumb06.png'
}, {
  agencyowner: 'agency',
  city: 'Randwick',
  homeType: 'Studio',
  bedrooms: 0,
  price: 490,
  space: 100,
  elevators: false,
  pool: false,
  gym: false,
  balcony: false,
  image: 'https://image.ibb.co/gtsKeS/rs_thumb07.png'
}, {
  agencyowner: 'owner',
  city: 'Sydney CBD',
  homeType: 'House',
  bedrooms: 2,
  price: 770,
  space: 300,
  elevators: false,
  pool: true,
  gym: false,
  balcony: false,
  image: 'https://image.ibb.co/iTyszS/rs_thumb08.png'
}, {
  agencyowner: 'owner',
  city: 'Chatswood',
  homeType: 'House',
  bedrooms: 3,
  price: 800,
  space: 300,
  elevators: false,
  pool: true,
  gym: false,
  balcony: false,
  image: 'https://image.ibb.co/fHbO67/rs_thumb09.png'
}, {
  agencyowner: 'owner',
  city: 'Penrith',
  homeType: 'House',
  bedrooms: 3,
  price: 670,
  space: 250,
  elevators: false,
  pool: true,
  gym: false,
  balcony: false,
  image: 'https://image.ibb.co/gp1qm7/rs_thumb10.png'
}, {
  agencyowner: 'agency',
  city: 'Parramatta',
  homeType: 'House',
  bedrooms: 2,
  price: 650,
  space: 230,
  elevators: false,
  pool: false,
  gym: false,
  balcony: false,
  image: 'https://image.ibb.co/c61CzS/rs_thumb11.png'
}, {
  agencyowner: 'agency',
  city: 'Sydney CBD',
  homeType: 'Apartment',
  bedrooms: 3,
  price: 1050,
  space: 410,
  elevators: false,
  pool: true,
  gym: false,
  balcony: false,
  image: 'https://image.ibb.co/jfKbR7/rs_thumb12.png'
}];

exports.default = listingsData;

/***/ })

},[101]);