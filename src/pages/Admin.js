import React from 'react';
import './pages.css';
import Grid from '@mui/material/Grid';
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';



function Admin() {
    return (
        <><Grid container>
            <Sidebar />
            <Main />
        </Grid>

        </>
    );
}

export default Admin;