import React,{useState,useEffect} from 'react';

import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import {AppBar,TextField} from '@material-ui/core'
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AirlineSeatLegroomExtraIcon from '@mui/icons-material/AirlineSeatLegroomExtra';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import HikingIcon from '@mui/icons-material/Hiking';
import BabyChangingStationIcon from '@mui/icons-material/BabyChangingStation';
import AccessibleIcon from '@mui/icons-material/Accessible';
import useStyles from './style'
import {Button} from '@material-ui/core'
import axios from 'axios'
import Exercises2 from '../Exercises/Exercises2';
import Exercises from '../Exercises/Exercises'
const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));


  
const Enavbar = () => {
    const [search,setsearch]=useState('abs');
    const classes=useStyles();
    const handleTextInputChange=event=>{
        
        setsearch(event.target.value)
        
        };
    
    
    console.log(search)
    const [chipData, setChipData] =useState([
        { key: 0, label: 'Back',icon:<SettingsAccessibilityIcon/> },
        { key: 1, label: 'Cardio',icon:<AccessibilityIcon/> },
        { key: 2, label: 'Chest',icon:<VolunteerActivismIcon/> },
        { key: 3, label: 'Lower Arms',icon:<HikingIcon/> },
        { key: 4, label: 'Lower Legs',icon:<TransferWithinAStationIcon/> },
        { key: 5, label: 'Neck',icon:<AccessibleIcon/> },
        { key: 6, label: 'Shoulder',icon:<SportsHandballIcon/> },
        { key: 7, label: 'Upper Arms',icon:<BabyChangingStationIcon/>  },
        { key: 8, label: 'Upper Legs',icon:<AirlineSeatLegroomExtraIcon/> },
        { key: 9, label: 'Waist',icon:<AirlineSeatReclineExtraIcon /> },
        
      ]);
  return(
    <> 
    <AppBar>
    <Paper
    
    sx={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      p: 0.5,
      m: 0,
    }}
    component="ul"
  >
    {chipData.map((data) => {
      return (
        
        <ListItem key={data.key}>
          <Chip className={classes.chip}
          color='secondary'
            icon={data.icon}
            label={data.label}
            
          />
        </ListItem>
      );
    })}
  </Paper>
  <TextField  className={classes.appbar}
    id="standard-basic"
     color="inherit" 
     label="Search For Exercises"
     variant="filled"
     value={search}
     onChange={handleTextInputChange}
    />
    </AppBar>

     {search.length>=3?< Exercises search={search}/>:<Exercises search="abs"/>}
    </> 
  );
};

export default Enavbar;
