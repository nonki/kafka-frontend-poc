import React from 'react';
import Nav from '../components/Nav';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
      <Typography variant='title' className={classes.title}>
        Cluster manager page
      </Typography>
    </React.Fragment>
  );
}

export default withStyles(styles)(Clusters);
