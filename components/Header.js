import React from 'react';
import { Menu, Segment, Image } from 'semantic-ui-react';

export default () => {
  return (
    <div>
      <Menu style={{ marginTop: '10px' }}>
        <Menu.Item>
          <img src='/logo.png' size='small' />
        </Menu.Item>
        <Menu.Item>Dashboard</Menu.Item>
        <Menu.Item>Users</Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>Logout</Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};
