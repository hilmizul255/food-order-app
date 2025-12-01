import React, { useContext } from 'react';
import logoMain from './logoMain.svg';
import '../mui-styles/Footer.css';
import Button from '@mui/material/Button';
import itemsContext from "../store/items-context";

function Footer() {
    const itemsCtx = useContext(itemsContext);


    return <>
        <footer>
            <img src={logoMain} alt="logo" />
            <Button variant="contained" color="secondary" onClick={itemsCtx.togglePage}>{itemsCtx.switchPage === "User" ? "Admin" : "User"}</Button>
            <p>© 2025 Food Order App. All rights reserved.</p>
        </footer>
    </>
}

export default Footer;