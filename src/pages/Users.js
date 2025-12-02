import { useState } from 'react';
import './pages.css';
import Appbar from '../components/Appbar';
import Cart from '../components/Cart';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Meals from '../components/Meals';
import CartProvider from '../store/CartProvider';
import Card from '@mui/material/Card';


function Users() {
    const [isValid, setIsVaild] = useState(false);
    const showModalHandler = () => {
        setIsVaild(true);
    };
    const hideModalHandler = () => {
        setIsVaild(false);
    };

    return (

        <CartProvider>
            <Card sx={{backgroundColor: '#EDEDED'}}>
            <Banner />
            <AboutUs />
            <Appbar showModal={showModalHandler} />
            {isValid && <Cart hideModal={hideModalHandler} />}
            <Meals showCart={showModalHandler} />
            </Card>
        </CartProvider>

    );
}

export default Users;