import {Grid, Typography} from '@mui/material';
import MealsItem from './MealsItem';
import { useContext, useEffect } from 'react';
import itemsContext from '../store/items-context';

const Meals = (props) => {
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
            <Typography variant="h4" sx={{ textAlign: "center", padding: "50px" }}>AVAILABLE MEALS</Typography>
            <Grid container spacing={2} alignItems="center" justifyContent="center" >
                {itemsData.map((item, index) => (

                    <MealsItem
                        key={index}
                        id={index}
                        item={item}
                        OnshowCart={props.showCart}
                    />
                ))}
            </Grid>
        </section>

    );
};

export default Meals;
