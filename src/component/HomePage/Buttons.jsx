import React from 'react'
import {Button , makeStyles , } from '@material-ui/core'

const styles = {
    display : "flex",
    flexDirection : "row",
    marginTop : '5%'
}

// making a hook api for styles
const useStyles = makeStyles({
    root: {
            border: 0,
            background: '#212121',
            color: 'white',
            '&:hover':{
                color: "#212121"
            },
            padding: "9px 18px",
            height:'3rem',
            width:'6rem',
            margin:'1rem',
            flexDirection:'row',
            
    },

    
});


function Buttons() {
    const classes = useStyles();
    return (
        <div style={styles}>   
            <Button variant="text" href="#Login" className={classes.root}>Login</Button>
            <Button variant="text" href="#Signup" className={classes.root}>Signup</Button>
        </div>
    )
}

export default Buttons
