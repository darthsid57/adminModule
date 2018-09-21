webpackHotUpdate(6,{

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(447);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/sam/Desktop/adminModule/pages/user/components/users/users.js?entry';

//import Layout from '../../components/Layout';


var Users = function (_Component) {
  (0, _inherits3.default)(Users, _Component);

  function Users() {
    (0, _classCallCheck3.default)(this, Users);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Users.__proto__ || (0, _getPrototypeOf2.default)(Users)).call(this));

    _this.state = {
      users: []
    };
    return _this;
  }

  (0, _createClass3.default)(Users, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('http://localhost:4000/users').then(function (res) {
        return res.json();
      }).then(function (users) {
        return _this2.setState({ users: users }, function () {
          return console.log('Users Fetched...', users);
        });
      });
    }

    //renderUser = ({ID, user_id}) => <div key={ID}>{user_id}</div>

  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          users = _state.users,
          user = _state.user;

      return _react2.default.createElement('div', { className: 'Users', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Users'), _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, this.users.map(function (user) {
        return _react2.default.createElement('li', { key: user.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, ' ', user.user_firstName, '} ');
      })));
    }
  }]);

  return Users;
}(_react.Component);

exports.default = Users;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIvY29tcG9uZW50cy91c2Vycy91c2Vycy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIkhlYWRlciIsIkljb24iLCJJbWFnZSIsIlVzZXJzIiwic3RhdGUiLCJ1c2VycyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwibWFwIiwiaWQiLCJ1c2VyX2ZpcnN0TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQU0sQUFBUSxBQUFPLEFBQVEsQUFBTTs7Ozs7O0FBQzVDOzs7SSxBQUdNO2lDQUNKOzttQkFDQTt3Q0FBQTs7OEhBRUU7O1VBQUEsQUFBSzthQUZQLEFBRUUsQUFBYSxBQUNKO0FBREksQUFDWDtXQUVIOzs7Ozt3Q0FFa0I7bUJBQ2pCOztZQUFBLEFBQU0sK0JBQU4sQUFDQyxLQUFLLGVBQUE7ZUFBTyxJQUFQLEFBQU8sQUFBSTtBQURqQixTQUFBLEFBRUMsS0FBSyxpQkFBQTtzQkFBUyxBQUFLLFNBQVMsRUFBQyxPQUFmLEFBQWMsU0FBUyxZQUFBO2lCQUFNLFFBQUEsQUFBUSxJQUFSLEFBQVksb0JBQWxCLEFBQU0sQUFBZ0M7QUFBdEUsQUFBUyxTQUFBO0FBRmYsQUFHRDtBQUVEOzs7Ozs7NkJBRVM7bUJBQ2lCLEtBRGpCLEFBQ3NCO1VBRHRCLEFBQ0MsZUFERCxBQUNDO1VBREQsQUFDUSxjQURSLEFBQ1EsQUFDZjs7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNBO0FBREE7T0FBQSxrQkFDQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FEQSxBQUNBLEFBQ0UsMEJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BQUwsQUFBVyxJQUFJLGdCQUFBOytCQUNkLGNBQUEsUUFBSSxLQUFLLEtBQVQsQUFBYztzQkFBZDt3QkFBQTtBQUFBO1NBQUEsRUFBcUIsVUFBckIsQUFBMEIsZ0JBRFosQUFDZDtBQUxSLEFBQ0UsQUFFRSxBQUNHLEFBTVI7Ozs7O0FBN0JpQixBLEFBZ0NwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJ1c2Vycy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zYW0vRGVza3RvcC9hZG1pbk1vZHVsZSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/sam/Desktop/adminModule/pages/user/components/users/users.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sam/Desktop/adminModule/pages/user/components/users/users.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/user/components/users/users")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43NzIwOWI0ZDZlYTA4Nzk1NzI5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlci9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmpzP2I5YzhhOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBIZWFkZXIsIEljb24sIEltYWdlIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuLy9pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuXG5jbGFzcyBVc2VycyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKClcbiAge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJzOiBbXVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC91c2VycycpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4odXNlcnMgPT4gdGhpcy5zZXRTdGF0ZSh7dXNlcnN9LCAoKSA9PiBjb25zb2xlLmxvZygnVXNlcnMgRmV0Y2hlZC4uLicsIHVzZXJzKSkpO1xuICB9XG5cbiAgLy9yZW5kZXJVc2VyID0gKHtJRCwgdXNlcl9pZH0pID0+IDxkaXYga2V5PXtJRH0+e3VzZXJfaWR9PC9kaXY+XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlcnMsIHVzZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVXNlcnNcIj5cbiAgICAgIDxoMT5Vc2VyczwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dGhpcy51c2Vycy5tYXAodXNlciA9PlxuICAgICAgICAgICAgPGxpIGtleT17dXNlci5pZH0+IHsgdXNlci51c2VyX2ZpcnN0TmFtZX19IDwvbGk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy91c2VyL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9