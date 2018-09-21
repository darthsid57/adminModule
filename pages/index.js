import React, {Component} from 'react';
import Layout from '../components/Layout';
import { Card, Button } from 'semantic-ui-react';

class AdminIndex extends Component {
  render(){
    return (
    <Layout>
      <div>

        <h3>Open Campaigns</h3>

        <Button
          content="Create Campaign"
          icon="add circle"
          primary

        />
      </div>
    </Layout>
  );
  }
}

export default AdminIndex;
