/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Menú"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Inicio
            </Link>,
            <Link to="/form-staff" className={classes.dropdownLink}>
              Staff
           </Link>,
            <Link to="/form-player" className={classes.dropdownLink}>
              Jugador
          </Link>,
      
            
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>

        {/* <CloudDownload className={classes.icons} /> Download */}

      </ListItem>
      <ListItem className={classes.listItem}>
                    <Button
                    
                      href="http://localhost:3000/login-page"
                      className={classes.dropdownLink}
                      color="danger"
                      round
                    >
                      Login
                    </Button>
                  </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);


