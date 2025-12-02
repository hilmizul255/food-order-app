import { Box, Typography, Button, Divider } from '@mui/material';
import { useContext } from 'react';
import CartContext from '../store/cart-context';

function CartItem(props) {
    const { name, price, quantity } = props.item;
    const cartCtx = useContext(CartContext);
    return (<>
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

            <Box>
                <Typography variant="h6">
                    {name}
                </Typography>
                <Box variant="h3" sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 3 }}>
                    <Typography sx={{ alignItems: "center" }}>
                        ${price}
                    </Typography>
                    <Button variant="outlined" color="primary" sx={{ alignItems: "center" }}>
                        x {quantity}
                    </Button>
                </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: .5 }}>
                <Button variant="outlined" color="primary" onClick={() => cartCtx.decreaseItem(props.item.id)}>-</Button>
                <Button variant="outlined" color="primary" onClick={() => cartCtx.increaseItem(props.item.id)}>+</Button>
            </Box>
        </Box>
        <br></br>
        <Divider sx={{ width: '100%', borderColor: 'black' }} />

    </>
    );
}

export default CartItem;