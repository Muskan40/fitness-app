import React from 'react';
import {Grid,Box,Card,CardMedia,CardActions,CardContent,Button,Typography} from '@material-ui/core'
import useStyles from './style'
const Exercises2 = ({Exercise}) => {
    // console.log(exercise)
    const classes=useStyles();
  return(
    <Grid className={classes.container} container alignItems="stretch" spacing={2}>
    {
        
        Exercise.map((item,index)=> index<24 && (
            <Grid  item xs={12} md={6} lg={4}>
                <Card className={classes.card} sx={{ display: 'flex' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <CardContent className={classes.cardcontent} sx={{ flex: '1 0 auto' }}>
      <Typography className={classes.typo} component="div" variant="h5">
        {item.bodyPart}
      </Typography>
      <Typography variant="h6" color="primary" component="div">
        {item.equipment}
      </Typography>
    </CardContent>
    <CardMedia
  className={classes.cardmedia}
    component="image"
    
    image={item.gifUrl}
    alt="Live from space album cover"
  />
    <CardActions>
        <Button variant="contained" color="secondary">{item.target}</Button>
        <Button variant="contained" color="secondary">{item.name}</Button>
    </CardActions>
  </Box>
  
</Card>


</Grid>



        ))

       
    }



  </Grid>

  ) ;
};

export default Exercises2;
