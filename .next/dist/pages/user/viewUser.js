'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

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