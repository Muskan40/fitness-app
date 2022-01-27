import React from 'react';
import {AppBar,IconButton,Typography,Toolbar} from '@material-ui/core'
import useStyles from './style'
import Avatar from '@mui/material/Avatar';
import avtar from './avtar.jpeg'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const classes=useStyles();
  return <>
  <AppBar   position="static">
  <Toolbar  className={classes.appbar} variant="dense">
    <Typography className={classes.typo} variant="h5" color="inherit">
      Go Go Fitness
    </Typography>
    <IconButton className={classes.avtar} sx={{ p: 0 }}>
    <Avatar  alt="Remy Sharp" src={avtar} />
    </IconButton>
  </Toolbar>
</AppBar>
  </>;
};

export default Navbar;
