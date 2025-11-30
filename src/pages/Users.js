import React from 'react';
import './pages.css';
import Appbar from '../components/Appbar';
import Cart from '../components/Cart';
import Banner from '../components/Banner';
import AboutUs from '../components/AboutUs';
import Meals from '../components/Meals';


function Users() {
    return (
        <div>
            <h1>Users</h1>
            <Appbar />
            <Cart />
            <Banner />
            <AboutUs />
            <Meals />

        </div>
    );
}

export default Users;