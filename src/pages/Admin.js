import React from 'react';
import './pages.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import FoodArchieve from '../components/FoodArchieve/FoodArchieve';



function Admin() {
    return (
        <><Grid container>
            <Grid
                size={3}
                sx={{
                    backgroundColor: "#f0f0f0",
                    padding: 2,
                }}
            >
                <h2 style={{ margin: 0 }}>Dashboard</h2>
            </Grid>
            <Grid size={9}>


                <section className="section">
                    <Button variant="contained" color="secondary">ADD NEW ITEM</Button>
                    <FoodArchieve />
                </section>

            </Grid>
        </Grid>

        </>
    );
}

export default Admin;