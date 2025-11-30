import { Grid } from '@mui/material';
import MealsItem from './MealsItem';
import api from '../api/itemsData';
import { useContext, useEffect, useState } from 'react';
import itemsContext from '../store/items-context';

const Meals = () => {

    const {itemsData, retrieveItemsData, setItemsData} = useContext(itemsContext);

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
                {itemsData.map((item) => (
                    <Grid
                        xs={12}
                        sm={6}
                        md={4}

                    >
                        <MealsItem
                            key={item.id}
                            item={item}
                        />
                    </Grid>
                ))}
            </Grid>
        </section>

    );
};

export default Meals;
