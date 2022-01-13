import React from 'react'
import {Button, Grid , makeStyles , Typography} from "@material-ui/core"
import {TextField} from '@material-ui/core'
//import {FormControl} from '@material-ui/core'

const styles={
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop :'5%',
}

const useStyles = makeStyles({
    root: {
            // display:'flex',
            border: 0,
            background: '#212121',
            color: 'white',
            '&:hover':{
                background: '#212121',
                variant:'raised'
            },
            padding: "9px 18px",
            height:'3rem',
            width:'14rem',
            margin:'1rem'       
    },

    
});



function Signup() {
    const classes = useStyles();
    return (
        <>
        <div style={styles}>

        {/* <Grid 
            container 
            direction ="column"
            justifyContent='center'
            alignItem="center"
            >
            <TextField label="Email" placeholder='Write your Email' type="email" variant='outlined' //ref={emailRef}
             required /> 
            <TextField label="Choose a password" placeholder='Write your password' type="password" variant='outlined'  //ref={emailRef}
             required />
            <Button variant="contained" href="#submit" color="#212121">
                Sign up for free
            </Button>
            </Grid> */}
            <Grid container direction={"column"} spacing={2} justifyContent='center' alignItems='center' >
            <Grid item>
            <Typography   paragraph={false} align="left" gutterBottom={true} variant="h4" noWrap={false}>CodeStack</Typography>
            </Grid>
             <Grid item>
             <Typography   paragraph={true} align="center" gutterBottom={true} variant="overline" noWrap={false}>
                Join the Game with Developers, Sign up for free!
            </Typography>
             </Grid>   
            <Grid item>
             <TextField label="Email" placeholder='Write a Email'type="email" variant="outlined"  required  />
           </Grid>
           <Grid item>
             <TextField label="Choose a password" type="password" variant="outlined" required />
           </Grid>
           <Grid item>
           <Button variant="contained" href="#submit" color={"#000000"}  size='large' className={classes.root}>
                Sign up for free
            </Button>
            </Grid>
           </Grid>

        </div>
            
        </>
    )
}

export default Signup
