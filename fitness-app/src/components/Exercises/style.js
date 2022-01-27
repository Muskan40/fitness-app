import { makeStyles } from "@material-ui/core";

export default makeStyles(theme=>({
    container:{
        marginTop:'100px',
        backgroundColor:'#0B1828',
        [theme.breakpoints.down("xs")] : {
            marginTop:'300px'
           
            },
            [theme.breakpoints.down("sm")] : {
                marginTop:'260px'
               
                },
                [theme.breakpoints.down("md")] : {
                    marginTop:'160px'
                   
                    }
        
    },
    cardmedia:{
        height:'350px'
    },
    typo:{
        textTransform:'uppercase',
        fontFamily:'comic sans ms',
        fontWeight:'bold'

    },
    cardcontent:{
        backgroundColor:'whitesmoke'
    }

}))