import React, { Fragment, Component } from 'react';
import { TextField, Fab, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  formControl: {
    width: 500
  }
})


export default withStyles(styles)(class extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      description: "",
      muscles: ""
    }
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleChange = name => ({ target: { value }}) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    })
  }
  handleSubmit = () => {
    // validate
    const { exercise } = this.state;
    this.props.onCreate({
      ...exercise,
      id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
    });
    this.setState({
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: ""
      }
    });
  }
  render() {
    const { open, exercise: { title, description, muscles} } = this.state;
    const {muscles: categories, classes } = this.props;
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
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange('title')}
            margin="normal"
            className={classes.formControl}
          />
          <br/>
          <FormControl className={classes.formControl}>
          <InputLabel htmlFor="muscles">
            Muscles
          </InputLabel>
            <Select
              value={muscles}
              onChange={this.handleChange('muscles')}
            >
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br/>
          <TextField
            label="Description"
            multiline
            row="4"
            value={description}
            onChange={this.handleChange('description')}
            margin="normal"
            className={classes.formControl}
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button 
            color="primary" 
            variant="contained"
            onClick={this.handleSubmit}
          >
            Create
          </Button>
        </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
})
