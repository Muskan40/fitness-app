import React from 'react';
import {Box,Chip,Slider,Chips,Divider,Card,CardContent,CardMedia,CardActionArea,CardActions,IconButton,Button,Typography,Grid} from "@material-ui/core"
import useStyles from './style';
const FoodCalorie = ({caloriedata}) => {
    const classes=useStyles();
  return(
      <Grid className={classes.grid} container alignItems='stretch' spacing={2}>
          {
              caloriedata?.map((item,index)=>(
                <Grid item xs={12} md={6} lg={3}>
                <Card className={classes.card}>
                    
                    <Typography className={classes.typo} color='primary'>{item.shrt_desc}</Typography>
                    <Divider className={classes.divider}/>
                    <div className={classes.div}>
                    <Button className={classes.btn} variant="contained" color="secondary">WaterContent:{item.water}</Button>
                    <Button className={classes.btn} variant="contained" color="secondary">EnergyCal:{item.energ_kcal}</Button>
                    <Button className={classes.btn} variant="contained" color="secondary">Protein:{item.protein}</Button>
                    <Button className={classes.btn} variant="contained" color="secondary">Carbohydrate:{item.carbohydrt}</Button>
                    <Button className={classes.btn} variant="contained" color="secondary">Sugar:{item.sugar_tot}</Button>
                    <Button className={classes.btn} variant="contained" color="secondary">Calcium:{item.calcium}</Button>
                    <Button className={classes.btn} variant="contained" color="secondary">Iron:{item.iron}</Button>
                    <Button className={classes.btn} variant="contained" color="secondary">Fiber:{item.fiber_td}</Button>
                    <Button className={classes.btn} variant="contained" color="secondary">Potassium:{item.potassium}</Button>
                    <Button className={classes.btn} variant="contained" color="secondary">Sodium:{item.sodium}</Button>
                    <Button className={classes.btn} variant="contained" color="secondary">Lipid:{item.lipid_tot}</Button>
                    </div>

                </Card>
                </Grid>



              ))
          }




      </Grid>

  );
};

export default FoodCalorie;
