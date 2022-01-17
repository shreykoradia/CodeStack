import React, {useRef} from 'react'
import {Button , Grid , makeStyles , Typography } from "@material-ui/core"
import {TextField} from '@material-ui/core'
//import {FormControl} from '@material-ui/core

const styles={
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop :'3%',
    marginLeft:'2%',
    maxWidth:'100vw',
    flexDirection:'row'
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



function Login() {
    const classes = useStyles();
    const emailRef = useRef()
    const passwordRef = useRef()

    return (
        <>
        <div style={styles}>
            <Grid container direction={"column"} spacing={2} justifyContent='center' alignItems='center' >
            <Grid item>
            <Typography   paragraph={false} align="left" gutterBottom={true} variant="h4" noWrap={false}>CodeStack</Typography>
            </Grid>
             <Grid item>
             <Typography   paragraph={true} align="center" gutterBottom={true} variant="overline" noWrap={false}>
                Be the 1% of the 1% , Codestack where code is the chaos ! 
            </Typography>
             </Grid>   
            <Grid item>
             <TextField label="Email" placeholder='Email'type="email" variant="outlined" ref={emailRef} required  />
           </Grid>
           <Grid item>
             <TextField label="Password" type="password" placeholder='Password' variant="outlined" ref={passwordRef} required />
           </Grid>
           <Grid item>
           <Button variant="contained" href="#submit" color={"#000000"}  size='large' className={classes.root}>
                Login
            </Button>
            </Grid>
            <Grid item>
            <Typography paragraph={false} align="center" gutterBottom={true} variant="overline" noWrap={false}>Don't have an account ? Signup</Typography>
            </Grid>
           </Grid>

        </div>
            
        </>
    )
}

export default Login
