import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FoodArchieve from '../FoodArchieve/FoodArchieve';
import { useState } from 'react';
import AdminForm from './AdminForm';

const Main = () => {
    const [isValid, setIsVaild] = useState(false);
    const showAddItemForm = () => setIsVaild(true);
    const hideAddItemForm = () => setIsVaild(false);
    return (
        <Grid size={9}>


            <section className="section">
                {isValid ? 
                <AdminForm hideAddItemForm={hideAddItemForm} /> : 
                <Button variant="contained" color="primary" onClick={showAddItemForm}>ADD NEW ITEM</Button>}

                <FoodArchieve />
            </section>

        </Grid>

    );
}

export default Main;
