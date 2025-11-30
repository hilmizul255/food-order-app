import React from 'react';
import Grid from '@mui/material/Grid';


function SideBar() {
    return (
 <Grid
            size={3}
            sx={{
                backgroundColor: "#f0f0f0",
                padding: 2,
            }}
        >
            <h2 style={{ margin: 0 }}>Dashboard</h2>
        </Grid>
    );
}

export default SideBar;
