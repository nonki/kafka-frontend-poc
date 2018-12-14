import React from 'react';

import { Link } from '@reach/router';

import { withStyles  } from '@material-ui/core/styles';
import MaterialDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CategoryIcon from '@material-ui/icons/Category';
import HomeIcon from '@material-ui/icons/Home';

const styles = {
  list: {
    width: 250,
  },
  link: {
    textDecoration: 'none'
  },
};

const items = [
  {
    displayName: 'Home',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    displayName: 'Clusters',
    path: '/clusters',
    icon: <CategoryIcon />
  },
];

const Drawer = props => {
  const { classes, open } = props;
  const list = (
    <div className={classes.list}>
      <List>
        {items.map((item, index) => (
          <Link to={item.path} className={classes.link} key={item.displayName} >
            <ListItem button key={item.displayName}>
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.displayName} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <MaterialDrawer anchor='left' className={classes.list} open={open}>
      {list}
    </MaterialDrawer>
  );
}

export default withStyles(styles)(Drawer);
