import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "rgb(63, 81, 181)",
    width: '100vw',
  },
  team: {
    margin: 'auto',
    fontFamily: "'Special Elite', cursive",
    fontWeight: 600,
    fontSize: "20px",
    color: "white",
    letterSpacing: "1px",
    align: 'center'
  },
}));

const Footer = ({ handleClick }) => {
const classes = useStyles();

  return (
    <footer onClick={(e) => handleClick(e, 'Footer')}>
      <AppBar position="sticky" className={classes.footer}>
        <Toolbar className={classes.team}>Project Catwalk - Team Brie</Toolbar>
      </AppBar>
    </footer>
  )
};

export default Footer;