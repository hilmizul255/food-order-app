import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useContext } from 'react';
import itemsContext from '../../store/items-context';

function Header() {
    const itemsCtx = useContext(itemsContext);
    return (
        <AppBar position="sticky" sx={{ zIndex: 1000 , backgroundColor: "secondary.main"}}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6" color="primary">FOODNERD</Typography>
                <Button variant="contained" color="primary">
                    Your Cart ({itemsCtx.totalItems})
                </Button>
            </Toolbar>
        </AppBar>

    );
}

export default Header;