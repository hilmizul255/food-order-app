import { AppBar, Toolbar, Button } from '@mui/material';
import { useContext } from 'react';
import CartContext from '../store/cart-context';

function Appbar(props) {
    const cartCtx = useContext(CartContext);
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "transparent",
                boxShadow: "none"
            }}
        >
            <Toolbar sx={{
                justifyContent: "flex-end"
            }}>

                <Button variant="contained" color="primary" size="large" onClick={props.showModal}>Add To Cart ({cartCtx.totalQuantity})</Button>
            </Toolbar>

        </AppBar>

    );
}

export default Appbar;
