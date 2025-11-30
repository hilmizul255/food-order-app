import Grid from '@mui/material/Grid';
import MealsItem from './MealsItem';
import api from '../api/itemsData';
import { useContext, useEffect, useState } from 'react';
import itemsContext from '../store/items-context';

const Meals = () => {
    const { itemsData, retrieveItemsData, setItemsData } = useContext(itemsContext);

    useEffect(() => {
        const getAllItemsData = async () => {
            const allItemsData = await retrieveItemsData();
            if (allItemsData) setItemsData(allItemsData);
        };
        getAllItemsData();
    }, []);

    return (
        <section>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                {itemsData.map((item, index) => (
                  
                        <MealsItem
                            key={index}
                            id={index}
                            item={item}
                        />
                ))}
            </Grid>
        </section>

    );
};

export default Meals;
