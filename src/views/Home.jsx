import React from 'react';
import Nav from '../components/Nav';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  title: {
    marginTop: theme.spacing.unit,
    textAlign: 'center',
  },
});

const Home = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      <Nav />
      <Typography variant='title' className={classes.title}>
        Kafka Management Home Screen
      </Typography>
    </React.Fragment>
  );
}

export default withStyles(styles)(Home);
