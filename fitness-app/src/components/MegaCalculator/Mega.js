import React,{useState,useEffect} from 'react';
import {Grid,Chip,Paper,TextField,Card,CardMedia,CardActions,Typography,Button,CardContent} from '@material-ui/core'
import useStyles from './style'
import axios from "axios";
import Divider from '@mui/material/Divider';

const Mega = () => {
    const classes=useStyles();
    const [weight,setweight]=useState("");
    const[height,setheight]=useState("");
    const [age,setage]=useState("");
    const [gender,setgender]=useState("");
    const [bmis,setbmis]=useState("");
    const [health,sethealth]=useState("")
    const[bmi_range,setbmi_range]=useState("");
    const [bfp,setbfp]=useState(0)
    const[fatmass,setfatmass]=useState(0);
    const[healths,sethealths]=useState("");
    const [waist,setwaist]=useState("")
    const[bsi,setbsi]=useState("")
    const[mortality,setmortality]=useState("")
    
    const handelweight=event=>{
        setweight(event.target.value);
    }
    const handelheight=event=>{
        setheight(event.target.value);
    }
    const handelage=event=>{
        setage(event.target.value);
    }
    const handelgender=event=>{
        setgender(event.target.value);
    }
    const handelwaist=event=>{
        setwaist(event.target.value)
    }
    
    
function bmi(){
  const options = {
  method: 'GET',
  url: 'https://mega-fitness-calculator1.p.rapidapi.com/bmi',
  params: {weight:weight, height: height},
  headers: {
    'x-rapidapi-host': 'mega-fitness-calculator1.p.rapidapi.com',
    'x-rapidapi-key': '13138edc67msh6c745817d45f126p147e10jsna2342d12db97'
  }
};

axios.request(options).then(function (response) {
	setbmis(response.data.info.bmi);
   sethealth(response.data.info.health);
    setbmi_range(response.data.info.healthy_bmi_range);

    console.log(response.data)
}).catch(function (error) {
	console.error(error);
});
}
function fat_percentage(){

const options = {
  method: 'GET',
  url: 'https://mega-fitness-calculator1.p.rapidapi.com/bfp',
  params: {weight: weight, height: height, age: age, gender: gender},
  headers: {
    'x-rapidapi-host': 'mega-fitness-calculator1.p.rapidapi.com',
    'x-rapidapi-key': '13138edc67msh6c745817d45f126p147e10jsna2342d12db97'
  }
};

axios.request(options).then(function (response) {
	setbfp(response.data.info.bfp)
    setfatmass(response.data.info.fat_mass)
    sethealths(response.data.info.health)
}).catch(function (error) {
	console.error(error);
});
}
function bsis()
{
    const options = {
        method: 'GET',
        url: 'https://mega-fitness-calculator1.p.rapidapi.com/absi',
        params: {weight: weight, height: height, waist: waist, age: age, gender: gender},
        headers: {
          'x-rapidapi-host': 'mega-fitness-calculator1.p.rapidapi.com',
          'x-rapidapi-key': '13138edc67msh6c745817d45f126p147e10jsna2342d12db97'
        }
      };
      
      axios.request(options).then(function (response) {
         setbsi(response.data.info.absi)
         setmortality(response.data.info.mortalityRisk)
      }).catch(function (error) {
          console.error(error);
      });
}

  return(
      <Grid  container spacing={2} alignItems='Stretch'>
        <Grid item xs={12} md={6} lg={4}>
        <Card className={classes.grid}>
        <CardContent>
            <Typography className={classes.typo}>
                        Body Mass Index
            </Typography>
            <TextField 
            className={classes.text} 
                id="standard-basic"
                color="secondary" 
                label="Weight(kg)"
                variant="filled"
                value={weight}
                onChange={handelweight}
            />
            <TextField  
                className={classes.text}
                id="standard-basic"
                color="secondary" 
                label="Height (cm)"
                variant="filled"
                value={height}
                onChange={handelheight}

            />
            <CardContent>
                <Typography className={classes.bmi}>Bmi</Typography>
                <Chip className={classes.chip} label={bmis} variant="outlined"/>
                <Typography className={classes.health}>Health</Typography>
                <Chip className={classes.chip} label={health} variant="outlined"/>
                <Typography className={classes.range}>Bmi Range</Typography>
                <Chip className={classes.chip} label={bmi_range} variant="outlined"/>
            <Divider />

            </CardContent>
            <CardActions>
                <Button variant="contained" type="button" color="secondary" onClick={bmi} >Calculate</Button>
            </CardActions>

        </CardContent>
        </Card>
        </Grid>
        


        <Grid item xs={12} md={6} lg={4}>
        <Card className={classes.grid}>
        <CardContent>
            <Typography className={classes.typo}>
                        Body Fat Percentage
            </Typography>
            <TextField  
            className={classes.text}
                id="standard-basic"
                color="secondary" 
                label="Weight(kg)"
                variant="filled"
                value={weight}
                onChange={handelweight}
            />
            <TextField  
                className={classes.text}
                id="standard-basic"
                color="secondary" 
                label="Height(cm)"
                variant="filled"
                value={height}
                onChange={handelheight}

            />
            <TextField  
                className={classes.text}
                id="standard-basic"
                color="secondary" 
                label="Age"
                variant="filled"
                value={age}
                onChange={handelage}

            />
            <TextField  
                className={classes.text}
                id="standard-basic"
                color="secondary" 
                label="gender"
                variant="filled"
                value={gender}
                onChange={handelgender}

            />
            <CardContent>
                <Typography className={classes.bmi}>BFP</Typography>
                <Chip className={classes.chip} label={bfp} variant="outlined"/>
                <Typography className={classes.health}>Fat Mass</Typography>
                <Chip className={classes.chip} label={fatmass} variant="outlined"/>
                <Typography className={classes.range}>Health</Typography>
                <Chip className={classes.chip} label={healths} variant="outlined"/>
            <Divider />

            </CardContent>
            <CardActions>
                <Button variant="contained" type="button" color="secondary" onClick={fat_percentage} >Calculate</Button>
            </CardActions>

        </CardContent>
        </Card>
        </Grid>



        <Grid item xs={12} md={6} lg={4}>
        <Card className={classes.grid}>
        <CardContent>
            <Typography className={classes.typo}>
                        Body Shape Index
            </Typography>
            <TextField  
            className={classes.text}
                id="standard-basic"
                color="secondary" 
                label="Weight"
                variant="filled"
                value={weight}
                onChange={handelweight}
            />
            <TextField  
                className={classes.text}
                id="standard-basic"
                color="secondary" 
                label="Height"
                variant="filled"
                value={height}
                onChange={handelheight}

            />
            <TextField  
                className={classes.text}
                id="standard-basic"
                color="secondary" 
                label="Age"
                variant="filled"
                value={age}
                onChange={handelage}

            />
            <TextField  
                className={classes.text}
                id="standard-basic"
                color="secondary" 
                label="gender"
                variant="filled"
                value={gender}
                onChange={handelgender}

            />
            <TextField  
                className={classes.text}
                id="standard-basic"
                color="secondary" 
                label="Waist (cm)"
                variant="filled"
                value={waist}
                onChange={handelwaist}

            />


            <CardContent>
                <Typography className={classes.bmi}>Body shape index</Typography>
                <Chip className={classes.chip} label={bsi} variant="outlined"/>
                <Typography className={classes.health}>Mortality Risk</Typography>
                <Chip className={classes.chip} label={mortality} variant="outlined"/>
                
            <Divider />

            </CardContent>
            <CardActions>
                <Button variant="contained" type="button" color="secondary" onClick={bsis} >Calculate</Button>
            </CardActions>

        </CardContent>
        </Card>
        </Grid>
      </Grid>
      
  )
};

export default Mega;
