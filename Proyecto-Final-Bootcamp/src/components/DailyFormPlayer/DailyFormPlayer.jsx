import React from "react";
import Datetime from "react-datetime";
import Nouislider from "react-nouislider";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import green from '@material-ui/core/colors/green';


import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import DailyFormPlayerStyle from "assets/jss/material-kit-react/views/formPlayerPage.jsx";


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

class DailyFormPlayer extends React.Component {



    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: "cardHidden",

        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    absolute
                    color="transparent"
                    brand="Load Control"
                    rightLinks={<HeaderLinks />}
                    {...rest}
                />
                <div
                    className={classes.pageHeader}
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}
                >
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <Card className={classes[this.state.cardAnimaton]}>
                                    <form className={classes.form}>
                                        <CardHeader color="danger" className={classes.cardHeader}>
                                            <h4>Regístrate</h4>
                                            <div className={classes.socialLine}>
                                                <Button
                                                    justIcon
                                                    href="#pablo"
                                                    target="_blank"
                                                    color="transparent"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className={"fab fa-twitter"} />
                                                </Button>
                                                <Button
                                                    justIcon
                                                    href="#pablo"
                                                    target="_blank"
                                                    color="transparent"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className={"fab fa-facebook"} />
                                                </Button>
                                                <Button
                                                    justIcon
                                                    href="#pablo"
                                                    target="_blank"
                                                    color="transparent"
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className={"fab fa-google-plus-g"} />
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <p className={classes.divider}></p>
                                        <CardBody>
                                            <CustomInput
                                                labelText="Nombre..."
                                                id="nombre"
                                                formControlProps={{
                                                    fullWidth: false
                                                }}
                                                inputProps={{
                                                    type: "text",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <People className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <GridContainer>
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
                                            </GridContainer>

                                            <TextField
                                                id="multiline-static"
                                                label="Info Adicional"
                                                multiline
                                                rows="4"
                                                defaultValue="Introduce algun dato adicional...ej:Dolor muscular"
                                                className={classes.textField}
                                                margin="normal"
                                            />
                                            <TextField
                                                id="select-currency"
                                                select
                                                label="Select"
                                                className={classes.textField}
                                                value={this.state.currency}
                                                onChange={this.handleChange('currency')}
                                                SelectProps={{
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                                helperText="Please select your currency"
                                                margin="normal"
                                            >
                                                {currencies.map(option => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
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
                                            <Nouislider
                                                start={[5]}
                                                connect={[true, false]}
                                                step={1}
                                                range={{ min: 1, max: 10 }}
                                            />

                                        </CardBody>
                                        <CardFooter className={classes.cardFooter}>
                                            <Button simple color="danger" size="lg">
                                                Rigistrar
                                            </Button>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>

                </div >

                );
            }
        }
        
export default withStyles(DailyFormPlayerStyle)(DailyFormPlayer);