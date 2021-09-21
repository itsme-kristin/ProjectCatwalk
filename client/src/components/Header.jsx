import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "rgb(63, 81, 181)",
  },
  logo: {
    fontFamily: "'Special Elite', cursive",
    fontWeight: 600,
    fontSize: "40px",
    color: "white",
    textAlign: "left",
  },
}));

const Header = () => {
  const classes = useStyles();

  const displayDesktop = () => {
    return <Toolbar>{klosetLogo}</Toolbar>;
  };

  const klosetLogo = (
    <h1 className={classes.logo}>
      BD Kloset
    </h1>
  );

  return (
    <header>
      <AppBar position="sticky" className={classes.header}>{displayDesktop()}</AppBar>
    </header>
  );
}

export default Header;