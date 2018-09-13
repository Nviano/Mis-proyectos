import React from "react";
import axios from 'axios';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import FormHelperText from '@material-ui/core/FormHelperText';
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import SimpleSelect from "components/SimpleSelect/SimpleSelect.jsx"
import SimpleSelectClub from "components/SimpleSelect/SimpleSelectClub.jsx";

import FormPlayerStyle from "assets/jss/material-kit-react/views/formPlayerPage.jsx";

import image from "assets/img/background-login.jpg";


class FormPlayerPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      club: []
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
    this.getClub();
  }


  getClub = async () => {
    const url = `http://localhost:8000/club/`;


    await axios.get(url)
      .then(res => {
        this.setState({
          club: res.data

        })

      })
      .catch(error => {
        console.log(error)
      })
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
                      <CustomInput
                        labelText="Apellidos..."
                        id="apellidos"
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
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: false
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Contraseña"
                        id="password"
                        formControlProps={{
                          fullWidth: false
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Confirma contraseña"
                        id="confirmPassword"
                        formControlProps={{
                          fullWidth: false
                        }}
                        inputProps={{
                          type: "Password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Pais..."
                        id="pais"
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

                      <CustomInput
                        labelText="Teléfono..."
                        id="telefono"
                        formControlProps={{
                          fullWidth: false
                        }}
                        inputProps={{
                          type: "number",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Altura..."
                        id="altura"
                        formControlProps={{
                          fullWidth: false
                        }}
                        inputProps={{
                          type: "number",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        // labelText="Fecha de nacimiento..."
                        className="fechaNacimiento"
                        id="fechaNacimiento"
                        formControlProps={{
                          fullWidth: false

                        }}

                        inputProps={{
                          type: "date",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>

                          )

                        }}

                      />
                      <CustomInput
                        labelText="Peso..."
                        id="peso"

                        formControlProps={{
                          fullWidth: false
                        }}
                        inputProps={{
                          type: "number",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Foto.."
                        id="peso"

                        formControlProps={{
                          fullWidth: false
                        }}
                        inputProps={{
                          type: "file",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <FormHelperText className="inputInLine">Fecha de Nacimiento</FormHelperText>
                      <SimpleSelect />


                      <SimpleSelectClub
                        clubes={this.state.club}

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
        <Footer />
      </div >
    );
  }
}

export default withStyles(FormPlayerStyle)(FormPlayerPage);
