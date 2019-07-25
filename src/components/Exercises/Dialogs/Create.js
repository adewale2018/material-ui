import React, { Fragment, Component } from 'react';
import { TextField, Fab, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';



export default class extends Component {
  state = {
    open: false
  }
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <Fab color="primary" onClick={this.handleToggle} aria-label="Add" mini>
        <AddIcon />
      </Fab>
        <Dialog open={open}  onClose={this.handleToggle} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Create A New Exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please kindly fill up the form below
          </DialogContentText>
          <form>

          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained">
            Create
          </Button>
        </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
