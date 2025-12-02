import { useState } from 'react';
import './pages.css';
import Appbar from '../components/Appbar';
import Cart from '../components/Cart';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Meals from '../components/Meals';
import CartProvider from '../store/CartProvider';


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
            <h1>Users</h1>
            <Appbar showModal={showModalHandler} />
            {isValid && <Cart hideModal={hideModalHandler} />}
            {/* <Cart hideModal={hideModalHandler}/> */}
            <Banner />
            <AboutUs />
            <Meals showCart={showModalHandler} />
        </CartProvider>

    );
}

export default Users;