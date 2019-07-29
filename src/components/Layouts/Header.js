import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CreateDialog from '../Exercises/Dialogs/Create';
// import { MenuIcon } from '@material-ui/icons'; 

export default ({ muscles, onExerciseCreate }) => {
  return(
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h1" component="h2" color="inherit" style={{flex: 1}}>
          Exercises Database
        </Typography>
        <CreateDialog 
          onCreate={onExerciseCreate}
          muscles={muscles}
        />
      </Toolbar>
    </AppBar>
  );
}
