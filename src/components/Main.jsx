import Meals from './Meals';
import AdminForm from './AdminForm';
import { useState } from 'react';
import { Button } from '@mui/material';


function Main() {
const [isValid, setIsValid] = useState(false);
const showAddItemForm = () => setIsValid(true);
const closeAddItemForm = () => setIsValid(false);
    return (
        <section>
            {isValid ? <AdminForm closeAddItemForm={closeAddItemForm}/> 
            : <Button variant="contained" color="primary" onClick={showAddItemForm}>Add Food Item</Button>}
            <Meals showAddItemForm={showAddItemForm}/>
        </section>
    );
}

export default Main;