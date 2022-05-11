import React from "react";
import { NavLink } from "react-router-dom";
import {AppBar, Stack, Toolbar, Typography} from '@mui/material';
import '../css/header.css';

function Header() {

    return (

        <AppBar position='static'>
            <Toolbar style={{ backgroundColor: 'blue' }}>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    Herolo Weather Task
                </Typography>
                <Stack direction='row' spacing={1}>
                    <NavLink to="/home" className={(navData) => (navData.isActive ? 'nav-active' : 'nav-inactive')} style={{ textDecoration: 'none' }}>Home</NavLink>
                    <NavLink to="/favorites" className={(navData) => (navData.isActive ? 'nav-active' : 'nav-inactive')} style={{ textDecoration: 'none' }}>Favorites</NavLink>
                </Stack>
            </Toolbar>
        </AppBar>

    );

}

export default Header;