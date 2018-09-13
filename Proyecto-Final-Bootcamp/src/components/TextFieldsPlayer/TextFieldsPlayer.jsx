import React from 'react';
import Nouislider from "react-nouislider";
import Datetime from "react-datetime";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import green from '@material-ui/core/colors/green';


import GridItem from "components/Grid/GridItem.jsx";
import RadioButton from "components/RadioButton/RadioButton.jsx";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});
const currencies = [
    {
        value: 'morning',
        label: 'Mañana',
    },
    {
        value: 'afternoon',
        label: 'Tarde',
    },
    {
        value: 'game',
        label: 'Partido',
    },

];


class TextFieldsPlayer extends React.Component {
    state = {

        age: '',
        multiline: 'Controlled',
        currency: 'morning',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">

                <GridItem xs={12} sm={12} md={6}>
                    <InputLabel className={classes.label}>
                        Fecha Entreno
                    </InputLabel>
                    <br />
                    <FormControl fullWidth>
                        <Datetime
                            inputProps={{ placeholder: "Selecciona fecha" }}
                        />
                    </FormControl>
                </GridItem>

                <TextField
                    id="select-sesion"
                    select
                    label="Sesión"
                    className={classes.textField}
                    value={this.state.currency}
                    onChange={this.handleChange('currency')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Selecciona tipo de sesión"
                    margin="normal"
                >
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="sesion"
                    label="Info Adicional"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    placeholder="Introduce datos adicionales. Ej: Dolor muscular"

                    fullWidth
                    margin="normal"
                />
                
                <RadioButton />

                <CardFooter className={classes.cardFooter}>
                    <Button simple color="danger" size="lg">
                        Rigistrar Entreno
                    </Button>
                </CardFooter>

            </form>
        );
    }
}

TextFieldsPlayer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFieldsPlayer);