import React from 'react';
import './pages.css';
import FoodArchieve from '../components/FoodArchieve/FoodArchieve';
import { Button, Grid } from '@mui/material';

function Users() {
    return (
        <> <section className="hero">
            <div className="hero-card">
                <h2>FOODYNERD</h2>
                <p>IS WHERE YOU GET YOUR FAVORITE FOOD</p>
                <Button variant="contained" color="primary">DISCOVER</Button>
            </div>
            <div className="overlay"></div>
        </section>
            <section className="feature section">
                <h2>DELICIOUS FOOD FOR PEOPLE</h2>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid size={6}>
                        <div className="feature-card">
                            <h4>YOU'RE GOING TO FALL IN LOVE</h4>
                            <p>
                                This is some dummy text inside the left grid.
                                You can replace it with anything.
                            </p>

                            <h4>FOOD THAT YOU NEVER HAD BEFORE</h4>
                            <p>
                                This is some dummy text inside the left grid.
                                You can replace it with anything.
                            </p>
                        </div>
                    </Grid>

                    <Grid size={6}>
                        <div className="feature-card">
                            <div><img src="https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg" alt="" /></div>
                            <div><img src="https://images.pexels.com/photos/3023479/pexels-photo-3023479.jpeg" alt="" /></div>
                            <div><img src="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg" alt="" /></div>

                        </div>
                    </Grid>
                </Grid>

            </section>
            <section className="section">
                <FoodArchieve />
            </section>
        </>

    );
}

export default Users;