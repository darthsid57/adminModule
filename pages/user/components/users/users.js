import React, {Component} from 'react';
import { Form, Button, Input, Header, Icon, Image } from 'semantic-ui-react';
//import Layout from '../../components/Layout';


class Users extends Component {
  render() {
    return (
      <div>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
        <form class="ui fluid form">
        <div class="field">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" />
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" tabindex="0" class="hidden" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button class="ui button" type="submit">Submit</button>
        </form>
        </div>
    );
  }
}

export default Users;
