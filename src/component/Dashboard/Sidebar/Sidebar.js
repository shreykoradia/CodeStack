import React from 'react'
import {Link} from 'react-router-dom'
import {  Typography} from '@material-ui/core'
import { Button } from '@material-ui/core';
import {FiHome , FiHash , FiUser , FiSettings , FiPlus}  from  'react-icons/fi';
import {DiGitMerge , DiCode} from 'react-icons/di';
import './sidebar.css'


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
            <Typography variant="overline"  className='brandname'>CodeStack</Typography>
            {/* SidebarOption home  */}
            <Button variant="text" className='sidebar-button' component={Link} to="/dashboard"><FiHome /></Button>
            {/* SidebarOption explore */}
            <Button variant="text" className='sidebar-button' component={Link} to="/explore"><FiHash /></Button>
            {/* SidebarOption hackathons */}
            <Button variant="text" className='sidebar-button' component={Link} to="/hackathons"><DiGitMerge /></Button>    
            {/* SidebarOption codereview */}
            <Button variant="text" className='sidebar-button' component={Link} to="/codereview"><DiCode /></Button>
            {/* SidebarOption Profile */}
            <Button variant="text" className='sidebar-button' component={Link} to="/profile"><FiUser/></Button>
            {/* SidebarOption more  */}
            <Button variant="text" className='sidebar-button' component={Link} to="/dashboard" ><FiSettings /></Button>
            {/* Button for the post  */}
            <Button variant="text" className='sidebar-button'  component={Link} to="/dashboard"><FiPlus /></Button>          
        </div>
    )
}

export default Sidebar
