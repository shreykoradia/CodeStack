import React from 'react'
import './sidebar.css'
import { Typography} from '@material-ui/core'
import Sidebaroption from './Sidebaroption'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import { Button } from '@material-ui/core';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';

// // making useStyles 
// const useStyles = makeStyles({
//     root:{
//         position:"fixed",
//         '&:focus':{
//             outline:0,
//             border:0,
//         },
//     }
// })
// sidebar function 

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* CodeStack Name  */}
            <Typography varaint="outline" className='brandname'>CodeStack</Typography>
            {/* SidebarOption home  */}
            <Sidebaroption active Icon={HomeRoundedIcon}><Button variant="text" className='sidebar-button' /></Sidebaroption>
            {/* SidebarOption explore */}
            <Sidebaroption  Icon={ExploreRoundedIcon}><Button variant="text" className='sidebar-button' /></Sidebaroption>
            {/* SidebarOption hackathons */}
            <Sidebaroption Icon={PsychologyRoundedIcon}><Button variant="text" className='sidebar-button' /></Sidebaroption>    
            {/* SidebarOption codereview */}
            <Sidebaroption  Icon={CodeRoundedIcon}><Button variant="text" className='sidebar-button' /></Sidebaroption>
            {/* SidebarOption Profile */}
            <Sidebaroption Icon={AccountBoxRoundedIcon}><Button variant="text" className='sidebar-button' /></Sidebaroption> 
            {/* SidebarOption more  */}
            <Sidebaroption  Icon={MoreHorizRoundedIcon}><Button variant="text" className='sidebar-button' /></Sidebaroption>
            {/* Button for the post  */}
            <Sidebaroption Icon={PostAddRoundedIcon}><Button variant="text" className='sidebar-button' /></Sidebaroption>            
        </div>
    )
}

export default Sidebar
