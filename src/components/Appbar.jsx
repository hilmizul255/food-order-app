import { AppBar, Toolbar, Button, Badge } from '@mui/material';
import { useContext } from 'react';
import CartContext from '../store/cart-context';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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

                <Button sx={{ borderRadius: "25px", width:"200px", justifyContent: "space-between" }} variant="contained" color="primary" size="large" onClick={props.showModal}><ShoppingCartIcon /> Add To Cart <Badge badgeContent={cartCtx.totalQuantity} color="secondary" /> </Button>
            </Toolbar>

        </AppBar>

    );
}

export default Appbar;
