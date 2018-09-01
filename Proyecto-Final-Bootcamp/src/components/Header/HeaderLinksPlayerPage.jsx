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


import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinksPlayerPage({ ...props }) {
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
            <Link to="/profile-player" className={classes.dropdownLink}>
              Perfil
            </Link>,
            <Link to="/player-training" className={classes.dropdownLink}>
              Entrenamientos
          </Link>,
      
            
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>

        {/* <CloudDownload className={classes.icons} /> Download */}

      </ListItem>
      <ListItem className={classes.listItem}>
                    <Button
                    
                      href="http://localhost:3000"
                      className={classes.dropdownLink}
                      color="danger"
                      round
                    >
                      Logout
                    </Button>
                  </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinksPlayerPage);


