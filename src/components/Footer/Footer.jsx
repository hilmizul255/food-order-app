import React, { useContext } from 'react';
import logoMain from '../logoMain.svg';
import './Footer.css';
import Button from '@mui/material/Button';
import itemsContext from "../../store/items-context";

function Footer() {
    const itemsCtx = useContext(itemsContext);

    const togglePageHandler = () => {
        itemsCtx.togglePage();
    };

    return <>
        <footer>
            <img src={logoMain} alt="logo" />
            <Button variant="contained" color="primary" onClick={togglePageHandler}>{itemsCtx.switchPage}</Button>
            <p>© 2025 Food Order App. All rights reserved.</p>
        </footer>
    </>
}

export default Footer;