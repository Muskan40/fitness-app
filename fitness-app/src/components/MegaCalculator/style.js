import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
export default makeStyles(theme=>({

    text:{
        marginTop:'10px',
        boxShadow:'0 2px 2px -2px white'
    },
    typo:{
        fontFamily:'comic sans ms',
        fontWeight:'bold',
        fontSize:'25px',
        marginBottom:'10px',
        color:'#8ECBF9'
    },
    grid:{
        marginTop:'30px',
        backgroundColor:'#011F3D',
        height:'480px',
        [theme.breakpoints.down("xs")] : {
            height:'650px' 
            }
    },
   chip:{
        marginBottom:'5px',
        color:'white',
        backgroundColor:'orange'
    },
    bmi:{
        fontSize:'20px',
        fontWeight:'bold',
        color:'#8ECBF9'
    },
    health:{
        fontSize:'20px',
        fontWeight:'bold',
        color:'#8ECBF9'
    },
    range:{
        fontSize:'20px',
        fontWeight:'bold',
        color:'#8ECBF9'
    }
}))