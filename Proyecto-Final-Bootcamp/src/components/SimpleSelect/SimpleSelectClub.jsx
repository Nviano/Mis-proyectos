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

class SimpleSelectClub extends React.Component {
  state = {
    age: '',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes, clubes} = this.props;

    const clubesList = () => {
      
      clubes.map((club,index)=> {
        <option value={club.idClub} key={index}>{club.nombre}</option>
       
      }
      )}
      const hola = clubesList;
      console.log(hola);

    return (
     
        
        <FormControl className={classes.formControl}>
          <Select
          native
            value={45}
            onChange={this.handleChange}
            name="club"
            displayEmpty
            className={classes.selectEmpty}
          >
          <option value='' >Club</option>
            {hola}
            
          </Select>
        </FormControl>
        
   
    );
  }
}

SimpleSelectClub.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelectClub);