import React, {Component} from 'react';
import { Form, Button, Input, Header, Icon, Image } from 'semantic-ui-react';
import Layout from '../../components/Layout';

class UserNew extends Component {
  state = {
    username: ''
  };

  onSubmit = (event) => {
    event.preventDefault();


  };

  render() {
    return (
      <Layout>
        <h3>Add a New User</h3>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular/>
          <Header.Content>User</Header.Content>
        </Header>

        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>New User</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.username}
              onChange={event => this.setState({ username: event.target.value })}/>
          </Form.Field>

          <Button primary>Add</Button>
        </Form>
        </Layout>
    );
  }
}

export default UserNew;
