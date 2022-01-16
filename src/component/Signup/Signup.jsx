import React , {useRef} from 'react'
import {Button, Grid , makeStyles , Typography } from "@material-ui/core"
import {TextField} from '@material-ui/core'
//import {FormControl} from '@material-ui/core'
import { useAuth } from '../../contexts/AuthContext'



const styles={
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop :'4%',
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



function Signup() {
    const classes = useStyles();
    const emailRef = useRef()
    const passwordRef = useRef()
    const {signup} = useAuth()

    function handleSubmit(e){
        e.preventDefault()

        signup(emailRef.current.value , passwordRef.current.value)
    }

    return (
        <>
        <div style={styles}>
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
             <TextField label="Email" placeholder='Write a Email'type="email" variant="outlined" ref={emailRef} required   />
           </Grid>
           <Grid item>
             <TextField label="Choose a password" type="password" variant="outlined" ref={passwordRef} required />
           </Grid>
           <Grid item>
           <Button variant="contained" href="#submit" color={"#000000"}  size='large' className={classes.root}>
                Sign up for free
            </Button>
            </Grid>
            <Grid item>
            <Typography paragraph={false} align="center" gutterBottom={false} variant="overline" noWrap={false}>ALready have an account ? Login</Typography>
            </Grid>
            <Grid item>
            <Typography paragraph={false} align='left' gutterBottom={true} variant="overline" noWrap={false}>
           ~/ A bug is never just a mistake. It represents something bigger. An error of thinking That makes you who you are. /~<br/>
            -- Sam Esmail
                </Typography>
            </Grid>
           </Grid>

        </div>
            
        </>
    )
}

export default Signup
