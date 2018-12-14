import React from 'react';
import Nav from '../components/Nav';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  title: {
    marginTop: theme.spacing.unit,
    textAlign: 'center',
  }
});

const Clusters = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <Nav />
      <div className={classes.title}>
        Cluster manager page
      </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(Clusters);
