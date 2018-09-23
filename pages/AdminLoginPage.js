import React, {Component} from 'react';
//import { Form, Button, Input, Header, Icon, Image } from 'semantic-ui-react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Layout from '../components/Layout';


class AdminLogin extends Component {
  render(){
      return(
        <Layout>
          <div className='login-form'>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
            <Grid textAlign='center' style={{ height: '100%'}} verticalAlign='middle'>
              <Grid.Column style={{ maxWidth: 450 }}>
              <div>
              </div>
              </Grid.Column>

            </Grid>
          </div>
        </Layout>
      )
  }
}

export default AdminLogin;
