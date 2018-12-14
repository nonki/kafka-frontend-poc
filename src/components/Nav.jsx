import React from 'react';

import AppBar from './AppBar';
import Drawer from './Drawer';

class Nav extends React.Component {
  state = {
    drawerOpen: false,
  };

  toggleDrawer = drawerOpen => {
    this.setState({ drawerOpen })
  }

  render() {
    const { drawerOpen } = this.state

    return (
      <React.Fragment>
        <AppBar toggle={this.toggleDrawer} />
        <Drawer open={drawerOpen} />
      </React.Fragment>
    );
  }
}

export default Nav;
