import React, {Component} from 'react';
import { Form, Button, Input, Header, Icon, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout';

class UserNew extends Component {
  state = {
    users: [],
    user: {
      user_id: 0,
      user_firstName: 'name'
    }
  }

  componentDidMount(){
    this.getUsers();
  }

  getUsers = _ => {
    fetch('http://localhost:4000/users')
      .then(response => response.json())
      .then(response => this.setState({ users: response.data }))
      .then(({ data }) => {
       console.log(data)
      })
      .catch(err => console.error(err))
  }

  addUser = _ => {
    const { user } = this.state;
    fetch(`http://localhost:4000/users/add?user_id=${user.user_id}&user_firstName=${user.user_firstName}`)
    .then(this.getUsers)
    .catch(err => console.error(err))
  }

  renderUser = ({ID, user_id}) => <div key={ID}>{user_id}</div>

  render(){
    const { users, user } = this.state;
    return (
      <div className="UserNew">
        {users.map(this.renderUser)}
        <div>
          <input
          value={user.user_id}
          onChange={e => this.setState({ user: { user, user_id: e.target.value }})}
          />
          <input
          value={user.user_firstName}
          onChange={e => this.setState({ user: { user, user_firstName: e.target.value }})}
          />
          <Button onClick={this.addUser}> Add User </Button>
        </div>
      </div>
    );
  }
}

export default UserNew;
