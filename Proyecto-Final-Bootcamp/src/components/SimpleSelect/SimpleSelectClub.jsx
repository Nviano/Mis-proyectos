import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

class SimpleSelectClub extends React.Component {
  state = {
    club: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, clubes } = this.props;

    let clubesList = (

      clubes.map((club, index) => {
        return (
          <option value={club.idClub} key={index}>{club.nombre}</option>
        )
      }
      ))


    return (


      <FormControl className={classes.formControl}>
        <Select
          native

          onChange={this.handleChange}
          name="club"
          displayEmpty
          className={classes.selectEmpty}
        >
          <option value='' >Club</option>
          {clubesList}

        </Select>
      </FormControl>


    );
  }
}

SimpleSelectClub.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelectClub);