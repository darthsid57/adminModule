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