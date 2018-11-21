import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Typography, Toolbar, } from "@material-ui/core";

const styles = {
    root: {
        backgroundColor: "#03a9f4",
        width: "100%"
    }
}

const Navbar = (props) => {
    const { classes } = props;
    return (
    <div >
        <AppBar position="sticky">
            <Toolbar className={classes.root}>
                <Typography color="inherit" variant="headline">Jacob Cadiente</Typography>
            </Toolbar>
        </AppBar>
    </div>
    )
}

Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Navbar);
