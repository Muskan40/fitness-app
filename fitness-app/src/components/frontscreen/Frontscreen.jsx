import React,{useState} from 'react';
import {Box,Slider,Chips,Divider,Card,CardContent,CardMedia,CardActionArea,CardActions,IconButton,Button,Typography,Grid} from "@material-ui/core"
// import {useTheme} from "@mui/material/styles"
import gif from './giphy.gif'
import bmi from './bmi.gif'
import food from './food.gif'
import useStyles from './style'
import {Link} from 'react-router-dom'

import Mega from '../MegaCalculator/Mega';
const display = [{name:"Mega Fitness Calculator",title:"Calculates the BMI,Body Shape Index and Body Fat Percentage",features:["a","b","c"],video:bmi},
                {name:"Exercises",features:["a","b","c"],video:gif,title:"Gives you access to exercises for diffrent target muscles with animated demonstrations"},
                {name:'Food Calorie Calculator',title:'Gives You Food Calorie details for the food you search',video:food,features:['a','b','c']},
                ]
const Frontscreen = () => {
    // const Theme = useTheme()
    const [state,setstate]=useState(0);
    const classes=useStyles();
  return (
      <Grid className={classes.container} container alignItems="flex-end" >

                  <Grid alignItems="flex-end" item xs={12} sm={6} md={6} lg={4}>
                      <Link style={{textDecoration:'none'}} to={'/megafitness'}>
                  <Card   className={classes.card}>      
                <CardMedia
                    component="img"
                    height="300"
                    image={display[0].video}
                    alt="green iguana"

                />
                <CardContent className={classes.content}>
                   
                    <Typography className={classes.typo} color="secondary" gutterBottom variant="h6" component="div">
                    {display[0].name}
                    <Divider/>
                    </Typography>
                    <Typography  variant="body" color="primary">
                    {display[0].title}
                    </Typography>
                </CardContent>
                
                <Slider
                        aria-label="Temperature"
                        defaultValue={80}
                        
                        color="secondary"
                        />
            
                </Card>
                </Link>
             </Grid>

             <Grid  item xs={12} xd={6} md={6} lg={4}>
                      <Link style={{textDecoration:'none'}} to={'/exercises'}>
                  <Card    gutterBottom className={classes.card}>      
                <CardMedia
                    component="img"
                    height="300"
                    image={display[1].video}
                    alt="green iguana"

                />
                <CardContent className={classes.content}>
                   
                    <Typography className={classes.typo} gutterBottom variant="h6" color="secondary" component="div">
                    {display[1].name}
                    </Typography>
                    <Divider/>
                    <Typography variant="body" color="primary" >
                    {display[1].title}
                    </Typography>
                </CardContent>
                
                <Slider
                        aria-label="Temperature"
                        defaultValue={80}
                        
                        color="secondary"
                        />
            
                </Card>
                </Link>
             </Grid>

             <Grid  item xs={12} xd={6} md={6} lg={4}>
                      <Link style={{textDecoration:'none'}} to={'/foodcalories'}>
                  <Card    gutterBottom className={classes.card}>      
                <CardMedia
                    component="img"
                    height="300"
                    image={display[2].video}
                    alt="green iguana"

                />
                <CardContent className={classes.content}>
                   
                    <Typography className={classes.typo} gutterBottom variant="h6" color="secondary" component="div">
                    {display[2].name}
                    </Typography>
                    <Divider/>
                    <Typography  variant="body" color="primary">
                    {display[2].title}
                    </Typography>
                </CardContent>
                
                <Slider
                        aria-label="Temperature"
                        defaultValue={80}
                        
                        color="secondary"
                        />
            
                </Card>
                </Link>
             </Grid>
             
                
            
      </Grid>
  )

  
};

export default Frontscreen;
