import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
};

class RadioButton extends React.Component {
  state = {
    selectedValue: 'a',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Radio
          checked={this.state.selectedValue === 'a'}
          onChange={this.handleChange}
          value="1"
          name="radio-button-demo"
          aria-label="A"
        />
        <Radio
          checked={this.state.selectedValue === 'b'}
          onChange={this.handleChange}
          value="2"
          name="radio-button-demo"
          aria-label="B"
        />
        <Radio
          checked={this.state.selectedValue === 'c'}
          onChange={this.handleChange}
          value="3"
          name="radio-button-demo"
          aria-label="C"
          classes={{
            root: classes.root,
            checked: classes.checked,
          }}
        />
        <Radio
          checked={this.state.selectedValue === 'd'}
          onChange={this.handleChange}
          value="4"
          color="default"
          name="radio-button-demo"
          aria-label="D"
        />
        <Radio
          checked={this.state.selectedValue === 'e'}
          onChange={this.handleChange}
          value="5"
          color="default"
          name="radio-button-demo"
          aria-label="E"
          className={classes.size}
          icon={<RadioButtonUncheckedIcon className={classes.sizeIcon} />}
          checkedIcon={<RadioButtonCheckedIcon className={classes.sizeIcon} />}
        />
      </div>
    );
  }
}

RadioButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButton);