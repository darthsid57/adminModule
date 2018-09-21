import React, {Component} from 'react';
import { Form, Button, Input, Header, Icon, Image } from 'semantic-ui-react';
//import Layout from '../../components/Layout';


class Users extends Component {
  constructor()
  {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(users => this.setState({users}, () => console.log('Users Fetched...', users)));
  }

  //renderUser = ({ID, user_id}) => <div key={ID}>{user_id}</div>

  render() {
    const { users, user } = this.state;
    return (
      <div className="Users">
      <h1>Users</h1>
        <ul>
          {this.users.map(user =>
            <li key={user.id}> { user.user_firstName}} </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Users;
