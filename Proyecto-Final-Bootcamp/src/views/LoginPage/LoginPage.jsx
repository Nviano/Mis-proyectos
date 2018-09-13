import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
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

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/background-login.jpg";

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      data: {
        email: '',
        password: ''
      },

      redirect: false
    };
  }

 
  
  

  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function () {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  onSubmit = async e => {

    e.preventDefault();
    console.log(this.state.data);
    const url = `http://localhost:8000/users/loginPersona`;

     await axios.post(url,this.state.data)
      .then(response => {
        localStorage.setItem('token',response.data.token);
      if(response.status !== 401)
        this.setState(
          ...this.state.data,
          { redirect: true });

      })
      .catch(error => console.log(error));

  };


  render() {
    const { classes, ...rest, } = this.props;
    const { redirect } = this.state;
    return (
      <div>
        {redirect ? (
          <Redirect to='/profile-player' />
        ) : (
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
                    <GridItem xs={12} sm={12} md={4}>
                      <Card className={classes[this.state.cardAnimaton]}>
                        <form onSubmit={this.onSubmit} className={classes.form}>
                          <CardHeader color="danger" className={classes.cardHeader}>
                            <h4>Login</h4>
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
                            {/* <CustomInput
                        
                        labelText="Nombre..."
                        id="nombre"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      /> */}
                            <CustomInput

                              labelText="Email..."
                              id="email"
                              name='email'
                              formControlProps={{
                                fullWidth: true
                              }}
                              onChangeInput={this.onChange}
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
                              name='password'
                              formControlProps={{
                                fullWidth: true
                              }}
                              onChangeInput={this.onChange}
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

                          </CardBody>
                          <CardFooter className={classes.cardFooter}>
                            <Button type="submit" simple color="danger" size="lg">
                              Iniciar Sesion
                      </Button>
                          </CardFooter>
                        </form>
                      </Card>
                    </GridItem>
                  </GridContainer>
                </div>
              </div>
              <Footer />
            </div>
          )}
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
