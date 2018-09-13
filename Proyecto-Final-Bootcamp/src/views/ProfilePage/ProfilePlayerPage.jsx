import React from "react";
import axios from "axios";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import TextField from '@material-ui/core/TextField';

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinksProfilePlayer from "../../components/Header/HeaderLinksProfilePlayer";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import TextFieldsPlayer from "components/TextFieldsPlayer/TextFieldsPlayer.jsx"
import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";


class ProfilePlayerPage extends React.Component {

    state = {
        player: {}
    }

    componentDidMount() {
        this.getProfilePlayer();
    }

    getProfilePlayer = async () => {
        const url = `http://localhost:8000/vistaperfil`;

        await axios.get(url, { headers: { Authorization: localStorage.getItem('token') } })
            .then(res => {
                this.setState({

                    player: res.data[0]

                })
                console.log(this.state.player)
            })
            .catch(error => {
                console.log(error)
            })
    }




    render() {
        const { classes, ...rest } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

        return (

            <div>
                <Header
                    color="transparent"
                    brand="Load Control"
                    rightLinks={<HeaderLinksProfilePlayer />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src={profile} alt="..." className={imageClasses} />
                                        </div>
                                        <div className={classes.name}>
                                            <h3 className={classes.title}>
                                                {this.state.player.nombre + '  ' + this.state.player.apellidos}
                                            </h3>
                                            <h6>{this.state.player.posicion}</h6>

                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                                    <NavPills
                                        alignCenter
                                        color="danger"
                                        tabs={[
                                            {
                                                tabButton: "Profile",
                                                tabIcon: Dashboard,
                                                tabContent: (
                                                    <GridContainer justify="center">
                                                        <GridItem xs={12} sm={12} md={4}>
                                                            <img
                                                                alt="..."
                                                                src={studio1}
                                                                className={navImageClasses}
                                                            />
                                                            <img
                                                                alt="..."
                                                                src={studio2}
                                                                className={navImageClasses}
                                                            />
                                                        </GridItem>
                                                        <GridItem xs={12} sm={12} md={4}>
                                                            <img
                                                                alt="..."
                                                                src={studio5}
                                                                className={navImageClasses}
                                                            />
                                                            <img
                                                                alt="..."
                                                                src={studio4}
                                                                className={navImageClasses}
                                                            />
                                                        </GridItem>
                                                    </GridContainer>
                                                )
                                            },
                                            {
                                                tabButton: "History",
                                                tabIcon: Schedule,
                                                tabContent: (
                                                    <GridContainer justify="center">
                                                        <GridItem xs={12} sm={12} md={4}>
                                                            <img
                                                                alt="..."
                                                                src={work1}
                                                                className={navImageClasses}
                                                            />
                                                            <img
                                                                alt="..."
                                                                src={work2}
                                                                className={navImageClasses}
                                                            />
                                                            <img
                                                                alt="..."
                                                                src={work3}
                                                                className={navImageClasses}
                                                            />
                                                        </GridItem>
                                                        <GridItem xs={12} sm={12} md={4}>
                                                            <img
                                                                alt="..."
                                                                src={work4}
                                                                className={navImageClasses}
                                                            />
                                                            <img
                                                                alt="..."
                                                                src={work5}
                                                                className={navImageClasses}
                                                            />
                                                        </GridItem>
                                                    </GridContainer>
                                                )
                                            },
                                            {
                                                tabButton: "Daily Form",
                                                tabIcon: List,
                                                tabContent: (
                                                    <GridContainer justify="center">
                                                        <GridItem xs={12} sm={12} md={4}>
                                                       <TextFieldsPlayer/>
                                                        </GridItem>
                                                    </GridContainer>
                                                )
                                            }
                                        ]}
                                    />
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(profilePageStyle)(ProfilePlayerPage);
