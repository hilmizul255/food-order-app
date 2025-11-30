import Meals from './Meals';
import AdminForm from './AdminForm';
import { useState } from 'react';
import { Button } from '@mui/material';


function Main() {
const [isValid, setIsValid] = useState(false);
const showAddItemForm = () => setIsValid(true);
const closeAddItemForm = () => setIsValid(false);
    return (
        <div>
            <h1>Main</h1>
            {isValid ? <AdminForm closeAddItemForm={closeAddItemForm}/> 
            : <Button variant="contained" color="primary" onClick={showAddItemForm}>Add Item</Button>}
           
            <Meals showAddItemForm={showAddItemForm}/>
        </div>
    );
}

export default Main;