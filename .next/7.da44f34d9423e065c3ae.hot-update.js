webpackHotUpdate(7,{

/***/ 884:
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

var _Layout = __webpack_require__(622);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/sam/Desktop/adminModule/pages/user/viewUser.js?entry';


var UserNew = function (_Component) {
  (0, _inherits3.default)(UserNew, _Component);

  function UserNew() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserNew.__proto__ || (0, _getPrototypeOf2.default)(UserNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      users: [],
      user: {
        user_id: 0,
        user_firstName: 'name'
      }
    }, _this.getUsers = function (_) {
      fetch('http://localhost:4000/users').then(function (response) {
        return response.json();
      }).then(function (response) {
        return _this.setState({ users: response.data });
      }).then(function (_ref2) {
        var data = _ref2.data;

        console.log(data);
      }).catch(function (err) {
        return console.error(err);
      });
    }, _this.addUser = function (_) {
      var user = _this.state.user;

      fetch('http://localhost:4000/users/add?user_id=' + user.user_id + '&user_firstName=' + user.user_firstName).then(_this.getUsers).catch(function (err) {
        return console.error(err);
      });
    }, _this.renderUser = function (_ref3) {
      var ID = _ref3.ID,
          user_id = _ref3.user_id;
      return _react2.default.createElement('div', { key: ID, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, user_id);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserNew, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getUsers();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          users = _state.users,
          user = _state.user;

      return _react2.default.createElement('div', { className: 'UserNew', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, users.map(this.renderUser), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('input', {
        value: user.user_id,
        onChange: function onChange(e) {
          return _this2.setState({ user: { user: user, user_id: e.target.value } });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement('input', {
        value: user.user_firstName,
        onChange: function onChange(e) {
          return _this2.setState({ user: { user: user, user_firstName: e.target.value } });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { onClick: this.addUser, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, ' Add User ')));
    }
  }]);

  return UserNew;
}(_react.Component);

exports.default = UserNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXIvdmlld1VzZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJIZWFkZXIiLCJJY29uIiwiSW1hZ2UiLCJMYXlvdXQiLCJVc2VyTmV3Iiwic3RhdGUiLCJ1c2VycyIsInVzZXIiLCJ1c2VyX2lkIiwidXNlcl9maXJzdE5hbWUiLCJnZXRVc2VycyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInNldFN0YXRlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZXJyIiwiYWRkVXNlciIsInJlbmRlclVzZXIiLCJJRCIsIm1hcCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQU0sQUFBUSxBQUFPLEFBQVEsQUFBTTs7QUFDNUMsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7Ozs4TSxBQUNKO2FBQVEsQUFDQyxBQUNQOztpQkFBTSxBQUNLLEFBQ1Q7d0JBSkksQUFFQSxBQUVZLEE7QUFGWixBQUNKO0FBSEksQUFDTixhQVdGLEEsV0FBVyxhQUFLLEFBQ2Q7WUFBQSxBQUFNLCtCQUFOLEFBQ0csS0FBSyxvQkFBQTtlQUFZLFNBQVosQUFBWSxBQUFTO0FBRDdCLFNBQUEsQUFFRyxLQUFLLG9CQUFBO2VBQVksTUFBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLFNBQW5DLEFBQVksQUFBYyxBQUFrQjtBQUZwRCxTQUFBLEFBR0csS0FBSyxpQkFBYztZQUFYLEFBQVcsYUFBWCxBQUFXLEFBQ25COztnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO0FBTEgsU0FBQSxBQU1HLE1BQU0sZUFBQTtlQUFPLFFBQUEsQUFBUSxNQUFmLEFBQU8sQUFBYztBQU45QixBQU9EO0EsYSxBQUVELFVBQVUsYUFBSztVQUFBLEFBQ0wsT0FBUyxNQURKLEFBQ1MsTUFEVCxBQUNMLEFBQ1I7O3lEQUFpRCxLQUFqRCxBQUFzRCwrQkFBMEIsS0FBaEYsQUFBcUYsZ0JBQXJGLEFBQ0MsS0FBSyxNQUROLEFBQ1csVUFEWCxBQUVDLE1BQU0sZUFBQTtlQUFPLFFBQUEsQUFBUSxNQUFmLEFBQU8sQUFBYztBQUY1QixBQUdEO0EsYUFFRCxBLGFBQWEsaUJBQUE7VUFBQSxBQUFFLFdBQUYsQUFBRTtVQUFGLEFBQU0sZ0JBQU4sQUFBTTs2QkFBYSxjQUFBLFNBQUssS0FBTCxBQUFVO29CQUFWO3NCQUFBLEFBQWU7QUFBZjtPQUFBLEVBQW5CLEFBQW1CO0E7Ozs7O3dDQXJCYixBQUNqQjtXQUFBLEFBQUssQUFDTjs7Ozs2QkFxQk87bUJBQUE7O21CQUNrQixLQURsQixBQUN1QjtVQUR2QixBQUNFLGVBREYsQUFDRTtVQURGLEFBQ1MsY0FEVCxBQUNTLEFBQ2Y7OzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRztBQURIO09BQUEsUUFDRyxBQUFNLElBQUksS0FEYixBQUNHLEFBQWUsQUFDaEIsNkJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUE7ZUFFUyxLQURQLEFBQ1ksQUFDWjtrQkFBVSxxQkFBQTtpQkFBSyxPQUFBLEFBQUssU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFGLE1BQVEsU0FBUyxFQUFBLEFBQUUsT0FBOUMsQUFBSyxBQUFjLEFBQVEsQUFBMEI7QUFGL0Q7O29CQUFBO3NCQURGLEFBQ0UsQUFJQTtBQUpBO0FBQ0E7ZUFJTyxLQURQLEFBQ1ksQUFDWjtrQkFBVSxxQkFBQTtpQkFBSyxPQUFBLEFBQUssU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFGLE1BQVEsZ0JBQWdCLEVBQUEsQUFBRSxPQUFyRCxBQUFLLEFBQWMsQUFBUSxBQUFpQztBQUZ0RTs7b0JBQUE7c0JBTEYsQUFLRSxBQUlBO0FBSkE7QUFDQSwwQkFHQSxBQUFDLHlDQUFPLFNBQVMsS0FBakIsQUFBc0I7b0JBQXRCO3NCQUFBO0FBQUE7U0FaTixBQUNFLEFBRUUsQUFTRSxBQUlQOzs7OztBQWxEbUIsQSxBQXFEdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoidmlld1VzZXIuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvc2FtL0Rlc2t0b3AvYWRtaW5Nb2R1bGUifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/sam/Desktop/adminModule/pages/user/viewUser.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/sam/Desktop/adminModule/pages/user/viewUser.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/user/viewUser")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5kYTQ0ZjM0ZDk0MjNlMDY1YzNhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlci92aWV3VXNlci5qcz81ZTNiM2U0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgSGVhZGVyLCBJY29uLCBJbWFnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jbGFzcyBVc2VyTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdXNlcnM6IFtdLFxuICAgIHVzZXI6IHtcbiAgICAgIHVzZXJfaWQ6IDAsXG4gICAgICB1c2VyX2ZpcnN0TmFtZTogJ25hbWUnXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmdldFVzZXJzKCk7XG4gIH1cblxuICBnZXRVc2VycyA9IF8gPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjQwMDAvdXNlcnMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXJzOiByZXNwb25zZS5kYXRhIH0pKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbiAgfVxuXG4gIGFkZFVzZXIgPSBfID0+IHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC91c2Vycy9hZGQ/dXNlcl9pZD0ke3VzZXIudXNlcl9pZH0mdXNlcl9maXJzdE5hbWU9JHt1c2VyLnVzZXJfZmlyc3ROYW1lfWApXG4gICAgLnRoZW4odGhpcy5nZXRVc2VycylcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbiAgfVxuXG4gIHJlbmRlclVzZXIgPSAoe0lELCB1c2VyX2lkfSkgPT4gPGRpdiBrZXk9e0lEfT57dXNlcl9pZH08L2Rpdj5cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IHVzZXJzLCB1c2VyIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlVzZXJOZXdcIj5cbiAgICAgICAge3VzZXJzLm1hcCh0aGlzLnJlbmRlclVzZXIpfVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPXt1c2VyLnVzZXJfaWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXI6IHsgdXNlciwgdXNlcl9pZDogZS50YXJnZXQudmFsdWUgfX0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgdmFsdWU9e3VzZXIudXNlcl9maXJzdE5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHVzZXI6IHsgdXNlciwgdXNlcl9maXJzdE5hbWU6IGUudGFyZ2V0LnZhbHVlIH19KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRVc2VyfT4gQWRkIFVzZXIgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyTmV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvdXNlci92aWV3VXNlci5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFFQTs7QUFEQTtBQUZBO0FBWUE7QUFDQTtBQURBO0FBRUE7QUFGQTtBQUdBO0FBQ0E7QUFBQTtBQUpBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQXBCQTtBQUNBOzs7O0FBcUJBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUZBOztBQUFBO0FBSUE7QUFKQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBRkE7O0FBQUE7QUFJQTtBQUpBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFJQTs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=