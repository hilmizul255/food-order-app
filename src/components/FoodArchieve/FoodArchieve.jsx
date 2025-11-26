import React from 'react';
import Grid from '@mui/material/Grid';
import './FoodArchieve.css';
import itemsData from '../../data';
import FoodItem from '../FoodItem/FoodItem';

function FoodArchieve() {
    return (
        <>
            <h1>AVAILABLE FOODS</h1>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <div className="food-card">
                        {itemsData.map((item) =>
                            <FoodItem
                                key={item.id}
                                item={item}
                                image={item.image}
                                name={item.name}
                                desc={item.description}
                                price={item.price}
                            />)}
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

export default FoodArchieve;
