import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    age: '',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      
        
        <FormControl className={classes.formControl}>
          <Select
            value={this.state.age}
            onChange={this.handleChange}
            name="posicion"
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="" disabled>
              Posición
            </MenuItem>
            <MenuItem value="base">Base</MenuItem>
            <MenuItem value="alero">Alero</MenuItem>
            <MenuItem value="ala-pivot">Ala-Pivot</MenuItem>
            <MenuItem value="pivot">Pivot</MenuItem>
          </Select>
        </FormControl>
      
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);