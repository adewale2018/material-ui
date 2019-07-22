import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { MenuIcon } from '@material-ui/icons'; 

export default props => {
  return(
    <AppBar position="static">
        <Toolbar>
        <Typography variant="h1" component="h2" color="inherit">
          Exercises
        </Typography>
        </Toolbar>
      </AppBar>
  );
}
